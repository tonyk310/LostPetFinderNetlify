 $(".scroll").click(function(event) {
 	event.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 1300);
}); 

$('h3').click(function(){
	$(this).find('i').toggleClass('fa-plus fa-minus');	
	$(this).next('div').slideToggle('500').toggleClass('.about-hidden');

});