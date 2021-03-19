/* SLICK SECTION */
$(document).ready(function (){
    $('.text-center').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2

    });
    });
    
    $(document).ready(function (){
    $('.slick').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1200,
      arrows: false
    });
  });

  /* BACK TO TOP */
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY >500)
  })

  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior:'smooth' 
    })
  }





