$(window).scroll(function () {
  updateNav();
  updateNav1();
});

function updateNav() {
  if ($(window).scrollTop() > 30) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
}

function updateNav1() {
  if ($(window).scrollTop() > 20) {
    $(".mobile-nav").addClass("scrolled-info");
  } else {
    $(".mobile-nav").removeClass("scrolled-info");
  }
}
const mediaQuery = window.matchMedia("(min-width: 998px)");

if (mediaQuery.matches) {
  let prjitems = document.querySelectorAll("#prj .prj-item");
  let prjimgs = document.querySelectorAll(".prj-item img");
  let textPosition = document.querySelectorAll("#prj .text-position");
  let scbg = document.querySelector("#section-background");

  for (let i = 0; i < prjitems.length; i++) {
    prjitems[i].addEventListener("mouseover", function () {
      $("#section-background").attr("src", `${prjimgs[i].src}`);
      if (scbg.src != "") {
        for (let a = 0; a < prjimgs.length; a++) {
          prjitems[i].style.backgroundColor = "#0000003d";
          prjitems[i].style.transition = "all .3s ease";
          prjitems[a].style.border = "0.2px solid rgba(255, 255, 255, 0.225)";
        }
        textPosition[i].style.display = "block";
      }
    });

    prjitems[i].addEventListener("mouseout", function () {
      if (scbg.src != "") {
        for (let a = 0; a < prjimgs.length; a++) {
          prjimgs[a].style.display = "block";
          textPosition[a].style.display = "block";
          prjitems[i].style.backgroundColor = "transparent";
          prjitems[a].style.border = "0px";
        }
      }
    });
  }
}

const regex = /(\w+)\:\/\/(\w+\.\w+\.\w+)\/(projects)\//;

if (regex.test(window.location.href)) {
  $("#stock").css({
    display: "none",
  });
}

$(".owl-carousel").owlCarousel({
  center: true,
  items: 1,
  nav: true,
  dots: false,
  loop: true,
  animateOut: "fadeOut",
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
