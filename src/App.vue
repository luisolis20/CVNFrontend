<template>
  <!-- Menu y Topbar que se muestra por defecto al cargar la página. Start-->
  <div class="container-fluid sticky-top px-0">
    <div class="container-fluid px-0">
      <div class="container-fluid px-0" v-if="showNavbar">
        <div class="container-fluid topbar bg-primary d-none d-lg-block">
          <div class="d-flex justify-content-between">
            <div class="top-info ps-2">
              <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#Comentario"
                  class="text-white">Bienestar Universiversitario, Nuevos Horizontes, Esmeraldas, Ecuador</a></small>
              <small class="me-3"><i class="fas fa-envelope me-2 text-secondary"></i><a href="#Comentario"
                  class="text-white">cvn.utelvt@gmail.com</a></small>
            </div>
            <div class="top-link pe-2">
              <a href="https://whatsapp.com/channel/0029VakylN1BfxnyuIBDjw1J" target="_blank" class="text-white"><small class="text-white mx-2">WhatsApp</small>/</a>
              <a href="https://www.instagram.com/bienestar_utlvte/" target="_blank" class="text-white"><small class="text-white mx-2">Instagram</small>/</a>
              <a href="https://www.youtube.com/@DIALACADEMICOUTLVTE" target="_blank" class="text-white"><small class="text-white ms-2">YouTube</small></a>
            </div>
          </div>
        </div>
        <!-- Navar Página de Inicio. Start-->
        <div class="container-fluid">
          <div class="container mennu px-0">
            <nav class="navbar navbar-light navbar-expand-xl" id="navBar">
              <a href="index.html" class="navbar-brand">
                <img class="img-fluid" src="@/assets/images/logo.gif" width="250px" height="250px" alt="">
              </a>
              <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span class="fa fa-bars text-primary"></span>
              </button>
              <div class="collapse navbar-collapse py-3" id="navbarCollapse">
                <div class="navbar-nav mx-auto border-top">
                  <a href="#Inicio" class="nav-item nav-link">Inicio</a>
                  <a href="#SobreUTLVTE" class="nav-item nav-link">Sobre la UTLVTE</a>
                  <a href="#IniciarSesion" class="nav-item nav-link">Iniciar Sesión</a>

                  <a href="#Carreras" class="nav-item nav-link">Carreras de la UTLVTE</a>
                </div>

              </div>
            </nav>
          </div>
        </div>
        <!-- Navar Página de Inicio. End-->
      </div>
    </div>
  </div>
  <!-- Menu y Topbar que se muestra por defecto al cargar la página. End-->

  <!-- Aquí se va a mostrar el contenido de inicio por defecto Llamado al Archivo HomeView.vue-->
  <router-view v-if="showNavbar"></router-view>

  <!-- Menu y topbar que se va a mostrar si al loguearse el usuario es Admistrador. Llamado al Archivo Adaministrador.vue-->
  <div class="verde">
    <div class="container-xxl container-fluid position-relative bg-white d-flex" v-if="showNavbarNue">
      <!-- Sidebar Start -->
      <div class="sidebar pe-8 pb-8" v-if="mostrarOpciones">
        <nav class="navbar">
          <a href="" class="navbar-brand mx-4 mb-4">
            <img class="imagen" src="@/assets/images/logos.png" alt="">
          </a>
          <div class="d-flex align-items-center ms-4 mb-4">
            <div class="position-relative">
              <img class="rounded-circle" src="@/assets/images/bienes.png" alt="" style="width: 40px; height: 40px;">
              <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1">
              </div>
            </div>
            <div class="ms-3">
              <h6 class="mb-0">{{ names }}</h6>
              <span class="text-dark">{{ roles }}</span>
            </div>
          </div>
          <div class="navbar-nav w-100 oe">
            <!-- Página de Binevenida -->
            <router-link :to="{ path: '/adminus/' + idus }" class="nav-item nav-link"><i class="fas fa-home me-2"
                :class="{ 'active': $route.path === '/adminus/' + idus }"></i>Bienvenido</router-link>
            <!-- Página de Usuarios -->
            <router-link :to="{ path: '/userall/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/userall/' + idus }"><i
                class="fa fa-user me-2"></i>Usuarios</router-link>
            <!-- Página de Datos Personales -->
            <router-link :to="{ path: '/datos_personales_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/datos_personales_adm/' + idus }"><i
                class="fas fa-database me-2"></i>CVN Registrados.</router-link>
            <!-- Página de Declaraciones Personales -->
            <router-link :to="{ path: '/declaracion_personal_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/declaracion_personal_adm/' + idus }"><i
                class="fas fa-person-booth me-2"></i>Declaraciones Per.</router-link>
            <!-- Página de Experiencias Profesionales -->
            <router-link :to="{ path: '/experiencia_profesionales_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/experiencia_profesionales_adm/' + idus }"><i
                class="fas fa-briefcase me-2"></i>Experiencias Pro.</router-link>
            <!-- Página de Formación Académica -->
            <router-link :to="{ path: '/formacion_academica_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/formacion_academica_adm/' + idus }"><i
                class="fas fa-book-reader me-2"></i>Formación Aca.</router-link>
            <!-- Página de Habilidades Informáticas -->
            <router-link :to="{ path: '/habilidades_informatica_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/habilidades_informatica_adm/' + idus }"><i
                class="fas fa-desktop me-2"></i>Habilidades Infor.</router-link>
            <!-- Página de Idiomas -->
            <router-link :to="{ path: '/idioma_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/idioma_adm/' + idus }"><i
                class="fa fa-commenting me-2"></i>Idiomas</router-link>
            <!-- Página de Información de Contacto -->
            <router-link :to="{ path: '/informacion_contacto_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/informacion_contacto_adm/' + idus }"><i
                class="fas fa-address-card me-2"></i>Información Cont.</router-link>
            <!-- Página de Investigación / Publicaciones -->
            <router-link :to="{ path: '/investigacion_publicaciones_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/investigacion_publicaciones_adm/' + idus }"><i
                class="fas fa-glasses me-2"></i>Inves. / Publi.</router-link>
            <!-- Página de Otros Datos -->
            <router-link :to="{ path: '/otros_datos_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/otros_datos_adm/' + idus }"><i class="fas fa-coins me-2"></i>Otros
              Datos</router-link>
            <!-- Página de Cursos Capacitaciones -->
            <router-link :to="{ path: '/cursos_capacitacion_adm/' + idus }" class="nav-item nav-link"
              :class="{ 'active': $route.path === '/cursos_capacitacion_adm/' + idus }"><i
                class="fas fa-bezier-curve"></i>Cursos</router-link>

          </div>
        </nav>
      </div>
      <!-- Sidebar End -->

      <div class="content">
        <div class="container-fluid topbar bg-primary d-none d-lg-block">
          <div class="d-flex justify-content-between">
            <div class="top-info ps-2">
              <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#"
                  class="text-white">Bienestar Universiversitario, Nuevos Horizontes, Esmeraldas, Ecuador</a></small>
              <small class="me-3"><i class="fas fa-envelope me-2 text-secondary"></i><a href="#"
                  class="text-white">cvn.utelvt@gmail.com</a></small>
            </div>
            <div class="top-link pe-2">
              <a href="https://whatsapp.com/channel/0029VakylN1BfxnyuIBDjw1J" target="_blank" class="text-white"><small class="text-white mx-2">WhatsApp</small>/</a>
              <a href="https://www.instagram.com/bienestar_utlvte/" target="_blank" class="text-white"><small class="text-white mx-2">Instagram</small>/</a>
              <a href="https://www.youtube.com/@DIALACADEMICOUTLVTE" target="_blank" class="text-white"><small class="text-white ms-2">YouTube</small></a>
            </div>
          </div>
        </div>
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand navbar-light sticky-top px-4 py-0 align-items-center">

          <a href="#" class="sidebar-toggler flex-shrink-0" v-on:click="ocultar">
            <i class="fa fa-bars"></i>
          </a>
          <h2 class="paneladmin">Panel de Administración</h2>

          <div class="navbar-nav align-items-center ms-auto">


            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <img class="rounded-circle me-lg-2" src="@/assets/images/bienes.png" alt=""
                  style="width: 40px; height: 40px;">
                <span class="d-none d-lg-inline-flex">{{ names }}</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">

                <a href="#" class="dropdown-item" v-on:click="cerrarsesion">Cerrar Sesion</a>
              </div>
            </div>
          </div>
        </nav>
        <!-- Navbar End -->
        <router-view v-if="showNavbarNue"></router-view>
      </div>

    </div>
  </div>

  <!-- En el caso de que sea un usuario Estudiante se mostrará la pagina de portafolio y/o Registro. Llamado al Archivo Registro.vue-->
  <div>
    <router-view v-if="showNavbaruser"></router-view>
  </div>


  <div>
    <router-view v-if="showNavbaruserdocente"></router-view>
  </div>

  <footer>
    <div class="container-fluid copyright bg-white py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span class="text-dark"><a href="#"><i class="fas fa-copyright me-2"></i>CVN</a>, Todos los derechos reservados.</span>
                    </div>
                    <div class="col-md-6 my-auto text-center text-md-end text-dark">
                        Designed By <a class="border-bottom" href="#">Don_Monta</a> Distributed By <a class="border-bottom" href="https://www.utelvt.edu.ec/site/" target="_blank">UTLVTE</a>
                    </div>
                </div>
            </div>
        </div>
  </footer>
</template>

<!-- Importación Estilos Necesarios Start-->
<style scoped>
@import url('@/assets/styles/main.css');
@import url('@/assets/styles/style.css');
</style>
<!-- Importación Estilos Necesarios End-->

<!-- Importación de Scripts y Creación de Métodos-->
<script>
//Importar Librerías y Archivos Js
import script2 from '@/store/custom.js';
import { mapActions } from 'vuex';
import store from '@/store';

export default {
  mounted() {

  },
  //Creción de Métodos
  methods: {
    //Método para cerrar Sesión
    cerrarsesion() {
      console.clear();
            localStorage.clear();
            window.location.replace('/home');
    },
    //Método para Ocultar el menu del Archivo Administrador.vue
    ocultar() {
      // Sidebar Toggler
      $('.sidebar, .content').toggleClass("open");
      return false;

    }
  },
  mixins: [script2],//Habilitar el uso del archivos js
};
</script>