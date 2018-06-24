$('.membros-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  accessibility: true,
  responsive: [
      {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 550,
      settings: {
        centerMode: true,
      	slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
  ]
});

		