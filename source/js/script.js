let navHeader = document.querySelector('.header');
let headerToggle = document.querySelector('.header__toggle');

navHeader.classList.remove('header--nojs');

headerToggle.onclick = function() {
  navHeader.classList.toggle('header--opened');
};

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      480:{
        items:1
      },
      580:{
        items:2
      },
      768:{
        items:3,
        dots:true,
        nav:false,
      },
      1025:{
          items:3,
          dots:false,
          nav:true,
      },
      1392:{
        items:4,
        dots:false,
        nav:true,
    }

  },
  navText:["<img src='img/slider/arrow.svg'>", "<img src='img/slider/arrow.svg'>"],
})
