/**
* Template Name: SnapFolio
* Template URL: https://bootstrapmade.com/snapfolio-bootstrap-portfolio-template/
* Updated: Jul 21 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
 /*  new PureCounter(); */

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


const themeSwitch = document.getElementById('theme-switch');
const hero = document.getElementById('hero');
hero.style.backgroundImage = "url('')";

if (themeSwitch) {
  themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    const icon = themeSwitch.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-fill');
      localStorage.setItem('theme', 'light');
    } else {
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Mantener preferencia
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeSwitch.querySelector('i').classList.replace('bi-sun-fill', 'bi-moon-fill');
  } 
}



  function animateCount(el, target) {
    let start = 0;
    const duration = 1500; // 1.5s
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start++;
      el.textContent = start + (el.dataset.suffix || "");
      if (start >= target) {
        clearInterval(timer);
        el.textContent = target + (el.dataset.suffix || "");
      }
    }, stepTime);
  }

  function animateCount(el, target) {
    let start = 0;
    const duration = 1500; // 1.5s
    const stepTime = Math.max(Math.floor(duration / target), 20); // evitar intervalos muy rápidos
    const timer = setInterval(() => {
      start++;
      el.textContent = start + (el.dataset.suffix || "");
      if (start >= target) {
        clearInterval(timer);
        el.textContent = target + (el.dataset.suffix || "");
      }
    }, stepTime);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const statNumbers = entry.target.querySelectorAll(".stat-number");
      
      if (entry.isIntersecting) {
        // 👉 Al entrar, animar
        statNumbers.forEach(el => {
          let raw = el.dataset.target;
          let suffix = "";

          // Detectar "+" o "%"
          if (raw.includes("+")) {
            suffix = "+";
            raw = raw.replace("+", "");
          }
          if (raw.includes("%")) {
            suffix = "%";
            raw = raw.replace("%", "");
          }

          el.dataset.suffix = suffix;
          animateCount(el, parseInt(raw));
        });
      } else {
        // 👉 Al salir, resetear a cero
        statNumbers.forEach(el => {
          el.textContent = "0";
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.getElementById("about"));

  function abrirVentanaGestion() {
  // Leer el tema actual del localStorage
  const currentTheme = localStorage.getItem('theme');
  const isLightMode = currentTheme === 'light';

  // Seleccionar la URL según el tema
  const url = isLightMode
    ? 'http://localhost:5001/admin-io/themes/v3/index-2.html' // versión clara
    : 'http://localhost:5001/admin-io/themes/v3/index2.html'; // versión oscura

  // Opciones del popup
  const opciones =
    'width=1200,height=800,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=no';

  // Abrir ventana
  const nuevaVentana = window.open(url, 'SistemasGestion', opciones);

  // Dar foco si se abrió correctamente
  if (nuevaVentana) nuevaVentana.focus();
}


function supportsWebGL() {
      try {
        const canvas = document.createElement('canvas');
        return !!window.WebGLRenderingContext &&
              (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      } catch (e) {
        return false;
      }
    }

    const lottieContainer = document.getElementById('lottie-loader');
    const animation = lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './assets/lottie/cube.json'
    });


document.querySelectorAll('.accordion .card-header').forEach(header => {
  console.log ('hhhh')
  const icon = header.querySelector('i.bi');
  header.addEventListener('click', () => {
    icon.classList.toggle('bi-chevron-down');
    icon.classList.toggle('bi-chevron-up');
  });
});

