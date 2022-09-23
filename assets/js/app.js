

if ($(window).width() > 768) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + 5;
    if (scroll >= $(".pre-header").outerHeight()) {
      $(".bit-header").addClass("sticked");
    } else {
      $(".bit-header").removeClass("sticked");
    }
  });
}




$('.cta-slider').slick({
  prevArrow: $('.cta-slider-controls .slick-arrow-left'),
  nextArrow: $('.cta-slider-controls .slick-arrow-right'),
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.clients-slider').slick({
  prevArrow: $('.clients-slider-controls .slick-arrow-left'),
  nextArrow: $('.clients-slider-controls .slick-arrow-right'),
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


(function ($) {
  function animatedBlocks() {
    $('.need-animate').each(function () {
      var scrollPosTop = $(window).scrollTop(), // позиция скролла, верх страницы
        blockPosTop = $(this).offset().top, // позиция блока (верх), который нужно анимировать
        blockPosBottom = blockPosTop + $(this).height(), // позиция блока (низ), который нужно анимировать
        windowHeight = $(window).height(), // высота окна браузера
        windowLineTop = scrollPosTop + (windowHeight * (1 / 8)), // верхняя граница окна браузера при пересечении которой анимируется блок
        windowsLineBottom = scrollPosTop + (windowHeight * (7 / 8)); // нижяя граница окна браузера при пересечении которой анимируется блок

      if (
        (windowLineTop <= blockPosBottom && windowLineTop > blockPosTop) // если верхняя часть экрана выше нижней границы блока, но не прошла блок полностью
        || (windowsLineBottom >= blockPosTop && windowsLineBottom < blockPosBottom) // если нижняя часть экрана дошла до верхней границы блока, но не прошла блок полностью
        || ((blockPosTop > windowLineTop && blockPosTop < windowsLineBottom) || (blockPosBottom > windowLineTop && blockPosBottom < windowsLineBottom)) // или блок по центру экрана
      ) {
        $(this).removeClass('need-animate').addClass('animated');
      }
    });
  }
  $(document).ready(function () {
    setTimeout(function () {
      animatedBlocks();
    }, 1000);
  });
  $(window).scroll(function () {
    animatedBlocks();
  });
})(jQuery);

$('.navbar-toggler').click(function (e) {
  $('body').toggleClass('modal-open');

});