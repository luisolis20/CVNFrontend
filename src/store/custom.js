import $ from "jquery";
import store from "@/store";
import WOW from '@/assets/lib/wow/wow.min.js'

export default {
  data() {
    return {
      idus: "",
      roles: "",
      emaile: "",
      names: "",
      // ruta base de tu PDF
      pdfUrl: `${process.env.BASE_URL}Docs/Manual_CVN__V1.pdf`,
      // página inicial (se reemplaza al llamar al modal)
      pdfPage: 1
    };
  },
  mounted() {
    // Spinner
    var spinner = function () {
      setTimeout(function () {
        if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
        }
      }, 1);
    };
    new WOW().init();
    // Fixed Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
      } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-300px');
      }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 90
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.navbar-nav').length) {
          $('.navbar-nav .active').removeClass('active');
          $(this).closest('a').addClass('active');
        }
      }
    });
    $(document).ready(function () {
      $("div.features-post").hover(
        function () {
          $(this).find("div.content-hide").stop(true, true).slideDown("medium");
          $(this).find("div.content-show").stop(true, true).slideUp("medium");
        },
        function () {
          $(this).find("div.content-hide").stop(true, true).slideUp("medium");
          $(this).find("div.content-show").stop(true, true).slideDown("medium");
        }
      );
    });



    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
    spinner(0);
    $(".color-mode").click(function () {
      $(".color-mode-icon").toggleClass("active");
      $("body").toggleClass("dark-mode");
    });

    $(document).on("click", ".navbar-nav router-link", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var target = $(this.hash);
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 90,
            },
            1500,
            "easeInOutExpo"
          );
          if ($(this).closest(".navbar-nav").length) {
            $(".navbar-nav .active").removeClass("active");
            $(this).addClass("active");
          }
        }
      }
    });
  },
  computed: {
    showNavbar() {
      // Lógica para determinar si mostrar o no el navbar
      return this.$route.name == "home";
    },
    pdfSrc() {
      return `${this.pdfUrl}#page=${this.pdfPage}`;
    },

    rolUsuario() {
      //console.log(store);
      return store.state.role;
    },
    emailUsuario() {
      //console.log(store);
      return store.state.email;
    },
    idUsuario() {
      //console.log(store);
      return store.state.idusu;
    },
    nombreUsuario() {
      //console.log(store);
      return store.state.name;
    },
    showNavbarNue() {

      var rut;
      rut = this.$route.name;
      return (
        (this.$route.name !== "home") & (this.rolUsuario === "Administrador")
      );
    },
    showNavbaruser() {

      var rut;
      rut = this.$route.name;

      return ((this.rolUsuario === "Estudiante") || (this.rolUsuario === "Estudiante Graduado"));
    },
    showNavbaruserdocente() {

      var rut;
      rut = this.$route.name;

      return this.rolUsuario === "Docente";
    },
    mostrarOpciones() {
      //console.log(this.rolUsuario);
      this.roles = this.rolUsuario;
      this.emaile = this.emailUsuario;
      this.idus = this.idUsuario;
      this.names = this.nombreUsuario;
      return this.rolUsuario === "Administrador";
    },
    mostrarOpciones2() {
      //console.log(this.rolUsuario);
      this.roles = this.rolUsuario;
      this.emaile = this.emailUsuario;
      this.idus = this.idUsuario;
      this.names = this.nombreUsuario;
      return ((this.rolUsuario === "Estudiante") || (this.rolUsuario === "Estudiante Graduado"));
    },
    mostrarOpcionesgraduado() {
      //console.log(this.rolUsuario);
      this.roles = this.rolUsuario;
      this.emaile = this.emailUsuario;
      this.idus = this.idUsuario;
      this.names = this.nombreUsuario;
      return this.rolUsuario === "Estudiante Graduado";
    },
  },
  methods: {
    openPdfModal(page) {
      this.pdfPage = page;
      const modalEl = this.$refs.pdfModal;
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    },
    closePdfModal() {
      const modalEl = this.$refs.pdfModal;
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    }
  },
};
