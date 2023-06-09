$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".header__menu-btn").toggleClass("active");
    $(".header__list").toggleClass("active");
    $(".header--transparent").addClass("active");

    $(".header__item-child").removeClass("header__item-child--open");
    $(".header__item-child-2").removeClass("header__item-child--open");

    $("body").toggleClass("lock");
  });

  $(".header__mob-btn").on("click", function () {
    $(this).next().addClass('header__item-child--open');
    
  });

  $(".header__item-child span").on("click", function () {
    $(this).parent().removeClass('header__item-child--open');

  });

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
    responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    }]
  });


  $('.works-slider__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    swipe: false,
    infinite: false,
    asNavFor: '.works-slider__bottom',
    prevArrow: '<button class="slider__left"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="slider__right"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
  });
  $('.works-slider__bottom').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    asNavFor: '.works-slider__top'
  });

  $('.documentation-slider__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    swipe: false,
    infinite: false,
    asNavFor: '.documentation-slider__bottom',
    prevArrow: '<button class="slider__left"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="slider__right"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
  });
  $('.documentation-slider__bottom').slick({
    asNavFor: '.documentation-slider__top',
    infinite: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  $('.example-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slider__left"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="slider__right"><svg width="18" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.354 4.354a.5.5 0 000-.708L14.172.464a.5.5 0 10-.708.708L16.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h17v-1H0v1z" fill="#fff"/></svg></button>',
    responsive: [{
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  if ($(window).width() <= 700) {
    $('.blog-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    });
  }


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

  $(".accordeon dd").hide().prev().click(function () {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
    $("dl").removeClass("open");
    $(this).parent().toggleClass("open");
  });

  $(".card-info__read-more").on("click", function () {
    $(".card-info__read-more").toggleClass("active")
    $(".card-info__text").toggleClass("open")
  });




  if ($('.slick-slider').length > 0) {
    $(".slick-slider").slick("refresh");
    $(".slick-slider").slick("setPosition");
  }
});