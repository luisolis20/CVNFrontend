<template>
  <!-- TopBar Star-->
  <div class="container-fluid topbar bg-primary d-none d-lg-block">
    <div class="d-flex justify-content-between">
      <div class="top-info ps-2">
        <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#"
            class="text-white">Bienestar Universiversitario, Nuevos Horizontes, Esmeraldas, Ecuador</a></small>
        <small class="me-3"><i class="fas fa-envelope me-2 text-secondary"></i><a href="#"
            class="text-white">cvn.utelvt@gmail.com</a></small>
      </div>
      <div class="top-link pe-2">
        <a href="#" class="text-white"><small class="text-white mx-2">Facebook</small>/</a>
        <a href="#" class="text-white"><small class="text-white mx-2">Instagram</small>/</a>
        <a href="#" class="text-white"><small class="text-white ms-2">Twitter</small></a>
      </div>
    </div>
  </div>
  <!-- TopBar End-->
  <!-- MENU -->
  <nav class="navbar navbar-expand-sm navbar-light d-lg-block">
        <div class="container-fluid">
            <a href="" v-if="this.us">
                <img class="imagen" src="@/assets/images/logos.png" alt="" v-on:click="perfil" />
            </a>
            <div v-if="this.registro">
                <a class="navbar-brand usuario" type="button"
                    v-if="mostrarOpciones2" v-on:click="perfil"><i class="uil uil-user"></i>Actualizar Mi Currículum </a>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item" v-if="this.registro">
                        <a href="#sobremi" class="nav-link About"><span data-hover="Sobre mi">Sobre mi</span></a>
                    </li>
                    <li class="nav-item" v-if="this.registro">
                        <a href="#experiencias" class="nav-link Projects"><span data-hover="Experiencias">Experiencias</span></a>
                    </li>
                    
                    <li class="nav-item" v-if="this.registro">
                        <a href="#Habilidades" class="nav-link Projects"><span data-hover="Habilidades">Habilidades</span></a>
                    </li>
                    <li class="nav-item" v-if="this.registro">
                        <a href="#Idiomas" class="nav-link Projects"><span data-hover="Idiomas">Idiomas</span></a>
                    </li>
                    
                    <li class="nav-item" >
                        <a href="#" class="nav-link Contact" v-on:click="cerrarsesion"><span data-hover="Cerrar Sesión">Cerrar Sesión</span></a>
                    </li>
                    <li class="nav-item" v-if="this.eseditar">
                        <a href="#" class="nav-link Contact" v-on:click="salir"><span data-hover="Salir del Perfil">Salir del Perfil</span></a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-lg-auto">
                    <div class="ml-lg-4">
                        <div class="color-mode d-lg-flex justify-content-center align-items-center">
                            <i class="color-mode-icon"></i>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
  
  <div class="container-fluid py-5" v-if="this.us">
    <section class="mt-7 py-0">
            <!--/.bg-holder-->

            <div class="container">
                <div class="row">
                    <div class="col-lg-12 py-5 py-xl-5 py-xxl-7">
                        <h1 class="display-3 text-1000 fw-bold titulobach" v-if="this.esguardar">¡Ya estás a un paso de tener tu CVN!</h1>
                        <h1 class="display-3 text-1000 fw-bold titulobach" v-if="this.eseditar">Actualiza tus datos</h1>
                        <h1 class="display-3 subtt fw-bold titulobach">¡Complete su perfil!</h1>
                        <div class="pt-5 ">
                            <nav>
                                <div class="nav1 nav-tabs1 voyage-tabs" id="nav-tab" role="tablist">
                                    <!-- Datos personales -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'datos' }"
                                        id="nav-datos-tab" data-bs-toggle="tab" data-bs-target="#nav-datos"
                                        type="button" role="tab" aria-controls="nav-datos" aria-selected="true"
                                        v-if="this.mostrardatospersonales" title="Datos personales" @click="activarTab('datos')">
                                        <i class="far fa-address-book"></i>
                                    </button>
                                    <!-- Declaracion Personal -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'personal' }"
                                        id="nav-declaracion-tab" data-bs-toggle="tab" data-bs-target="#nav-declaracion"
                                        type="button" role="tab" aria-controls="nav-declaracion" aria-selected="false"
                                        v-if="this.mostrardelaracionpersonal" title="Resumen libre del currículum" @click="activarTab('personal')">
                                        <i class="fas fa-bullseye"></i>
                                    </button>
                                    <!-- Formacion Academica -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'formacion' }"
                                        id="nav-formacion-tab" data-bs-toggle="tab" data-bs-target="#nav-formacion"
                                        type="button" role="tab" aria-controls="nav-formacion" aria-selected="false"
                                        v-if="this.mostrarformacionacademica" title="Formación Académica"  @click="activarTab('formacion')">
                                        <i class="fas fa-graduation-cap"></i>
                                    </button>
                                    <!-- Experiencia Profesional -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'experiencia' }"
                                        id="nav-experiencia-tab" data-bs-toggle="tab" data-bs-target="#nav-experiencia"
                                        type="button" role="tab" aria-controls="nav-experiencia" aria-selected="false"
                                        v-if="this.mostrarexperienciasprofesionales" title="Experiencia Profesional"  @click="activarTab('experiencia')">
                                        <i class="fas fa-chart-line"></i>
                                    </button>
                                    <!-- Investigacion y Publicaciones -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'investigacion' }"
                                        id="nav-investiga-tab" data-bs-toggle="tab" data-bs-target="#nav-investiga"
                                        type="button" role="tab" aria-controls="nav-investiga" aria-selected="false"
                                        v-if="this.mostrarinvestigacionpublicaciones"  title="Investigación y Publicaciones" @click="activarTab('investigacion')">
                                        <i class="fas fa-glasses"></i>
                                    </button>
                                    <!-- Idiomas -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'idioma' }"
                                        id="nav-idioma-tab" data-bs-toggle="tab" data-bs-target="#nav-idioma"
                                        type="button" role="tab" aria-controls="nav-idioma" aria-selected="false"
                                        v-if="this.mostraridiomas" title="Idiomas"  @click="activarTab('idioma')">
                                        <i class="fas fa-language"></i>
                                    </button>
                                    <!-- Habilidades -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'habilidades' }"
                                        id="nav-habilidades-tab" data-bs-toggle="tab" data-bs-target="#nav-habilidades"
                                        type="button" role="tab" aria-controls="nav-habilidades" aria-selected="false"
                                        v-if="this.mostrarsw" title="Habilidades" @click="activarTab('habilidades')">
                                        <i class="fas fa-laptop"></i>
                                    </button>
                                    <!-- Cursos o Capacitaciones -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'capacitaciones' }"
                                        id="nav-capacitaciones-tab" data-bs-toggle="tab" data-bs-target="#nav-capacitaciones"
                                        type="button" role="tab" aria-controls="nav-capacitaciones" aria-selected="false"
                                        v-if="this.mostrarcapacitaciones" title="Cursos o Capacitaciones" @click="activarTab('capacitaciones')">
                                        <i class="fas fa-bezier-curve"></i>
                                    </button>
                                    <!-- Otros datos Relevantes -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'relevantes' }"
                                        id="nav-relevante-tab" data-bs-toggle="tab" data-bs-target="#nav-relevante"
                                        type="button" role="tab" aria-controls="nav-relevante" aria-selected="false"
                                        v-if="this.mostrardatosrelevantes" title="Otros Datos Relevantes" @click="activarTab('relevantes')">
                                        <i class="fas fa-splotch"></i>
                                    </button>
                                    <!-- Informacion de Contacto -->
                                    <button class="nav-link1" :class="{ active: this.activeTab === 'contacto' }"
                                        id="nav-contacto-tab" data-bs-toggle="tab" data-bs-target="#nav-contacto"
                                        type="button" role="tab" aria-controls="nav-contacto" aria-selected="false"
                                        v-if="this.mostrarinformacioncontacto" title="Información de Contacto" @click="activarTab('contacto')">
                                        <i class="fas fa-user-tie"></i>
                                    </button>
                                    
                                </div>
                                <div class="tab-content" id="nav-tabContent">
                                    <!-- Datos personales -->
                                    <div class="tab-pane fade" :class="{ 'show active': this.activeTab === 'datos' }"
                                        id="nav-datos" role="tabpanel" aria-labelledby="nav-datos-tab"
                                        v-if="this.mostrardatospersonales">
                                        <form class="row g-4 mt-5">
                                            <h3 class="titulobach">Datos personales</h3>
                                            <p class="text-danger text-justify">Señor(a) docente o personal administrativo. Los datos personales cargados aquí son los que usted llenó en el sistema SIAD. Si su información no carga pruebe iniciando sesión nuevamente o ingrese al sistema <a href="http://sistemas.utelvt.edu.ec/socioeconomica/login.aspx" target="_blank"> SIAD </a>y verfique su información</p>
                                            <!-- Apellido Paterno -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Apellido paterno</label>
                                                <div class="input-group-icon">
                                                    <label class="form-label visually-hidden"
                                                        for="inputAddress1"></label>
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="ApellInfPer" v-model="this.ApellInfPer"
                                                        type="text" placeholder="Ingrese su apellido paterno" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-reader"></i></span>
                                                </div>
                                                
                                            </div>
                                            <!-- Apellido Materno -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Apellido materno</label>
                                                <div class="input-group-icon">
                                                    <label class="form-label visually-hidden"
                                                        for="inputAddress1"></label>
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="ApellMatInfPer" v-model="this.ApellMatInfPer"
                                                        type="text" placeholder="Ingrese su apellido materno" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-reader"></i></span>
                                                </div>
                                                
                                            </div>
                                            <!-- Nombres-->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Nombres</label>
                                                <div class="input-group-icon">
                                                    <label class="form-label visually-hidden"
                                                        for="inputAddress1"></label>
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="NombInfPer" v-model="this.NombInfPer"
                                                        type="text" placeholder="Ingrese sus nombres" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-reader"></i></span>
                                                </div>
                                                
                                            </div>
                                            <!-- Cédula-->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Documento de identidad</label>
                                                <div class="input-group-icon">
                                                    <label class="form-label visually-hidden"
                                                        for="inputAddress2"></label>
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="CIInfPer" v-model="this.CIInfPer"
                                                        type="telf"
                                                        placeholder="Ingrese número de identificación (cédula, pasaporte, etc)" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-address-card"> </i></span>
                                                </div>
                                                
                                            </div>
                                            <!-- Fecha de Nacimiento-->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Fecha de Nacimiento</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="FechNacimPer" v-model="this.FechNacimPer"
                                                        type="date" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <!-- Dirección de Residencia-->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Dirección de Residencia</label>
                                                <div class="input-group-icon">
                                                    <label class="form-label visually-hidden"
                                                        for="inputAddress2"></label>
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="DirecDomicilioPer" v-model="this.DirecDomicilioPer"
                                                        type="telf" placeholder="Ingrese dirección de residencia" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-map-marked"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Género-->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Sexo</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="CIInfPer" v-model="this.GeneroPer"
                                                        type="telf"
                                                        placeholder="Ingrese su sexo" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-venus-mars"> </i></span>
                                                </div>
                                            </div>
                                             <!-- Número de Teléfono -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Número de teléfono</label>
                                                <div class="input-group-icon">
                                                    <label class="form-label visually-hidden"
                                                        for="inputAddress2"></label>
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="Telf1InfPer" v-model="this.Telf1InfPer" type="telf"
                                                        placeholder="Ingrese número de teléfono" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-phone"> </i></span>
                                                </div>
                                                
                                            </div>
                                             <!-- Correo Electrónico -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Correo Electrónico</label>
                                                <div class="input-group-icon">
                                                    <label class="form-label visually-hidden"
                                                        for="inputAddress2"></label>
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="mailPer" v-model="this.mailPer"
                                                        type="email" placeholder="Ingrese correo electrónico válido" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                                
                                            </div>
                                             <!-- Nacionalidad -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Nacionalidad</label>
                                                <div class="input-group-icon">
                                                    <label class="form-label visually-hidden"
                                                        for="inputAddress2"></label>
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="NacionalidadPer" v-model="this.NacionalidadPer"
                                                        type="name" placeholder="Ingrese su nacionalidad" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                                
                                            </div>
                                            
                                             <!-- Ciudad  -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Ciudad</label>
                                                <div class="input-group-icon">
                                                    <label class="form-label visually-hidden"
                                                        for="inputAddress2"></label>
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="CiudadPer" v-model="this.CiudadPer"
                                                        type="name" placeholder="Ingrese su ciudad" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                                
                                            </div>
                                             <!-- Foto -->
                                            <div class="col-sm-6 col-md-6 col-xl-10">
                                                <div class="input-group-icon">
                                                    <div class="text-center">
                                                        <img v-if="this.imagen" height="150px" width="150px" :src="this.imagen"
                                                            id="fotoimg" class="img-fluid" alt="" />
                                                        <img v-else style="height: 120px"
                                                            src="@/assets/images/userlogo.png"
                                                            id="fotoimg" class="img-thumbnail" alt="" />
                                                        <div class="input-group mb-1 xl-10">
                                                            <input v-on:change="cargarfoto" id="inputFoto" type="file"
                                                                accept="image/png, image/jpeg, image/gif, image/jpg"
                                                                class="form-control1" disabled/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             <!-- Acciones -->
                                            <div class="col-12 col-xl-10 col-lg-12 d-grid mt-6" v-if="this.boton1">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.modoedit"
                                                    @click="guardarDatosPersonales">
                                                    Siguiente Apartado
                                                </button>
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing"
                                                    @click="editarDatosPersonales">
                                                    Siguiente Apartado
                                                </button>
                                                
                                            </div>
                                        </form>
                                    </div>
                                    <!-- Declaracion Personal -->
                                    <div class="tab-pane fade" :class="{ 'show active': this.activeTab === 'personal' }"
                                        id="nav-declaracion" role="tabpanel" aria-labelledby="nav-declaracion-tab"
                                        v-if="this.mostrardelaracionpersonal">
                                        <form class="row g-4 mt-5">
                                            <h3>Resumen libre del currículum</h3>
                                            <!-- Descripción -->
                                            <div class="col-12">
                                                <label class="text-dark" for="">Descripción</label>
                                                <div class="input-group-icon">
                                                    <textarea class="form-control1 input-box form-voyage-control1" rows="6"
                                                        id="texto" v-model="this.texto" type="text"  @input="limitepalabras"
                                                        placeholder="Describe en 250 palabras tus intereses, objetivos, aspectos personales, peculiaridades, pasatiempos u otras características importantes. Incluye también tus metas a medio/largo plazo." /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                                <p>{{ contarpalabra }}/250 palabras</p>
                                            </div>
                                            <!-- Acciones -->
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.regresar1"
                                                    @click="regresarADatosPersonales">
                                                    Regresar
                                                </button>
                                                
                                            </div>
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.modoedit7"
                                                    @click="guardaDeclaracionPersonal">Guardar y Continuar</button>
                                                    <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing7"
                                                    @click="editarDeclaracionPersonal">
                                                    Actualizar Y Continuar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- Formacion Academica -->
                                    <div class="tab-pane fade"
                                        :class="{ 'show active': this.activeTab === 'formacion' }" id="nav-formacion"
                                        role="tabpanel" aria-labelledby="nav-formacion-tab"
                                        v-if="this.mostrarformacionacademica">
                                        <form class="row g-4 mt-5">
                                            <h3>Formación Académica</h3>
                                            <!-- Estudios de bachiller culminados -->
                                            <div class="col-sm-12 col-md-6 col-xl-12" v-if="this.sidatos">
                                                <label class="text-dark" for="">¿Ha culminado sus estudios de bachiller?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.estudios_bachiller_culminados"
                                                        v-on:change="Titulobachi"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Estudios BACHILLER -->
                                            <div class="col-12" v-if="this.bachiler">
                                                <h5>Estudios de bachiller</h5>
                                                <p class="text-danger text-justify" v-if="this.modoedition">Los datos de la institución, especialidad, título y fecha de graduación son los que usted llenó en la ficha socioeconómica (SIAD).
                                                 Si los datos no le cargan puede volver a iniciar sesión nuevamente. Si el problema persiste ingrese a su página del <a href="http://sistemas.utelvt.edu.ec/socioeconomica/login.aspx" target="_blank"> SIAD </a>y verfique su información</p>
                                                <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.tituloBachillerEditIndex }}</h5>
                                                <p class="text-danger text-justify" v-if="this.modoedition">Para poder editar estos campos debe editarlos directamente en el SIAD</p>
                                            </div>
                                            <!-- Titulo bachiller -->
                                            <div class="col-6" v-if="this.bachiler">
                                                <label class="text-dark" for="">Título</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="titulo_bachiller_obtenido"
                                                        v-model="nuevoTituloBachiller.titulo_bachiller_obtenido" type="text"
                                                        placeholder="Ingrese el título de bachiller obtenido" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-user-graduate"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Institucion bachiller -->
                                            <div class="col-6" v-if="this.bachiler">
                                                <label class="text-dark" for="">Institución</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="institucion_bachiller"
                                                        v-model="nuevoTituloBachiller.institucion_bachiller" type="text"
                                                        placeholder="Ingrese la institución de donde obtuvo su título de bachiller" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-building"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Fecha de graduacion -->
                                            <div class="col-6" v-if="this.bachiler">
                                                <label class="text-dark" for="">Fecha de graduación</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="fecha_graduacion_bachiller" v-model="nuevoTituloBachiller.fecha_graduacion_bachiller"
                                                        type="date" :max="currentDate" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <!-- Especialidad bachiller -->
                                            <div class="col-6" v-if="this.bachiler">
                                                <label class="text-dark" for="">Especialidad</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="especialidad_bachiller" v-model="nuevoTituloBachiller.especialidad_bachiller" type="text"
                                                        placeholder="Ingrese la especialidad del título de bachiller" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-shapes"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Accion bachiller -->
                                            <div class="col-12 text-center" v-if="this.bachiler">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarTituloBachiller">
                                                    {{ tituloBachillerEditIndex !== null ? 'Editar título bachiller' : 'Agregar título bachiller' }}
                                                </button>
                                            </div>
                                             <!-- Estudios universitarios culminados -->
                                             <div class="col-sm-12 col-md-6 col-xl-12">
                                                <label class="text-dark" for="">¿Ha culminado sus estudios universitarios?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.estudios_universitarios_culminados"
                                                        v-on:change="Titulouni"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Estudios Universitarios -->
                                            <div class="col-12" v-if="this.univer">
                                                <h5>Estudios Universitarios</h5>
                                                <h5 v-if="this.modoedition">Modo Edición Activado: id: {{ this.tituloUniversitarioEditIndex }}</h5>
                                            </div>
                                            <!-- Titulo Universitario -->
                                            <div class="col-6" v-if="this.univer">
                                                <label class="text-dark" for="">Título</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="titulo_universitario_obtenido"
                                                        v-model="nuevoTituloUniversitario.titulo_universitario_obtenido" type="text"
                                                        placeholder="Ingrese el título universitario obtenido" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-user-graduate"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Institución Universitaria -->
                                            <div class="col-6" v-if="this.univer">
                                                <label class="text-dark" for="">Institución</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="institucion_universitaria"
                                                        v-model="nuevoTituloUniversitario.institucion_universitaria" type="text"
                                                        placeholder="Ingrese la institución universitaria" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-building"> </i></span>
                                                </div>
                                            </div>
                                            <!-- fecha de Graduacion -->
                                            <div class="col-6" v-if="this.univer">
                                                <label class="text-dark" for="">Fecha de graduación</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="fecha_graduacion" v-model="nuevoTituloUniversitario.fecha_graduacion"
                                                        type="date" :max="currentDate" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <!-- Especialidad Universitario -->
                                            <div class="col-6" v-if="this.univer">
                                                <label class="text-dark" for="">Especialidad</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="especialidad" v-model="nuevoTituloUniversitario.especialidad" type="text"
                                                        placeholder="Ingrese la especialidad del título universitario" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-shapes"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Acciones Universitario -->
                                            <div class="col-12 text-center" v-if="this.univer">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarTituloUniversitario">
                                                    {{ tituloUniversitarioEditIndex !== null ? 'Editar Título Universitario' : 'Agregar Título Universitario' }}
                                                </button>
                                            </div>
                                            <!-- Estudios de posgrado culminados -->
                                            <div class="col-sm-12 col-md-6 col-xl-12">
                                                <label class="text-dark" for="">¿Ha culminado sus estudios de posgrado?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.estudios_posgrado_culminados"
                                                        v-on:change="Posgra"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Estudios de Posgrados -->
                                            <div class="col-12" v-if="this.posgrado">
                                                <h5>Estudios Posgrados</h5>
                                                <h5 v-if="this.modoedition">Modo Edición Activado: id: {{ this.tituloPosgradoEditIndex }}</h5>
                                            </div>
                                            <!-- Titulos Posgrado -->
                                            <div class="col-6" v-if="this.posgrado">
                                                <label class="text-dark" for="">Título de posgrado</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="titulo_posgrado_obtenido"
                                                        v-model="nuevoTituloPosgrado.titulo_posgrado_obtenido" type="text"
                                                        placeholder="Ingrese el título de posgrado obtenido" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-user-graduate"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Institucion Posgrado -->
                                            <div class="col-6" v-if="this.posgrado">
                                                <label class="text-dark" for="">Institución</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="institucion_posgrado" v-model="nuevoTituloPosgrado.institucion_posgrado"
                                                        type="text" placeholder="Ingrese la institución del título de posgrado" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-building"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Fecha de graduacion de Posgrado -->
                                            <div class="col-6" v-if="this.posgrado">
                                                <label class="text-dark" for="">Fecha de graduación</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="fecha_graduacion_posgrado"
                                                        v-model="nuevoTituloPosgrado.fecha_graduacion_posgrado" type="date" :max="currentDate" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <!-- Especialidad Posgrado -->
                                            <div class="col-6" v-if="this.posgrado">
                                                <label class="text-dark" for="">Especialidad</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="especialidad_posgrado" v-model="nuevoTituloPosgrado.especialidad_posgrado"
                                                        type="text" placeholder="Ingrese la especialidad del título de posgrado" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-shapes"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Acciones Posgrado -->
                                            <div class="col-12 text-center" v-if="this.posgrado">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarTituloPosgrado">
                                                    {{ tituloPosgradoEditIndex !== null ? 'Editar Título de Posgrado' : 'Agregar Título de Posgrado' }}
                                                </button>
                                            </div>
                                            <!-- Titulos Bachiller Registrados Tabla-->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Títulos de bachiller registrados</h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Título</th>
                                                                <th scope="col">Institución</th>
                                                                <th scope="col">Fecha de graduación</th>
                                                                <th scope="col">Especialidad</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="titulo in titulosBachiller" :key="titulo.idformacion_academica">
                                                                <td class="text-dark">{{ titulo.idformacion_academica }}</td>
                                                                <td class="text-dark">{{ titulo.titulo_bachiller_obtenido }}</td>
                                                                <td class="text-dark">{{ titulo.institucion_bachiller }}</td>
                                                                <td class="text-dark">{{ titulo.fecha_graduacion_bachiller }}</td>
                                                                <td class="text-dark">{{ titulo.especialidad_bachiller }}</td>
                                                                <td>
                                                                    <!--<button class="btn1 btn-secondary1" type="button" @click="editarTituloBachiller(titulo.idformacion_academica)"><i class="fa-solid fa-edit"></i></button>-->
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarTituloBachiller(titulo.idformacion_academica)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Titulos Universitarios Registrados Tabla-->
                                            <div class="text-center rounded p-4">
                                                <div class="d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Títulos universitarios registrados</h5>
                                                </div>
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Título</th>
                                                                <th scope="col">Institución</th>
                                                                <th scope="col">Fecha de graduación</th>
                                                                <th scope="col">Especialidad</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="titulo in titulosUniversitarios" :key="titulo.idformacion_academica">
                                                                <td class="text-dark">{{ titulo.idformacion_academica }}</td>
                                                                <td class="text-dark">{{ titulo.titulo_universitario_obtenido }}</td>
                                                                <td class="text-dark">{{ titulo.institucion_universitaria }}</td>
                                                                <td class="text-dark">{{ titulo.fecha_graduacion }}</td>
                                                                <td class="text-dark">{{ titulo.especialidad }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarTituloUniversitario(titulo.idformacion_academica)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarTituloUniversitario(titulo.idformacion_academica)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Titulos de Posgrado Registrados Tabla -->
                                            <div class="text-center rounded p-4">
                                                <div class="d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Títulos de posgrado registrados</h5>
                                                </div>
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Título</th>
                                                                <th scope="col">Institución</th>
                                                                <th scope="col">Fecha de graduación</th>
                                                                <th scope="col">Especialidad</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="titulo in titulosPosgrado" :key="titulo.idformacion_academica">
                                                                <td class="text-dark">{{ titulo.idformacion_academica }}</td>
                                                                <td class="text-dark">{{ titulo.titulo_posgrado_obtenido }}</td>
                                                                <td class="text-dark">{{ titulo.institucion_posgrado }}</td>
                                                                <td class="text-dark">{{ titulo.fecha_graduacion_posgrado }}</td>
                                                                <td class="text-dark">{{ titulo.especialidad_posgrado }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarTituloPosgrado(titulo.idformacion_academica)"><i class="fa-solid fa-edit"></i></button>&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarTituloPosgrado(titulo.idformacion_academica)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                             <!-- Acciones -->
                                            <div class="col-6 col-xl-10 col-lg-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.regresar2"
                                                    @click="regresarADeclaracionPersonal">
                                                    Regresar
                                                </button>
                                                
                                            </div>
                                            
                                            <div class="col-6 col-xl-10 col-lg-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.modoedit8"
                                                    @click="guardarFormacionAcademica">
                                                    Siguiente Apartado
                                                </button>
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing8"
                                                    @click="editarFormacionAcademica">
                                                    Siguiente Apartado
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- Experiencia Profesional -->
                                    <div class="tab-pane fade"
                                        :class="{ 'show active': this.activeTab === 'experiencia' }"
                                        id="nav-experiencia" role="tabpanel" aria-labelledby="nav-experiencia-tab"
                                        v-if="this.mostrarexperienciasprofesionales">
                                        <form class="row g-4 mt-5">
                                            <h3>Experiencias Profesionales</h3>
                                            <!-- ¿Ha trabajado en alguna empresa/institución? -->
                                            <div class="col-sm-12 col-md-6 col-xl-12">
                                                <label class="text-dark" for="">¿Ha trabajado en alguna empresa/institución?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.cargos_desempenados" v-on:change="Cargos"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-users"> </i></span>
                                                </div>
                                            </div>
                                            
                                            <!-- Empresas Institución -->
                                            <div class="col-12" v-if="this.cargos">
                                                <h5>Empresas</h5>
                                                <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.cargosEmpresasEditIndex }}</h5>
                                            </div>
                                            <!-- Empresa/Institución -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.cargos">
                                                <label class="text-dark" for="">Empresa/Institución</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="empresa_institucion" v-model="nuevocargosEmpresas.empresa_institucion"
                                                        type="text"
                                                        placeholder="Ingrese el nombre de la empresa/institución" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-hotel"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Fecha de inicio -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.cargos">
                                                <label class="text-dark" for="">Fecha de inicio de labores en la empresa/institución</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="fecha_inicio_empresa" v-model="nuevocargosEmpresas.fecha_inicio_empresa"
                                                        type="date" :max="currentDate" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <!-- Sigue trabajando actualmente -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.cargos">
                                                <label class="text-dark" for="">¿Sigue trabajando actualmente en la empresa/institución?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.fechacargos"
                                                        v-on:change="FechaCarg"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-users"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Fecha fin -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.cargos">
                                                <div  v-if="this.trabajonuevo">
                                                    <label class="text-dark">{{ fechaFinLabel }}</label>
                                                    <div class="input-group-icon">
                                                        <input class="form-control1 input-box form-voyage-control1"
                                                            id="fecha_fin_empresa" v-model="nuevocargosEmpresas.fecha_fin_empresa"
                                                            type="date" :disabled="fechaFinDisabled" :max="currentDate" /><span
                                                            class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                                class="fas fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Cargo desempeñado -->
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.cargos">
                                                <label class="text-dark" for="">Cargo desempeñado en la empresa/institución</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="cargo_desempenado_empresa"
                                                        v-model="nuevocargosEmpresas.cargo_desempenado_empresa" type="text"
                                                        placeholder="Ingrese el cargo desempeñado en la empresa/institución" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-user-cog"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Descripción de las funciones -->
                                            <div class="col-12" v-if="this.cargos">
                                                <label class="text-dark" for="">Descripción de las funciones realizadas en la empresa/institución</label>
                                                <div class="input-group-icon">
                                                    <textarea class="form-control1 input-box form-voyage-control1" rows="4"
                                                        id="descripcion_funciones_empresa"
                                                        v-model="nuevocargosEmpresas.descripcion_funciones_empresa"
                                                        placeholder="Describa las funciones realizadas en la empresa/institución" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-user-edit"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Descripción de los logros -->
                                            <div class="col-12" v-if="this.cargos">
                                                <label class="text-dark" for="">Descripción de los logros/resultados obtenidos en la empresa/institución</label>
                                                <div class="input-group-icon">
                                                    <textarea class="form-control1 input-box form-voyage-control1" rows="4"
                                                        id="logros_resultados_empresa"
                                                        v-model="nuevocargosEmpresas.logros_resultados_empresa" type="text"
                                                        placeholder="Describa los logros/resultados obtenidos en la empresa/institución" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-medal"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Acciones Empresa -->
                                            <div class="col-12 text-center" v-if="this.cargos">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarEmpresa">
                                                    {{ cargosEmpresasEditIndex !== null ? 'Editar Empresa' : 'Agregar Empresa' }}
                                                </button>
                                            </div>
                                            <!-- ¿Ha realizado prácticas profesionales en alguna empresa/intitución? -->
                                            <div class="col-sm-12 col-md-6 col-xl-12">
                                                <label class="text-dark" for="">¿Ha realizado prácticas profesionales en alguna empresa/intitución?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.practicas_profesionales"
                                                        v-on:change="Practicas"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-users"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Prácticas Preprofesionales -->
                                            <div class="col-12" v-if="this.practica">
                                                <h5>Prácticas Preprofesionales</h5>
                                                <h5 v-if="this.modoedition">Modo Edición Activado: id: {{ this.cargosPasantiasEditIndex }}</h5>
                                            </div>
                                            <!-- Empresa/Institución -->
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.practica">
                                                <label class="text-dark" for="">Empresa/Institución</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="empresa_institucion_practicas" v-model="nuevocargosPasantias.empresa_institucion_practicas"
                                                        type="text"
                                                        placeholder="Ingrese el nombre de la Empresa/Institución donde realizó sus prácticas" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-hotel"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Fecha de inicio -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.practica">
                                                <label class="text-dark" for="">Fecha de inicio de las prácticas</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="fecha_inicio_practicas"
                                                        v-model="nuevocargosPasantias.fecha_inicio_practicas" type="date" :max="currentDate" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <!-- Fecha de finalización -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.practica">
                                                <label class="text-dark" for="">Fecha de finalización las prácticas</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="fecha_fin_practicas" v-model="nuevocargosPasantias.fecha_fin_practicas"
                                                        type="date" :max="currentDate" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <!-- Área de trabajo -->
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.practica">
                                                <label class="text-dark" for="">Área de trabajo</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="area_trabajo_practicas"
                                                        v-model="nuevocargosPasantias.area_trabajo_practicas" type="text"
                                                        placeholder="Ingrese el área de trabajo" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-building"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Descripción de las funciones -->
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.practica">
                                                <label class="text-dark" for="">Descripción de las funciones realizadas en sus prácticas</label>
                                                <div class="input-group-icon">
                                                    <textarea class="form-control1 input-box form-voyage-control1" rows="4"
                                                        id="descripcion_funciones_practicas"
                                                        v-model="nuevocargosPasantias.descripcion_funciones_practicas"
                                                        placeholder="Describa las funciones realizadas en sus prácticas" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-pen"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Acciones Prácticas -->
                                            <div class="col-12 text-center" v-if="this.practica">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarPracticas">
                                                    {{ cargosPasantiasEditIndex !== null ? 'Editar Prácticas' : 'Agregar Prácticas' }}
                                                </button>
                                            </div>
                                            <!-- Experiencias En Empresas Registrados Tabla-->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Experiencias en empresas/instituciones registradas</h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Empresa</th>
                                                                <th scope="col">Fecha Inicio</th>
                                                                <th scope="col">Fecha Fin</th>
                                                                <th scope="col">Cargo</th>
                                                                <th scope="col">Descripción de Funciones</th>
                                                                <th scope="col">Logros</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="cargempre in cargosEmpresas" :key="cargempre.idexperiencias_profesionales">
                                                                <td class="text-dark">{{ cargempre.idexperiencias_profesionales }}</td>
                                                                <td class="text-dark">{{ cargempre.empresa_institucion }}</td>
                                                                <td class="text-dark">{{ cargempre.fecha_inicio_empresa }}</td>
                                                                <td class="text-dark">{{ cargempre.fecha_fin_empresa }}</td>
                                                                <td class="text-dark">{{ cargempre.cargo_desempenado_empresa }}</td>
                                                                <td class="text-dark">{{ cargempre.descripcion_funciones_empresa }}</td>
                                                                <td class="text-dark">{{ cargempre.logros_resultados_empresa }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionEmpresa(cargempre.idexperiencias_profesionales)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionEmpresa(cargempre.idexperiencias_profesionales)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Prácticas Profesionales Registradas Tabla-->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Prácticas realizadas en empresas/instituciones registradas</h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Empresa</th>
                                                                <th scope="col">Fecha Inicio</th>
                                                                <th scope="col">Fecha Fin</th>
                                                                <th scope="col">Area de Trabajo</th>
                                                                <th scope="col">Descripción de Funciones</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="cargpasantia in cargosPasantias" :key="cargpasantia.idexperiencias_profesionales">
                                                                <td class="text-dark">{{ cargpasantia.idexperiencias_profesionales }}</td>
                                                                <td class="text-dark">{{ cargpasantia.empresa_institucion_practicas }}</td>
                                                                <td class="text-dark">{{ cargpasantia.fecha_inicio_practicas }}</td>
                                                                <td class="text-dark">{{ cargpasantia.fecha_fin_practicas }}</td>
                                                                <td class="text-dark">{{ cargpasantia.area_trabajo_practicas }}</td>
                                                                <td class="text-dark">{{ cargpasantia.descripcion_funciones_practicas }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionPracticas(cargpasantia.idexperiencias_profesionales)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionPracticas(cargpasantia.idexperiencias_profesionales)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Acciones-->
                                            <div class="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.regresar3"
                                                    @click="regresarAFormacionAcademica">
                                                    Regresar
                                                </button>
                                                
                                            </div>
                                            <div class="col-6 col-xl-10 col-lg-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.modoedit1"
                                                    @click="guardaExperiencia">
                                                    Siguiente Apartado
                                                </button>
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing1"
                                                    @click="editarExperiencia">
                                                    Siguiente Apartado
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- Investigacion y Publicaciones -->
                                    <div class="tab-pane fade"
                                        :class="{ 'show active': this.activeTab === 'investigacion' }"
                                        id="nav-investiga" role="tabpanel" aria-labelledby="nav-investiga-tab"
                                        v-if="this.mostrarinvestigacionpublicaciones">
                                        <form class="row g-4 mt-5">
                                            <h3>Publicaciones</h3>
                                            <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.publicacionesEditIndex }}</h5>
                                            <!-- ¿Ha realizado algúna publicación? -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">¿Ha realizado alguna publicación?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.publicaciones"
                                                        v-on:change="Investigaciones"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-fax"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Tipo de publicación -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.investiga">
                                                <label class="text-dark" for="">Tipo de publicación</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevaspublicaciones.publicacion_tipo"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione el tipo de publicación
                                                        </option>
                                                        <option value="Libro">Libro</option>
                                                        <option value="Capítulo">Capítulo</option>
                                                        <option value="Blog">Blog</option>
                                                        <option value="Reseña">Reseña</option>
                                                        <option value="Material didáctico">Material didáctico</option>
                                                        <option value="Prototipos">Prototipos</option>
                                                        <option value="Mod. Patentes">Mod. Patentes</option>
                                                        <option value="Artículo Científico">Artículo científico</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-print"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Título de la publicación -->
                                            <div class="col-6" v-if="this.investiga">
                                                <label class="text-dark" for="">Título de la publicación</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="titulo" v-model="nuevaspublicaciones.publicacion_titulo" type="text"
                                                        placeholder="Ingrese el título de su publicación" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Link de la publicación -->
                                            <div class="col-6" v-if="this.investiga">
                                                <label class="text-dark" for="">Link de la publicación</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1" @input="validarURL"
                                                        id="titulo" v-model="nuevaspublicaciones.link_publicación" type="text"
                                                        placeholder="Ingrese el Link de su publicación" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book"> </i></span>
                                                </div>
                                                <p v-if="!isValidURL && nuevaspublicaciones.link_publicación" class="text-danger">Por favor, ingrese un URL válido.</p>
                                            </div>
                                            <!-- ponencias -->
                                            <div class="col-6" v-if="this.investiga">
                                                <label class="text-dark" for="">¿Su publicacion ha estado en ponencias, congresos o eventos científicos?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevaspublicaciones.congreso_evento"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-bullhorn"> </i></span>
                                                    
                                                </div>
                                            </div>
                                            <!-- Acciones -->
                                            <div class="col-4" v-if="this.investiga">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarPublicaciones">
                                                    {{ publicacionesEditIndex !== null ? 'Editar Publicaciones' : 'Agregar Publicaciones' }}
                                                </button>
                                            </div>
                                            <!-- Publicaciones Registradas Tabla-->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Publicaciones registradas</h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Tipo de publicación</th>
                                                                <th scope="col">Título de la publicación</th>
                                                                <th scope="col">Link</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="publicacionfor in publicacionesarray" :key="publicacionfor.idinvestigacion_publicaciones">
                                                                <td class="text-dark">{{ publicacionfor.idinvestigacion_publicaciones }}</td>
                                                                <td class="text-dark">{{ publicacionfor.publicacion_tipo }}</td>
                                                                <td class="text-dark">{{ publicacionfor.publicacion_titulo }}</td>
                                                                <td class="text-dark">{{ publicacionfor.link_publicación }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionPublicaciones(publicacionfor.idinvestigacion_publicaciones)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionPublicaciones(publicacionfor.idinvestigacion_publicaciones)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Acciones -->
                                            <div class="col-6 col-xl-10 col-lg-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.regresar4"
                                                    @click="regresarAExperiencia">
                                                    Regresar
                                                </button>
                                                
                                            </div>
                                            <div class="col-6 col-xl-10 col-lg-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.modoedit2"
                                                    @click="guardaInvestigacion">
                                                    Guardar y Continuar
                                                </button>
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing2"
                                                    @click="editarInvestigacion">
                                                    Actualizar Y Continuar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- Idiomas -->
                                    <div class="tab-pane fade" :class="{ 'show active': this.activeTab === 'idioma' }"
                                        id="nav-idioma" role="tabpanel" aria-labelledby="nav-idioma-tab"
                                        v-if="this.mostraridiomas">
                                        <form class="row g-4 mt-5">
                                            <h3>Idiomas</h3>
                                            <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.idiomasEditIndex }}</h5>
                                            <!-- Idiomas -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Idiomas</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevosidiomas.idioma"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione el idioma que domina
                                                        </option>
                                                        <option value="Achuar">Achuar</option>
                                                        <option value="Alemán">Alemán</option>
                                                        <option value="A’ingae">A’ingae</option>
                                                        <option value="Andoa">Andoa</option>
                                                        <option value="Árabe">Árabe</option>
                                                        <option value="Awapit">Awapit</option>
                                                        <option value="Baaikoka">Baaikoka</option>
                                                        <option value="Cha’palaa">Cha’palaa</option>
                                                        <option value="Chino Madarín">Chino Madarín</option>
                                                        <option value="Español">Español</option>
                                                        <option value="Francés">Francés</option>
                                                        <option value="Griego">Griego</option>
                                                        <option value="Hebreo">Hebreo</option>
                                                        <option value="Inglés">Inglés</option>
                                                        <option value="Italiano">Italiano</option>
                                                        <option value="Japonés">Japonés</option>
                                                        <option value="Kayapi">Kayapi</option>
                                                        <option value="Letón">Letón</option>
                                                        <option value="Lituano">Lituano</option>
                                                        <option value="Maltés">Maltés</option>
                                                        <option value="Neerlandés">Neerlandés</option>
                                                        <option value="Noruego">Noruego</option>
                                                        <option value="Paaicoca">Paaicoca</option>
                                                        <option value="Polaco">Polaco</option>
                                                        <option value="Portugués">Portugués</option>
                                                        <option value="Quichua ">Quichua</option>
                                                        <option value="Rumano">Rumano</option>
                                                        <option value="Ruso">Ruso</option>
                                                        <option value="Sapara">Sapara</option>
                                                        <option value="Señas">Señas</option>
                                                        <option value="Serbio">Serbio</option>
                                                        <option value="Shuar-Chicham">Shuar-Chicham</option>
                                                        <option value="Siapede">Siapede</option>
                                                        <option value="Sueco">Sueco</option>
                                                        <option value="Tagalo">Tagalo</option>
                                                        <option value="Tailandés">Tailandés</option>
                                                        <option value="Thai">Thai</option>
                                                        <option value="Tsafiqui">Tsafiqui</option>
                                                        <option value="Turco">Turco</option>
                                                        <option value="Ucraniano">Ucraniano</option>
                                                        <option value="Vietnamita">Vietnamita</option>
                                                        <option value="Waho">Waho</option>
                                                        <option value="Wahorani">Wahorani</option>
                                                        <option value="Waotedeo - Huaotedeo">Waotedeo - Huaotedeo</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-language"> </i></span>
                                                </div>
                                            </div>
                                             <!-- Nivel de comprensión auditiva -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Nivel de comprensión auditiva</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevosidiomas.comprension_auditiva"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>Seleccione el nivel de comprensión auditiva del idioma</option>
                                                        <option value="A1 (Principiante)">A1 (Principiante)</option>
                                                        <option value="A2 (Básico)">A2 (Básico)</option>
                                                        <option value="B1 (Pre-intermedio)">B1 (Pre-intermedio)</option>
                                                        <option value="B2 (Intermedio)">B2 (Intermedio)</option>
                                                        <option value="C1 (Intermedio-Alto)">C1 (Intermedio-Alto)</option>
                                                        <option value="C2 (Avanzado)">C2 (Avanzado)</option>
                                                        <option value="Nativo">Nativo</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-chart-line"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Nivel de comprensión de lectura -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Nivel de comprensión de lectura</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevosidiomas.comprension_lectura"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>Seleccione el nivel de comprensión de lectura del idioma</option>
                                                        <option value="A1 (Principiante)">A1 (Principiante)</option>
                                                        <option value="A2 (Básico)">A2 (Básico)</option>
                                                        <option value="B1 (Pre-intermedio)">B1 (Pre-intermedio)</option>
                                                        <option value="B2 (Intermedio)">B2 (Intermedio)</option>
                                                        <option value="C1 (Intermedio-Alto)">C1 (Intermedio-Alto)</option>
                                                        <option value="C2 (Avanzado)">C2 (Avanzado)</option>
                                                        <option value="Nativo">Nativo</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-chart-line"> </i></span>
                                                </div>
                                            </div>
                                             <!-- Nivel de interacción oral -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Nivel de interacción oral</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevosidiomas.interaccion_oral"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>Seleccione el nivel de interacción oral del idioma</option>
                                                        <option value="A1 (Principiante)">A1 (Principiante)</option>
                                                        <option value="A2 (Básico)">A2 (Básico)</option>
                                                        <option value="B1 (Pre-intermedio)">B1 (Pre-intermedio)</option>
                                                        <option value="B2 (Intermedio)">B2 (Intermedio)</option>
                                                        <option value="C1 (Intermedio-Alto)">C1 (Intermedio-Alto)</option>
                                                        <option value="C2 (Avanzado)">C2 (Avanzado)</option>
                                                        <option value="Nativo">Nativo</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-chart-line"> </i></span>
                                                </div>
                                            </div>
                                             <!-- Nivel de expresión oral -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Nivel de expresión oral</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevosidiomas.expresion_oral"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>Seleccione el nivel de expresión oral del idioma</option>
                                                        <option value="A1 (Principiante)">A1 (Principiante)</option>
                                                        <option value="A2 (Básico)">A2 (Básico)</option>
                                                        <option value="B1 (Pre-intermedio)">B1 (Pre-intermedio)</option>
                                                        <option value="B2 (Intermedio)">B2 (Intermedio)</option>
                                                        <option value="C1 (Intermedio-Alto)">C1 (Intermedio-Alto)</option>
                                                        <option value="C2 (Avanzado)">C2 (Avanzado)</option>
                                                        <option value="Nativo">Nativo</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-chart-line"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Nivel de expresión escrita -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Nivel de expresión escrita</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevosidiomas.expresion_escrita"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>Seleccione el nivel de expresión escrita del idioma que selecciono</option>
                                                        <option value="A1 (Principiante)">A1 (Principiante)</option>
                                                        <option value="A2 (Básico)">A2 (Básico)</option>
                                                        <option value="B1 (Pre-intermedio)">B1 (Pre-intermedio)</option>
                                                        <option value="B2 (Intermedio)">B2 (Intermedio)</option>
                                                        <option value="C1 (Intermedio-Alto)">C1 (Intermedio-Alto)</option>
                                                        <option value="C2 (Avanzado)">C2 (Avanzado)</option>
                                                        <option value="Nativo">Nativo</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-chart-line"> </i></span>
                                                </div>
                                            </div>
                                            <!-- ¿Posee un certificado del idioma? -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">¿Posee un certificado del idioma?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevosidiomas.certificado"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-print"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Subir certificado -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="nuevosidiomas.certificado === 'Si'">
                                                <div class="input-group-icon">
                                                    <label for="archivoCertificado">Subir certificado (PDF):</label>
                                                    <input type="file" id="archivoCertificado"  class="form-control1 input-box" @change="handleFileUpload" accept=".pdf">
                                                </div>
                                            </div>
                                            <!-- Acciones -->
                                            <div class="col-4">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarIdiomas">
                                                    {{ idiomasEditIndex !== null ? 'Editar Idioma' : 'Agregar Idioma' }}
                                                </button>
                                            </div>
                                            <!-- Idiomas Registrados -->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Idiomas Registrados </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Idioma</th>
                                                                <th scope="col">Comprensión Auditiva</th>
                                                                <th scope="col">Comprensión de Lectura</th>
                                                                <th scope="col">Interacción Oral</th>
                                                                <th scope="col">Expresión Oral</th>
                                                                <th scope="col">Expresión Escrita</th>
                                                                <th scope="col">Certificado</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="idiomafor in idiomasarray" :key="idiomafor.idlenguaje">
                                                                <td class="text-dark">{{ idiomafor.idlenguaje }}</td>
                                                                <td class="text-dark">{{ idiomafor.idioma }}</td>
                                                                <td class="text-dark">{{ idiomafor.comprension_auditiva }}</td>
                                                                <td class="text-dark">{{ idiomafor.comprension_lectura }}</td>
                                                                <td class="text-dark">{{ idiomafor.interaccion_oral }}</td>
                                                                <td class="text-dark">{{ idiomafor.expresion_oral }}</td>
                                                                <td class="text-dark">{{ idiomafor.expresion_escrita }}</td>
                                                                <td class="text-dark">{{ idiomafor.certificado }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionIdiomas(idiomafor.idlenguaje)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionIdiomas(idiomafor.idlenguaje)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Acciones -->
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.regresar5"
                                                    @click="regresarAInvestigacion">
                                                    Regresar
                                                </button>
                                                
                                            </div>
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.modoedit3"
                                                    @click="guardaIdiomas">
                                                    Siguiente Apartado
                                                </button>
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing3"
                                                    @click="editarIdiomas">
                                                    Siguiente Apartado
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- Habilidades -->
                                    <div class="tab-pane fade"
                                        :class="{ 'show active': this.activeTab === 'habilidades' }"
                                        id="nav-habilidades" role="tabpanel" aria-labelledby="nav-habilidades-tab"
                                        v-if="this.mostrarsw">
                                        <form class="row g-4 mt-5">
                                            <h3>Habilidades </h3>
                                            
                                            <!-- Habilidades comunicativas-->
                                            <div class="col-sm-12 col-md-12 col-xl-12">
                                                <label class="text-dark" for="">¿Posee habilidades comunicativas?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.habi_comunicacion"
                                                        v-on:change="ComunHabi"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            
                                            <!-- Habilidades Comunicativas-->
                                            <div class="col-12" v-if="this.comunicativas">
                                                <h5>Habilidades Comunicativas</h5>
                                                <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.habilidades_comunicativas_EditIndex }}</h5>
                                            </div>
                                            <!-- Selección Habilidades Comunicativas-->
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.comunicativas">
                                                <label class="text-dark" for="">Nombre de la habilidad comunicativa</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevashabilidades_comunicativas.habilidades_comunicativas"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione la habilidad comunicativa que posee 
                                                        </option>
                                                        <option value="Tratar a públicos en general">Tratar a públicos en general</option>
                                                        <option value="Expresar ideas con claridad">Expresar ideas con claridad</option>
                                                        <option value="Empatizar con clientes">Empatizar con clientes</option>
                                                        <option value="Tener una comunicación interpersonal clara">Tener una comunicación interpersonal clara</option>
                                                        <option value="Manejar información confidencial">Manejar información confidencial</option>
                                                        <option value="Redactar en inglés">Redactar en inglés</option>
                                                        <option value="Hablar en público">Hablar en público</option>
                                                        <option value="Persuasión">Persuasión</option>
                                                        <option value="Negociación">Negociación</option>
                                                        <option value="Otro">Otro</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            <!--Descripción Habilidades Comunicativas-->
                                                <div class="col-12" v-if="this.comunicativas">
                                                    <label class="text-dark" for="">Descripción de la habilidad comunicativa</label>
                                                    <div class="input-group-icon">
                                                        
                                                        <textarea class="form-control1 input-box form-voyage-control1" rows="4"
                                                            id="descripcion_habilidades_comunicativas" v-model="nuevashabilidades_comunicativas.descripcion_habilidades_comunicativas"
                                                            type="text" placeholder="Describa la habilidad comunicativa (Máximo 5 palabras por línea y máximo 5 líneas)" /><span
                                                            class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                                class="fas fa-shapes"> </i></span>
                                                    </div>
                                                
                                                </div>        
                                            <!-- Acciones Habilidades Comunicativas -->
                                            <div class="col-12 text-center" v-if="this.comunicativas">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarHabilidadesComunicativas">
                                                    {{ habilidades_comunicativas_EditIndex !== null ? 'Editar Habilidad' : 'Agregar Habilidad' }}
                                                </button>
                                            </div>
                                            <!-- Habilidades Creativas-->
                                            <div class="col-sm-12 col-md-6 col-xl-12">
                                                <label class="text-dark" for="">¿Posee habilidades creativas?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.habi_creacion"
                                                        v-on:change="CreaHabi"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Selección Habilidades Creativa-->
                                            <div class="col-12" v-if="this.creativas">
                                                <h5>Habilidades creativas</h5>
                                                <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.habilidades_creativas_EditIndex }}</h5>
                                            </div>
                                            <!-- Selección Habilidades Creativa-->
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.creativas">
                                                <label class="text-dark" for="">Nombre de la habilidad creativa</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevashabilidades_creativas.habilidades_creativas"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione la habilidad creativa que posee 
                                                        </option>
                                                        <option value="Fotografía">Fotografía</option>
                                                        <option value="Iluminación">Iluminación</option>
                                                        <option value="Artes Plásticas">Artes Plásticas</option>
                                                        <option value="Retoque fotográfico y maquetación">Retoque fotográfico y maquetación</option>
                                                        <option value="Manipulación de imagen digital">Manipulación de imagen digital</option>
                                                        <option value="Sublimación">Sublimación</option>
                                                        <option value="Impresión DGT">Impresión DGT</option>
                                                        <option value="Gestión de proveedores de impresión y suministro">Gestión de proveedores de impresión y suministro</option>
                                                        <option value="Otro">Otro</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div> 
                                            <!--Descripción Habilidades Creativas-->       
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.creativas">
                                                    <label class="text-dark" for="">Descripción de la habilidad comunicativa</label>
                                                    <div class="input-group-icon">
                                                        
                                                        <textarea class="form-control1 input-box form-voyage-control1" rows="4"
                                                            id="descripcion_habilidades_creativas" v-model="nuevashabilidades_creativas.descripcion_habilidades_creativas"
                                                            type="text" placeholder="Describa la habilidad creativa (Máximo 5 palabras por línea y máximo 5 líneas)" /><span
                                                            class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                                class="fas fa-shapes"> </i></span>
                                                    </div>
                                            </div>
                                            <!-- Acciones Habilidades Creativas -->
                                            <div class="col-12 text-center" v-if="this.creativas">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarHabilidadesCreativas">
                                                    {{ habilidades_creativas_EditIndex !== null ? 'Editar Habilidad' : 'Agregar Habilidad' }}
                                                </button>
                                            </div>
                                            <!-- Habilidades Liderazgo-->
                                            <div class="col-sm-12 col-md-12 col-xl-12">
                                                <label class="text-dark" for="">¿Posee habilidades de liderazgo?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.habi_liderazgo"
                                                        v-on:change="LideHabi"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Selección Habilidades Liderazgo-->
                                            <div class="col-12" v-if="this.liderazgo">
                                                <h5>Habilidades de liderazgo</h5>
                                                <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.habilidades_liderazgo_EditIndex }}</h5>
                                            </div>
                                            <!-- Selección Habilidades Liderazgo-->
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.liderazgo">
                                                <label class="text-dark" for="">Nombre de la habilidad de liderazgo</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevashabilidades_liderazgo.habilidades_liderazgo"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione la habilidad de liderazgo que posee 
                                                        </option>
                                                        <option value="Dirigir capital humano">Dirigir capital humano</option>
                                                        <option value="Resolución de problemas bajo presión">Resolución de problemas bajo presión</option>
                                                        <option value="Trabajo individual y en equipo">Trabajo individual y en equipo</option>
                                                        <option value="Capacidad de síntesis y organización, alto grado de autonomía">Capacidad de síntesis y organización, alto grado de autonomía</option>
                                                        <option value="Dinamismo y creatividad">Dinamismo y creatividad</option>
                                                        <option value="Enfoque en los objetivos">Enfoque en los objetivos</option>
                                                        <option value="Eficacia en la solución de problemas">Eficacia en la solución de problemas</option>
                                                        <option value="Capacidad de liderazgo">Capacidad de liderazgo</option>
                                                        <option value="Constante y perseverante">Constante y perseverante</option>
                                                        <option value="Innovador(a)">Innovador(a)</option>
                                                        <option value="Emprendedor(a) y con iniciativa">Emprendedor(a) y con iniciativa</option>
                                                        <option value="Otro">Otro</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div> 
                                            <!--Descripción Habilidades Liderazgo-->       
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.liderazgo">
                                                    <label class="text-dark" for="">Descripción de la habilidad de liderazgo</label>
                                                    <div class="input-group-icon">
                                                        
                                                        <textarea class="form-control1 input-box form-voyage-control1" rows="4"
                                                            id="descripcion_habilidades_liderazgo" v-model="nuevashabilidades_liderazgo.descripcion_habilidades_liderazgo"
                                                            type="text" placeholder="Describa la habilidad de liderazgo (Máximo 5 palabras por línea y máximo 5 líneas)" /><span
                                                            class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                                class="fas fa-shapes"> </i></span>
                                                    </div>
                                            </div>
                                            <!-- Acciones Habilidades Liderazgo -->
                                            <div class="col-12 text-center" v-if="this.liderazgo">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarHabilidadesLiderazgo">
                                                    {{ habilidades_liderazgo_EditIndex !== null ? 'Editar Habilidad' : 'Agregar Habilidad' }}
                                                </button>
                                            </div>
                                            <!-- Habilidades Informaticas Cv-->
                                            <div class="col-sm-12 col-md-12 col-xl-12">
                                                <label class="text-dark" for="">¿Posee habilidades informáticas?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.habi_informaticos_cv"
                                                        v-on:change="InfoHabi"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Selección Habilidades Informaticas-->
                                            <div class="col-12" v-if="this.informaticas_cv">
                                                <h5>Habilidades informaticas</h5>
                                                <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.habilidades_informaticas_cv_EditIndex }}</h5>
                                            </div>
                                            <!-- Selección Habilidades Informaticas-->
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.informaticas_cv">
                                                <label class="text-dark" for="">Nombre de la habilidad informática</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevashabilidades_informaticas_cv.habilidades_informaticas_cv"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione la habilidad informática que posee 
                                                        </option>
                                                        <option value="Ofimática (Correo electrónico, procesadores de texto, hojas de cálculo…etc.)">Ofimática (Correo electrónico, procesadores de texto, hojas de cálculo…etc.)</option>
                                                        <option value="Bases de Datos (Oracle, Datawarehouse, Server, Microsoft Access)">Bases de Datos (Oracle, Datawarehouse, Server, Microsoft Access)</option>
                                                        <option value="Diseño (Dreamweaver, Adobe Flash, Photoshop, QuarkXpress, Adobe InDesign, Adobe Illustrator, o Premiere Pro, Adobe Flash)">Diseño (Dreamweaver, Adobe Flash, Photoshop, QuarkXpress, Adobe InDesign, Adobe Illustrator, o Premiere Pro, Adobe Flash)</option>
                                                        <option value="Lenguajes de programación (Java, JavaScript, Python, C#, C++, etc)">Lenguajes de programación (Java, JavaScript, Python, C#, C++, etc)</option>
                                                        <option value="Internet (SEO, SEM, WordPress, Blogger, Redes Sociales, Google Analytics, Google Adword)">Internet (SEO, SEM, WordPress, Blogger, Redes Sociales, Google Analytics, Google Adword)</option>
                                                        <option value="Manejo de datos en la nube">Manejo de datos en la nube</option>
                                                        <option value="Inteligencia artificial">Inteligencia artificial</option>
                                                        <option value="Diseño UX (User Experience Design, en inglés)">Diseño UX (User Experience Design, en inglés)</option>
                                                        <option value="Otro">Otro</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div> 
                                            <!--Descripción Habilidades Informaticas-->       
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.informaticas_cv">
                                                    <label class="text-dark" for="">Descripción de la habilidad informática</label>
                                                    <div class="input-group-icon">
                                                        
                                                        <textarea class="form-control1 input-box form-voyage-control1" rows="4"
                                                            id="descripcion_habilidades_informaticas_cv" v-model="nuevashabilidades_informaticas_cv.descripcion_habilidades_informaticas_cv"
                                                            type="text" placeholder="Describa la habilidad informática (Máximo 5 palabras por línea y máximo 5 líneas)" /><span
                                                            class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                                class="fas fa-shapes"> </i></span>
                                                    </div>
                                            </div>
                                            <!-- Acciones Habilidades Informaticas -->
                                            <div class="col-12 text-center" v-if="this.informaticas_cv">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarHabilidadesInfor_cv">
                                                    {{ habilidades_informaticas_cv_EditIndex !== null ? 'Editar Habilidad' : 'Agregar Habilidad' }}
                                                </button>
                                            </div>
                                             <!-- Habilidades Oficios-->
                                             <div class="col-sm-12 col-md-12 col-xl-12">
                                                <label class="text-dark" for="">¿Realiza algún oficio/subactividad?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.habi_oficios"
                                                        v-on:change="OfiHabi"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Selección Habilidades Oficios-->
                                            <div class="col-12" v-if="this.oficios">
                                                <h5>Oficio/Subactividad</h5>
                                                <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.oficios_subactividades_EditIndex }}</h5>
                                            </div>
                                            <!-- Selección Habilidades Oficios-->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.oficios">
                                                <label class="text-dark" for="">Nombre del oficio/subactividad</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevasoficios_subactividades.oficios_subactividades"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione el oficios/subactividad que posee 
                                                        </option>
                                                        <option value="Albañil">Albañil</option>
                                                        <option value="Carpintero">Carpintero</option>
                                                        <option value="Cerrajero">Cerrajero</option>
                                                        <option value="Chofer">Chofer</option>
                                                        <option value="Colocador de cerámicas">Colocador de cerámicas</option>
                                                        <option value="Costurera/Sastre">Costurera/Sastre</option>
                                                        <option value="Digitadores">Digitadores</option>
                                                        <option value="Eléctricos">Eléctricos</option>
                                                        <option value="Estibador">Estibador</option>
                                                        <option value="Guardia">Guardia</option>
                                                        <option value="Guardias de seguridad">Guardias de seguridad</option>
                                                        <option value="Niñera">Niñera</option>
                                                        <option value="Operador de máquinaria pesada">Operador de máquinaria pesada</option>
                                                        <option value="Operario/Producción">Operario/Producción</option>
                                                        <option value="Panificador/Panadero">Panificador/Panadero</option>
                                                        <option value="Personal de limpieza">Personal de limpieza</option>
                                                        <option value="Pintor">Pintor</option>
                                                        <option value="Plomero/Gasfitero">Plomero/Gasfitero</option>
                                                        <option value="Polifuncionales">Polifuncionales</option>
                                                        <option value="Servicio Doméstico">Servicio Doméstico</option>
                                                        <option value="Soldador">Soldador</option>
                                                        <option value="Otro">Otro</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div> 
                                            <!--Descripción Habilidades Oficios-->       
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.oficios">
                                                    <label class="text-dark" for="">Descripción del oficio/subactividad</label>
                                                    <div class="input-group-icon">
                                                        
                                                        <textarea class="form-control1 input-box form-voyage-control1" rows="4"
                                                            id="descripcion_habilidades_liderazgo" v-model="nuevasoficios_subactividades.descripcion_oficios_subactividades"
                                                            type="text" placeholder="Describa el oficio/subactividad (Máximo 5 palabras por línea y máximo 5 líneas)" /><span
                                                            class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                                class="fas fa-shapes"> </i></span>
                                                    </div>
                                            </div>
                                            <!-- Acciones Habilidades Oficios -->
                                            <div class="col-12 text-center" v-if="this.oficios">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarHabilidadesOficios">
                                                    {{ oficios_subactividades_EditIndex !== null ? 'Editar Habilidad' : 'Agregar Habilidad' }}
                                                </button>
                                            </div>
                                            <!-- Habilidades Otros Oficios-->
                                            <div class="col-sm-12 col-md-12 col-xl-12">
                                                <label class="text-dark" for="">¿Tiene alguna otra habilidad, ya sea interpersonal o profesional?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.habi_otros_habi"
                                                        v-on:change="OtrosHabi"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-book-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Selección Habilidades Otros-->
                                            <div class="col-12" v-if="this.otro_habili">
                                                <h5>Habilidades Interpersonales</h5>
                                                <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.otro_habilidades_EditIndex }}</h5>
                                            </div>
                                            <!--Descripción Habilidades Otros-->       
                                            <div class="col-sm-12 col-md-12 col-xl-12" v-if="this.otro_habili">
                                                    <label class="text-dark" for="">Descripción de la otra habilidad interpersonal</label>
                                                    <div class="input-group-icon">
                                                        
                                                        <textarea class="form-control1 input-box form-voyage-control1" rows="4"
                                                            id="otro_habilidades" v-model="nuevasotro_habilidades.otro_habilidades"
                                                            type="text" placeholder="Describa la otra habilidad interpersonal (Máximo 5 palabras por línea y máximo 5 líneas)" /><span
                                                            class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                                class="fas fa-shapes"> </i></span>
                                                    </div>
                                            </div>
                                            <!-- Acciones Habilidades Otros -->
                                            <div class="col-12 text-center" v-if="this.otro_habili">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarHabilidadesOtros_Oficios">
                                                    {{ otro_habilidades_EditIndex !== null ? 'Editar Habilidad' : 'Agregar Habilidad' }}
                                                </button>
                                            </div>
                                            <!-- Habilidades Comunicativas Registradas -->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Habilidades Comunicativas Registradas </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Habilidad</th>
                                                                <th scope="col">Descipcion</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="habilidadfor in habilidades_comunicativas_array" :key="habilidadfor.idhabilidades_informaticas">
                                                                <td class="text-dark">{{ habilidadfor.idhabilidades_informaticas }}</td>
                                                                <td class="text-dark">{{ habilidadfor.habilidades_comunicativas }}</td>
                                                                <td class="text-dark">{{ habilidadfor.descripcion_habilidades_comunicativas }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionHabilidadesComunicativas(habilidadfor.idhabilidades_informaticas)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionHabilidadesComunicativas(habilidadfor.idhabilidades_informaticas)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Habilidades Creativas Registradas -->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Habilidades Creativas Registradas </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Habilidad</th>
                                                                <th scope="col">Descipcion</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="habilidadfor1 in habilidades_creativas_array" :key="habilidadfor1.idhabilidades_informaticas">
                                                                <td class="text-dark">{{ habilidadfor1.idhabilidades_informaticas }}</td>
                                                                <td class="text-dark">{{ habilidadfor1.habilidades_creativas }}</td>
                                                                <td class="text-dark">{{ habilidadfor1.descripcion_habilidades_creativas }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionHabilidadesCreativas(habilidadfor1.idhabilidades_informaticas)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionHabilidadesCreativas(habilidadfor1.idhabilidades_informaticas)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Habilidades Liderazgo Registradas -->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Habilidades de Liderazgo Registradas </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Habilidad</th>
                                                                <th scope="col">Descipcion</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="habilidadfor23 in habilidades_liderazgo_array" :key="habilidadfor23.idhabilidades_informaticas">
                                                                <td class="text-dark">{{ habilidadfor23.idhabilidades_informaticas }}</td>
                                                                <td class="text-dark">{{ habilidadfor23.habilidades_liderazgo }}</td>
                                                                <td class="text-dark">{{ habilidadfor23.descripcion_habilidades_liderazgo }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionHabilidadesLiderazgo(habilidadfor23.idhabilidades_informaticas)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionHabilidadesLiderazgo(habilidadfor23.idhabilidades_informaticas)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Habilidades Informáticas Registradas -->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Habilidades Informáticas Registradas </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Habilidad</th>
                                                                <th scope="col">Descipcion</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="habilidadfor2 in habilidades_informaticas_array" :key="habilidadfor2.idhabilidades_informaticas">
                                                                <td class="text-dark">{{ habilidadfor2.idhabilidades_informaticas }}</td>
                                                                <td class="text-dark">{{ habilidadfor2.habilidades_informaticas_cv }}</td>
                                                                <td class="text-dark">{{ habilidadfor2.descripcion_habilidades_informaticas_cv }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionHabilidadesInfor_cv(habilidadfor2.idhabilidades_informaticas)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionHabilidadesInfor_cv(habilidadfor2.idhabilidades_informaticas)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Habilidades Oficios Registradas -->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Oficios/Subactividades Registradas </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Habilidad</th>
                                                                <th scope="col">Descipcion</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="habilidadfor3 in oficios_subactividades_array" :key="habilidadfor3.idhabilidades_informaticas">
                                                                <td class="text-dark">{{ habilidadfor3.idhabilidades_informaticas }}</td>
                                                                <td class="text-dark">{{ habilidadfor3.oficios_subactividades }}</td>
                                                                <td class="text-dark">{{ habilidadfor3.descripcion_oficios_subactividades }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionHabilidadesOficios(habilidadfor3.idhabilidades_informaticas)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionHabilidadesOficios(habilidadfor3.idhabilidades_informaticas)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Habilidades Otros Registradas -->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Otras Habilidades Registradas </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Descipcion</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="habilidadfor4 in otro_habilidades_array" :key="habilidadfor4.idhabilidades_informaticas">
                                                                <td class="text-dark">{{ habilidadfor4.idhabilidades_informaticas }}</td>
                                                                <td class="text-dark">{{ habilidadfor4.otro_habilidades }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionHabilidadesOtros_Oficios(habilidadfor4.idhabilidades_informaticas)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionHabilidadesOtros_Oficios(habilidadfor4.idhabilidades_informaticas)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- Acciones -->
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.regresar6"
                                                    @click="regresarAIdiomas">
                                                    Regresar
                                                </button>
                                                
                                            </div>
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.modoedit4"
                                                    @click="guardaHabilidades">
                                                    Siguiente Apartado
                                                </button>
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing4"
                                                    @click="editarHabilidades">
                                                    Siguiente Apartado
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- Cursos o Capacitaciones -->
                                    <div class="tab-pane fade"
                                        :class="{ 'show active': this.activeTab === 'capacitaciones' }"
                                        id="nav-capacitaciones" role="tabpanel" aria-labelledby="nav-capacitaciones-tab"
                                        v-if="this.mostrarcapacitaciones">
                                        <form class="row g-4 mt-5">
                                            <h3>Cursos</h3>
                                            <!-- edicion -->
                                            <h5 v-if="this.modoedition">Modo Edición Activado: id: {{ this.curso_capacitacionEditIndex }}</h5>
                                            <div class="col-sm-12 col-md-12 col-xl-12">
                                                <label class="text-dark" for="">Nombre de la institución</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="intitucion_curso" v-model="nuevoscurso_capacitacion.intitucion_curso"
                                                        type="text" placeholder="Ingrese el nombre institución en dónde realizó el curso" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                            </div>
                                           
                                            <!-- Tipo de evento -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Tipo de evento del curso</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevoscurso_capacitacion.tipo_evento"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>Seleccione el tipo de evento del curso</option>
                                                        <option value="Conferencia">Conferencia</option>
                                                        <option value="Congreso">Congreso</option>
                                                        <option value="Diplomado">Diplomado</option>
                                                        <option value="Jornada">Jornada</option>
                                                        <option value="Panel">Panel</option>
                                                        <option value="Pasantía">Pasantía</option>
                                                        <option value="Seminario">Seminario</option>
                                                        <option value="Taller">Taller</option>
                                                        <option value="Visita de Observación">Visita de Observación</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-list-ol"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Area de Estudios -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Área de estudio del curso</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevoscurso_capacitacion.area_estudios"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>Seleccione el área de estudio del curso</option>
                                                        <option value="Administración/Oficina">Administración/Oficina</option>
                                                        <option value="Agricultura/Pesca/Ganadería">Agricultura/Pesca/Ganadería</option>
                                                        <option value="Arte/Diseño/Medios">Arte/Diseño/Medios</option>
                                                        <option value="Científico/Investigación">Científico/Investigación</option>
                                                        <option value="Dirección/Gerencia">Dirección/Gerencia</option>
                                                        <option value="Economía/Contabilidad">Economía/Contabilidad</option>
                                                        <option value="Eduación Básica/Cursos">Eduación Básica/Cursos</option>
                                                        <option value="Esducación/Universidad">Esducación/Universidad</option>
                                                        <option value="Entretenimiento/Deportes">Entretenimiento/Deportes</option>
                                                        <option value="Fabricación">Fabricación</option>
                                                        <option value="Finanzas/Banca">Finanzas/Banca</option>
                                                        <option value="Gobierno">Gobierno</option>
                                                        <option value="Hotelería/Turismo">Hotelería/Turismo</option>
                                                        <option value="Informática Hardware">Informática Hardware</option>
                                                        <option value="Informática Software">Informática Software</option>
                                                        <option value="Informática/Telecomunicaciones">Informática/Telecomunicaciones</option>
                                                        <option value="Ingeniería/Técnico">Ingeniería/Técnico</option>
                                                        <option value="Internet">Internet</option>
                                                        <option value="Legal/Asesoría">Legal/Asesoría</option>
                                                        <option value="Marketin/Ventas">Marketin/Ventas</option>
                                                        <option value="Materia Prima">Materia Prima</option>
                                                        <option value="Medicina/Salud">Medicina/Salud</option>
                                                        <option value="Talento Humano/Personal">Talento Humano/Personal</option>
                                                        <option value="Sin Área de Estudios">Sin Área de Estudios</option>
                                                        <option value="Ventas al Consumidor">Ventas al Consumidor</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-list-ol"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Nombre del Evento -->
                                            <div class="col-sm-12 col-md-12 col-xl-12">
                                                <label class="text-dark" for="">Nombre del evento</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="nombre_evento" v-model="nuevoscurso_capacitacion.nombre_evento"
                                                        type="text" placeholder="Ingrese el nombre del evento del curso" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Nombre del Facilitador -->
                                            <div class="col-sm-12 col-md-12 col-xl-12">
                                                <label class="text-dark" for="">Nombre del facilitador del curso</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="nombre_evento" v-model="nuevoscurso_capacitacion.facilitador_curso"
                                                        type="text" placeholder="Ingrese el nombre del facilitador del curso" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Tipo de certificado -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Tipo de certificado</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevoscurso_capacitacion.tipo_certificado"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>Seleccione el tipo de certififcado del curso</option>
                                                        <option value="Aprobación">Aprobación</option>
                                                        <option value="Asistencia">Asistencia</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-list-ol"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Fecha inicio curso -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Fecha de Inicio del Curso y/o Capacitación</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="fecha_inicio_curso" v-model="nuevoscurso_capacitacion.fecha_inicio_curso"
                                                        type="date" :max="currentDate"/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <!-- Sigue el curso actualmente -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">¿Sigue recibiendo el curso actualmente?</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.fechacursos"
                                                        v-on:change="FechaCursos2"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione si/no 
                                                        </option>
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-users"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Fecha fin / actual curso -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.fechacursofinactual">
                                               
                                                <label class="text-dark">{{ fechaFinLabelCursos }}</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="fecha_fin_curso" v-model="nuevoscurso_capacitacion.fecha_fin_curso"
                                                        type="date" :disabled="fechaFincursoDisabled" :max="currentDate"/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <!-- Dias del curso -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Días</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="dias_curso" v-model="nuevoscurso_capacitacion.dias_curso"
                                                        type="text" placeholder="El número de días del curso saldrá dependiendo de la fecha de inicio y fin" readonly/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Horas del curso -->
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Horas</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"  @input="validarNumero"
                                                        id="horas_curso" v-model="nuevoscurso_capacitacion.horas_curso"
                                                        type="text" placeholder="Ingrese el número de horas del curso" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Acciones de Agregar Editar -->
                                            <div class="col-4">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarCursosCapacitaciones">
                                                    {{ curso_capacitacionEditIndex !== null ? 'Editar Curso' : 'Agregar Curso' }}
                                                </button>
                                            </div>
                                           <!-- Cusos Capacitaciones Registradas -->
                                           <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Cursos Registrados </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Institución</th>
                                                                <th scope="col">Tipo de Evento</th>
                                                                <th scope="col">Área de Estudios</th>
                                                                <th scope="col">Nombre del Evento</th>
                                                                <th scope="col">Nombre del Facilitador</th>
                                                                <th scope="col">Tipo de Certificado</th>
                                                                <th scope="col">Fecha de Inicio</th>
                                                                <th scope="col">Fecha de Finalización</th>
                                                                <th scope="col">Días</th>
                                                                <th scope="col">Horas</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="cursosfor in curso_capacitacionarray" :key="cursosfor.idcursoscapacitaciones">
                                                                <td class="text-dark">{{ cursosfor.idcursoscapacitaciones }}</td>
                                                                <td class="text-dark">{{ cursosfor.intitucion_curso }}</td>
                                                                <td class="text-dark">{{ cursosfor.tipo_evento }}</td>
                                                                <td class="text-dark">{{ cursosfor.area_estudios }}</td>
                                                                <td class="text-dark">{{ cursosfor.nombre_evento }}</td>
                                                                <td class="text-dark">{{ cursosfor.facilitador_curso }}</td>
                                                                <td class="text-dark">{{ cursosfor.tipo_certificado }}</td>
                                                                <td class="text-dark">{{ cursosfor.fecha_inicio_curso }}</td>
                                                                <td class="text-dark">{{ cursosfor.fecha_fin_curso }}</td>
                                                                <td class="text-dark">{{ cursosfor.dias_curso }}</td>
                                                                <td class="text-dark">{{ cursosfor.horas_curso }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionCursosCapacitaciones(cursosfor.idcursoscapacitaciones)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionCursosCapacitaciones(cursosfor.idcursoscapacitaciones)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.regresar9"
                                                    @click="regresarAHabilidades">
                                                    Regresar
                                                </button>
                                                
                                            </div>
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.modoedit9"
                                                    @click="guardaCursosCapacitaciones">
                                                    Siguiente Apartado
                                                </button>
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing9"
                                                    @click="editarCursoCapacitaciones">
                                                    Siguiente Apartado
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- Otros datos Relevantes -->
                                    <div class="tab-pane fade"
                                        :class="{ 'show active': this.activeTab === 'relevantes' }" id="nav-relevante"
                                        role="tabpanel" aria-labelledby="nav-relevante-tab"
                                        v-if="this.mostrardatosrelevantes">
                                        <form class="row g-4 mt-5">
                                            <h3>Logros Obtenidos</h3>
                                            <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.otros_datos_personalesEditIndex }}</h5>
                                            <div class="col-sm-6 col-md-6 col-xl-5">
                                                <label class="text-dark" for="">Tipo de logro obtenido</label>
                                                <div class="input-group-icon">
                                                    <select v-model="nuevosotros_datos_personales.tipo_logros"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                           Seleccione el tipo de logro obtenido
                                                        </option>
                                                        <option value="Académico">Académico</option>
                                                        <option value="Artístico">Artístico</option>
                                                        <option value="Deportivo">Deportivo</option>
                                                        <option value="Laboral">Laboral</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-trophy"> </i></span>
                                                </div>
                                            </div>
                                           
                                            <div class="col-12">
                                                <label class="text-dark" for="">Descripción del logro</label>
                                                <div class="input-group-icon">
                                                    <textarea class="form-control1 input-box form-voyage-control1"
                                                        id="descripcion_logros" v-model="nuevosotros_datos_personales.descripcion_logros"
                                                        type="text"
                                                        placeholder="Describa el logro obtenido que seleccionó" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-boxes"> </i></span>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="input-group-icon">
                                                    <textarea class="form-control1 input-box form-voyage-control1"
                                                        id="descripcion_fracasos" v-model="nuevosotros_datos_personales.descripcion_fracasos"
                                                        type="text"
                                                        placeholder="Describa los fracasos que tuvo" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-boxes"> </i></span>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarOtrosDatosRelevantes">
                                                    {{ otros_datos_personalesEditIndex !== null ? 'Editar Logro' : 'Agregar Logro' }}
                                                </button>
                                            </div>
                                            <!-- Logros Obtenidos Registrados -->
                                           <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Logros Obtenidos Registrados </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Tipo de Logro</th>
                                                                <th scope="col">Descripción del Logro</th>
                                                                <th scope="col">Descripción de Fracasos</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="logrosfor in otros_datos_personalesarray" :key="logrosfor.idotros_datos_personales">
                                                                <td class="text-dark">{{ logrosfor.idotros_datos_personales }}</td>
                                                                <td class="text-dark">{{ logrosfor.tipo_logros }}</td>
                                                                <td class="text-dark">{{ logrosfor.descripcion_logros }}</td>
                                                                <td class="text-dark">{{ logrosfor.descripcion_fracasos }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionOtrosDatosRelevantes(logrosfor.idotros_datos_personales)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionOtrosDatosRelevantes(logrosfor.idotros_datos_personales)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.regresar7"
                                                    @click="regresarACursosCapacitaciones">
                                                    Regresar
                                                </button>
                                                
                                            </div>
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.modoedit5"
                                                    @click="guardaRelevantes">
                                                    Siguiente Apartado
                                                </button>
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing5"
                                                    @click="editarRelevantes">
                                                    Siguiente Apartado
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- Informacion de Contacto -->
                                    <div class="tab-pane fade" :class="{ 'show active': this.activeTab === 'contacto' }"
                                        id="nav-contacto" role="tabpanel" aria-labelledby="nav-contacto-tab"
                                        v-if="this.mostrarinformacioncontacto">
                                        <form class="row g-4 mt-5">
                                            <h3>Referencias Personales</h3>
                                            <h5 v-if="this.modoedition">Modo Edición Activado: id: {{ this.informacion_contactoEditIndex }}</h5>
                                            <label for="" class="text-dark">Agregue Máximo 3 Referencias Personales</label>
                                            <div class="col-6">
                                                <label for="" class="text-dark">Nombres</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="referencia_nombres" v-model="nuevosinformacion_contacto.referencia_nombres"
                                                        type="text" placeholder="Ingrese los nombres de la persona de la referencia personal" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                               
                                            </div>
                                            <div class="col-6">
                                                <label for="" class="text-dark">Apellidos</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="referencia_apellidos" v-model="nuevosinformacion_contacto.referencia_apellidos"
                                                        type="text" placeholder="Ingrese los apellidos de la persona de la referencia personal" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                               
                                            </div>
                                            <div class="col-6">
                                                <label for="" class="text-dark">Correo electrónico</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"  @input="validateEmail"
                                                        id="referencia_correo_electronico" v-model="nuevosinformacion_contacto.referencia_correo_electronico"
                                                        type="text" placeholder="Ingrese el correo electrónico de la persona de la referencia personal" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="far fa-envelope-open"> </i></span>
                                                </div>
                                                <p v-if="correoErrornue" class="text-danger">Por favor, ingrese un correo válido</p>
                                               
                                            </div>
                                            <div class="col-6">
                                                <label for="" class="text-dark">Número de Teléfono</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"  inputmode="numeric" pattern="[0-9]{10}" maxlength="10"
                                                        @input="validatePhoneNumber" id="referencia_telefono" v-model="nuevosinformacion_contacto.referencia_telefono" type="text"
                                                        placeholder="Ingrese el número de teléfono de la persona de la referencia personal" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-phone"> </i></span>
                                                </div>
                                                
                                            </div>
                                            <div class="col-4">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarInformacionContacto">
                                                    {{ informacion_contactoEditIndex !== null ? 'Editar Referencia' : 'Agregar Referencia' }}
                                                </button>
                                            </div>
                                            <!-- Referencias Personales Registrados -->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Referencias Personales Registrados </h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Nombres</th>
                                                                <th scope="col">Apellidos</th>
                                                                <th scope="col">Correo Elecctrónico</th>
                                                                <th scope="col">Número de Teléfono</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="referenciafor in informacion_contactoarray" :key="referenciafor.idinformacion_contacto">
                                                                <td class="text-dark">{{ referenciafor.idinformacion_contacto }}</td>
                                                                <td class="text-dark">{{ referenciafor.referencia_nombres }}</td>
                                                                <td class="text-dark">{{ referenciafor.referencia_apellidos }}</td>
                                                                <td class="text-dark">{{ referenciafor.referencia_correo_electronico }}</td>
                                                                <td class="text-dark">{{ referenciafor.referencia_telefono }}</td>
                                                                <td>
                                                                    <button class="btn1 btn-secondary1" type="button" @click="editarSeleccionInformacionContacto(referenciafor.idinformacion_contacto)"><i class="fa-solid fa-edit"></i></button>
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarSeleccionInformacionContacto(referenciafor.idinformacion_contacto)"><i class="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-12 d-grid mt-6">
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.regresar8"
                                                    @click="regresarARelevantes">
                                                    Regresar
                                                </button>
                                                
                                            </div>
                                            <div class="col-12 d-grid mt-6" v-if="this.boton2">
                                                <button class="btn1 btn-secondary1" type="button"  v-if="this.modoedit6"
                                                    @click="guardaContacto">
                                                     Finalizar
                                                </button>
                                                <button class="btn1 btn-secondary1" type="button" v-if="this.isEditing6"
                                                    @click="editarContacto">
                                                    Finalizar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                   
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
  <div class="container-fluid py-5" v-if="this.registro">
    <section class="hero-wrap js-fullheight">
      <div class="overlay"></div>
      <div class="container-fluid">
        <div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
          <div class="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
            <div class="text text-center">
              <span class="subheading">!Le damos la bienvenida!</span>
              <h1>Ronaldo Fredrickson</h1>
              <!--
            <h2>I'm a
              <span class="txt-rotate" data-period="2000"
                data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'></span>
            </h2>-->
            </div>
          </div>
        </div>
      </div>

      <div class="mouse">
        <a href="#" class="mouse-icon">
          <div class="mouse-wheel"><span class="fas fa-angle-double-down"></span></div>
        </a>
      </div>

    </section>
    <br>
    <br>
    <br>
    <br>
    <section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb py-5" id="about-section">
      <div class="container">
        <div class="row d-flex no-gutters">
          <div class="col-md-6 col-lg-6 d-flex">
            <div class="img-about img d-flex align-items-stretch">
              <div class="overlay"></div>
              <div class="img1 d-flex align-self-stretch align-items-center"
                :style="{ backgroundImage: `url(${aboutImage})` }">
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 pl-md-5 py-5 px-4">
            <div class="row justify-content-start pb-3">
              <div class="col-md-12 heading-section ftco-animate">
                <h2 class="mb-4">Sobre Mi</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary
                  regelialia.</p>
                <ul class="about-info mt-4 px-md-0 px-2">
                  <li class="d-flex"><span>Nombres:</span> <span class="text-dark">Ronaldo Fredrickson</span></li>
                  <li class="d-flex"><span>Apellidos:</span> <span class="text-dark">Ronaldo Fredrickson</span></li>
                  <li class="d-flex"><span>Fecha de Nacimiento:</span> <span class="text-dark">November 28, 1989</span>
                  </li>
                  <li class="d-flex"><span>Edad:</span> <span class="text-dark">November 28, 1989</span></li>
                  <li class="d-flex"><span>Direccion:</span> <span class="text-dark">San Francisco CA 97987 USA</span>
                  </li>
                  <li class="d-flex"><span>Email:</span> <span class="text-dark">ronaldo@gmail.com</span></li>
                  <li class="d-flex"><span>Teléfono: </span> <span class="text-dark">+1-2234-5678-9-0</span></li>
                </ul>
              </div>
            </div>
            <div class="counter-wrap ftco-animate d-flex mt-md-3">
              <div class="text">
                <p class="mb-4">
                  <span class="number" data-number="120">0</span>
                  <span>Artículos Publicados</span>
                </p>
                <p><a href="#" class="btn btn-primary py-3 px-3">Descargar CV</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-no-pb goto-here" id="resume-section">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <nav id="navi">
              <ul>
                <li><a href="#page-1">Education</a></li>
                <li><a href="#page-2">Experience</a></li>
                <li><a href="#page-3">Awards</a></li>
                <!-- <li><a href="#page-4">Awards</a></li>-->
              </ul>
            </nav>
          </div>
          <div class="col-md-9">
            <div id="page-1" class="page one">
              <h2 class="heading">Education</h2>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-graduation-cap"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Bachelor of Science in Computer Science</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-graduation-cap"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Computer Processing Systems/Computer Software</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-graduation-cap"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Diploma in Computer</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-graduation-cap"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Art &amp; Creative Director</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
            </div>

            <div id="page-2" class="page two">
              <h2 class="heading">Experience</h2>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-building"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Software Developer</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-building"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Web Designer</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-building"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Web Marketing</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas	fas fa-building"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Art &amp; Creative Director</h2>
                  <span class="position">Side Tech</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas	fas fa-building"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Wordpress Developer</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas	fas fa-building"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2017-2018</span>
                  <h2 class="titulobach">UI/UX Designer</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
            </div>
            <!--  
          <div id="page-3" class="page three">
            <h2 class="heading">Skills</h2>
            <div class="row progress-circle mb-5">
              <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                  <h2 class="h5 font-weight-bold text-center mb-4">CSS</h2>

                  <!-- Progress bar 1 
                  <div class="progress mx-auto" data-value='90'>
                    <span class="progress-left">
                      <span class="progress-bar border-primary"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar border-primary"></span>
                    </span>
                    <div
                      class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                      <div class="h2 font-weight-bold">90<sup class="small">%</sup></div>
                    </div>
                  </div>
                  END -->

            <!-- Demo info 
                  <div class="row text-center mt-4">
                    <div class="col-6 border-right">
                      <div class="h4 font-weight-bold mb-0">28%</div><span class="small text-gray">Last week</span>
                    </div>
                    <div class="col-6">
                      <div class="h4 font-weight-bold mb-0">60%</div><span class="small text-gray">Last month</span>
                    </div>
                  </div>
                   END 
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                  <h2 class="h5 font-weight-bold text-center mb-4">HTML</h2>

                  <!-- Progress bar 1 
                  <div class="progress mx-auto" data-value='80'>
                    <span class="progress-left">
                      <span class="progress-bar border-primary"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar border-primary"></span>
                    </span>
                    <div
                      class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                      <div class="h2 font-weight-bold">80<sup class="small">%</sup></div>
                    </div>
                  </div>
                   END -->

            <!-- Demo info 
                  <div class="row text-center mt-4">
                    <div class="col-6 border-right">
                      <div class="h4 font-weight-bold mb-0">28%</div><span class="small text-gray">Last week</span>
                    </div>
                    <div class="col-6">
                      <div class="h4 font-weight-bold mb-0">60%</div><span class="small text-gray">Last month</span>
                    </div>
                  </div>
                   END 
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                  <h2 class="h5 font-weight-bold text-center mb-4">jQuery</h2>

                  <!-- Progress bar 1 
                  <div class="progress mx-auto" data-value='75'>
                    <span class="progress-left">
                      <span class="progress-bar border-primary"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar border-primary"></span>
                    </span>
                    <div
                      class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                      <div class="h2 font-weight-bold">75<sup class="small">%</sup></div>
                    </div>
                  </div>
                  <!-- END -->

            <!-- Demo info 
                  <div class="row text-center mt-4">
                    <div class="col-6 border-right">
                      <div class="h4 font-weight-bold mb-0">28%</div><span class="small text-gray">Last week</span>
                    </div>
                    <div class="col-6">
                      <div class="h4 font-weight-bold mb-0">60%</div><span class="small text-gray">Last month</span>
                    </div>
                  </div>
                  END 
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ftco-animate">
                  <h3>Photoshop</h3>
                  <div class="progress">
                    <div class="progress-bar color-1" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                      aria-valuemax="100" style="width:90%">
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ftco-animate">
                  <h3>jQuery</h3>
                  <div class="progress">
                    <div class="progress-bar color-2" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                      aria-valuemax="100" style="width:85%">
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ftco-animate">
                  <h3>HTML5</h3>
                  <div class="progress">
                    <div class="progress-bar color-3" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                      aria-valuemax="100" style="width:95%">
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ftco-animate">
                  <h3>CSS3</h3>
                  <div class="progress">
                    <div class="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                      aria-valuemax="100" style="width:90%">
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ftco-animate">
                  <h3>WordPress</h3>
                  <div class="progress">
                    <div class="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                      aria-valuemax="100" style="width:70%">
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ftco-animate">
                  <h3>SEO</h3>
                  <div class="progress">
                    <div class="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                      aria-valuemax="100" style="width:80%">
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>-->
            <div id="page-3" class="page three">
              <h2 class="heading">Awards</h2>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-award"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Top 10 Web Developer</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-award"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Top 5 LeaderShip Exellence Winner</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-award"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Top 4 Web Tester</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
              <div class="resume-wrap d-flex ftco-animate">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="flaticon-ideas fas fa-award"></span>
                </div>
                <div class="text pl-3">
                  <span class="date">2014-2015</span>
                  <h2 class="titulobach">Art &amp; Creative Director</h2>
                  <span class="position">Cambridge University</span>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                    into your mouth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Botón para Subir Start -->
  <a href="#" class="btn btn-primary btn-md-square back-to-top">
    <i class="fa fa-arrow-up"></i>
  </a>
  <!-- Botón para Subir End -->

</template>
<style scoped>
@import url("@/assets/styles/tooplate-style.css");
@import url("@/assets/styles/docentestyles.css");
</style>
<script>
//Importar Librerías y Archivos Js
import script2 from "@/store/custom.js";
import axios from "axios";
import { useRoute } from "vue-router";
import store from "@/store";
import jsPDF from 'jspdf';
import { mostraralertas2, enviarsolig, enviarsoliedit, confimar } from '@/store/funciones';
export default {
  data() {
    return {
      idus: 0,
      editingIndex: null,
      editingIndex2: null,
      //DAtos 
      fecha_inicio_empresa2: '',
      fecha_graduacion2: '',
      fecha_inicio_practicas2: '',
      fecha_graduacion_posgrado2: '',
      fecha_finalizacion_curso2: '',

      usuarios: null,
      editus: false,
      registro: false,
      us: true,
      //Datos Personales
      url1: "http://192.168.38.177/cvubackendv2/api/cvn/v1/informacionpersonald",
      iddatos_personales: 0,
      datos_personales: null,
      mostrardatospersonales: true,
      CIInfPer: "",
      ApellInfPer: "",
      ApellMatInfPer: "",
      NombInfPer: "",
      NacionalidadPer: "",
      LugarNacimientoPer: "",
      FechNacimPer: "",
      GeneroPer: "",
      CiudadPer: "",
      DirecDomicilioPer: "",
      Telf1InfPer: "",
      mailPer: "",
      imagen: "",
      edad: "",

      //Formacion Academica
      url2: "http://192.168.38.177/cvubackendv2/api/cvn/v1/formacion_academica",
      url11: "http://192.168.38.177/cvubackendv2/api/cvn/v1/fichasocioeconomica",
      idformacion_academica: 0,
      idfichasocioeconomica: 0,
      formacion_academica: null,
      mostrarformacionacademica: true,
      univer: false,
      posgrado: false,
      modoedition: false,
      bachiler: false,
      sidatos: true,
      mostraridformacion_academica: false,
      registrosbachiller: false,
      titulosUniversitarios: [],
      titulosPosgrado: [],
      titulosBachiller: [],
      //  título universitario
      nuevoTituloUniversitario: {
        titulo_universitario_obtenido: "",
        institucion_universitaria: "",
        fecha_graduacion: "",
        especialidad: ""
      },
      tituloUniversitarioEditIndex: null,
      // nuevo título de posgrado
      nuevoTituloPosgrado: {
        titulo_posgrado_obtenido: "",
        institucion_posgrado: "",
        fecha_graduacion_posgrado: "",
        especialidad_posgrado: ""
      },
      tituloPosgradoEditIndex: null,
      // nuevo título de Bachiller
      nuevoTituloBachiller: {
        titulo_bachiller_obtenido: "",
        institucion_bachiller: "",
        fecha_graduacion_bachiller: "",
        especialidad_bachiller: ""
      },
      tituloBachillerEditIndex: null,

      estudios_universitarios_culminados: "",
      estudios_posgrado_culminados: "",
      estudios_bachiller_culminados: "",
      currentDate: this.obtenerfechaactual(),


      regresar2: false,

      //Experiencias Profesionales
      url3: "http://192.168.38.177/cvubackendv2/api/cvn/v1/experiencia_profesionale",
      idexperiencias_profesionales: 0,
      experiencias_profesionales: null,
      mostrarexperienciasprofesionales: true,
      cargos: false,
      practica: false,
      //Estructura para las tablas
      cargosEmpresas: [],
      cargosPasantias: [],
      //  Empresas
      nuevocargosEmpresas: {
        empresa_institucion: "",
        fecha_inicio_empresa: "",
        fecha_fin_empresa: "",
        cargo_desempenado_empresa: "",
        descripcion_funciones_empresa: "",
        logros_resultados_empresa: "",
      },
      cargosEmpresasEditIndex: null,
      // Practicas
      nuevocargosPasantias: {
        empresa_institucion_practicas: "",
        fecha_inicio_practicas: "",
        fecha_fin_practicas: "",
        area_trabajo_practicas: "",
        descripcion_funciones_practicas: "",
      },
      cargosPasantiasEditIndex: null,
      cargos_desempenados: "",
      practicas_profesionales: "",
      fechacargos: "",
      fechaFinLabel: "",
      fechaFinDisabled: false,
      trabajo: false,
      trabajonuevo: false,
      regresar3: false,

      //fechas del curso
      fechacursos: "",
      fechaFinLabelCursos: "",
      fechaFincursoDisabled: false,
      trabajocursos: false,
      fechacursofinactual: false,



      //Investigacion y publicaciones
      url4: "http://192.168.38.177/cvubackendv2/api/cvn/v1/investigacion_publicacione",
      idinvestigacion_publicaciones: 0,
      investigacion_publicaciones: null,
      mostrarinvestigacionpublicaciones: true,
      investiga: false,

      publicaciones: "",
      publicacionesarray: [],
      //  Publicaciones
      nuevaspublicaciones: {
        publicacion_tipo: "",
        publicacion_titulo: "",
        link_publicación: "",
        congreso_evento: "",
      },
      publicacionesEditIndex: null,

      regresar4: false,
      //Idioma
      url5: "http://192.168.38.177/cvubackendv2/api/cvn/v1/idioma",
      idlenguaje: 0,
      lenguaje: null,
      mostraridiomas: true,

      idiomasarray: [],
      //  Idiomas
      nuevosidiomas: {
        idioma: "",
        comprension_auditiva: "",
        comprension_lectura: "",
        interaccion_oral: "",
        expresion_oral: "",
        expresion_escrita: "",
        certificado: "",
      },
      idiomasEditIndex: null,


      regresar5: false,
      archivoCertificado: null,
      //SW
      url6: "http://192.168.38.177/cvubackendv2/api/cvn/v1/habilidades_informatica",
      idhabilidades_informaticas: 0,
      habilidades_informaticas: null,
      mostrarsw: true,

      comunicativas: false,
      creativas: false,
      liderazgo: false,
      informaticas_cv: false,
      oficios: false,
      otro_habili: false,

      habilidades_comunicativas_array: [],
      habilidades_creativas_array: [],
      habilidades_liderazgo_array: [],
      habilidades_informaticas_array: [],
      oficios_subactividades_array: [],
      otro_habilidades_array: [],

      //  Habilidades Comunicativas
      nuevashabilidades_comunicativas: {
        habilidades_comunicativas: "",
        descripcion_habilidades_comunicativas: "",
      },
      habilidades_comunicativas_EditIndex: null,
      //  Habilidades Creativas
      nuevashabilidades_creativas: {
        habilidades_creativas: "",
        descripcion_habilidades_creativas: "",
      },
      habilidades_creativas_EditIndex: null,
      //  Habilidades Liderazgo
      nuevashabilidades_liderazgo: {
        habilidades_liderazgo: "",
        descripcion_habilidades_liderazgo: "",
      },
      habilidades_liderazgo_EditIndex: null,
      //  Habilidades Infotm
      nuevashabilidades_informaticas_cv: {
        habilidades_informaticas_cv: "",
        descripcion_habilidades_informaticas_cv: "",
      },
      habilidades_informaticas_cv_EditIndex: null,
      //  Habilidades Oficios
      nuevasoficios_subactividades: {
        oficios_subactividades: "",
        descripcion_oficios_subactividades: "",
      },
      oficios_subactividades_EditIndex: null,
      //  Habilidades Oficios
      nuevasotro_habilidades: {
        otro_habilidades: "",
      },
      otro_habilidades_EditIndex: null,
      habi_comunicacion: "",
      habi_creacion: "",
      habi_liderazgo: "",
      habi_informaticos_cv: "",
      habi_oficios: "",
      habi_otros_habi: "",


      regresar6: false,

      //Cursos Capacitaciones
      mostrarcapacitaciones: true,
      url10: "http://192.168.38.177/cvubackendv2/api/cvn/v1/cursoscapacitacion",
      idcursoscapacitaciones: 0,
      curso_capacitacion: null,
      curso_capacitacionarray: [],
      //  curso_capacitacion
      nuevoscurso_capacitacion: {
        intitucion_curso: "",
        tipo_evento: "",
        area_estudios: "",
        nombre_evento: "",
        facilitador_curso: "",
        tipo_certificado: "",
        fecha_inicio_curso: "",
        fecha_fin_curso: "",
        dias_curso: "",
        horas_curso: "",
      },
      curso_capacitacionEditIndex: null,
      regresar9: false,


      //Datos Relevantes
      url7: "http://192.168.38.177/cvubackendv2/api/cvn/v1/otros_datos_relevante",
      idotros_datos_personales: 0,
      otros_datos_personales: null,
      mostrardatosrelevantes: true,

      otros_datos_personalesarray: [],
      //  otros_datos_personales
      nuevosotros_datos_personales: {
        tipo_logros: "",
        descripcion_logros: "",
        descripcion_fracasos: "",
      },
      otros_datos_personalesEditIndex: null,

      regresar7: false,
      //Informacion de Contacto
      url8: "http://192.168.38.177/cvubackendv2/api/cvn/v1/informacion_contacto",
      idinformacion_contacto: 0,
      informacion_contacto: null,
      mostrarinformacioncontacto: true,

      informacion_contactoarray: [],
      //  informacion_contacto
      nuevosinformacion_contacto: {
        referencia_nombres: "",
        referencia_apellidos: "",
        referencia_correo_electronico: "",
        referencia_telefono: "",
      },
      informacion_contactoEditIndex: null,

      regresar8: false,
      //Declaracion Personal
      url9: "http://192.168.38.177/cvubackendv2/api/cvn/v1/declaracion_personal",
      iddeclaracion_personal: 0,
      declaracion_personal: null,
      mostrardelaracionpersonal: true,
      regresar1: false,
      texto: "",
      //Activar taps
      activeTab: "datos",
      activeTab1: "datos",
      isEditing: false,
      modoedit: true,

      isEditing1: false,
      modoedit1: true,

      isEditing2: false,
      modoedit2: true,

      isEditing3: false,
      modoedit3: true,

      isEditing4: false,
      modoedit4: true,

      isEditing5: false,
      modoedit5: true,

      isEditing6: false,
      modoedit6: true,

      isEditing7: false,
      modoedit7: true,

      isEditing8: false,
      modoedit8: true,

      isEditing9: false,
      modoedit9: true,

      eseditar: false,
      esguardar: true,

      //Validación de Campos Datos personales
      nombresApellidosTouched: false,
      nombresApellidosError: '',
      numIdentificacionTouched: false,
      numIdentificacionError: '',
      telefonotouch: false,
      telefonotouchError: '',
      correoElectronicoTouched: false,
      correoElectronicoError: '',
      boton1: true,

      telefonotouch2: false,
      telefonotouchError2: '',
      correoElectronicoTouched2: false,
      correoElectronicoError2: '',
      boton2: true,

      //validaciones extras
      isValidURL: false,
      correoErrornue: false,
      telfErrornue: false,
      aboutImage: require('@/assets/images/about.jpg')
    }
  },
  mounted() {
    this.NaviMetodo();
    this.textorotativo();
    this.ProgresoRotacion();
    const ruta = useRoute();
    this.idus = ruta.params.id;
    this.url1 += '/' + this.idus;
    this.url2 += '/' + this.idus;
    this.url3 += '/' + this.idus;
    this.url4 += '/' + this.idus;
    this.url5 += '/' + this.idus;
    this.url6 += '/' + this.idus;
    this.url7 += '/' + this.idus;
    this.url8 += '/' + this.idus;
    this.url9 += '/' + this.idus;
    this.url10 += '/' + this.idus;
    this.url11 += '/' + this.idus;
    Promise.all([
      this.getDatosPersonales(),
      this.getDeclaracionPersonal(),
      this.getFormacionAcademica(),
      this.getExperienciasProfesionales(),
      this.getInvestigacionPublicaciones(),
      this.getIdiomas(),
      this.getHabilidadesInformaticas(),
      this.getCursosCapacitaciones(),
      this.getDatosRelevantes(),
      this.getInformacionContacto()

    ])

  },
  computed: {
    contarpalabra() {
      return this.texto.split(/\s+/).filter(palabr => palabr.length > 0).length;
    },
    calcularDiasCurso() {
      if (this.nuevoscurso_capacitacion.fecha_inicio_curso && this.nuevoscurso_capacitacion.fecha_fin_curso) {
        const fechaInicio = new Date(this.nuevoscurso_capacitacion.fecha_inicio_curso);
        const fechaFin = new Date(this.nuevoscurso_capacitacion.fecha_fin_curso);

        if (fechaFin < fechaInicio) {
          return 0;
        }

        let count = 0;
        let currentDate = new Date(fechaInicio);

        while (currentDate <= fechaFin) {
          const dayOfWeek = currentDate.getDay();
          if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Ignorar sábados y domingos
            count++;
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }

        return count;
      }
      return '';
    }
  },
  watch: {
    calcularDiasCurso(newVal) {
      this.nuevoscurso_capacitacion.dias_curso = newVal;
    },

  },
  methods: {
    cerrarsesion() {
      console.clear();
      var rol = '';
      var email = '';
      var id = '';
      var name = '';

      store.commit('setRol', this.rol);
      store.commit('setemail', this.email);
      store.commit('setid', this.id);
      store.commit('setname', this.name);
      this.$router.replace('/');
    },
    perfil() {
      this.editus = false;
      this.registro = false;
      this.esguardar = false;
      this.us = true;
      this.mostrardatospersonales = true;
      this.mostrardatosrelevantes = true;
      this.mostrardelaracionpersonal = true;
      this.mostrarexperienciasprofesionales = true;
      this.mostrarformacionacademica = true;
      this.mostraridiomas = true;
      this.mostrarinformacioncontacto = true;
      this.mostrarinvestigacionpublicaciones = true;
      this.mostrarsw = true;
      this.activeTab = "datos";
      this.eseditar = true;
      this.isEditing = true;
      this.modoedit = false;

      this.isEditing1 = true;
      this.modoedit1 = false;

      this.isEditing2 = true;
      this.modoedit2 = false;

      this.isEditing3 = true;
      this.modoedit3 = false;

      this.isEditing4 = true;
      this.modoedit4 = false;

      this.isEditing5 = true;
      this.modoedit5 = false;

      this.isEditing6 = true;
      this.modoedit6 = false;

      this.isEditing7 = true;
      this.modoedit7 = false;

      this.isEditing8 = true;
      this.modoedit8 = false;
    },
    salir() {
      this.editus = false;
      this.eseditar = false;
      this.registro = true;
      this.us = false;
    },
    activarTab(tab) {
      this.activeTab = tab;
    },
    activarTab1(tab) {
      this.activeTab1 = tab;
    },
    //Mejoras de contenido
    limitepalabras() {
      const palabr = this.texto.split(/\s+/);
      if (palabr.length > 250) {
        this.texto = palabr.slice(0, 250).join(' ');
      }
    },
    validarURL() {
      const urlPattern = new RegExp(
        '^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i'
      );

      this.isValidURL = urlPattern.test(this.nuevaspublicaciones.link_publicación);

    },
    validarNumero(event) {

      const value = event.target.value.replace(/[^0-9]/g, '');
      this.nuevoscurso_capacitacion.horas_curso = value;
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.nuevosinformacion_contacto.referencia_correo_electronico)) {
        this.correoErrornue = true;
      } else {
        this.correoErrornue = false;
      }
    },
    validatePhoneNumber() {

      this.nuevosinformacion_contacto.referencia_telefono = this.nuevosinformacion_contacto.referencia_telefono.replace(/\D/g, '').slice(0, 10);
    },
    obtenerfechaactual() {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      return `${yyyy}-${mm}-${dd}`;
    },

    NaviMetodo() {
      var sections = [];
      var id = false;
      var $navbara = $('#navi a');
      var self = this;

      $navbara.click(function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 180
        }, 500);
        self.hash($(this).attr('href'));
      });

      $navbara.each(function () {
        sections.push($($(this).attr('href')));

      })
      $(window).scroll(function (e) {
        var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
        for (var i in sections) {
          var section = sections[i];
          if (scrollTop > section.offset().top) {
            var scrolled_id = section.attr('id');
          }
        }
        if (scrolled_id !== id) {
          id = scrolled_id;
          $($navbara).removeClass('current');
          $('#navi a[href="#' + id + '"]').addClass('current');
        }
      })
    },
    textorotativo() {

      var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      };

      window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
      };
    },
    ProgresoRotacion() {
      $(".progress").each(function () {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
          if (value <= 50) {
            right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
          } else {
            right.css('transform', 'rotate(180deg)')
            left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
          }
        }

      })

      function percentageToDegrees(percentage) {

        return percentage / 100 * 360

      }
    },
    hash(h) {
      if (history.pushState) {
        history.pushState(null, null, h);
      } else {
        location.hash = h;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    

    //Cargar Informacion
    //Datos Personales
    async getDatosPersonales() {
      try {

        const response = await axios.get(this.url1);
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          this.CIInfPer = data.CIInfPer;
          this.ApellInfPer = data.ApellInfPer;
          this.ApellMatInfPer = data.ApellMatInfPer;
          this.NombInfPer = data.NombInfPer;
          this.NacionalidadPer = data.NacionalidadPer;
          // this.LugarNacimientoPer = data.LugarNacimientoPer;
          this.FechNacimPer = data.FechNacimPer;
          this.GeneroPer = data.GeneroPer;
          this.CiudadPer = data.CiudadPer;
          this.DirecDomicilioPer = data.DirecDomicilioPer;
          this.Telf1InfPer = data.Telf1InfPer;
          this.mailPer = data.mailPer;
          this.imagen = data.fotografia;
          const añoActual = new Date().getFullYear();
          const añoNacimiento = new Date(data.FechNacimPer).getFullYear();
          this.edad = añoActual - añoNacimiento;
          this.registro = true;
          this.isEditing = true;
          this.modoedit = false;
          this.us = false;
          this.scrollToTop();
        } else {
          this.isEditing = false;
          this.modoedit = true;
          this.registro = false;
          this.us = true;
        }
        return response;

      } catch (error) {
        this.registro = false;
        this.us = true;


      }
    },
    //Formacion Academica
    async getFormacionAcademica() {
      try {
        const response = await axios.get(this.url2);



        if (response.data && response.data.length > 0) {
          const data = response.data;

          // Limpiamos los arreglos existentes
          this.titulosBachiller = [];
          this.titulosUniversitarios = [];
          this.titulosPosgrado = [];

          // Recorremos los datos obtenidos para separar títulos universitarios y de posgrado
          data.forEach(item => {
            if (item.estudios_bachiller_culminados === 'Si' && item.titulo_bachiller_obtenido && item.institucion_bachiller) {
              this.titulosBachiller.push({

                idformacion_academica: item.id,
                titulo_bachiller_obtenido: item.titulo_bachiller_obtenido || '',
                institucion_bachiller: item.institucion_bachiller || '',
                fecha_graduacion_bachiller: item.fecha_graduacion_bachiller || '',
                especialidad_bachiller: item.especialidad_bachiller || ''
              });
              if (this.titulosBachiller.length > 0) {
                this.sidatos = false;
              } else {
                this.sidatos = true;
              }
            }
            if (item.estudios_universitarios_culminados === 'Si' && item.titulo_universitario_obtenido && item.institucion_universitaria) {
              this.titulosUniversitarios.push({

                idformacion_academica: item.id,
                titulo_universitario_obtenido: item.titulo_universitario_obtenido || '',
                institucion_universitaria: item.institucion_universitaria || '',
                fecha_graduacion: item.fecha_graduacion || '',
                especialidad: item.especialidad || ''
              });
            }

            if (item.estudios_posgrado_culminados === 'Si' && item.titulo_posgrado_obtenido && item.institucion_posgrado) {
              this.titulosPosgrado.push({

                idformacion_academica: item.id,
                titulo_posgrado_obtenido: item.titulo_posgrado_obtenido || '',
                institucion_posgrado: item.institucion_posgrado || '',
                fecha_graduacion_posgrado: item.fecha_graduacion_posgrado || '',
                especialidad_posgrado: item.especialidad_posgrado || ''
              });
            }
          });

          this.isEditing8 = true;
          this.modoedit8 = false;
          this.Titulouni();
          this.Posgra();
          this.Titulobachi();
          this.registro = true;
          this.us = false;
          this.scrollToTop();
        } else {

          if (this.titulosBachiller.length > 0) {
            this.sidatos = false;
          } else {
            const response2 = await axios.get(this.url11);
            const data2 = response2.data[0];
            this.sidatos = true;
            this.estudios_bachiller_culminados = 'Si';
            this.Titulobachi();
            this.nuevoTituloBachiller.titulo_bachiller_obtenido = data2.Bachillerato;
            this.nuevoTituloBachiller.institucion_bachiller = data2.NombColegio;
            this.nuevoTituloBachiller.fecha_graduacion_bachiller = data2.FechGrado;
            this.nuevoTituloBachiller.especialidad_bachiller = data2.Especialidad;
          }

          this.isEditing8 = false;
          this.modoedit8 = true;
          this.registro = false;
          this.us = true;
        }
        return response;
      } catch (error) {
        this.registro = false;
        this.us = true;
      }
    },
    //Experiencias Profesionales
    async getExperienciasProfesionales() {
      try {
        const response = await axios.get(this.url3);
        if (response.data && response.data.length > 0) {
          const data = response.data;
          this.cargosEmpresas = [];
          this.cargosPasantias = [];

          data.forEach(item => {
            if (item.cargos_desempenados === 'Si' && item.empresa_institucion && item.cargo_desempenado_empresa) {
              this.cargosEmpresas.push({

                idexperiencias_profesionales: item.id,
                empresa_institucion: item.empresa_institucion || '',
                fecha_inicio_empresa: item.fecha_inicio_empresa || '',
                fecha_fin_empresa: item.fecha_fin_empresa || '',
                cargo_desempenado_empresa: item.cargo_desempenado_empresa || '',
                descripcion_funciones_empresa: item.descripcion_funciones_empresa || '',
                logros_resultados_empresa: item.logros_resultados_empresa || ''
              });
              if (item.fecha_inicio_empresa) {
                const añoInicio = new Date(item.fecha_inicio_empresa).getFullYear();
                this.fecha_inicio_empresa2 = añoInicio;
              }
            }

            if (item.practicas_profesionales === 'Si' && item.empresa_institucion_practicas && item.area_trabajo_practicas) {
              this.cargosPasantias.push({

                idexperiencias_profesionales: item.id,
                empresa_institucion_practicas: item.empresa_institucion_practicas || '',
                fecha_inicio_practicas: item.fecha_inicio_practicas || '',
                fecha_fin_practicas: item.fecha_fin_practicas || '',
                area_trabajo_practicas: item.area_trabajo_practicas || '',
                descripcion_funciones_practicas: item.descripcion_funciones_practicas || ''
              });
              if (item.fecha_inicio_practicas) {
                const añoInicio2 = new Date(item.fecha_inicio_practicas).getFullYear();
                this.fecha_inicio_practicas2 = añoInicio2;
              }
            }


          });

          this.fechacargos = "";
          this.fechaFinLabel = "";
          this.trabajo = false;
          this.Cargos();
          this.Practicas();
          this.FechaCarg();
          this.registro = true;
          this.us = false;
          this.scrollToTop();

        } else {
          this.registro = false;
          this.us = true;
        }
        return response;
      } catch (error) {
        this.registro = false;
        this.us = true;
      }
    },
    //Investigacion y Publicaciones
    async getInvestigacionPublicaciones() {
      try {
        const response = await axios.get(this.url4);
        if (response.data && response.data.length > 0) {
          const data = response.data;
          this.publicacionesarray = [];

          data.forEach(item => {
            if (item.publicaciones === 'Si' && item.publicacion_tipo && item.publicacion_titulo) {
              this.publicacionesarray.push({

                idinvestigacion_publicaciones: item.id,
                publicacion_tipo: item.publicacion_tipo || '',
                publicacion_titulo: item.publicacion_titulo || '',
                link_publicación: item.link_publicación || '',
                congreso_evento: item.congreso_evento || ''
              });
            }


          });
          this.Investigaciones();
          this.registro = true;
          this.us = false;
          this.scrollToTop();

        } else {
          this.registro = false;
          this.us = true;
        }
        return response;

      } catch (error) {
        this.registro = false;
        this.us = true;
      }
    },
    //Idiomas
    async getIdiomas() {
      try {
        const response = await axios.get(this.url5);
        if (response.data && response.data.length > 0) {
          const data = response.data;
          this.idiomasarray = [];

          data.forEach(item => {

            this.idiomasarray.push({

              idlenguaje: item.id,
              idioma: item.idioma || '',
              comprension_auditiva: item.comprension_auditiva || '',
              comprension_lectura: item.comprension_lectura || '',
              interaccion_oral: item.interaccion_oral || '',
              expresion_oral: item.expresion_oral || '',
              expresion_escrita: item.expresion_escrita || '',
              certificado: item.certificado || '',
            });


          });

          this.registro = true;
          this.us = false;
          this.scrollToTop();
        } else {
          this.registro = false;
          this.us = true;
        }
        return response;
      } catch (error) {
        this.registro = false;
        this.us = true;
      }
    },
    //Habilidades Informaticas
    async getHabilidadesInformaticas() {
      try {
        const response = await axios.get(this.url6);
        if (response.data && response.data.length > 0) {
          const data = response.data;
          this.habilidades_comunicativas_array = [];
          this.habilidades_creativas_array = [];
          this.habilidades_informaticas_array = [];
          this.habilidades_liderazgo_array = [];
          this.oficios_subactividades_array = [];
          this.otro_habilidades_array = [];

          data.forEach(item => {
            if (item.habilidades_comunicativas || item.descripcion_habilidades_comunicativas) {
              this.habilidades_comunicativas_array.push({

                idhabilidades_informaticas: item.id,
                habilidades_comunicativas: item.habilidades_comunicativas || '',
                descripcion_habilidades_comunicativas: item.descripcion_habilidades_comunicativas || '',
              });
            }
            if (item.habilidades_creativas || item.descripcion_habilidades_creativas) {
              this.habilidades_creativas_array.push({

                idhabilidades_informaticas: item.id,
                habilidades_creativas: item.habilidades_creativas || '',
                descripcion_habilidades_creativas: item.descripcion_habilidades_creativas || '',
              });
            }

            if (item.habilidades_informaticas_cv || item.descripcion_habilidades_informaticas_cv) {
              this.habilidades_informaticas_array.push({

                idhabilidades_informaticas: item.id,
                habilidades_informaticas_cv: item.habilidades_informaticas_cv || '',
                descripcion_habilidades_informaticas_cv: item.descripcion_habilidades_informaticas_cv || '',
              });
            }
            if (item.habilidades_liderazgo || item.descripcion_habilidades_liderazgo) {
              this.habilidades_liderazgo_array.push({

                idhabilidades_informaticas: item.id,
                habilidades_liderazgo: item.habilidades_liderazgo || '',
                descripcion_habilidades_liderazgo: item.descripcion_habilidades_liderazgo || '',
              });
            }
            if (item.oficios_subactividades || item.descripcion_oficios_subactividades) {
              this.oficios_subactividades_array.push({

                idhabilidades_informaticas: item.id,
                oficios_subactividades: item.oficios_subactividades || '',
                descripcion_oficios_subactividades: item.descripcion_oficios_subactividades || '',
              });
            }
            if (item.otro_habilidades) {
              this.otro_habilidades_array.push({

                idhabilidades_informaticas: item.id,
                otro_habilidades: item.otro_habilidades || '',
              });
            }
          });

          this.registro = true;
          this.ComunHabi();
          this.CreaHabi();
          this.LideHabi();
          this.InfoHabi();
          this.OfiHabi();
          this.OtrosHabi();
          this.us = false;
          this.scrollToTop();
        } else {
          this.registro = false;
          this.ComunHabi();
          this.CreaHabi();
          this.LideHabi();
          this.InfoHabi();
          this.OfiHabi();
          this.OtrosHabi();
          this.us = true;
        }
        return response;

      } catch (error) {
        this.registro = false;
        this.us = true;
      }
    },
    //Cursos Capacitaciones
    async getCursosCapacitaciones() {
      try {
        const response = await axios.get(this.url10);
        if (response.data && response.data.length > 0) {
          const data = response.data;
          this.curso_capacitacionarray = [];

          data.forEach(item => {

            this.curso_capacitacionarray.push({

              idcursoscapacitaciones: item.id,
              intitucion_curso: item.intitucion_curso || '',
              tipo_evento: item.tipo_evento || '',
              area_estudios: item.area_estudios || '',
              nombre_evento: item.nombre_evento || '',
              facilitador_curso: item.facilitador_curso || '',
              tipo_certificado: item.tipo_certificado || '',
              fecha_inicio_curso: item.fecha_inicio_curso || '',
              fecha_fin_curso: item.fecha_fin_curso || '',
              dias_curso: item.dias_curso || '',
              horas_curso: item.horas_curso || '',

            });



          });

          this.registro = true;
          this.us = false;
          this.scrollToTop();
        } else {
          this.registro = false;
          this.us = true;
        }
        return response;

      } catch (error) {
        this.registro = false;
        this.us = true;
      }
    },
    //Otros Datos Relevantes
    async getDatosRelevantes() {
      try {
        const response = await axios.get(this.url7);
        if (response.data && response.data.length > 0) {
          const data = response.data;
          this.otros_datos_personalesarray = [];

          data.forEach(item => {

            this.otros_datos_personalesarray.push({

              idotros_datos_personales: item.id,
              tipo_logros: item.tipo_logros || '',
              descripcion_logros: item.descripcion_logros || '',
              descripcion_fracasos: item.descripcion_fracasos || '',

            });



          });

          this.registro = true;
          this.us = false;
          this.scrollToTop();
        } else {
          this.registro = false;
          this.us = true;
        }
        return response;
      } catch (error) {
        this.registro = false;
        this.us = true;
      }
    },
    //Informacion de Contacto
    async getInformacionContacto() {
      try {
        const response = await axios.get(this.url8);
        if (response.data && response.data.length > 0) {
          const data = response.data;
          this.informacion_contactoarray = [];

          data.forEach(item => {

            this.informacion_contactoarray.push({

              idinformacion_contacto: item.id,
              referencia_nombres: item.referencia_nombres || '',
              referencia_apellidos: item.referencia_apellidos || '',
              referencia_correo_electronico: item.referencia_correo_electronico || '',
              referencia_telefono: item.referencia_telefono || '',

            });



          });


          this.registro = true;
          this.us = false;
          this.scrollToTop();
        } else {
          this.registro = false;
          this.us = true;
        }
        return response;
      } catch (error) {
        this.registro = false;
        this.us = true;
      }
    },
    //Declaracion Personal
    async getDeclaracionPersonal() {
      try {
        const response = await axios.get(this.url9);
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          this.iddeclaracion_personal = data.id;
          this.texto = data.texto;

          this.isEditing7 = true;
          this.modoedit7 = false;
          this.registro = true;
          this.us = false;
          this.scrollToTop();
        } else {
          this.isEditing7 = false;
          this.modoedit7 = true;
          this.registro = false;
          this.us = true;
        }
        return response;
      } catch (error) {
        this.registro = false;
        this.us = true;
      }
    },

    //Guardar Informacion
    //Guardar Datos Personales
    guardarDatosPersonales(event) {

      event.preventDefault();
      var mifoto = document.getElementById('fotoimg');
      this.imagen = mifoto.src;

      this.activeTab = "personal";
      this.mostrardatospersonales = false;
      this.regresar1 = true;

    },
    async regresarADatosPersonales() {
      // Lógica para regresar a datos personales
      const response = await axios.get(this.url1);
          if (response.data && response.data.length > 0) {
              const data = response.data[0];
              this.CIInfPer = data.CIInfPer;
              this.ApellInfPer = data.ApellInfPer;
              this.ApellMatInfPer = data.ApellMatInfPer;
              this.NombInfPer = data.NombInfPer;
              this.NacionalidadPer = data.NacionalidadPer;
              //this.LugarNacimientoPer = data.LugarNacimientoPer;
              this.FechNacimPer = data.FechNacimPer;
              this.GeneroPer = data.GeneroPer;
              this.CiudadPer = data.CiudadPer;
              this.DirecDomicilioPer = data.DirecDomicilioPer;
              this.Telf1InfPer = data.Telf1InfPer;
              this.mailPer = data.mailPer;
              this.imagen= data.fotografia;
            
              this.isEditing = true;
              this.modoedit = false;
              this.activeTab = "datos";
              this.mostrardatospersonales = true;
              this.regresar1 = false;
          } else {
              this.isEditing = false;
              this.modoedit = true;
              this.activeTab = "datos";
              this.regresar1 = false;
              this.mostrardatospersonales = true;
          }
          return response;
      },
      //Guardar Declaracion Personal
      guardaDeclaracionPersonal(event) {
      event.preventDefault();
      if(this.texto.trim()!==''){
          
          var parametros = {
              CIInfPer: this.idus,
              texto: this.texto.trim()


          }

          enviarsolig('POST', parametros, 'http://192.168.38.177/cvubackendv2/api/cvn/v1/declaracion_personal', 'Resumen del Curriculum Guardadas');
          this.activeTab = "formacion";
          this.mostrardelaracionpersonal = false;
          this.regresar2 = true;
      }else{
          mostraralertas2('No deje campos en blanco','warning');
      }




      },
      async regresarADeclaracionPersonal() {
      // Lógica para regresar a datos personales
        

          const response = await axios.get(this.url9);
          if (response.data && response.data.length > 0) {
              const data = response.data[0];
              this.iddeclaracion_personal = data.id;
              this.texto = data.texto;


              this.isEditing7 = true;
              this.modoedit7 = false;
              this.activeTab = "personal";
              this.regresar2 = false;
              this.mostrardelaracionpersonal = true;
          } else {
              this.isEditing7 = false;
              this.modoedit7 = true;
              this.regresar2 = false;
              this.activeTab = "personal";
              this.mostrardelaracionpersonal = true;
          }
          return response;
      },
      //Guardar Fomacion Academica
      guardarFormacionAcademica(event) {
      event.preventDefault();

      //mostraralertas2('Formación Académica Guardada','success');


      this.activeTab = "experiencia";
      this.mostrarformacionacademica = false;
      this.regresar3 = true;


      },
      async regresarAFormacionAcademica() {


        try {
            const response = await axios.get(this.url2);
            
                
            
            if (response.data && response.data.length > 0) {
                const data = response.data;
                
                this.titulosBachiller = [];
                this.titulosUniversitarios = [];
                this.titulosPosgrado = [];
                
                data.forEach(item => {
                    if (item.estudios_bachiller_culminados === 'Si' && item.titulo_bachiller_obtenido && item.institucion_bachiller) {
                        this.titulosBachiller.push({
                            
                            idformacion_academica: item.id,
                            titulo_bachiller_obtenido: item.titulo_bachiller_obtenido || '',
                            institucion_bachiller: item.institucion_bachiller || '',
                            fecha_graduacion_bachiller: item.fecha_graduacion_bachiller || '',
                            especialidad_bachiller: item.especialidad_bachiller || ''
                        });
                        if(this.titulosBachiller.length > 0){
                            this.sidatos=false;
                        }else{
                            this.sidatos=true;
                        }
                    }
                    if (item.estudios_universitarios_culminados === 'Si' && item.titulo_universitario_obtenido && item.institucion_universitaria) {
                        this.titulosUniversitarios.push({
                            
                            idformacion_academica: item.id,
                            titulo_universitario_obtenido: item.titulo_universitario_obtenido || '',
                            institucion_universitaria: item.institucion_universitaria || '',
                            fecha_graduacion: item.fecha_graduacion || '',
                            especialidad: item.especialidad || ''
                        });
                    }
                    
                    if (item.estudios_posgrado_culminados === 'Si' && item.titulo_posgrado_obtenido && item.institucion_posgrado) {
                        this.titulosPosgrado.push({
                            
                            idformacion_academica: item.id,
                            titulo_posgrado_obtenido: item.titulo_posgrado_obtenido || '',
                            institucion_posgrado: item.institucion_posgrado || '',
                            fecha_graduacion_posgrado: item.fecha_graduacion_posgrado || '',
                            especialidad_posgrado: item.especialidad_posgrado || ''
                        });
                    }
                });
                
                
                this.isEditing8 = true;
                this.modoedit8 = false;
                this.regresar3 = false;
                this.Titulouni();
                this.Titulobachi();
                this.Posgra();
                this.activeTab = "formacion";
                this.mostrarformacionacademica = true;
            } else {
                
                if(this.titulosBachiller.length > 0){
                    this.sidatos=false;
                }else{
                    const response2 = await axios.get(this.url11);
                    const data2 = response2.data[0];
                    this.sidatos=true;
                    this.estudios_bachiller_culminados = 'Si';
                    this.Titulobachi();
                    this.nuevoTituloBachiller.titulo_bachiller_obtenido = data2.Bachillerato;
                    this.nuevoTituloBachiller.institucion_bachiller = data2.NombColegio;
                    this.nuevoTituloBachiller.fecha_graduacion_bachiller = data2.FechGrado;
                    this.nuevoTituloBachiller.especialidad_bachiller = data2.Especialidad;
                }
                this.isEditing8 = false;
                this.modoedit8 = true;
                this.regresar3 = false;
                this.Titulouni();
                this.Posgra();
                this.Titulobachi();
                this.activeTab = "formacion";
                this.mostrarformacionacademica = true;
            }
            
            return response;
        } catch (error) {
            console.error('Error al obtener formación académica:', error);
            throw error; 
        }
      },
      //Guardar Experiencia
      guardaExperiencia(event) {
      event.preventDefault();

      //mostraralertas2('Experiencia Profesional Guardada','success');
      this.activeTab = "investigacion";
      this.mostrarexperienciasprofesionales = false;
      this.regresar4 = true;


      },
      async regresarAExperiencia() {
      try {
          const response = await axios.get(this.url3);
          if (response.data && response.data.length > 0) {
              const data = response.data;
              this.cargosEmpresas = [];
              this.cargosPasantias = [];

              data.forEach(item => {
                  if (item.cargos_desempenados === 'Si' && item.empresa_institucion && item.cargo_desempenado_empresa) {
                      this.cargosEmpresas.push({

                          idexperiencias_profesionales: item.id,
                          empresa_institucion: item.empresa_institucion || '',
                          fecha_inicio_empresa: item.fecha_inicio_empresa || '',
                          fecha_fin_empresa: item.fecha_fin_empresa || '',
                          cargo_desempenado_empresa: item.cargo_desempenado_empresa || '',
                          descripcion_funciones_empresa: item.descripcion_funciones_empresa || '',
                          logros_resultados_empresa: item.logros_resultados_empresa || ''
                      });
                  }
                  if (item.practicas_profesionales === 'Si' && item.empresa_institucion_practicas && item.area_trabajo_practicas) {
                      this.cargosPasantias.push({

                          idexperiencias_profesionales: item.id,
                          empresa_institucion_practicas: item.empresa_institucion_practicas || '',
                          fecha_inicio_practicas: item.fecha_inicio_practicas || '',
                          fecha_fin_practicas: item.fecha_fin_practicas || '',
                          area_trabajo_practicas: item.area_trabajo_practicas || '',
                          descripcion_funciones_practicas: item.descripcion_funciones_practicas || ''
                      });
                  }


              });
              this.fechacargos="";
              this.fechaFinLabel="";
              this.trabajo = false;
              this.isEditing1 = true;
              this.modoedit1 = false;
              this.regresar4 = false;
              this.activeTab = "experiencia";
              this.mostrarexperienciasprofesionales = true;
              this.Cargos();
              this.Practicas();
              this.FechaCarg();
          } else {
              this.fechacargos="";
              this.fechaFinLabel="";
              this.trabajo = false;
              this.isEditing1 = false;
              this.modoedit1 = true;
              this.regresar4 = false;
              this.activeTab = "experiencia";
              this.Cargos();
              this.Practicas();
              this.FechaCarg();
              this.mostrarexperienciasprofesionales = true;
          }
          return response;
          
      } catch (error) {
          console.error('Error al obtener Expreciencas Profesionales:', error);
          throw error; 
      }
      },
      //Guardar Investigacion
      guardaInvestigacion(event) {
        event.preventDefault();

        //mostraralertas2('Investigaciones y Publicaciones Guardada','success');


        this.activeTab = "idioma";
        this.mostrarinvestigacionpublicaciones = false;
        this.regresar5 = true;


      },
      async regresarAInvestigacion() {



              const response = await axios.get(this.url4);
          if (response.data && response.data.length > 0) {
              const data = response.data;
              this.publicacionesarray = [];

              data.forEach(item => {
                  if (item.publicaciones === 'Si' && item.publicacion_tipo && item.publicacion_titulo) {
                      this.publicacionesarray.push({

                          idinvestigacion_publicaciones: item.id,
                          publicacion_tipo: item.publicacion_tipo || '',
                          publicacion_titulo: item.publicacion_titulo || '',
                          link_publicación: item.link_publicación || '',
                          congreso_evento: item.congreso_evento || ''
                      });
                  }
                  

              });

              this.isEditing2 = true;
              this.modoedit2 = false;
              this.regresar5 = false;
              this.activeTab = "investigacion";
              this.mostrarinvestigacionpublicaciones = true;
              this.Investigaciones();
          } else {
              this.isEditing2 = false;
              this.modoedit2 = true;
              this.regresar5 = false;
              this.activeTab = "investigacion";
              this.mostrarinvestigacionpublicaciones = true;
              this.Investigaciones();
          }
          return response;
      },
      //Guardar Idiomas
      guardaIdiomas(event) {
      event.preventDefault();
      //mostraralertas2('Idiomas Guardados','success');

      this.activeTab = "habilidades";
      this.mostraridiomas = false;
      this.regresar6 = true;


      },
      async regresarAIdiomas() {


              
              const response = await axios.get(this.url5);
          if (response.data && response.data.length > 0) {
              const data = response.data;
              this.idiomasarray = [];

              data.forEach(item => {
                  
                      this.idiomasarray.push({

                          idlenguaje: item.id,
                          idioma: item.idioma || '',
                          comprension_auditiva: item.comprension_auditiva || '',
                          comprension_lectura: item.comprension_lectura || '',
                          interaccion_oral: item.interaccion_oral || '',
                          expresion_oral: item.expresion_oral || '',
                          expresion_escrita: item.expresion_escrita || '',
                          certificado: item.certificado || '',
                      });
                  
                  

              });
              
              this.isEditing3 = true;
              this.modoedit3 = false;
              this.regresar6 = false;
              this.activeTab = "idioma";
              this.mostraridiomas = true;
          } else {
              this.isEditing3 = false;
              this.modoedit3 = true;
              this.regresar6 = false;
              this.activeTab = "idioma";
              this.mostraridiomas = true;
          }
          return response;
      },
      //Guardar Habilidades
      guardaHabilidades(event) {
        event.preventDefault();
        //mostraralertas2('Habilidades Guardadas','success');

        this.activeTab = "capacitaciones";
        this.mostrarsw = false;
        this.regresar9 = true;
      },
      async regresarAHabilidades() {
   
              const response = await axios.get(this.url6);
          if (response.data && response.data.length > 0) {
              const data = response.data;
              this.habilidades_comunicativas_array = [];
              this.habilidades_creativas_array = [];
              this.habilidades_informaticas_array = [];
              this.habilidades_liderazgo_array = [];
              this.oficios_subactividades_array = [];
              this.otro_habilidades_array = [];
              
              data.forEach(item => {
                  if (item.habilidades_comunicativas || item.descripcion_habilidades_comunicativas) {
                      this.habilidades_comunicativas_array.push({
                          
                          idhabilidades_informaticas: item.id,
                          habilidades_comunicativas: item.habilidades_comunicativas || '',
                          descripcion_habilidades_comunicativas: item.descripcion_habilidades_comunicativas || '',
                      });
                  }
                  if (item.habilidades_creativas || item.descripcion_habilidades_creativas) {
                      this.habilidades_creativas_array.push({
                          
                          idhabilidades_informaticas: item.id,
                          habilidades_creativas: item.habilidades_creativas || '',
                          descripcion_habilidades_creativas: item.descripcion_habilidades_creativas || '',
                      });
                  }
                  
                  if (item.habilidades_informaticas_cv || item.descripcion_habilidades_informaticas_cv) {
                      this.habilidades_informaticas_array.push({
                          
                          idhabilidades_informaticas: item.id,
                          habilidades_informaticas_cv: item.habilidades_informaticas_cv || '',
                          descripcion_habilidades_informaticas_cv: item.descripcion_habilidades_informaticas_cv || '',
                      });
                  }
                  if (item.habilidades_liderazgo || item.descripcion_habilidades_liderazgo) {
                      this.habilidades_liderazgo_array.push({
                          
                          idhabilidades_informaticas: item.id,
                          habilidades_liderazgo: item.habilidades_liderazgo || '',
                          descripcion_habilidades_liderazgo: item.descripcion_habilidades_liderazgo || '',
                      });
                  }
                  if (item.oficios_subactividades || item.descripcion_oficios_subactividades) {
                      this.oficios_subactividades_array.push({
                          
                          idhabilidades_informaticas: item.id,
                          oficios_subactividades: item.oficios_subactividades || '',
                          descripcion_oficios_subactividades: item.descripcion_oficios_subactividades || '',
                      });
                  }
                  if (item.otro_habilidades) {
                      this.otro_habilidades_array.push({
                          
                          idhabilidades_informaticas: item.id,
                          otro_habilidades: item.otro_habilidades || '',
                      });
                  }
              });
              
              this.isEditing4 = true;
              this.modoedit4 = false;
              this.regresar9 = false;
              this.ComunHabi();
              this.CreaHabi();
              this.LideHabi();
              this.InfoHabi();
              this.OfiHabi();
              this.OtrosHabi();
              this.activeTab = "habilidades";
              this.mostrarsw = true;
          } else {
              this.isEditing4 = false;
              this.modoedit4 = true;
              this.regresar9 = false;
              this.ComunHabi();
              this.CreaHabi();
              this.LideHabi();
              this.InfoHabi();
              this.OfiHabi();
              this.OtrosHabi();
              this.activeTab = "habilidades";
              this.mostrarsw = true;
          }
          return response;
      },
      //Guardar Cursos Capacitacines
      guardaCursosCapacitaciones(event) {
        event.preventDefault();
        // mostraralertas2('Cursos y/o Capacitaciones Guardadas','success');

        this.activeTab = "relevantes";
        this.mostrarcapacitaciones = false;
        this.regresar7 = true;
      },
      async regresarACursosCapacitaciones() {
      // Lógica para regresar a datos personales


              const response = await axios.get(this.url10);
          if (response.data && response.data.length > 0) {
              const data = response.data;
              this.curso_capacitacionarray = [];

              data.forEach(item => {
                  
                      this.curso_capacitacionarray.push({

                          idcursoscapacitaciones: item.id,
                          intitucion_curso: item.intitucion_curso || '',
                          tipo_evento: item.tipo_evento || '',
                          area_estudios: item.area_estudios || '',
                          nombre_evento: item.nombre_evento || '',
                          facilitador_curso: item.facilitador_curso || '',
                          tipo_certificado: item.tipo_certificado || '',
                          fecha_inicio_curso: item.fecha_inicio_curso || '',
                          fecha_fin_curso: item.fecha_fin_curso || '',
                          dias_curso: item.dias_curso || '',
                          horas_curso: item.horas_curso || '',
                        
                      });
                  
                  

              });
              
              this.isEditing9 = true;
              this.modoedit9 = false;
              this.regresar7 = false;
              this.activeTab = "capacitaciones";
              this.mostrarcapacitaciones = true;
          } else {
              this.isEditing9 = false;
              this.modoedit9 = true;
              this.regresar7 = false;
              this.activeTab = "capacitaciones";
              this.mostrarcapacitaciones = true;
          }
          return response;
      },
      //Guardar Relevantes
      guardaRelevantes(event) {
        event.preventDefault();

        //mostraralertas2('Logros Guardados','success');


        this.activeTab = "contacto";
        this.mostrardatosrelevantes = false;
        this.regresar8 = true;


      },
      async regresarARelevantes() {
      // Lógica para regresar a datos personales
        

              const response = await axios.get(this.url7);
          if (response.data && response.data.length > 0) {
              const data = response.data;
              this.otros_datos_personalesarray = [];

              data.forEach(item => {
                  
                      this.otros_datos_personalesarray.push({

                          idotros_datos_personales: item.id,
                          tipo_logros: item.tipo_logros || '',
                          descripcion_logros: item.descripcion_logros || '',
                          descripcion_fracasos: item.descripcion_fracasos || '',
                        
                      });
                  
                  

              });

              this.isEditing5 = true;
              this.modoedit5 = false;
              this.activeTab = "relevantes";
              this.regresar8 = false;
              this.mostrardatosrelevantes = true;
          } else {
              this.isEditing5 = false;
              this.modoedit5 = true;
              this.regresar8 = false;
              this.activeTab = "relevantes";
              this.mostrardatosrelevantes = true;
          }
          return response;
      },
      //Guardar Contacto
      guardaContacto(event) {
        event.preventDefault();

        //mostraralertas2('Referencias Personales Guardadas','success');


        mostraralertas2('Sus Perfil se ha completado Con Exito', 'success');
        this.us = false;
        this.registro = true;



      },

  },
  //Creción de Métodos

};
</script>
