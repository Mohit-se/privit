
// header-sticky-js-start
      $(window).scroll(function(){
        if ($(this).scrollTop() > 90) {
            $('header').addClass('sticky-header');
        } else {
            $('header').removeClass('sticky-header');
        }
    });

// owl-js
      $('#testimonial_content').owlCarousel({
        items:1,
        loop:true,
        margin:50,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#service_content').owlCarousel({
        items:1,
        loop:true,
        margin:20,
        nav:true,
        center:true,
        dots:false,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
    });

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});


// toggle-btn-js
$(".navbar-toggler").click(function(){
    $(this).toggleClass('navbar-closed');
    $("html").toggleClass("myClass");
  });


// scroll-btn

$('.scrollTo').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});

// modal-js

    // jQuery('a.log-in').click(function(){
    //    jQuery('.logSin-modal #sin_modal').hide();
    //    jQuery('.logSin-modal #otp_modal').hide();       
    //    jQuery('.logSin-modal #log_modal').show();       
    // });
    // jQuery('a.sign-in').click(function(){
    //    jQuery('.logSin-modal #log_modal').hide();
    //    jQuery('.logSin-modal #otp_modal').hide();       
    //    jQuery('.logSin-modal #sin_modal').show();
    // });
    // jQuery('button.btn-all').click(function(){
    //    jQuery('.logSin-modal #log_modal').hide();           
    //    jQuery('.logSin-modal #sin_modal').hide();
    //    jQuery('.logSin-modal #otp_modal').show();
    // });

// Range Input
function SliderFun(ele) {
  for (let i = 0; i < ele.length; i++) {
    const element = ele[i];

    const values = element.value;
    const dataValue = element.getAttribute("max");
    const fullValue = Math.round((values * 100) / dataValue);
    element.nextSibling.parentNode.querySelector(".active-line").style.width =
      fullValue + "%";
    if (element.nextSibling.parentNode.querySelector(".active-dot")) {
      element.nextSibling.parentNode.querySelector(".active-dot").style.left =
        fullValue + "%";
    }

    // if (values % 3 === 0) {
    console.log("The value is an integer.");
    console.log("values", values / 3);
    const vals = values / 3;
    const ulList = element.parentNode.parentElement.querySelectorAll("ul li");
    for (let ids = 0; ids < ulList.length; ids++) {
      if (ids < vals || ids == vals) {
        ulList[ids].classList.add("active");
      } else {
        ulList[ids].classList.remove("active");
      }
    }
    // }
  }
}
SliderFun($(".range-input input"));

$(".range-input input").on("input", function () {
  SliderFun($(this));
});

// popup-js
$(".in-de .btn-box span.in-de-btn").click(function(){
  $(".in-de .form-list li:nth-child(2)").addClass("active");
});




