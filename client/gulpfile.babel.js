'use strict';

import gulp from "gulp";
import rename from "gulp-rename";
import gulpIf from "gulp-if";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglifyjs";
import zip from "gulp-zip";
import inject from "gulp-inject";
import clean from "gulp-clean";
import util from "gulp-util";
import dateFormat from "date-format";
import path from "path";
import express from "express";
import morgan from "morgan";
import minimatch from "minimatch";
import http from "http";
import httpProxy from "http-proxy";
import tinyLiveReload from "tiny-lr";
import connectLiveReload from "connect-livereload";
import eventStream from "event-stream";
import yargs from "yargs";
import concat from "gulp-concat";
import minifyCSS from "gulp-minify-css";
import image from "gulp-image";


const argv = yargs.argv;
const timestamp = dateFormat(argv['timestamp-format'] || process.env['GULP_TIMESTAMP_FORMAT'] || 'ddMMyyyy');
const liveReload = tinyLiveReload();

const project = require('./package.json');

function proxy(logPrefix, options, proxyPort) {
    let httpServer = http.createServer((req, res) => {
            let option = options.find((option) => {
                    return (minimatch(req.url, option.pattern))
});

    option.proxy.web(req, res);
});

    httpServer.on('error', (err, req, res) => {
        res.status(503).end();
});

    util.log(logPrefix, 'Proxy listening on port', util.colors.green(proxyPort));

    httpServer.listen(proxyPort);
}

function proxyOptions(expressPort) {
    return [
        {
            proxy: httpProxy.createProxyServer({
                target: argv['api-url'] || process.env['GULP_API_URL'] || 'https://usrs-api.herokuapp.com'
            }),
            pattern: "/api/v1/**"
        },
        {
            proxy: httpProxy.createProxyServer({
                target: argv['express-url'] || process.env['GULP_EXPRESS_URL'] || 'http://localhost:' + expressPort + '/'
            }),
            pattern: "/**"
        }
    ];
}

function sendStream(res, stream) {
    return stream.pipe(eventStream.map((file, callback) => {
            let contentType = express.static.mime.lookup(file.path);
    let charset = express.static.mime.charsets.lookup(contentType);

    res.set('Content-Type', contentType + (charset ? '; charset=' + charset : ''));

    callback(null, file.contents);
})).pipe(res);
}

function expressIndex() {
    return (req, res) => {
        sendStream(res, gulp.src('src/main/webapp/index.html')
            .pipe(inject(gulp.src(['target/gulp/main/scripts/jquery-2.1.1.min.js',
                'target/gulp/main/scripts/jquery.cookie.js',
                'target/gulp/main/scripts/pt-br.js',
                'target/gulp/main/scripts/parsley.js',
                'target/gulp/main/scripts/bootstrap.min.js',
                'target/gulp/main/scripts/moment.min.js',
                'target/gulp/main/scripts/jquery.livequery.min.js',
                'target/gulp/main/scripts/bootstrap-select.js',
                'target/gulp/main/scripts/defaults-pt_BR.js',
                'target/gulp/main/scripts/jquery.plugin.min.js',
                'target/gulp/main/scripts/jquery.timeentry.min.js',
                'target/gulp/main/scripts/jquery.timeentry-pt.js',
                'target/gulp/main/scripts/bootstrap-datetimepicker.min.js',
                'target/gulp/main/scripts/jquery-ui.js',
                'target/gulp/main/scripts/jquery.multi-select.js',
                'target/gulp/main/scripts/jquery.quicksearch.js',
                'target/gulp/main/scripts/jquery_expander.js',
                'target/gulp/main/scripts/jquery.query-object.js',
                'target/gulp/main/scripts/jquery.nicescroll.min.js',
                'target/gulp/main/scripts/bootstrap-growl.min.js',
                'target/gulp/main/scripts/jquery.bootstrap.wizard.min.js',
                'target/gulp/main/scripts/sweet-alert.min.js',
                'target/gulp/main/scripts/jquery.timeago.min.js',
                'target/gulp/main/scripts/waves.min.js',
                'target/gulp/main/scripts/materialize.js',
                'target/gulp/main/scripts/functions.js',
                'target/gulp/main/scripts/users-web.js',
                'target/gulp/main/scripts/jquery.blockui.min.js',
                'target/gulp/main/scripts/jquery.maskedinput.min.js',
                'target/gulp/main/scripts/jquery.mousewheel-3.0.6.pack.js',
                'target/gulp/main/scripts/jquery.autosize.min.js',
                'target/gulp/main/scripts/jquery.fancybox.pack.js',
                'target/gulp/main/js/app.js',
                'target/gulp/main/css/style.css',
                'target/gulp/main/css/users-web.css']), {
                ignorePath: 'target/gulp/main',
                addRootSlash: false
            })));
    }
}

function expressJasmine() {
    return (req, res, next) => {
        let staticServer = express.static('src/test/webapp');

        if (req.path == '/') {
            sendStream(res, gulp.src('src/test/webapp/html/jasmine-index.html')
                .pipe(inject(gulp.src('target/gulp/test/js/app.js'), {
                    ignorePath: 'target/gulp',
                    addRootSlash: false
                })));
        }
        else {
            staticServer(req, res, next);
        }
    };
}

function expressStatic(path) {
    return (req, res, next) => {
        let staticServer = express.static(path);

        return staticServer(req, res, () => {
                res.status(404).send('Not Found');
    });
    };
}

function appJs() {
    return gulp.src([
        require.resolve('angular/angular.js'),
        require.resolve('angular-aria/angular-aria.js'),
        require.resolve('angular-cookies/angular-cookies.js'),
        require.resolve('angular-messages/angular-messages.js'),
        require.resolve('angular-resource/angular-resource.js'),
        require.resolve('angular-route/angular-route.js'),
        require.resolve('angular-sanitize/angular-sanitize.js'),
        'src/main/webapp/js/angular-xeditable/*.js',
        'src/main/webapp/js/custom/*.js',
        'src/main/webapp/js/custom/**/*.js'

    ]);
}

function compileImg(){

    return  gulp.src('src/main/webapp/img/**.*')
        .pipe(image())
        .pipe(gulp.dest('target/gulp/main/img'));

}

function compileJs() {
    return appJs()
        .pipe(uglify('app.js', {
            basePath: 'js',
            mangle: false,
            outSourceMap: argv['uglify-out-source-maps'] || process.env['GULP_UGLIFY_OUT_SOURCE_MAPS'] !== undefined
        }))
        .pipe(gulp.dest('target/gulp/main/js'));
}

function Jsprincipal() {
    return  gulp.src([
        'src/main/webapp/materialize/js/jquery-2.1.1.min.js',
        'src/main/webapp/materialize/js/bootstrap.min.js',
        'src/main/webapp/materialize/plugins/moment/moment.min.js',
        'src/main/webapp/materialize/plugins/jquery/jquery.livequery.min.js',
        'src/main/webapp/materialize/plugins/bootstrap-select/bootstrap-select.js',
        'src/main/webapp/materialize/plugins/bootstrap-select/i18n/defaults-pt_BR.js',
        'src/main/webapp/materialize/plugins/jquery.timeentry/jquery.plugin.min.js',
        'src/main/webapp/materialize/plugins/jquery.timeentry/jquery.timeentry.min.js',
        'src/main/webapp/materialize/plugins/jquery.timeentry/jquery.timeentry-pt.js',
        'src/main/webapp/materialize/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
        'src/main/webapp/materialize/js/pt-br.js',
        'src/main/webapp/materialize/js/parsley.js',
        'src/main/webapp/materialize/plugins/jquery/jquery-ui.js',
        'src/main/webapp/plugins/jquery.cookie.js',
        'src/main/webapp/plugins/multiselect/js/jquery.quicksearch.js',
        'src/main/webapp/plugins/multiselect/js/jquery.multi-select.js',
        'src/main/webapp/materialize/plugins/auto-size/jquery.autosize.min.js',
        'src/main/webapp/plugins/jquery_expander.js',
        'src/main/webapp/plugins/jquery.query-object.js',
        'src/main/webapp/materialize/plugins/nicescroll/jquery.nicescroll.min.js',
        'src/main/webapp/materialize/plugins/bootstrap-growl/bootstrap-growl.min.js',
        'src/main/webapp/materialize/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js',
        'src/main/webapp/materialize/plugins/sweet-alert/sweet-alert.min.js',
        'src/main/webapp/materialize/plugins/jquery/jquery.timeago.min.js',
        'src/main/webapp/materialize/plugins/waves/waves.min.js',
        'src/main/webapp/plugins/js_ajax',
        'src/main/webapp/plugins/jquery.maskedinput.min.js',
        'src/main/webapp/plugins/jquery.blockui.min.js',
        'src/main/webapp/plugins/fancyBox/lib/jquery.mousewheel-3.0.6.pack.js',
        'src/main/webapp/plugins/fancyBox/source/jquery.fancybox.pack.js',
        'src/main/webapp/materialize/js/materialize.js',
        'src/main/webapp/materialize/js/functions.js',
        'src/main/webapp/js/users-web.js'])

        .pipe(gulp.dest('target/gulp/main/scripts'));
}

// function compileScss(errLogToConsole) {
//     let enableSassSourceMaps = argv['enable-sass-source-maps'] || process.env['GULP_ENABLE_SASS_SOURCE_MAPS'] !== undefined;
//
//     return gulp.src('src/main/webapp/scss/main.scss')
//         .pipe(gulpIf(enableSassSourceMaps, sourcemaps.init()))
//         .pipe(sass({
//             errLogToConsole: errLogToConsole,
//             outputStyle: argv['sass-output-style'] || process.env['GULP_SASS_OUTPUT_STYLE'] || 'compressed',
//             includePaths: [
//                 'node_modules/font-awesome/scss'
//             ],
//             sourceMap: '' // Required to prevent gulp-sass from crashing.
//         }))
//         .pipe(rename('style.css'))
//         .pipe(gulpIf(enableSassSourceMaps, sourcemaps.write('.')))
//         .pipe(gulp.dest('target/gulp/main/css'));
// }

function compileCss() {
    return gulp.src(['src/main/webapp/fontawesome/css/font-awesome.min.css',
        'src/main/webapp/materialize/css/materialize.css',
        'src/main/webapp/materialize/css/material-icons.css',
        'src/main/webapp/materialize/plugins/animate-css/animate.min.css',
        'src/main/webapp/materialize/css/custom.css',
        'src/main/webapp/materialize/css/select.css',
        'src/main/webapp/materialize/plugins/sweet-alert/sweet-alert.min.css',
        'src/main/webapp/materialize/plugins/material-icons/material-design-iconic-font.min.css',
        'src/main/webapp/materialize/plugins/socicon/socicon.min.css',
        'src/main/webapp/materialize/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css',
        'src/main/webapp/plugins/multiselect/css/multi-select.css',
        'src/main/webapp/plugins/fancyBox/source/jquery.fancybox.css?v=2.1.5',
        'src/main/webapp/materialize/plugins/jquery/jquery-ui.css'])
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('target/gulp/main/css'));

}
function compileCssCheckadmin() {
    return gulp.src(['src/main/webapp/css/users-web.css'
    ])
        .pipe(minifyCSS())
        .pipe(concat('users-web.css'))
        .pipe(gulp.dest('target/gulp/main/css'));

}

function testJs() {
    return gulp.src([
        require.resolve('angular/angular.js'),
        require.resolve('angular-route/angular-route.js'),
        require.resolve('angular-messages/angular-messages.js'),
        require.resolve('angular-aria/angular-aria.js'),
        require.resolve('angular-mocks/angular-mocks.js'),
        'src/test/webapp/specs/angular/angular-jasmine.js',
        'src/main/webapp/js/custom/*.js',
        'src/main/webapp/js/custom/**/*.js',
        'src/main/webapp/materialize/plugins/**/*.js',
        'src/main/webapp/materialize/js/materialize.js',
        'src/main/webapp/materialize/js/functions.js',
        'src/test/webapp/specs/custom/*.spec.js'
    ]);
}

function compileTestJs() {
    return testJs()
        .pipe(uglify('app.js', {
            basePath: 'js',
            mangle: false,
            outSourceMap: argv['uglify-out-source-maps'] || process.env['GULP_UGLIFY_OUT_SOURCE_MAPS'] !== undefined
        }))
        .pipe(gulp.dest('target/gulp/test/js'));
}

// ************************************ //
// ************** TASKS *************** //
// ************************************ //

gulp.task('compile-font', () => {
    return gulp.src(['src/main/webapp/fontawesome/fonts/**.*', 'src/main/webapp/materialize/font/material-design-icons/**.*',
        'src/main/webapp/materialize/font/roboto/**.*', 'src/main/webapp/materialize/plugins/material-icons/fonts/**.*' ])
        .pipe(gulp.dest('target/gulp/main/font'));
});

gulp.task('compile-fonts', () => {
    return gulp.src(['src/main/webapp/fontawesome/fonts/**.*', 'src/main/webapp/materialize/font/material-design-icons/**.*',
        'src/main/webapp/materialize/font/roboto/**.*', 'src/main/webapp/materialize/plugins/material-icons/fonts/**.*' ])
        .pipe(gulp.dest('target/gulp/main/fonts'));
});


gulp.task('compile-img', () => {
    return compileImg();
});

gulp.task('js-principal', () => {
    return Jsprincipal();
});

gulp.task('watch-js-principal', ['js-principal'], () => {
    let logPrefix = '[' + util.colors.blue('js-principal') + ']';

gulp.watch(['src/main/webapp/materialize/js/jquery-2.1.1.min.js',
    'src/main/webapp/js/materialize/js/bootstrap.min.js',
    'src/main/webapp/materialize/plugins/moment/moment.min.js',
    'src/main/webapp/materialize/plugins/jquery/jquery.livequery.min.js',
    'src/main/webapp/materialize/plugins/bootstrap-select/bootstrap-select.js',
    'src/main/webapp/materialize/plugins/bootstrap-select/i18n/defaults-pt_BR.js',
    'src/main/webapp/materialize/plugins/jquery.timeentry/jquery.plugin.min.js',
    'src/main/webapp/materialize/plugins/jquery.timeentry/jquery.timeentry.min.js',
    'src/main/webapp/materialize/plugins/jquery.timeentry/jquery.timeentry-pt.js',
    'src/main/webapp/materialize/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
    'src/main/webapp/materialize/js/pt-br.js',
    'src/main/webapp/materialize/js/parsley.js',
    'src/main/webapp/materialize/plugins/jquery/jquery-ui.js',
    'src/main/webapp/plugins/jquery.cookie.js',
    'src/main/webapp/plugins/multiselect/js/jquery.quicksearch.js',
    'src/main/webapp/plugins/multiselect/js/jquery.multi-select.js',
    'src/main/webapp/materialize/plugins/auto-size/jquery.autosize.min.js',
    'src/main/webapp/plugins/jquery_expander.js',
    'src/main/webapp/plugins/jquery.query-object.js',
    'src/main/webapp/materialize/plugins/nicescroll/jquery.nicescroll.min.js',
    'src/main/webapp/materialize/plugins/bootstrap-growl/bootstrap-growl.min.js',
    'src/main/webapp/materialize/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js',
    'src/main/webapp/materialize/plugins/sweet-alert/sweet-alert.min.js',
    'src/main/webapp/materialize/plugins/jquery/jquery.timeago.min.js',
    'src/main/webapp/materialize/plugins/waves/waves.min.js',
    'src/main/webapp/plugins/js_ajax',
    'src/main/webapp/plugins/jquery.maskedinput.min.js',
    'src/main/webapp/plugins/jquery.blockui.min.js',
    'src/main/webapp/plugins/fancyBox/lib/jquery.mousewheel-3.0.6.pack.js',
    'src/main/webapp/plugins/fancyBox/source/jquery.fancybox.pack.js',
    'src/main/webapp/materialize/js/materialize.js',
    'src/main/webapp/materialize/js/functions.js',
    'src/main/webapp/js/users-web.js'], () => {
    util.log(logPrefix, 'Recompiling JS Principal');

Jsprincipal();
});

gulp.watch('target/gulp/main/scripts/*.js', (event) => {
    util.log(logPrefix, 'Reloading', path.relative('target/gulp/main/scripts', event.path));

liveReload.changed({
    body: {
        files: [
            path.relative('target/gulp/main/scripts', event.path)
        ]
    }
});
});
});


gulp.task('compile-js', () => {
    return compileJs();
});

gulp.task('watch-js', ['compile-js'], () => {
    let logPrefix = '[' + util.colors.blue('watch-js') + ']';

gulp.watch('src/main/webapp/js/**/*.js', () => {
    util.log(logPrefix, 'Recompiling JS');

compileJs();
});

gulp.watch('target/gulp/main/js/*.js', (event) => {
    util.log(logPrefix, 'Reloading', path.relative('target/gulp/main/js', event.path));

liveReload.changed({
    body: {
        files: [
            path.relative('target/gulp/main/js', event.path)
        ]
    }
});
});
});

// gulp.task('compile-scss', () => {
//     return compileScss(false);
// });
//
// gulp.task('watch-scss', ['compile-scss'], () => {
//     let logPrefix = '[' + util.colors.blue('watch-scss') + ']';
//
//     gulp.watch('src/main/webapp/scss/**/*.scss', () => {
//         util.log(logPrefix, 'Recompiling SCSS');
//
//         compileScss(true);
//     });
//
//     gulp.watch('target/gulp/main/css/*.css', (event) => {
//         util.log(logPrefix, 'Reloading', path.relative('target/gulp/main/css', event.path));
//
//         liveReload.changed({
//             body: {
//                 files: [
//                     path.relative('target/gulp/main/css', event.path)
//                 ]
//             }
//         });
//     });
// });
gulp.task('compile-css', () => {
    return compileCss();
});

gulp.task('compile-css-users-web', () => {
    return compileCssCheckadmin();
});

gulp.task('watch-css', ['compile-css'], () => {
    let logPrefix = '[' + util.colors.blue('watch-css') + ']';

gulp.watch('src/main/webapp/materialize/**/*.css', () => {
    util.log(logPrefix, 'Recompiling CSS');

compileCss();
});

gulp.watch('target/gulp/main/css/*.css', (event) => {
    util.log(logPrefix, 'Reloading', path.relative('target/gulp/main/css', event.path));

liveReload.changed({
    body: {
        files: [
            path.relative('target/gulp/main/css', event.path)
        ]
    }
});
});
});

gulp.task('watch-css-users-web', ['compile-css-users-web'], () => {
    let logPrefix = '[' + util.colors.blue('watch-css-users-web') + ']';

gulp.watch('src/main/webapp/css/users-web.css', () => {
    util.log(logPrefix, 'Recompiling CSS');

compileCssCheckadmin();
});

gulp.watch('target/gulp/main/css/*.css', (event) => {
    util.log(logPrefix, 'Reloading', path.relative('target/gulp/main/css', event.path));

liveReload.changed({
    body: {
        files: [
            path.relative('target/gulp/main/css', event.path)
        ]
    }
});
});
});

gulp.task('watch-html', () => {
    let logPrefix = '[' + util.colors.blue('watch-html') + ']';

gulp.watch(['src/main/webapp/index.html', 'src/main/webapp/html/**'], (event) => {
    util.log(logPrefix, 'Reloading', path.relative('src/main/webapp', event.path));

liveReload.changed({
    body: {
        files: [
            path.relative('src/main/webapp', event.path)
        ]
    }
});
});
});

gulp.task('compile-test-js', () => {
    return compileTestJs();
});

gulp.task('watch-test-js', ['compile-test-js'], () => {
    let logPrefix = '[' + util.colors.blue('watch-test-js') + ']';

gulp.watch('src/test/webapp/specs/**/*.js', () => {
    util.log(logPrefix, 'Recompiling Test JS');

compileTestJs();
});

gulp.watch('target/gulp/test/js/*.js', (event) => {
    util.log(logPrefix, 'Reloading', path.relative('target/gulp/test/js', event.path));

liveReload.changed({
    body: {
        files: [
            path.relative('target/gulp/test/js', event.path)
        ]
    }
});
});
});

gulp.task('zip', ['compile-font', 'compile-fonts', 'compile-js', 'js-principal', 'compile-css', 'compile-css-users-web', 'compile-img'], () => {
    let buildNumber = argv['build-number'] || process.env['GULP_BUILD_NUMBER'];
let filename = argv['zip-filename'] || process.env['GULP_ZIP_FILENAME'] || project.name + '-' + project.version + (buildNumber !== undefined ? '+build.' + buildNumber : '') + '.zip';

util.log('Creating', util.colors.magenta(filename));

return eventStream.merge(
    gulp.src([
        argv['uglifyjs-out-source-maps'] || process.env['GULP_UGLIFYJS_OUT_SOURCE_MAPS'] ? 'src/main/webapp/js/**' : '',
        'src/main/webapp/html/**',
        'src/main/webapp/img/**'
    ], {base: 'src/main/webapp'}),

    gulp.src('target/gulp/main/**'),

    gulp.src('src/main/webapp/index.html')
        .pipe(inject(gulp.src(['target/gulp/main/scripts/jquery-2.1.1.min.js',
            'target/gulp/main/scripts/jquery.cookie.js',
            'target/gulp/main/scripts/pt-br.js',
            'target/gulp/main/scripts/parsley.js',
            'target/gulp/main/scripts/bootstrap.min.js',
            'target/gulp/main/scripts/moment.min.js',
            'target/gulp/main/scripts/jquery.livequery.min.js',
            'target/gulp/main/scripts/bootstrap-select.js',
            'target/gulp/main/scripts/defaults-pt_BR.js',
            'target/gulp/main/scripts/jquery.plugin.min.js',
            'target/gulp/main/scripts/jquery.timeentry.min.js',
            'target/gulp/main/scripts/jquery.timeentry-pt.js',
            'target/gulp/main/scripts/bootstrap-datetimepicker.min.js',
            'target/gulp/main/scripts/jquery-ui.js',
            'target/gulp/main/scripts/jquery.multi-select.js',
            'target/gulp/main/scripts/jquery.quicksearch.js',
            'target/gulp/main/scripts/jquery_expander.js',
            'target/gulp/main/scripts/jquery.query-object.js',
            'target/gulp/main/scripts/jquery.nicescroll.min.js',
            'target/gulp/main/scripts/bootstrap-growl.min.js',
            'target/gulp/main/scripts/jquery.bootstrap.wizard.min.js',
            'target/gulp/main/scripts/sweet-alert.min.js',
            'target/gulp/main/scripts/jquery.timeago.min.js',
            'target/gulp/main/scripts/waves.min.js',
            'target/gulp/main/scripts/materialize.js',
            'target/gulp/main/scripts/functions.js',
            'target/gulp/main/scripts/users-web.js',
            'target/gulp/main/scripts/jquery.blockui.min.js',
            'target/gulp/main/scripts/jquery.maskedinput.min.js',
            'target/gulp/main/scripts/jquery.mousewheel-3.0.6.pack.js',
            'target/gulp/main/scripts/jquery.autosize.min.js',
            'target/gulp/main/scripts/jquery.fancybox.pack.js',
            'target/gulp/main/js/app.js',
            'target/gulp/main/css/users-web.css',
            'target/gulp/main/css/style.css']), {
            ignorePath: 'target/gulp/main',
            addRootSlash: false
        })))
    .pipe(zip(filename))
    .pipe(gulp.dest('target'));
});

gulp.task('run', ['compile-font', 'compile-fonts', 'compile-img', 'watch-html', 'watch-js', 'watch-js-principal', 'watch-css', 'watch-css-users-web', 'watch-test-js'], () => {
    let logPrefix = '[' + util.colors.blue('run') + ']';

let proxyPort = argv['proxy-port'] || process.env['GULP_PROXY_PORT'] || 4444;
let expressPort = argv['express-port'] || process.env['GULP_EXPRESS_PORT'] || 7777;
let liveReloadPort = argv['live-reload-port'] || process.env['GULP_LIVE_RELOAD_PORT'] || 35729;

liveReload.listen(liveReloadPort);

proxy(logPrefix, proxyOptions(expressPort), proxyPort);

return express()
    .use(morgan('combined'))
    .use('/css', expressStatic('target/gulp/main/css'))
    .use('/fonts', expressStatic('target/gulp/main/fonts'))
    .use('/font', expressStatic('target/gulp/main/font'))
    .use('/html', expressStatic('src/main/webapp/html'))
    .use('/img', expressStatic('src/main/webapp/img'))
    .use('/img', expressStatic('target/gulp/main/img'))
    .use('/js', expressStatic('target/gulp/main/js'))
    .use('/scripts', expressStatic('target/gulp/main/scripts'))
    .use(connectLiveReload({
        port: liveReloadPort
    }))
    .use('/test/js', expressStatic('target/gulp/test/js'))
    .use('/test', expressJasmine())
    .use('/specs', expressStatic('src/test/webapp/specs'))
    .use(expressIndex())
    .listen(expressPort, function () {
        util.log(logPrefix, 'Express listening on port', util.colors.green(expressPort));
    });
});

gulp.task('clean', () => {
    return gulp.src('target/gulp', {read: false})
        .pipe(clean());
});

gulp.task('default', ['zip']);