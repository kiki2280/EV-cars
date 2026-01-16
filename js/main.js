const swiper = new Swiper('.swiper', {

        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
         },

      breakpoints: {
        200: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
        },
        1480: {
          slidesPerView: 4,
        },
      },
    });
