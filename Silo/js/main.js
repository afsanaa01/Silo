$(window).scroll(function () {
  updateNav();
});

function updateNav() {
  if ($(window).scrollTop() > 30) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
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
          // prjimgs[a].style.display = "none";
          // textPosition[a].style.display = "none";
          prjitems[i].style.backgroundColor = "#0000003d";
          prjitems[i].style.transition = "all .3s ease";
          prjitems[a].style.border = "0.2px solid rgba(255, 255, 255, 0.225)";
        }
        textPosition[i].style.display = "block";
      }
    });

    prjitems[i].addEventListener("mouseout", function () {
      // $("#section-background").attr("src", "");
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

function myFunction(x) {
  x.classList.toggle("change");
}

var owl = $(".owl-one");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  // autoplay: true,
  // autoplayTimeout: 5000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});


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
  spaceBetween: 10,
  slidesPerView: 10,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
