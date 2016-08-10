var Usersweb = {};
(function (uw) {

    function handleSubmitLoading() {
        $(document).submit(function () {
            $.blockUI({message: $("#domMessage")});

            // $.cookie('downloading', 1, {path: '/'});
            // var fileDownloadCheckTimer = window.setInterval(function () {
            //     var is_downloading = $.cookie('downloading');
            //     if (is_downloading == 0) {
            //         window.clearInterval(fileDownloadCheckTimer);
            //         $.removeCookie('downloading');
            //         $.unblockUI();
            //     }
            // }, 1000);
        });
    }


    function handleAjaxRequests() {
        $(document)
            .ajaxStart(function () {
                $.blockUI({message: $("#domMessage")});
            })
            .ajaxStop(function () {
                $.unblockUI();
            });

        $.ajaxSetup({
            'beforeSend': function (xhr) {
                xhr.overrideMimeType('text/html; charset=ISO-8859-1');
            }
        });
    }

    function handleFancybox() {
        $('.fancybox').fancybox();

        // Remove padding, set opening and closing animations, close if clicked and disable overlay
        $(".fancybox-effects-d").fancybox({
            padding: 0,
            openEffect: 'elastic',
            openSpeed: 200,
            closeEffect: 'elastic',
            closeSpeed: 200,
            closeClick: true,
            minWidth: 850,
            minHeight: 600,
            helpers: {
                overlay: null
            },
            afterClose: function () {
                $(window).trigger('fancyboxClosed');
            }
        });
    }

    uw.removeUIAjax = function () {
        $.unblockUI();
    };

    uw.aplicaExpander = function (campo, qtdeCaracteres) {
        $(campo).livequery(function () {
            $(this).expander({
                slicePoint: 20,
                expandText: 'ver mais',
                userCollapseText: 'ver menos'
            })
        })
    };

    uw.closeFancyboxAndRedirectToUrl = function (url) {
        if (parent.$.fancybox.isOpen) {
            parent.$.fancybox.close();
            parent.window.location.href = url;
        } else {
            location.href = url;
        }
    };

    uw.warningRemover = function (titulo, callback) {
        titulo = titulo || "Você tem certeza que deseja remover esse registro?";
        swal({
            title: titulo,
            text: "Não será possivel reverter essa operação",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sim, remova!",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false
        }, function () {
            swal({
                title: "Removendo registro",
                text: "aguarde...",
                type: "info",
                showConfirmButton: false
            });

            setTimeout(function () {
                callback();
            }, 800);
        });
    };

    /**
     * Retorna a diferença em meses entre duas datas
     * @param d1 Date
     * @param d2 Date
     * @returns {number}
     */
    uw.monthDiff = function (d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    };


    /**
     * Obtem um parametro definido na URL
     * @param sParam
     * @returns {*}
     */
    uw.getURLParameter = function (sParam) {
        var sPageURL = window.location.searuw.substring(1);
        var sURLVariables = sPageURL.split('&amp;');
        if (!sURLVariables || sURLVariables.length == 0) {
            return '';
        }
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    };


    function initSelect() {
        $('select').livequery(function () {
            if ($(this).hasClass('selectpicker')) {
                $(this).selectpicker()
            } else {
                $(this).not('.disabled').not('.selectpicker').material_select();
            }
        });
    }


    function normalizeText(str) {
        if (!str) return '';
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "ãàáäâèéëê??ìíïîõòóöô?ùúüûñç";
        var to = "aaaaaeeeeeiiiiiooooouuuuunc";
        for (var i = 0, l = from.length; i < l; i++) {
            if (from.charAt(i) != '?')
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    /**
     * Aplica o datatables em uma tabela, o que habilita paginação (em memória) e busca nos elementos da tabela
     * @param seletorElemento Seletor JQuery para selecionar a tabela. Ex: por id: '#minha-tabela' ou por classe: '.table', etc
     */
    uw.apliqueDataTables = function (seletorElemento, paging) {
        if (paging === undefined) {
            paging = true
        }

        var language = {
            "lengthMenu": "",
            "zeroRecords": "Nenhum registro encontrado",
            "info": paging ? "Exibindo página _PAGE_ de _PAGES_" : '',
            "search": "Pesquisar:",
            "infoEmpty": "Nenhum registro encontrado",
            "infoFiltered": "(filtrado de um total de _MAX_ registros)",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            }
        };

        //sobrescreve a funcao de busca, removendo os diacríticos para melhorar a busca
        $.fn.dataTableExt.ofnSearch['string'] = function (data) {
            if (!data) {
                return '';
            } else if (typeof data === 'string') {
                return normalizeText(data)
            } else {
                return data
            }
        };
        return $(seletorElemento).dataTable({
            "paging": paging,
            "language": language
        });
    };

    uw.notify = function (title, message, type, time) {
        time = time ? time : 4200;
        var btnRemove = '<span class="right dismiss-toast" style="position: absolute; right: -10px; top: -10px"><span class="btn-floating  blue-grey darken-3"><i class="fa fa-times"></i></span></span>';
        Materialize.toast((title ? (title + '<br>') : '') + btnRemove + message, time, 'toast-height ' + type);
        $('.dismiss-toast').on('click', function () {
            $('#toast-container').remove();
        });
    };

    uw.warning = function (title, message, time) {
        uw.notify(title, message, 'amber darken-3', time)
    };

    uw.notify_validate = function (title, message, type, time) {
        Materialize.toast(title + '<br>' + message, time, 'toast-height ' + type)
    };

    uw.warning_validate = function (title, message, time) {
        uw.notify_validate(title, message, 'yellow darken-4', time)
    };

    uw.danger = function (title, message) {
        uw.notify(title, message, 'red darken-3')
    };

    uw.success = function (title, message) {
        uw.notify(title, message, 'green darken-3')
    };

    uw.info = function (title, message) {
        uw.notify(title, message, 'light-blue accent-2')
    };

    uw.init = function () {
        $(document).ready(function () {

           // window.ParsleyValidator.setLocale('pt-br');
            handleAjaxRequests();
            initSelect();
            handleFancybox();
            handleSubmitLoading();
            $('.modal-trigger').leanModal();

            //habilita a informação de horas e minutos nos botões com a classe .timepicker
            //$('.timepicker').timeEntry({show24Hours: true, spinnerImage: ''});


            $(".datepicker").livequery(function () {
               // $(this).mask("99/99/9999");
                $(this).pickadate({
                    selectMonths: true, // Creates a dropdown to control month
                    selectYears: 15
                });
            });


            $('button[type=reset]').on('click', function () {
                event.preventDefault();
                $(this).closest('form').find(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
                $(this).closest('form').find(':checkbox, :radio').prop('checked', false);
                $(this).closest('form').find('select').selectpicker('refresh');
            });

            var drop = $('.dropdown-button');
            drop.livequery(function(){
                $(this).dropdown({

                });
            })

        })

    };

}(Usersweb));
Usersweb.init();
