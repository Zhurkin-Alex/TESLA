$(function(){
$('.slider').slick({
arrows: false,
fade: true,
autoplay: 3000,
dots: true,
});

$('.header__btn').on('click', function(){
$('.menu').addClass('active');
});

$('.closed-btn').on('click', function(){
    $('.menu').removeClass('active');
});
});

// $(document).ready(function() {

// 	$("#modal").submit(function() {
// 		$.ajax({
// 			type: "POST",
// 			url: "/mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$(this).find("input").val("");
// 			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
// 			$("#form").trigger("reset");
// 		});
// 		return false;
// 	});
	
// });