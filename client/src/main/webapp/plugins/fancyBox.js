function handleFancybox() {
    $('.fancybox').fancybox();

    // Remove padding, set opening and closing animations, close if clicked and disable overlay
    $(".fancybox-effects-d").fancybox({
        padding: 0,
        margin: 60,
        openEffect: 'elastic',
        openSpeed: 100,
        closeEffect: 'elastic',
        closeSpeed: 200,
        closeClick: true,	
		
               
        helpers: {
            overlay: null
			
        }
    });
}