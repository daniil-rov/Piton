$('.input-sel').fancySelect();
var ua = navigator.userAgent,
    eventTouch;
    if(ua.match(/iPad/i) || ua.match(/iPhone/)){
        eventTouch = "touchstart";
    }else{
        eventTouch = "click";
    }
$(".approach__tab-content-item").hide().first().show();
$(".approach__tab-header-item").on('click', function(event) {
    event.preventDefault();
    $(".approach__tab-header-item").removeClass('tab-active');
    $(this).addClass('tab-active');
    $(".approach__tab-content-item").hide();
    $(".approach__tab-content-item").eq($(this).index()).fadeIn(500);
});



var videoPlay = $(".youtube");

videoPlay.on("click", playYou);
var idVideo;

function playYou() {
    $(this).parent().addClass('black').append('<iframe></iframe>');
    var iframe = $(this).parent().find('iframe');

    if ($(this).data('play') != null) {
        idVideo = $(this).data("play");
    }
    var iframe_url = "https://www.youtube.com/embed/" + idVideo + "?enablejsapi=1&autoplay=1&autohide=1&rel=0";

    if ($(this).attr("data-params")) iframe_url += '&' + $(this).attr("data-params");

    iframe.attr({
            src: iframe_url,
            frameborder: '0',
            allowfullscreen: 'allowfullscreen'
        })
        .css({
            width: '100%',
            height: '100%'
        });

    $(this).hide();
}

$(".feedback__video").hide().first().show();
$(".feedback__tab-item").first().addClass('video-tab-active');
$(".feedback__tab-item").on('click', function(event) {
    event.preventDefault();
    if(!$(this).hasClass('video-tab-active')){
        $(".feedback__tab-item").removeClass('video-tab-active');
        $(this).addClass('video-tab-active');
       $(".feedback__video").hide().removeClass('black');
        $(this).parents(".feedback__content").find("iframe").remove();
        $(this).parents(".feedback__content").find(".play").show();
        $(".feedback__video").eq($(this).index()).fadeIn(400);
    }

});


$(".to-top").on("click", function (event) {
     var top = 0;
    $('body,html').animate({scrollTop: top}, 1000);
});

$(window).on("scroll", function() {
    var offsetTop = $(".main").outerHeight() + $(".header").outerHeight();
    if ($(document).scrollTop() > offsetTop) {
        $(".to-top").css({"visibility":"visible"});
    }else{
        $(".to-top").css({"visibility":"hidden"});
    }
});



// to top
$(window).on("load resize", function() {

    $(".to-top").each(positionToTop);
    $(".scroll").each(heightScroll);
});

$(".to-top").each(positionToTop);
$(".scroll").each(heightScroll);

function positionToTop(){
    ofCOnt = (($(".container").offset().left) / 2) - ($(this).width() / 2);
    if(ofCOnt < $(this).width() / 2 ){
        $(this).css({ "right": "1%" });
    }else{
        $(this).css({ "right": ofCOnt });
    }
}

function heightScroll(){
    ofCOnt = $(".container").offset().left;
    if(ofCOnt < 35){
        $(this).css({ "width": "0" });
    }else{
        $(this).css({ "width": ofCOnt });
    }
}



// header

var titleHeight1 = -1;

function ht(ht, parentHT, findChild) {
    parentHT.find(findChild).each(function() {
        var h_block = parseInt($(this).height());
        if (h_block > ht) {
            ht = h_block;
        };
    });
    parentHT.find(findChild).height(ht);
}
    $(document).ready(function($) {

        ht(titleHeight1, $('.header'), ".header__block");
        $(window).resize(function() {
            titleHeight1 = -1;
            ht(titleHeight1, $('.header'), ".header__block");
        });


    });




jQuery(function($){
   $("[name=\"phone\"]").mask("+7 999-999-99-99");
});



if($("body").find(".price__tab-content-availability").length > 0){
  $('.price__tab-content-availability').each(function(index, el) {
    if($(this).data("avi") === ''){
      $(this).remove();
    }
  });
}

// mobile
    $(window).on('resize', function() {
        pinHome();
    });
    pinHome();
    function pinHome(){
        if ($(window).width() < 992) {
            var info_text = $('.parts__pin-1').find('.parts__pin-content').text();
            $(".parts__content-mobile-item").text(info_text);

            $(".parts__pin").on('click', function() {
                if($(this).hasClass('pin_active')){

                }else{
                    $(".parts__pin").removeClass('pin_active');
                    $(this).addClass('pin_active');
                    info_text = $(this).find('.parts__pin-content').text();
                    $(".parts__content-mobile-item").css({
                        "margin-top": "12%",
                        "opacity": "0"
                    });
                    $(".parts__content-mobile-item").text(info_text).animate({
                        "margin-top": "0",
                        "opacity": "1"},
                        500);
                }
            });
        }else{
          $(".parts__pin-2").addClass('')
        }

        if($(window).width() > 991){
          $(".parts__pin-2").addClass('pin-hover');
          $(".parts__house").on('mouseenter', '.parts__pin', function() {
            $(".parts__pin-2").removeClass('pin-hover');
          });
        }else{
          $(".parts__pin-2").removeClass('pin-hover');
        }
    }

// ---------------------------------------------------
$('.menu-wrap').on(eventTouch, function(event) {
    event.preventDefault();
    $('.overlay-menu').fadeIn().css({
        "display": 'flex',
    });
});
$('.close-menu').on('click', function(event) {
    event.preventDefault();
    $('.overlay-menu').fadeOut();
});

$('.mobile-phone').on('click', function(event) {
    event.preventDefault();
    $('.mobile__all').toggleClass('visibl');
});

 $(document).mouseup(function(e){
    var container = $('.mobile__all');
    var container2 = $('.mobile-phone');
    if (container.has(e.target).length === 0
       ){
        $('.mobile__all').removeClass('visibl');
    }
});


 var numbOverlay = 0;
 function modalOpen(){
     numbOverlay = 0;
     $('.overlay').each(function(index, el) {
         if($(this).css("display") !== 'none'){
             numbOverlay++;
         }
     });
 }

 $(".close").on('click', function(event) {

    if($(this).hasClass('close-calc')){
        $(".modal-calc").removeClass('calc-active');
    }else{
        modalOpen();
        if(numbOverlay<2){
            $("html").css({ "overflow-y": "scroll" });
        }
        $(this).parents(".overlay").fadeOut();
    }
 });
 $('.overlay').mouseup(function(e){
    var container = $('.modal');
    if (container.has(e.target).length === 0 && !container.is(e.target)){
        modalOpen();
        if(numbOverlay<2){
            $("html").css({ "overflow-y": "scroll" });
        }

        $('.overlay').fadeOut();
    }
});

 $(".btn-modal_price").on('click', function(event) {
     event.preventDefault();
     $("#overlay-price").fadeIn(500);
     $("html").css({ "overflow-y": "hidden" });
     $(".overlay").css({ "overflow-y": "scroll" });
 });

 $(".btn-modal_callback").on('click', function(event) {
     event.preventDefault();
     $("#overlay-callback").fadeIn(500);
     $("html").css({ "overflow-y": "hidden" });
     $(".overlay").css({ "overflow-y": "scroll" });
 });


 

$(".header__menu li a").on(eventTouch, function (event) {
    if($(this).parents(".header__menu").hasClass('header__menu-overlay')){
        $(".overlay-menu").fadeOut();
    }else{}
    $("html").css({ "overflow-y": "scroll" });
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});




// about

if($("body").find(".about").length >0){
    $('.package__sertificat-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        useTransform: true,
        cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    });

    $(".package__sertificat-arrow-prev").on("click", function(e) {
        $('.package__sertificat-slider').slick("slickPrev");
    });
    $(".package__sertificat-arrow-next").on("click", function(e) {
        $('.package__sertificat-slider').slick("slickNext");
    });

    var len = $('.package__sertificat-slider').slick('getSlick').slideCount;
    if(len < 10){
        len = "0" + len;
    }else{
        len = len;
    }
    $('.num-all').text('/' + len);
    $('.package__sertificat-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var number = nextSlide + 1;

        if(number < 10){
            number = "0" + number;
        }else{
            number = number;
        }
        $(".num-first").text(number);

    });


}

var stockTitle;

$(".btn-stock__modal").on('click', function(event) {
  event.preventDefault();
  stockTitle = $(this).parents(".news-posts__info").find(".news-posts__title").text().trim();
  $('.title_consult').text(stockTitle);
  $('#titleConsult').val(stockTitle);
  $('#overlay-consult').fadeIn();
  $("#overlay-consult .btn").removeAttr('disabled');
  $("html").css({ "overflow-y": "hidden" });
  $(".overlay").css({ "overflow-y": "scroll" });
});


if($('body').find('.catalog__img').length > 0){
  var leftData = $('.catalog__info').offset().left + $('.catalog__info').width();

  if($(window).width() > 991){
    $('.catalog__img').css({
      "left": leftData,
    });
  }
    $(window).on('resize', function() {
      if($(window).width() > 991){
      leftData = ($('.catalog__info').offset().left + $('.catalog__info').width()) - 40;
      $('.catalog__img').css({
        "left": leftData,
      });
      }else{
        if($('.catalog__img').attr("style") !== "")
          $('.catalog__img').removeAttr('style');
      }
    });

  $(".options li").on('click', function() {
    $("div.fancy-select div.trigger").css({"color":"#212121"});
  });
}



$(document).ready(function($) {
  $(".title").not('.title-first').each(anime);
$(".subtitle").not('.subtitle-first').each(anime);
});
function anime(){
  var offsetTop = $(this).offset().top - $(window).height();
  var thisTitle = $(this);
  $(window).scroll(function(event) {
    if($(document).scrollTop() > offsetTop ){
      thisTitle.addClass('fade_in');
    }
  });
}

$(document).ready(function () {
	// РћС‚РїСЂР°РІРєР° С„РѕСЂРјС‹
	$('.ajax-form').on('submit', function(e){
		form = $(this);
		data = form.serialize();
		$.ajax({
			url: './php/main.php?sendLead',
			type: 'POST',
			dataType: 'json',
			data: data,
			success: function() {
				$('.ajax-form')[0].reset();
                /*ym(56439067, 'reachGoal', 'Cel1');*/
				alert('Р’Р°С€Рё РґР°РЅРЅС‹Рµ СѓСЃРїРµС€РЅРѕ РѕС‚РїСЂР°РІР»РµРЅС‹');
			}
		})
		e.preventDefault();
	});
});
