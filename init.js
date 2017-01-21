  $(document).ready(function(){

  	$(function(){ 
     var aLink = $(".mdl-navigation__link");
     var layer = $(".mdl-layout__drawer");
     var offsc = $(".mdl-layout__obfuscator");

     console.log(aLink)
     console.log(offsc)
     
	     aLink.on("click", function () {
			/*e.preventDefault();*/
	        layer.removeClass('is-visible');

			//offsc.attr('style', 'visibility: hidden !important');
		   	
		});
	});

	/* Slider fancyBox */
	 $('.my-slider').unslider({
	 	//animation: 'vertical',
		autoplay: true,
		infinite: true

	 });

});





