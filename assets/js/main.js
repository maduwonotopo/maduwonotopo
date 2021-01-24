/**
* Template Name: Restaurantly - v2.0.0
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('.mobile-nav').prepend('<button type="button" class="mobile-nav-close"><i class="icofont-close"></i></button>');
    $('#header').append('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav-close', function(e) {
      $('body').removeClass('mobile-nav-active');
      $('.mobile-nav-overly').fadeOut();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Menu list isotope and filter
  $(window).on('load', function() {
    var menuIsotope = $('.menu-container').isotope({
      itemSelector: '.menu-item',
      layoutMode: 'fitRows'
    });

    $('#menu-flters li').on('click', function() {
      $("#menu-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      menuIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });

  // Events carousel (uses the Owl Carousel library)
  $(".events-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Initiate venobox lightbox
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

//Floating chat
function kirimWA(e) {
  var t = !0;
  if (
    (jQuery("#" + e + " .wajib").each(function () {
      ("" != $.trim(jQuery(this).val()) &&
        "default" != $.trim(jQuery(this).val())) ||
        jQuery(this).addClass("focus");
    }),
    jQuery("#" + e + " .wajib").each(function () {
      return "" == $.trim(jQuery(this).val())
        ? ((t = !1),
          jQuery(this).parents("label").find(".validasi").addClass("show"),
          jQuery(this).focus(),
          !1)
        : "default" == $.trim(jQuery(this).val())
        ? ((t = !1),
          jQuery(this).parents("label").find(".validasi").addClass("show"),
          !1)
        : void 0;
    }),
    t === !0)
  ) {
    var i = "",
      a = "https://web.whatsapp.com/send";
    if (
      (/Android|webOS|iPhone| Chrome |iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) && (a = "whatsapp://send"),
      "konsultasi" === e)
    )
      var s = 62,
        r = 81393993100,
        n = "Admin",
        o = "Hello",
        l =
          (jQuery("#" + e + " .title-content").text(),
          jQuery("#" + e + " .pesan").val()),
        i = a + "?phone=" + s + r + "&text=*" + o + " " + n + "...* %0A%0A" + l;
    jQuery(this).attr("href", i);
    var u = 960,
      h = 540,
      c = Number(screen.width / 2 - u / 2),
      d = Number(screen.height / 2 - h / 2),
      y = window.open(
        this.href,
        "",
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=" +
          u +
          ", height=" +
          h +
          ", top=" +
          d +
          ", left=" +
          c
      );
    return y.focus(), !1;
  }
}
window.addEventListener(
  "load",
  function () {
    var e = jQuery("title").text();
    jQuery(".waFix").on("click", function () {
      jQuery(this).removeClass("show"), jQuery("title").text(e);
    }),
      jQuery(".formWA input, .formWA textarea").on("keypress", function () {
        13 === event.keyCode &&
          jQuery(this).parents(".formWA").find(".submit").trigger("click");
      }),
      jQuery(".formWA .wajib").each(function () {
        (title = jQuery(this).attr("placeholder")),
          (label = jQuery(this).parents("label")),
          jQuery('<span class="validasi">(Required)</span>').appendTo(label);
      }),
      jQuery(".formWA .wajib").keyup(function () {
        "" != jQuery(this).val() &&
          (jQuery(this).removeClass("focus"),
          jQuery(this).parents("label").find(".validasi").removeClass("show"));
      }),
      jQuery(".formWA select").change(function () {
        jQuery(this).removeClass("focus"),
          jQuery(this).parents("label").find(".validasi").removeClass("show");
      });
  },
  !1
),
  jQuery(".formWA .submit").on("click", function () {
    return kirimWA(jQuery(this).parents(".poptamv").attr("id")), !1;
  }),
  $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show");
  }),
  $(document).on("click", ".nabil-live", function () {
    $("#whatsapp-chat").addClass("show").removeClass("hide");
  });
