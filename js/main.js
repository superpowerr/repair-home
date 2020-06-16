$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toogle=modal]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next =$('.swiper-button-next');
  var prev =$('.swiper-button-next');
  var bullets =$('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10);
  
  //swiper-target
  var mySwiperTarget = new Swiper('.target__swiper-container', {
    loop: true,
    effect: 'coverflow',
    pagination: {
      el: '.target__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.target__button-next',
      prevEl: '.target__button-prev',
    },

  });
  var nextTarget = $('.target__button-next');
  var prevTarget = $('.target__button-prev');
  var bulletsTarget = $('.target__pagination');

  nextTarget.css('left', prevTarget.width() + 30 + bulletsTarget.width() + 11);
  bulletsTarget.css('left', prevTarget.width() + 20);

  //-click block__item in target
  var block = $('.target-block__item');
  block.on('click', function (evt) {
    block.removeClass('target-block__item--active');
    $(this).toggleClass('target-block__item--active');
  });

  //-click-to-slide
  var targetBlock = $('.target-block');

  $('.target-block__item').on('click', function () {
    var index = $(this).data('index');
    mySwiperTarget[0].slideTo(index);
    mySwiperTarget[1].slideTo(index);
  });

  mySwiperTarget[0].on('slideChange', function () {
    var index = mySwiperTarget[0].realIndex;
    block.removeClass('target-block__item--active');
    block.eq(index).addClass('target-block__item--active');
  });

  new WOW().init();

});