let navHeader = document.querySelector('.header');
let headerToggle = document.querySelector('.header__toggle');

navHeader.classList.remove('header--nojs');

headerToggle.onclick = function() {
  navHeader.classList.toggle('header--opened');
};

let carousel = document.querySelector('.slider__carousel');
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      767:{
          items:1
      },
      768:{
        items:3
      },
      1900:{
          items:4
      }
  },
  navText:["<img src='img/slider/arrow.svg'>", "<img src='img/slider/arrow.svg'>"],
})
