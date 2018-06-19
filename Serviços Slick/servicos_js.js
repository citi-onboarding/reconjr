$('.servicos-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  infinite: true,
  responsive: [
    {
      breakpoint: 550,
      settings: {
        centerMode: true,
      	slidesToShow: 1,
      	slidesToScroll: 1
      }
    }
  ]
});
