$(function () {

  $('.intro-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button class="slider__left"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="slider__right"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
  });

  $('.reviews-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slider__left"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="slider__right"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
  });


  $('.documentation-slider__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.documentation-slider__bottom',
  });
  $('.documentation-slider__bottom').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    asNavFor: '.documentation-slider__top',
    prevArrow: '<button class="slider__left"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="slider__right"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
  });



  $('.service__inner').each(function () {
    let ths = $(this);
    ths.find('.service__item').not(':first').hide();
    ths.find('.service__btn').click(function () {
      ths.find('.service__btn').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.service__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $(".rateYo").rateYo({
    starWidth: "15px",
    ratedFill: "#FFA800",
    spacing: "5px",
    rating: 5,
    readOnly: true
  });

  if ($('.slick-slider').length > 0) {
    $(".slick-slider").slick("refresh");
    $(".slick-slider").slick("setPosition");
  }
});