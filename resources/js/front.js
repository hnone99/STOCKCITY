$(document).ready(function($){
    /* main - 강좌 마우스 오버 */
    $(".mClass li").mouseenter(function(){
       $(this).find(".dim").show(); 
    }).mouseleave(function(){
        $(this).find(".dim").hide(); 
    });
	
	lyPop();
	
	$('.faqWrap .q a').on('click', function(e){
		e.preventDefault();
		$(this).parent().next('.a').slideToggle(150);
	});
});

function lyPop(){
	function lyPopPosition(elem) {
		$(elem).css({
			marginTop : -($(elem).height() / 2),
			marginLeft : -($(elem).width() / 2) 
		});
	}

	$('[data-lypop]').on('click', function(e){
		e.preventDefault();
		console.log(1)
		var $this = $(this),	
			target = $this.attr('href'),
			dataStatus = $this.data('lypop');

		switch ( dataStatus ) {
			case 'open' :			
				$('#dim').show();
				lyPopPosition( target );
				$(target).show();

				break;

			case 'close' :
				$('#dim').hide();
				$(target).hide();

				break;
		}
	});
}
