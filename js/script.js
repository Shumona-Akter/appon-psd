// smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 200,
  
});

// preloader
$(".preloader").delay(2000).fadeOut();

$(window).scroll(function(){
    var scrolloing= $(this).scrollTop();
  if(scrolloing>300){
      $("#nav_main").addClass("menu_fix")
  }
  else{
    $("#nav_main").removeClass("menu_fix")
  }

//   scrolling
    if(scrolloing > 300){
        $(".scroll_top").fadeIn();
}
    else
    {
        $(".scroll_top").fadeOut();
    }
})

$(".scroll_top").click(function(){
    $("body, html").animate({
        scrollTop:"0px",
    },3000)
})


// slick slider

// images

$('.images').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',
    arrows:false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            }
          },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            dots:false,
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
})

$('.slider_details').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

    arrows:false,
    asNavFor:".img_slider",
})
$('.img_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode:true,
    centerPadding:"0px",
    arrows:false,
    asNavFor:".slider_details"

})
  