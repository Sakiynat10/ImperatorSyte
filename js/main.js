function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  let navbar2 = document.getElementById("navbar2");

  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
      if (scrollY > 100) {
        navbar2.classList.add("navbar2-shrink");
      } else {
            navbar2.classList.remove("navbar2-shrink");
        }
  }




  window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.classList.add('backtop-show')
    } else {
      backtop.classList.remove('backtop-show')
    }
  }



const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);



$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      margin: 140,
      loop: true,
      nav:true,
      items: 4,
      autoplay: true,
      dots:false,
      autoplayTimeout: 2000,
      responsive: {
          0: {
              items: 1,
          },
          600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 3,
        },
      }
  }
  );
});

