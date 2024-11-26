let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

/* nav menu toggle btn*/
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
/* smooth scroll */
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

/* home image slider*/
document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

/* review slider */
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        /* swiper pagination click function */
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
      /* review slide animation delay */
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        /* review one image in farther left and right */
        0: {
          slidesPerView: 1,
        },
        /* review two image in middle */
        768: {
          slidesPerView: 2,
        },
    },
});