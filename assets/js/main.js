document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector(".portfolio-isotope");

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute(
      "data-portfolio-filter"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-filter")
      : "*";
    let portfolioLayout = portfolionIsotope.getAttribute(
      "data-portfolio-layout"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-layout")
      : "masonry";
    let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
      ? portfolionIsotope.getAttribute("data-portfolio-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let portfolioIsotope = new Isotope(
        document.querySelector(".portfolio-container"),
        {
          itemSelector: ".portfolio-item",
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort,
        }
      );
    });
  }

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper(".slides-2", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});

/* Este código selecciona el elemento del documento con el id "header" y le asigna un bloque de código HTML para construir una barra de navegación. El código HTML contiene una estructura de navegación típica de una barra de navegación de Bootstrap, con enlaces a diferentes páginas y un formulario de búsqueda.
El código se encarga de asignar el contenido HTML al elemento con el id "header", lo que resulta en la visualización de la barra de navegación en ese lugar dentro del documento HTML.
*/
document.getElementById(
  "header"
).innerHTML = ` <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

<a href="index.html" class="logo d-flex align-items-center">
  <!-- Uncomment the line below if you also wish to use an image logo -->
  <img src="assets/img/favicon.png" alt="logo"> 
  <h1>LektaObras</h1>
</a>

<i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
<i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
<nav id="navbar" class="navbar">
  <ul>
    <li><a href="/index.html">Inicio</a></li>
    <li><a href="#about">Sobre Nosotros</a></li>
    <li><a href="#services">Servicios</a></li>
    <li><a href="/clientes.html">Clientes</a></li>
    <li><a href="/proyectos.html">Proyectos</a></li>    
    <li><a href= "#get-started" >Contacto</a></li>
  </ul>
</nav><!-- .navbar -->

</div>
`;

document.getElementById("footer").innerHTML = ` 
<div class="footer-content position-relative">
  <div class="container">
    <div class="row d-flex justify-content-between">

      <div class="col-lg-4 col-md-12">
        <div class="footer-info">
          <h3>LektaObras</h3>
          <p>
            Florencio Varela <br>
            Vicente Lopez y Planes 259<br><br>
            <strong>Tel:</strong> 011-2114-7378<br>
            <strong>Email:</strong> lektaobras@yahoo.com<br>
          </p>
          <div class="social-links d-flex mt-3">
            <a href="https://twitter.com/LektaObras" class="d-flex align-items-center justify-content-center"><i class="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100086296131156" class="d-flex align-items-center justify-content-center"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/lektaobras/" class="d-flex align-items-center justify-content-center"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/lekta-obras/" class="d-flex align-items-center justify-content-center"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div><!-- End footer info column-->

      <div class="col-lg-6 col-md-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.721448787099!2d-58.273381199999996!3d-34.81294919999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a329648c986f67%3A0x2d3f32ed63eb906c!2sVicente%20L%C3%B3pez%20y%20Planes%20259%2C%20B1888IXE%20Florencio%20Varela%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1689161754730!5m2!1ses-419!2sar" frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe>
      </div><!-- End Google Maps -->

    </div>
  </div>
</div>

<div class="footer-legal text-center position-relative">
  <div class="container">
    <div class="copyright">
      &copy; Copyright <strong><span>LektaObras</span></strong>. All Rights Reserved
    </div>
  </div>
</div>

`;

document.querySelector(
  ".headerClientes"
).innerHTML = ` <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

<a href="index.html" class="logo d-flex align-items-center">
  <!-- Uncomment the line below if you also wish to use an image logo -->
  <img src="assets/img/favicon.png" alt="logo"> 
  <h1>LektaObras</h1>
</a>

<i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
<i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
<nav id="navbar" class="navbar">
  <ul>
    <li><a href="/index.html">Inicio</a></li>
    <li><a href="/index.html#about">Sobre Nosotros</a></li>
    <li><a href="/index.html#services">Servicios</a></li>
    <li><a href="/clientes.html">Clientes</a></li>
    <li><a href="/proyectos.html">Proyectos</a></li>    
    <li><a href="/index.html#get-started" >Contacto</a></li>
  </ul>
</nav><!-- .navbar -->

</div>
`;


function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('muteYouTubeVideoPlayer', {
  videoId: 'vb7Y5sBlp-s', // El ID del video de Youtube
  width: 660, // Ancho del reproductor (en px)
  height: 435, // Alto del reproductor (en px)
  playerVars: {
  autoplay: 1, // Auto-play cuando la página cargue
  controls: 0, // Mostrar los botones de pause/play en el reproductor
  showinfo: 0, // Esconder el titulo del vídeo
  modestbranding: 0, // Esconder el logo de YouTube
  loop: 1, // Reproducir el vídeo en bucle
  fs: 0, // Esconder el botón de mostrar en pantalla completa
  cc_load_policy: 0, // Escoder los subtitulos que se muestran por defecto
  iv_load_policy: 3, // Escoder las anotaciones que se muestran por defecto
  autohide: 0 // Esconder los controles del vídeo cuando se esté reproduciendo
  },
  events: {
  onReady: function(e) {
  e.target.mute();
  }
  }
  });
 }