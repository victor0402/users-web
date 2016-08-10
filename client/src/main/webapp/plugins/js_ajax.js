$("html").append('<span id="stormAjax"></span>');
function getAjax(module, action, param){
	document.getElementById('ajax_loading').style.display='inline';
	$('#stormAjax').load('?module='+module+'&action='+action+'&param='+param, function() {
		document.getElementById('ajax_loading').style.display='none';
		window.status = 'Carregamento com sucesso.';
	});
}

function urlencode(str) {
	return escape(str).replace('+', '%2B').replace(' ', '%20').replace('*', '%2A').replace('/', '%2F').replace('@', '%40');
}