<template>
    <div class="container-fluid topbar bg-primary d-none d-lg-block sticky-top">
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
    <!-- MENU -->
    <nav class="navbar navbar-expand-sm navbar-light d-lg-block sticky-top">
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
    <div class="container-fluid registro">
        <!-- <section> begin ============================-->
        <section class="mt-7 py-0 registro" v-if="this.us">
            <!--/.bg-holder-->

            <div class="container">
                <div class="row">
                    <div class="col-lg-12 py-5 py-xl-5 py-xxl-7">
                        <h1 class="display-3 text-1000 fw-normal" v-if="this.esguardar">¡Ya estás a un paso de tener tu CVN!</h1>
                        <h1 class="display-3 text-1000 fw-normal" v-if="this.eseditar">Actualiza tus datos</h1>
                        <h1 class="display-3 subtt fw-bold">¡Completa tu perfil!</h1>
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
                                            <h3>Datos personales</h3>
                                            <p class="text-danger text-justify">Los datos personales cargados aquí son los que usted llenó en el sistema SIAD. Si su información no carga pruebe iniciando sesión nuevamente. Si el problema persiste ingrese al sistema <a href="http://sistemas.utelvt.edu.ec/socioeconomica/login.aspx" target="_blank"> SIAD </a>y verfique su información</p>
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
                                                        id="GeneroPer" v-model="this.GeneroPer"
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
                                             <!-- Foto
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
                                            </div>-->
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
                                                
                                                <h5 v-if="this.modoedition">Modo edición activado: id: {{ this.tituloBachillerEditIndex }}</h5>
                                                <p class="text-danger text-justify" v-if="this.modoedition">Para poder editar estos campos debe editarlos directamente en el SIAD</p>
                                                <p class="text-danger text-justify" v-else="this.modoedition">Los datos de la institución, especialidad, título y fecha de graduación son los que usted llenó en la ficha socioeconómica (SIAD).
                                                    Si los datos no le cargan puede volver a iniciar sesión nuevamente. Si el problema persiste ingrese a su página del <a href="http://sistemas.utelvt.edu.ec/socioeconomica/login.aspx" target="_blank"> SIAD </a>y verfique su información</p>
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
                                            <!-- Estudio Actual -->
                                            <!-- Estudios Universitarios -->
                                            <div class="col-12 py-3" v-if="this.mensajenuevo">
                                                <label class="text-danger" for="">Usted ya ha especificado que estudia actualmente. Para volverlo a especificar diríjase a la tabla "Estado Actual de Estudio Universitario" que se encuentra más abajo y elimine lo que añadió con anterioridad.</label>
                                            </div>
                                            <div class="col-12 py-3" v-if="this.sigueestudiandouniversidad">
                                                <label class="text-dark" for="">Si no ha terminado sus estudios universitarios significa que sigue estudiando, seleccione su facultad y escriba el nombre de su carrera.</label>
                                            </div>
                                            <!-- Facultad -->
                                            <div class="col-sm-6 col-md-6 col-xl-5" v-if="this.sigueestudiandouniversidad">
                                                <label class="text-dark" for="">Facultad</label>
                                                <div class="input-group-icon">
                                                    <select v-model="this.estudionuevoTituloUniversitario.facultades_universidad" v-on:change="EstudioacctualCarg"
                                                        class="form-select1 form-voyage-select input-box"
                                                        id="inputPersonOne">
                                                        <option value="" disabled selected>
                                                            Seleccione la facultad a la que pertenece
                                                        </option>
                                                        <option value="FACI">FACI</option>
                                                        <option value="FACAE">FACAE</option>
                                                        <option value="FACPED">FACPED</option>
                                                        <option value="FACSOS">FACSOS</option>
                                                        <option value="FACAP">FACAP</option>
                                                    </select><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-print"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Carrera Universitario -->
                                            <div class="col-6" v-if="this.sigueestudiandouniversidad">
                                                <label class="text-dark" for="">Título que Obtendrá</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="carrera_universidad"
                                                        v-model="this.estudionuevoTituloUniversitario.titulo_carrera_universidad" type="text"
                                                        placeholder="Su título saldrá dependiendo de la facultad" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-user-graduate"> </i></span>
                                                </div>
                                            </div>
                                            <!-- Carrera Universitario -->
                                            <div class="col-6" v-if="this.sigueestudiandouniversidad">
                                                <label class="text-dark" for="">Carrera</label>
                                                <div class="input-group-icon">
                                                    
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="carrera_universidad"
                                                        v-model="this.estudionuevoTituloUniversitario.carrera_universidad" type="text"
                                                        placeholder="Ingrese el nombre de la carrera en la que está" /><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-user-graduate"> </i></span>
                                                </div>
                                            </div>
                                            <!-- fecha de Graduacion -->
                                            <div class="col-6" v-if="this.sigueestudiandouniversidad">
                                                <label class="text-dark" for="">Fecha</label>
                                                <div class="input-group-icon">
                                                    <input class="form-control1 input-box form-voyage-control1"
                                                        id="fecha_graduacion" v-model="this.estudionuevoTituloUniversitario.fechaestudioactual"
                                                        type="date" :max="currentDate" disabled/><span
                                                        class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                                            class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                           <!-- Acciones Universitario -->
                                           <div class="col-12 text-center" v-if="this.sigueestudiandouniversidad">
                                                <button class="btn1 btn-secondary1 mb-2" type="button" @click="agregarEditarTituloUniversitario2">
                                                    Guardar
                                                </button>
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
                                            <!-- Estudio actualmente Registrados Tabla-->
                                            <div class="text-center rounded p-4">
                                                <div class="col-8 d-flex align-items-center justify-content-between mb-4">
                                                    <h5 class="mb-0">Estado Actual de Estudio Universitario</h5>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                    <table class="table text-start align-middle table-bordered table-hover mb-0">
                                                        <thead>
                                                            <tr class="text-dark">
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Facultad</th>
                                                                <th scope="col">Titulo</th>
                                                                <th scope="col">Fecha</th>
                                                                <th scope="col">Carrera</th>
                                                                <th scope="col">Acciones</th>
                                                               
                                                            </tr>
                                                        </thead>
                                                        <tbody id="contenido">
                                                            
                                                            <tr v-for="titulo in estudioactualtitulosUniversitarios" :key="titulo.idformacion_academica">
                                                                <td class="text-dark">{{ titulo.idformacion_academica }}</td>
                                                                <td class="text-dark">{{ titulo.facultades_universidad }}</td>
                                                                <td class="text-dark">{{ titulo.titulo_carrera_universidad }}</td>
                                                                <td class="text-dark">{{ titulo.fechaestudioactual }}</td>
                                                                <td class="text-dark">{{ titulo.carrera_universidad }}</td>
                                                                <td>
                                                                    <!--<button class="btn1 btn-secondary1" type="button" @click="editarTituloBachiller(titulo.idformacion_academica)"><i class="fa-solid fa-edit"></i></button>-->
                                                                    &nbsp;&nbsp;
                                                                    <button class="btn1 btn-secondary1" type="button" @click="eliminarTituloUniversitario32(titulo.idformacion_academica)"><i class="fa-solid fa-trash"></i></button>
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
                                                        <option value="Esducación/Universidad">Educación/Universidad</option>
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
        
        <!-- <section> close ============================-->
        <div class="container-fluid py-5" v-if="this.registro">
            <!-- ABOUT -->
            <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div class="container-fluid">
                    <div class="row">

                        <div class="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div class="about-text">
                                <small class="small-text">Le damos la bienvenida a su página de <span class="mobile-block">
                                        portafolio</span></small>
                                <h1 class="animated animated-text">
                                    <span class="mr-6">Mi nombre es </span>
                                    <div class="animated-info col-lg-12">
                                        <span class="animated-item">{{ this.ApellInfPer }} {{ this.ApellMatInfPer }} {{ this.NombInfPer }}</span>
                                    </div>
                                </h1>
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                
                                <p class="descripcionmia py-4">{{ this.texto }}</p>
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                <div class="custom-btn-group mt-4">

                                    <a href="#" class="btn button custom-btn custom-btn-bg custom-btn-link" @click="downloadCV"><i
                                            class='uil uil-file-alt'></i>Descargar CV
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- 
                        <div class="col-lg-5 col-md-12 col-12">
                            <div class="about-image svg">
                                <img src="@/assets/images/superior.png" class="img-fluid anima2" alt="svg image">
                            </div>
                        </div>
                       --> 
                        <div class="col-lg-5 order-1 order-lg-2">
                            <img src="@/assets/images/superior.png" class="img-fluid anima2" alt="">
                        </div>

                    </div>
                </div>
            </section>
             <!-- Services Section Begin--> 
             <section class="services spad" id="sobremi">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="services__title">
                                <div class="section-title">
                                    <span class="text-dark"></span>
                                </div>

                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                <!-- Services Section Begin
                                <img v-if="this.imagen" height="100" :src="this.imagen" id="fotoimg" class="img-fluid" alt="svg image">
                                <img v-else style="height: 120px;"
                                src="@/assets/images/userlogo.png"
                                id="fotoimg" class="img-fluid" alt="svg image">--> 
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="services__item">
                                        <div class="services__item__icon">
                                            <img src="@/assets/images/icons/si-1.png" alt="">
                                        </div>
                                        <h4>Mis Datos Personales</h4>
                                        <p>Número de Cédula: {{ this.CIInfPer }}</p>
                                        <p>Nombres y Apellidos: {{ this.NombInfPer }} {{ this.ApellInfPer }} {{ this.ApellMatInfPer }} </p>
                                        <p>Nacionalidad: {{ this.NacionalidadPer }} </p>
                                        <p>Fecha de Nacimiento: {{ this.FechNacimPer }} -- Edad: {{ this.edad }}</p>
                                        <p>Género: {{ this.GeneroPer }}</p>
                                        <p>Ciudad: {{ this.CiudadPer }}</p>
                                        <p>Dirección: {{ this.DirecDomicilioPer }}</p>
                                        <p>Teléfono: {{ this.Telf1InfPer }}</p>
                                        <p>Correo: {{ this.mailPer }}</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="services__item">
                                        <div class="services__item__icon">
                                            <img src="@/assets/images/icons/si-1.png" alt="">
                                        </div>
                                        <h4>Referencias Personales</h4>
                                        <div v-if="informacion_contactoarray.length > 0">
                                            <div v-for="(reffe, index) in informacion_contactoarray" :key="index">
                                                <p class="text-center">Referencia Nº {{ index+1 }} </p>
                                                <p>Nombres y Apellidos: {{ reffe.referencia_nombres }} {{ reffe.referencia_apellidos }}</p>
                                                <p>Correo Elecctrónico: {{ reffe.referencia_correo_electronico }}</p>
                                                <p>Teléfono: {{ reffe.referencia_telefono }}</p>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <p>No hay Referencias Personales Almacenadas.</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="services__item">
                                        <div class="services__item__icon">
                                            <img src="@/assets/images/icons/si-4.png" alt="">
                                        </div>
                                        <h4>Logros Obtenidos</h4>
                                        <div v-if="otros_datos_personalesarray.length > 0">
                                            <div v-for="(logro, index) in otros_datos_personalesarray" :key="index">
                                                <p class="">*Logro Nº {{ index+1 }} </p>
                                                <p>Tipo de Logro: {{ logro.tipo_logros }}</p>
                                                <p>Decripción del Logro: {{ logro.descripcion_logros }}</p>
                                                <p>Decripción de Fracasos: {{ logro.descripcion_fracasos }}</p>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <p>No hay Logros Almacenados.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Services Section End -->
            <!-- PROJECTS -->
            <section class="project py-5" id="experiencias">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-lg-11 text-center mx-auto col-12">

                            <div class="col-lg-8 mx-auto">
                                <h2>Mis Experiencias Profesionales y Formación Académica</h2>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </section>
           
            <!-- FEATURES--> 
            <section class="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <h2 class="mb-4">Experiencias Profesionales - Empresa</h2>

                            <div class="timeline" v-if="cargosEmpresas.length > 0">
                                <div class="timeline-wrapper" v-for="(expe, index) in cargosEmpresas" :key="index">
                                    <div class="timeline-yr">
                                        <span>{{ new Date(expe.fecha_fin_empresa ).getFullYear()}}</span>
                                    </div>
                                    <div class="timeline-info">
                                        <h3>
                                            <span>Empresa: {{ expe.empresa_institucion }} </span>
                                        </h3>
                                        <h3>
                                            <small>Cargo: {{ expe.cargo_desempenado_empresa }}</small>
                                        </h3>
                                        <p>Funciones: {{ expe.descripcion_funciones_empresa }}</p>
                                    </div>
                                </div>

                                
                                
                            </div>
                            <div v-else>
                                <p>No hay Experienciasas En Empresas Almacenados.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12">
                            <h2 class="mb-4 mobile-mt-2">Experiencias Profesionales - Pasantías</h2>

                            <div class="timeline" v-if="cargosPasantias.length > 0">
                               
                                    <div class="timeline-wrapper" v-for="(pasan, index) in cargosPasantias" :key="index"> 
                                        <div class="timeline-yr">
                                            <span>{{ new Date(pasan.fecha_fin_practicas ).getFullYear()}}</span>
                                        </div>
                                        <div class="timeline-info">
                                            <h3>
                                                <span>Empresa: {{ pasan.empresa_institucion_practicas }} </span>
                                            </h3>
                                            <h3>
                                                <small>Área: {{ pasan.area_trabajo_practicas }}</small>
                                            </h3>
                                            <p>Funciones: {{ pasan.descripcion_funciones_practicas }}</p>
                                        </div>
                                    </div>

                                
                                
                            </div>
                            <div v-else>
                                <p>No hay Experienciasas En Pasantías Almacenados.</p>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </section>
            <section class="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <h2 class="mb-4">Formación Académica - Bachillerato</h2>

                            <div class="timeline" v-if="titulosBachiller.length > 0">
                                
                                    <div class="timeline-wrapper" v-for="(bachi, index) in titulosBachiller" :key="index">
                                        <div class="timeline-yr">
                                            <span>{{ new Date(bachi.fecha_graduacion_bachiller ).getFullYear()}}</span>
                                        </div>
                                        <div class="timeline-info">
                                            <h3>
                                                <span>Título: {{ bachi.titulo_bachiller_obtenido }} </span>
                                            </h3>
                                            <h3>
                                                <small>Institución: {{ bachi.institucion_bachiller }}</small>
                                            </h3>
                                            <p>Especialidad: {{ bachi.especialidad_bachiller }}</p>
                                        </div>
                                    </div>

                                
                                
                            </div>
                            <div v-else>
                                <p>No hay Formación Académica de Bachillerato Almacenados.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12">
                            <h2 class="mb-4 mobile-mt-2">Formación Académica - Universidad</h2>

                            <div class="timeline" v-if="titulosUniversitarios.length > 0">
                               
                                    <div class="timeline-wrapper" v-for="(uni, index) in titulosUniversitarios" :key="index">
                                        <div class="timeline-yr">
                                            <span>{{ new Date(uni.fecha_graduacion ).getFullYear()}}</span>
                                        </div>
                                        <div class="timeline-info">
                                            <h3>
                                                <span>Título: {{ uni.titulo_universitario_obtenido }} </span>
                                            </h3>
                                            <h3>
                                                <small>Institución: {{ uni.institucion_universitaria }}</small>
                                            </h3>
                                            <p>Especialidad: {{ uni.especialidad }}</p>
                                        </div>
                                    </div>

                                
                                
                            </div>
                            <div v-else>
                                <p>No hay Formación Académica de Universidad Almacenados.</p>
                            </div>
                        </div>
                        <div class="col-lg-12 col-12 text-center novato">
                            <h2 class="mb-4 mobile-mt-2">Formación Académica - Posgrado</h2>

                            <div class="timeline text-center" v-if="titulosPosgrado.length > 0">
                                
                                    <div class="timeline-wrapper text-center" v-for="(posgra, index) in titulosPosgrado" :key="index">
                                        <div class="timeline-yr text-center">
                                            <span>{{ new Date(posgra.fecha_graduacion_posgrado ).getFullYear()}}</span>
                                        </div>
                                        <div class="timeline-info text-center">
                                            <h3>
                                                <span>Título: {{ posgra.titulo_posgrado_obtenido }} </span>
                                            </h3>
                                            <h3>
                                                <small>Institución: {{ posgra.institucion_posgrado }}</small>
                                            </h3>
                                            <p>Especialidad: {{ posgra.especialidad_posgrado }}</p>
                                        </div>
                                    </div>

                               
                                
                            </div>
                            <div v-else>
                                <p>No hay Formación Académica De Posgrado Almacenados.</p>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </section>
            <!-- Habilidades Start -->
            <div class="habili container-fluid py-6" id="Habilidades">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="d-flex align-items-center mb-5">
                                <div class="years flex-shrink-0 text-center me-4">
                                    <h1 class="display-1 mb-0">Mis</h1>
                                    <h5 class="mb-0">Habilidades</h5>
                                </div>
                                
                            </div>
                            <p class="mb-4">Aquí están todas mis habilidades tales como: </p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Comunicativas</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Creativas</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Liderazgo</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Informáticas</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Oficios/Subactividades</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Otras Habilidades</p>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="row g-3 mb-4">
                                <div class="col-sm-6">
                                    <img class="img-fluid rounded anima2" src="@/assets/images/habilidadesoiad.jpg" alt="">
                                </div>
                                <div class="col-sm-6">
                                    <img class="img-fluid rounded anima2" src="@/assets/images/habilidadimg.jpg" alt="">
                                </div>
                            </div>
                            <ul class="nav nav-pills rounded border border-2 border-primary mb-5">
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab1-1">Habilidades Comunicativas</button>
                                </li>
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab1-2">Habilidades Creativas</button>
                                </li>
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab1-3">Habilidades de Liderazgo</button>
                                </li>
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab1-4">Habilidades Informáticas</button>
                                </li>
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab1-5">Oficios/Subactividades</button>
                                </li>
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab1-6">Otras Habilidades</button>
                                </li>
                                
                            </ul>
                            <div class="tab-content">
                                <div id="tab1-1" class="tab-pane fade show p-0 active" v-if="habilidades_comunicativas_array.length > 0">
                                    <div class="row gy-5 gx-4" >
                                        <div class="col-sm-6" v-for="(habi1, index) in habilidades_comunicativas_array" :key="index">
                                            <p class="text-primary mb-1">Habilidad Comunicativa</p>
                                            <h5>{{ habi1.habilidades_comunicativas }}</h5>
                                            <hr class="text-primary my-2">
                                            
                                            <h6 class="mb-0">Descripción: {{ habi1.descripcion_habilidades_comunicativas }}</h6>
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                                
                                <div id="tab1-2" class="tab-pane fade show p-0" v-if="habilidades_creativas_array.length > 0">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-sm-6" v-for="(habi2, index) in habilidades_creativas_array" :key="index">
                                            <p class="text-primary mb-1">Habilidad Creativa</p>
                                            <h5>{{ habi2.habilidades_creativas }}</h5>
                                            <hr class="text-primary my-2">
                                            
                                            <h6 class="mb-0">Descripción: {{ habi2.descripcion_habilidades_creativas }}</h6>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                                <div id="tab1-3" class="tab-pane fade show p-0" v-if="habilidades_liderazgo_array.length > 0">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-sm-6" v-for="(habi3, index) in habilidades_liderazgo_array" :key="index">
                                            <p class="text-primary mb-1">Habilidad de Liderazgo</p>
                                            <h5>{{ habi3.habilidades_liderazgo }}</h5>
                                            <hr class="text-primary my-2">
                                            
                                            <h6 class="mb-0">Descripción: {{ habi3.descripcion_habilidades_liderazgo }}</h6>
                                        </div>
                                       
                                    </div>
                                </div>
                               
                                <div id="tab1-4" class="tab-pane fade show p-0" v-if="habilidades_informaticas_array.length > 0">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-sm-6" v-for="(habi4, index) in habilidades_informaticas_array" :key="index">
                                            <p class="text-primary mb-1">Habilidad Informáctica</p>
                                            <h5>{{ habi4.habilidades_informaticas_cv }}</h5>
                                            <hr class="text-primary my-2">
                                            
                                            <h6 class="mb-0">Descripción: {{ habi4.descripcion_habilidades_informaticas_cv }}</h6>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                                <div id="tab1-5" class="tab-pane fade show p-0" v-if="oficios_subactividades_array.length > 0">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-sm-6" v-for="(habi5, index) in oficios_subactividades_array" :key="index">
                                            <p class="text-primary mb-1">Oficios/Subactividades</p>
                                            <h5>{{ habi5.oficios_subactividades }}</h5>
                                            <hr class="text-primary my-2">
                                            
                                            <h6 class="mb-0">Descripción: {{ habi5.descripcion_oficios_subactividades }}</h6>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                                <div id="tab1-6" class="tab-pane fade show p-0" v-if="otro_habilidades_array.length > 0">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-sm-6" v-for="(habi6, index) in otro_habilidades_array" :key="index">
                                            <p class="text-primary mb-1">Otra Habilidad</p>
                                            <hr class="text-primary my-2">
                                            
                                            <h6 class="mb-0">Descripción: {{ habi6.otro_habilidades }}</h6>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <!-- About End -->
            <!-- Idiomas Y Cursos -->
            <div class="idomm container-fluid py-6 pb-5" id="Idiomas">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 class="display-5 mb-5">Idiomas, Cursos y Publicacciones</h1>
                            <p class="mb-4">Información sobre los idiomas que domino incluyendo su comprensión y expresión del mismo. También se encuentra información sobre los cursos que he realizado
                            .También información sobre mis publicaciones.
                            </p>
                            
                           
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <ul class="nav nav-pills rounded border border-2 border-primary mb-5">
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">Idiomas</button>
                                </li>
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">Cursos</button>
                                </li>
                                <li class="nav-item w-100">
                                    <button class="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-3">Publicacciones</button>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="tab-1" class="tab-pane fade show p-0 active" v-if="idiomasarray.length > 0">
                                    <div class="row gy-5 gx-4" >
                                        <div class="col-sm-6" v-for="(idio, index) in idiomasarray" :key="index">
                                            <h5>{{ idio.idioma }}</h5>
                                            <hr class="text-primary my-2">
                                            <p class="text-primary mb-1">Niveles del Idioma</p>
                                            <h6 class="mb-0">Comprensión Aduitiva: {{ idio.comprension_auditiva }}</h6>
                                            <h6 class="mb-0">Comprensión Lectura: {{ idio.comprension_lectura }}</h6>
                                            <h6 class="mb-0">Interacción Oral: {{ idio.interaccion_oral }}</h6>
                                            <h6 class="mb-0">Expresión Oral: {{ idio.expresion_oral }}</h6>
                                            <h6 class="mb-0">Expresión Escrita: {{ idio.expresion_escrita }}</h6>
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                                
                                <div id="tab-2" class="tab-pane fade show p-0" v-if="curso_capacitacionarray.length > 0">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-sm-6" v-for="(capa, index) in curso_capacitacionarray" :key="index">
                                            <h5>{{ capa.nombre_evento }}</h5>
                                            <hr class="text-primary my-2">
                                            <p class="text-primary mb-1">Desde: {{ capa.fecha_inicio_curso }} - Hasta: {{ capa.fecha_fin_curso }}</p>
                                            <h6 class="mb-0">Institución: {{ capa.intitucion_curso }}</h6>
                                            <h6 class="mb-0">Tipo de Evento: {{ capa.tipo_evento }}</h6>
                                            <h6 class="mb-0">Área de Estudios: {{ capa.area_estudios }}</h6>
                                            <h6 class="mb-0">Nº Días: {{ capa.dias_curso }}</h6>
                                            <h6 class="mb-0">Nº Horas: {{ capa.horas_curso }}</h6>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                                <div id="tab-3" class="tab-pane fade show p-0" v-if="publicacionesarray.length > 0">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-sm-6" v-for="(publi, index) in publicacionesarray" :key="index">
                                            <h5>{{ publi.publicacion_titulo }}</h5>
                                            <hr class="text-primary my-2">
                                            <p class="text-primary mb-1">Más Información sobre la Publicación</p>
                                            <h6 class="mb-0">Tipo de Publicación: {{ publi.publicacion_tipo }}</h6>
                                            <h6 class="mb-0">Ha estado en Congreso o Eventos: {{ publi.congreso_evento }}</h6>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Idiomas Y Cursos End -->
            
            
        </div>

    </div>
    <!-- Botón para Subir Start -->
    <a href="#" class="btn btn-primary btn-md-square back-to-top">
        <i class="fa fa-arrow-up"></i>
    </a>   
     <!-- Botón para Subir End -->
</template>
<style scoped>
@import url("@/assets/styles/tooplate-style.css");

@import url("@/assets/styles/unicons.css");
</style>
<script>
import script2 from "@/store/custom.js";
import axios from "axios";
import { useRoute } from "vue-router";
import store from "@/store";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { getMe } from '@/store/auth'; 
import { mostraralertas2, enviarsolig, enviarsoliedit, confimar } from '@/store/funciones';
export default {
    data() {
        return {
            idus: 0,
            editingIndex: null,
            logueado:null,
            editingIndex2: null,
            sigueestudiandouniversidad: false,
            mensajenuevo: false,
            estudioactualtitulosUniversitarios: [],
            //  título universitario
            estudionuevoTituloUniversitario: {
                facultades_universidad: "",
                titulo_carrera_universidad: "",
                carrera_universidad: "",
                fechaestudioactual: ""
            },
            
           //DAtos 
           fecha_inicio_empresa2:'',
           fecha_graduacion2:'',
           fecha_inicio_practicas2:'',
           fecha_graduacion_posgrado2:'',
           fecha_finalizacion_curso2:'',

            usuarios: null,
            editus: false,
            registro: false,
            us: true,
            //Datos Personales
            url1: "http://cvubackendv2.test/api/cvn/v1/informacionpersonal",
            iddatos_personales:0,
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
            url2: "http://cvubackendv2.test/api/cvn/v1/formacion_academica",
            url11: "http://cvubackendv2.test/api/cvn/v1/fichasocioeconomica",
            idformacion_academica:0,
            idfichasocioeconomica:0,
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
            url3: "http://cvubackendv2.test/api/cvn/v1/experiencia_profesionale",
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
            url4: "http://cvubackendv2.test/api/cvn/v1/investigacion_publicacione",
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
            url5: "http://cvubackendv2.test/api/cvn/v1/idioma",
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
            url6: "http://cvubackendv2.test/api/cvn/v1/habilidades_informatica",
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
            mostrarcapacitaciones:true,
            url10: "http://cvubackendv2.test/api/cvn/v1/cursoscapacitacion",
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
            url7: "http://cvubackendv2.test/api/cvn/v1/otros_datos_relevante",
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
            url8: "http://cvubackendv2.test/api/cvn/v1/informacion_contacto",
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
            url9: "http://cvubackendv2.test/api/cvn/v1/declaracion_personal",
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

        };
    },
    mounted() {
        
        //this.loadStylesBasedOnRole();
        const ruta = useRoute();
        this.idus = ruta.params.id;
        console.log(this.idus);
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
        /*
        validateNombresApellidos(value) {
            const words = value.trim().split(/\s+/);
            if (words.length < 4) {
                this.nombresApellidosError = 'Debe ingresar al menos dos nombres y dos apellidos.';
                this.boton1 = false;
            } else {
                this.nombresApellidosError = '';
                this.boton1 = true;
                
                this.ApellInfPer = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
            }
        },*/
        /*
        onNombresApellidosInput() {
            this.nombresApellidosTouched = true;
            this.validateNombresApellidos(this.ApellInfPer);
        },*/
        /*
        validateNumIdentificacion(value) {
           
            let sanitizedValue = value.replace(/\D/g, '');
            if (sanitizedValue.length > 10) {
                sanitizedValue = sanitizedValue.slice(0, 10);
            }
            this.CIInfPer = sanitizedValue;
            if (sanitizedValue.length !== 10) {
                this.numIdentificacionError = 'El número de identificación debe tener exactamente 10 dígitos.';
                this.boton1 = false;
            } else {
                this.numIdentificacionError = '';
                this.boton1 = true;
            }
        },*/
        /*
        onNumIdentificacionInput() {
            this.numIdentificacionTouched = true;
            this.validateNumIdentificacion(this.CIInfPer);
        },*/
        /*
        validatetelefonotouch(value) {
           
            let sanitizedValue = value.replace(/\D/g, '');
            if (sanitizedValue.length > 10) {
                sanitizedValue = sanitizedValue.slice(0, 10);
            }
            this.telefono = sanitizedValue;
            if (sanitizedValue.length !== 10) {
                this.telefonotouchError = 'El número de teléfono debe tener exactamente 10 dígitos.';
                this.boton1 = false;
            } else {
                this.telefonotouchError = '';
                this.boton1 = true;
            }
        },*/
        /*
        ontelefonotouchInput() {
            this.telefonotouch = true;
            this.validatetelefonotouch(this.telefono);
        },*/
        /*
        validatetelefonotouch2(value) {
           
           let sanitizedValue = value.replace(/\D/g, '');
           if (sanitizedValue.length > 10) {
               sanitizedValue = sanitizedValue.slice(0, 10);
           }
           this.telefonoinf = sanitizedValue;
           if (sanitizedValue.length !== 10) {
               this.telefonotouchError2 = 'El número de teléfono debe tener exactamente 10 dígitos.';
               this.boton2 = false;
           } else {
               this.telefonotouchError2 = '';
               this.boton2 = true;
           }
        },
       
        ontelefonotouchInput2() {
            this.telefonotouch2 = true;
            this.validatetelefonotouch2(this.telefonoinf);
        },
       /*
        validateCorreoElectronico(correo) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(correo)) {
                this.correoElectronicoError = 'El correo electrónico debe ser válido, incluyendo "@" y un dominio (por ejemplo, @example.com.ec).';
                this.boton1 = false;
            } else {
                this.correoElectronicoError = '';
                this.boton1 = true;
            }
        },*/
        /*
        onCorreoElectronicoInput() {
            this.correoElectronicoTouched = true;
            this.validateCorreoElectronico(this.correo_electronico);
        },*/
        /*
        validateCorreoElectronico2(correo) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(correo)) {
                this.correoElectronicoError2 = 'El correo electrónico debe ser válido, incluyendo "@" y un dominio (por ejemplo, @example.com.ec).';
                this.boton2 = false;
            } else {
                this.correoElectronicoError2 = '';
                this.boton2 = true;
            }
        },
        
        onCorreoElectronicoInput2() {
            this.correoElectronicoTouched2 = true;
            this.validateCorreoElectronico2(this.nuevosinformacion_contacto.referencia_correo_electronico);
        },*/
        cerrarsesion() {
            console.clear();
            localStorage.clear();
            window.location.replace('/');
        },
        perfil() {
            this.editus= false;
            this.registro= false;
            this.esguardar= false;
            this.us= true;
            this.mostrardatospersonales =true;
            this.mostrardatosrelevantes =true;
            this.mostrardelaracionpersonal =true;
            this.mostrarexperienciasprofesionales =true;
            this.mostrarformacionacademica =true;
            this.mostraridiomas =true;
            this.mostrarinformacioncontacto =true;
            this.mostrarinvestigacionpublicaciones =true;
            this.mostrarsw =true;
            this.activeTab = "datos";
            this.eseditar= true;
            this.isEditing= true;
            this.modoedit= false;

            this.isEditing1= true;
            this.modoedit1= false;

            this.isEditing2= true;
            this.modoedit2= false;

            this.isEditing3= true;
            this.modoedit3= false;

            this.isEditing4= true;
            this.modoedit4= false;

            this.isEditing5= true;
            this.modoedit5= false;

            this.isEditing6= true;
            this.modoedit6= false;

            this.isEditing7= true;
            this.modoedit7= false;

            this.isEditing8= true;
            this.modoedit8= false;
        },
        salir() {
            this.editus= false;
            this.eseditar=false;
            this.registro= true;
            this.us= false;
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
        //Datos Personales
        cambiarImagen() {
            let imgUrl = '';
            if (this.imagen instanceof Blob || this.imagen instanceof File) {
                // Si this.imagen es un objeto Blob o File
                // Asigna la URL del objeto de imagen al valor del input
                imgUrl = URL.createObjectURL(this.imagen);
            } else {
                // Si this.imagen no es un objeto Blob ni File
                // Vuelve a la imagen predeterminada si se selecciona "Otro" o ningún género
                if (this.GeneroPer === "Masculino") {
                    this.imagen = require("@/assets/images/usuariohombre.png"); // Reemplaza con la URL de la imagen masculina
                } else if (this.GeneroPer === "Femenino") {
                    this.imagen = require("@/assets/images/usuario.png"); // Reemplaza con la URL de la imagen femenina
                } else {
                    this.imagen = ''; // Volver a la imagen predeterminada si se selecciona "Otro" o ningún género
                }
                // Si hay una imagen seleccionada, crear una URL del objeto de imagen y asignarla al valor del input
                if (this.imagen instanceof Blob || this.imagen instanceof File) {
                    imgUrl = URL.createObjectURL(this.imagen);
                }
            }

            // Obtener el input de tipo file
            const input = document.getElementById('inputFoto');

            // Asignar la URL de la imagen al valor del input
            input.value = imgUrl;
        },

        //Formacion Academica
        Titulouni() {
            if (this.estudios_universitarios_culminados === "Si") {
                this.univer = true;
                this.posgrado = false;
                this.bachiler = false;
                this.sigueestudiandouniversidad=false;
                this.mensajenuevo= false;
                this.estudios_posgrado_culminados = "";
                this.estudios_bachiller_culminados = "";
            } else if(this.estudios_universitarios_culminados === "No"){
                if(this.estudioactualtitulosUniversitarios.length > 0){
                    this.mensajenuevo= true;
                    this.univer = false;
                    this.sigueestudiandouniversidad=false;
                }else{
                    this.mensajenuevo= false;
                    this.univer = false;
                    this.sigueestudiandouniversidad=true;
                }
                
            }else{
                this.univer = false;
                this.mensajenuevo= false;
            }
           

        },
        Posgra() {
            if (this.estudios_posgrado_culminados === "Si") {
                this.posgrado = true;
                this.bachiler = false;
                this.univer = false;
                this.estudios_bachiller_culminados = "";
                this.estudios_universitarios_culminados = "";
            } else {
                this.posgrado = false;
            }
        },
        Titulobachi() {
            if (this.estudios_bachiller_culminados === "Si") {
                this.bachiler = true;
                this.posgrado = false;
                this.univer = false;
                this.estudios_universitarios_culminados = "";
                this.estudios_posgrado_culminados = "";
            } else {
                this.bachiler = false;
            }
        },
       
        // Métodos para añadir/editar títulos
        async agregarEditarTituloBachiller() {
            if(this.nuevoTituloBachiller.titulo_bachiller_obtenido !=='' &&  this.nuevoTituloBachiller.fecha_graduacion_bachiller !=='' && this.nuevoTituloBachiller.fecha_graduacion !=='' && this.nuevoTituloBachiller.especialidad_bachiller !==''){
                if (this.tituloBachillerEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        estudios_bachiller_culminados: this.estudios_bachiller_culminados.trim(),
                        titulo_bachiller_obtenido: this.nuevoTituloBachiller.titulo_bachiller_obtenido.trim(),
                        institucion_bachiller: this.nuevoTituloBachiller.institucion_bachiller.trim(),
                        fecha_graduacion_bachiller: this.nuevoTituloBachiller.fecha_graduacion_bachiller.trim(),
                        especialidad_bachiller: this.nuevoTituloBachiller.especialidad_bachiller.trim(),
                    };

                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/formacion_academica/' + this.tituloBachillerEditIndex, 'Título de Bachiller Actualizado con éxito');

                    if (response && response.data) {
                        const index = this.titulosBachiller.findIndex(titulo => titulo.idformacion_academica === this.tituloBachillerEditIndex);
                        if (index !== -1) {
                            this.titulosBachiller.splice(index, 1, { ...this.nuevoTituloBachiller });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.tituloBachillerEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevoTituloBachiller();
                    this.scrollToTop();
                } else {
                
                    try {
                        const parametros = {
                                CIInfPer: this.idus,
                                estudios_bachiller_culminados: this.estudios_bachiller_culminados.trim(),
                                titulo_bachiller_obtenido: this.nuevoTituloBachiller.titulo_bachiller_obtenido.trim(),
                                institucion_bachiller: this.nuevoTituloBachiller.institucion_bachiller.trim(),
                                fecha_graduacion_bachiller: this.nuevoTituloBachiller.fecha_graduacion_bachiller.trim(),
                                especialidad_bachiller: this.nuevoTituloBachiller.especialidad_bachiller.trim(),
                            };
                            
                        
                        console.log(parametros);
                        
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/formacion_academica', 'Título de Bachiller Agregado con éxito');
                    
                        this.titulosBachiller.push({ idformacion_academica: response.data.data.id, 
                            titulo_bachiller_obtenido: this.nuevoTituloBachiller.titulo_bachiller_obtenido.trim(),
                            institucion_bachiller: this.nuevoTituloBachiller.institucion_bachiller.trim(),
                            fecha_graduacion_bachiller: this.nuevoTituloBachiller.fecha_graduacion_bachiller.trim(),
                            especialidad_bachiller: this.nuevoTituloBachiller.especialidad_bachiller.trim()});
                        this.resetNuevoTituloBachiller();
                        this.scrollToTop();
                        if(this.titulosBachiller.length > 0){
                            this.sidatos=false;
                        }else{
                            this.sidatos=true;
                        }
                        
                        
                        

                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
            
        },
        EstudioacctualCarg(){
            if(this.estudionuevoTituloUniversitario.facultades_universidad=='FACI'){
                this.estudionuevoTituloUniversitario.titulo_carrera_universidad = "Ing."
            }else if(this.estudionuevoTituloUniversitario.facultades_universidad=='FACAP'){
                this.estudionuevoTituloUniversitario.titulo_carrera_universidad = "Ing."
            }else{
                this.estudionuevoTituloUniversitario.titulo_carrera_universidad = "Lic."
            }
            this.estudionuevoTituloUniversitario.fechaestudioactual = new Date().toISOString().split('T')[0];
        },
        async agregarEditarTituloUniversitario2() {
            if(this.estudionuevoTituloUniversitario.facultades_universidad!=='' && this.estudionuevoTituloUniversitario.titulo_carrera_universidad!=='' && this.estudionuevoTituloUniversitario.fechaestudioactual !=='' && this.estudionuevoTituloUniversitario.carrera_universidad !==''){
                
                    
                    try {
                        const parametros = {
                                CIInfPer: this.idus,
                                estudios_universitarios_culminados: this.estudios_universitarios_culminados.trim(),
                                titulo_universitario_obtenido: this.estudionuevoTituloUniversitario.facultades_universidad.trim(),
                                institucion_universitaria: this.estudionuevoTituloUniversitario.titulo_carrera_universidad.trim(),
                                fecha_graduacion: this.estudionuevoTituloUniversitario.fechaestudioactual.trim(),
                                especialidad: this.estudionuevoTituloUniversitario.carrera_universidad.trim(),
                            };
                            
                        
                        console.log(parametros);
                        
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/formacion_academica', 'Estado de estudio universitario actual almacenado');
                    
                        this.estudioactualtitulosUniversitarios.push({ idformacion_academica: response.data.data.id,
                            facultades_universidad: this.estudionuevoTituloUniversitario.facultades_universidad.trim(),
                            titulo_carrera_universidad: this.estudionuevoTituloUniversitario.titulo_carrera_universidad.trim(),
                            fechaestudioactual: this.estudionuevoTituloUniversitario.fechaestudioactual.trim(),
                            carrera_universidad: this.estudionuevoTituloUniversitario.carrera_universidad.trim()});
                        this.resetNuevoTituloUniversitario22();
                        this.scrollToTop();
                        
                        
                        

                    } catch (error) {
                        console.log(error)
                    }
                
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
           
        },
        async agregarEditarTituloUniversitario() {
            if(this.nuevoTituloUniversitario.titulo_universitario_obtenido!=='' && this.nuevoTituloUniversitario.institucion_universitaria!=='' && this.nuevoTituloUniversitario.fecha_graduacion !=='' && this.nuevoTituloUniversitario.especialidad !==''){
                if (this.tituloUniversitarioEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        estudios_universitarios_culminados: this.estudios_universitarios_culminados.trim(),
                        titulo_universitario_obtenido: this.nuevoTituloUniversitario.titulo_universitario_obtenido.trim(),
                        institucion_universitaria: this.nuevoTituloUniversitario.institucion_universitaria.trim(),
                        fecha_graduacion: this.nuevoTituloUniversitario.fecha_graduacion.trim(),
                        especialidad: this.nuevoTituloUniversitario.especialidad.trim(),
                    };

                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/formacion_academica/' + this.tituloUniversitarioEditIndex, 'Título Universitario Actualizado con éxito');

                    if (response && response.data) {
                        const index = this.titulosUniversitarios.findIndex(titulo => titulo.idformacion_academica === this.tituloUniversitarioEditIndex);
                        if (index !== -1) {
                            this.titulosUniversitarios.splice(index, 1, { ...this.nuevoTituloUniversitario });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.tituloUniversitarioEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevoTituloUniversitario();
                    this.scrollToTop();
                } else {
                
                    try {
                        const parametros = {
                                CIInfPer: this.idus,
                                estudios_universitarios_culminados: this.estudios_universitarios_culminados.trim(),
                                titulo_universitario_obtenido: this.nuevoTituloUniversitario.titulo_universitario_obtenido.trim(),
                                institucion_universitaria: this.nuevoTituloUniversitario.institucion_universitaria.trim(),
                                fecha_graduacion: this.nuevoTituloUniversitario.fecha_graduacion.trim(),
                                especialidad: this.nuevoTituloUniversitario.especialidad.trim(),
                            };
                            
                        
                        console.log(parametros);
                        
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/formacion_academica', 'Título Universitario Agregado con éxito');
                    
                        this.titulosUniversitarios.push({ idformacion_academica: response.data.data.id,
                                titulo_universitario_obtenido: this.nuevoTituloUniversitario.titulo_universitario_obtenido.trim(),
                                institucion_universitaria: this.nuevoTituloUniversitario.institucion_universitaria.trim(),
                                fecha_graduacion: this.nuevoTituloUniversitario.fecha_graduacion.trim(),
                                especialidad: this.nuevoTituloUniversitario.especialidad.trim()});
                        this.resetNuevoTituloUniversitario();
                        this.scrollToTop();
                        
                        
                        

                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
           
        },
        async agregarEditarTituloPosgrado() {
            if(this.nuevoTituloPosgrado.titulo_posgrado_obtenido!=='' && this.nuevoTituloPosgrado.institucion_posgrado!=='' && this.nuevoTituloPosgrado.fecha_graduacion_posgrado !=='' && this.nuevoTituloPosgrado.especialidad_posgrado !==''){
                if (this.tituloPosgradoEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        estudios_posgrado_culminados: this.estudios_posgrado_culminados.trim(),
                        titulo_posgrado_obtenido: this.nuevoTituloPosgrado.titulo_posgrado_obtenido.trim(),
                        institucion_posgrado: this.nuevoTituloPosgrado.institucion_posgrado.trim(),
                        fecha_graduacion_posgrado: this.nuevoTituloPosgrado.fecha_graduacion_posgrado.trim(),
                        especialidad_posgrado: this.nuevoTituloPosgrado.especialidad_posgrado.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/formacion_academica/' + this.tituloPosgradoEditIndex, 'Título de Posgrado Actualizado con éxito');
    
                    if (response && response.data) {
                        const index = this.titulosPosgrado.findIndex(titulo => titulo.idformacion_academica === this.tituloPosgradoEditIndex);
                        if (index !== -1) {
                            this.titulosPosgrado.splice(index, 1, { ...this.nuevoTituloPosgrado });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.tituloPosgradoEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevoTituloPosgrado();
                    this.scrollToTop();
                } else {
                   
                    try {
                        const parametros = {
                                CIInfPer: this.idus,
                                estudios_posgrado_culminados: this.estudios_posgrado_culminados.trim(),
                                titulo_posgrado_obtenido: this.nuevoTituloPosgrado.titulo_posgrado_obtenido.trim(),
                                institucion_posgrado: this.nuevoTituloPosgrado.institucion_posgrado.trim(),
                                fecha_graduacion_posgrado: this.nuevoTituloPosgrado.fecha_graduacion_posgrado.trim(),
                                especialidad_posgrado: this.nuevoTituloPosgrado.especialidad_posgrado.trim(),
                            };
                            
                        
                        console.log(parametros);
                        
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/formacion_academica', 'Título de Posgrado Agregado con éxito');
                       
                        this.titulosPosgrado.push({ idformacion_academica: response.data.data.id, 
                                titulo_posgrado_obtenido: this.nuevoTituloPosgrado.titulo_posgrado_obtenido.trim(),
                                institucion_posgrado: this.nuevoTituloPosgrado.institucion_posgrado.trim(),
                                fecha_graduacion_posgrado: this.nuevoTituloPosgrado.fecha_graduacion_posgrado.trim(),
                                especialidad_posgrado: this.nuevoTituloPosgrado.especialidad_posgrado.trim()});
                        this.resetNuevoTituloPosgrado();
                        this.scrollToTop();
    
                    } catch (error) {
                        console.log(error)
                    }
                }

            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
        },
        // Métodos para editar títulos
        editarTituloBachiller(idformacion_academica) {
            this.estudios_bachiller_culminados ="Si";
            this.Titulobachi();
            const index = this.titulosBachiller.findIndex(titulo => titulo.idformacion_academica === idformacion_academica);
            if (index !== -1) {
                this.nuevoTituloBachiller = { ...this.titulosBachiller[index] };
                this.tituloBachillerEditIndex = idformacion_academica;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        editarTituloUniversitario(idformacion_academica) {
            this.estudios_universitarios_culminados ="Si";
            this.Titulouni();
            const index = this.titulosUniversitarios.findIndex(titulo => titulo.idformacion_academica === idformacion_academica);
            
            if (index !== -1) {
                this.nuevoTituloUniversitario = { ...this.titulosUniversitarios[index] };
                this.tituloUniversitarioEditIndex = idformacion_academica;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        editarTituloPosgrado(idformacion_academica) {
            this.estudios_posgrado_culminados ="Si";
            this.Posgra();
            const index = this.titulosPosgrado.findIndex(titulo => titulo.idformacion_academica === idformacion_academica);
            console.log(index);
            if (index !== -1) {
                this.nuevoTituloPosgrado = { ...this.titulosPosgrado[index] };
                this.tituloPosgradoEditIndex = idformacion_academica;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar títulos
        async eliminarTituloBachiller(idformacion_academica) {
            const index = this.titulosBachiller.findIndex(titulo => titulo.idformacion_academica === idformacion_academica);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/formacion_academica/',idformacion_academica,'Eliminar Título de Bachiller','¿Realmente desea eliminar el Título de Bachiller?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.titulosBachiller.splice(index, 1);
                    if(this.titulosBachiller.length > 0){
                        this.sidatos=false;
                    }else{
                        this.sidatos=true;
                    }
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevoTituloBachiller();
            this.scrollToTop();
            this.modoedition=false;
        },
        async eliminarTituloUniversitario32(idformacion_academica) {
            const index = this.estudioactualtitulosUniversitarios.findIndex(titulo => titulo.idformacion_academica === idformacion_academica);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/formacion_academica/',idformacion_academica,'Eliminar Título Universitario','¿Realmente desea eliminar el estado actual de estudio universitario?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.estudioactualtitulosUniversitarios.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevoTituloUniversitario22();
            this.scrollToTop();
            this.modoedition=false;
            this.mensajenuevo= false;
        },
        async eliminarTituloUniversitario(idformacion_academica) {
            const index = this.titulosUniversitarios.findIndex(titulo => titulo.idformacion_academica === idformacion_academica);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/formacion_academica/',idformacion_academica,'Eliminar Título Universitario','¿Realmente desea eliminar el Título Universitario?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.titulosUniversitarios.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevoTituloUniversitario();
            this.scrollToTop();
            this.modoedition=false;
        },
        
        async eliminarTituloPosgrado(idformacion_academica) {
            const index = this.titulosPosgrado.findIndex(titulo => titulo.idformacion_academica === idformacion_academica);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/formacion_academica/',idformacion_academica,'Eliminar Título de Posgrado','¿Realmente desea eliminar el Título de Posgrado?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.titulosPosgrado.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevoTituloPosgrado();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevos títulos
        resetNuevoTituloBachiller() {
            this.estudios_bachiller_culminados = "";
            this.Titulobachi();
           
            this.nuevoTituloBachiller = {
                titulo_bachiller_obtenido: "",
                institucion_bachiller: "",
                fecha_graduacion_bachiller: "",
                especialidad_bachiller: ""
            };
        },
        resetNuevoTituloUniversitario22() {
            
            this.estudios_universitarios_culminados = "";
            this.sigueestudiandouniversidad=false;
            this.Titulouni();
           
            this.estudionuevoTituloUniversitario = {
                facultades_universidad: "",
                titulo_carrera_universidad: "",
                fechaestudioactual: "",
                carrera_universidad: ""
            };
        },
        resetNuevoTituloUniversitario() {
            
            this.estudios_universitarios_culminados = "";
            this.Titulouni();
           
            this.nuevoTituloUniversitario = {
                titulo_universitario_obtenido: "",
                institucion_universitaria: "",
                fecha_graduacion: "",
                especialidad: ""
            };
        },
        resetNuevoTituloPosgrado() {
            this.estudios_posgrado_culminados = "";
            this.Posgra();
            this.nuevoTituloPosgrado = {
                titulo_posgrado_obtenido: "",
                institucion_posgrado: "",
                fecha_graduacion_posgrado: "",
                especialidad_posgrado: ""
            };
        },
        //Experiencias Profesionales
        Cargos() {
            if (this.cargos_desempenados === "Si") {
                this.cargos = true;
                this.practica = false;
                this.practicas_profesionales = "";
            } else {
                this.cargos = false;
                //this.trabajonuevo = false;
            }
        },

        Practicas() {
            if (this.practicas_profesionales === "Si") {
                this.practica = true;
                this.cargos = false;
                this.cargos_desempenados = "";
            } else {
                this.practica = false;
            }
        },
        FechaCarg() {
            if(this.fechacargos === ""){
                this.fechaFinLabel = "";
                //this.trabajonuevo = false;
            }
            if (this.fechacargos === "Si") {
                this.fechaFinLabel = "Fecha actual de trabajo";
                this.nuevocargosEmpresas.fecha_fin_empresa = new Date().toISOString().split('T')[0]; 
                this.fechaFinDisabled = true;
                this.trabajonuevo = true;
            }if (this.fechacargos === "No"){
                this.fechaFinLabel = "Fecha de finalización de labores en la Empresa/Institución";
                this.nuevocargosEmpresas.fecha_fin_empresa = ''; 
                this.fechaFinDisabled = false;
                this.trabajonuevo = true;
            }
        },
        FechaCursos2() {
            if(this.fechacursos === ""){
                this.fechaFinLabelCursos = "";
                //this.trabajonuevo = false;
            }
            if (this.fechacursos === "Si") {
                this.fechaFinLabelCursos = "Fecha actual del Curso";
                this.nuevoscurso_capacitacion.fecha_fin_curso = new Date().toISOString().split('T')[0]; 
                this.fechaFincursoDisabled = true;
                this.fechacursofinactual = true;
            }if (this.fechacursos  === "No"){
                this.fechaFinLabelCursos = "Fecha de Finalización del Curso y/o Capacitación";
                this.nuevoscurso_capacitacion.fecha_fin_curso = ''; 
                this.fechaFincursoDisabled = false;
                this.fechacursofinactual = true;
            }
        },

        // Métodos para añadir/editar experiencias
        async agregarEditarEmpresa() {
            if(this.nuevocargosEmpresas.empresa_institucion.trim()!=='' && this.nuevocargosEmpresas.fecha_inicio_empresa.trim()!=='' && this.nuevocargosEmpresas.fecha_fin_empresa.trim() !=='' && this.nuevocargosEmpresas.cargo_desempenado_empresa.trim() !=='' && this.nuevocargosEmpresas.descripcion_funciones_empresa.trim() !=='' && this.nuevocargosEmpresas.logros_resultados_empresa.trim() !==''){
                
                if (this.cargosEmpresasEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        cargos_desempenados: this.cargos_desempenados.trim(),
                        empresa_institucion: this.nuevocargosEmpresas.empresa_institucion.trim(),
                        fecha_inicio_empresa: this.nuevocargosEmpresas.fecha_inicio_empresa.trim(),
                        fecha_fin_empresa: this.nuevocargosEmpresas.fecha_fin_empresa.trim(),
                        cargo_desempenado_empresa: this.nuevocargosEmpresas.cargo_desempenado_empresa.trim(),
                        descripcion_funciones_empresa: this.nuevocargosEmpresas.descripcion_funciones_empresa.trim(),
                        logros_resultados_empresa: this.nuevocargosEmpresas.logros_resultados_empresa.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/experiencia_profesionale/' + this.cargosEmpresasEditIndex, 'Experiencia en Empresas Actualizado con éxito');
    
                    if (response && response.data) {
                        const index = this.cargosEmpresas.findIndex(titulo => titulo.idexperiencias_profesionales === this.cargosEmpresasEditIndex);
                        if (index !== -1) {
                            this.cargosEmpresas.splice(index, 1, { ...this.nuevocargosEmpresas });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.cargosEmpresasEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevoEmpresa();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                cargos_desempenados: this.cargos_desempenados.trim(),
                                empresa_institucion: this.nuevocargosEmpresas.empresa_institucion.trim(),
                                fecha_inicio_empresa: this.nuevocargosEmpresas.fecha_inicio_empresa.trim(),
                                fecha_fin_empresa: this.nuevocargosEmpresas.fecha_fin_empresa.trim(),
                                cargo_desempenado_empresa: this.nuevocargosEmpresas.cargo_desempenado_empresa.trim(),
                                descripcion_funciones_empresa: this.nuevocargosEmpresas.descripcion_funciones_empresa.trim(),
                                logros_resultados_empresa: this.nuevocargosEmpresas.logros_resultados_empresa.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/experiencia_profesionale', 'Experiencia en Empresas Agregado con éxito');
                       
                        this.cargosEmpresas.push({ idexperiencias_profesionales: response.data.data.id, 
                            empresa_institucion: this.nuevocargosEmpresas.empresa_institucion.trim(),
                            fecha_inicio_empresa: this.nuevocargosEmpresas.fecha_inicio_empresa.trim(),
                            fecha_fin_empresa: this.nuevocargosEmpresas.fecha_fin_empresa.trim(),
                            cargo_desempenado_empresa: this.nuevocargosEmpresas.cargo_desempenado_empresa.trim(),
                            descripcion_funciones_empresa: this.nuevocargosEmpresas.descripcion_funciones_empresa.trim(),
                            logros_resultados_empresa: this.nuevocargosEmpresas.logros_resultados_empresa.trim()});
                        this.resetNuevoEmpresa();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        async agregarEditarPracticas() {
            if(this.nuevocargosPasantias.empresa_institucion_practicas.trim()!=='' && this.nuevocargosPasantias.fecha_inicio_practicas.trim()!=='' && this.nuevocargosPasantias.fecha_fin_practicas.trim() !=='' && this.nuevocargosPasantias.area_trabajo_practicas.trim() !=='' && this.nuevocargosPasantias.descripcion_funciones_practicas.trim() !==''){

                if (this.cargosPasantiasEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        practicas_profesionales: this.practicas_profesionales.trim(),
                        empresa_institucion_practicas: this.nuevocargosPasantias.empresa_institucion_practicas.trim(),
                        fecha_inicio_practicas: this.nuevocargosPasantias.fecha_inicio_practicas.trim(),
                        fecha_fin_practicas: this.nuevocargosPasantias.fecha_fin_practicas.trim(),
                        area_trabajo_practicas: this.nuevocargosPasantias.area_trabajo_practicas.trim(),
                        descripcion_funciones_practicas: this.nuevocargosPasantias.descripcion_funciones_practicas.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/experiencia_profesionale/' + this.cargosPasantiasEditIndex, 'Experiencias en Pasantías Actualizado con éxito');
    
                    if (response && response.data) {
                        const index = this.cargosPasantias.findIndex(titulo => titulo.idexperiencias_profesionales === this.cargosPasantiasEditIndex);
                        if (index !== -1) {
                            this.cargosPasantias.splice(index, 1, { ...this.nuevocargosPasantias });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.cargosPasantiasEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevoPracticas();
                    this.scrollToTop();
                } else {
                   
                    try {
                        const parametros = {
                                CIInfPer: this.idus,
                                practicas_profesionales: this.practicas_profesionales.trim(),
                                empresa_institucion_practicas: this.nuevocargosPasantias.empresa_institucion_practicas.trim(),
                                fecha_inicio_practicas: this.nuevocargosPasantias.fecha_inicio_practicas.trim(),
                                fecha_fin_practicas: this.nuevocargosPasantias.fecha_fin_practicas.trim(),
                                area_trabajo_practicas: this.nuevocargosPasantias.area_trabajo_practicas.trim(),
                                descripcion_funciones_practicas: this.nuevocargosPasantias.descripcion_funciones_practicas.trim(),
                            };
                            
                        
                        console.log(parametros);
                        
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/experiencia_profesionale', 'Experiencias en Pasantías Agregado con éxito');
                       
                        this.cargosPasantias.push({ idexperiencias_profesionales: response.data.data.id,  
                                empresa_institucion_practicas: this.nuevocargosPasantias.empresa_institucion_practicas.trim(),
                                fecha_inicio_practicas: this.nuevocargosPasantias.fecha_inicio_practicas.trim(),
                                fecha_fin_practicas: this.nuevocargosPasantias.fecha_fin_practicas.trim(),
                                area_trabajo_practicas: this.nuevocargosPasantias.area_trabajo_practicas.trim(),
                                descripcion_funciones_practicas: this.nuevocargosPasantias.descripcion_funciones_practicas.trim()});
                        this.resetNuevoPracticas();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
        },
        // Métodos para editar cargos
        editarSeleccionEmpresa(idexperiencias_profesionales) {
            this.cargos_desempenados ="Si";
            this.Cargos();
            const index = this.cargosEmpresas.findIndex(titulo => titulo.idexperiencias_profesionales === idexperiencias_profesionales);
            if (index !== -1) {
                this.nuevocargosEmpresas = { ...this.cargosEmpresas[index] };
                this.cargosEmpresasEditIndex = idexperiencias_profesionales;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        editarSeleccionPracticas(idexperiencias_profesionales) {
            this.practicas_profesionales ="Si";
            this.Practicas();
            const index = this.cargosPasantias.findIndex(titulo => titulo.idexperiencias_profesionales === idexperiencias_profesionales);
            if (index !== -1) {
                this.nuevocargosPasantias = { ...this.cargosPasantias[index] };
                this.cargosPasantiasEditIndex = idexperiencias_profesionales;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar cargos
        async eliminarSeleccionEmpresa(idexperiencias_profesionales) {
            const index = this.cargosEmpresas.findIndex(titulo => titulo.idexperiencias_profesionales === idexperiencias_profesionales);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/experiencia_profesionale/',idexperiencias_profesionales,'Eliminar Experiencia Empresa','¿Realmente desea eliminar la Experiencia Empresa?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.cargosEmpresas.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevoEmpresa();
            this.scrollToTop();
            this.modoedition=false;
        },
        async eliminarSeleccionPracticas(idexperiencias_profesionales) {
            const index = this.cargosPasantias.findIndex(titulo => titulo.idexperiencias_profesionales === idexperiencias_profesionales);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/experiencia_profesionale/',idexperiencias_profesionales,'Eliminar Experiencia Pasantías','¿Realmente desea eliminar la Experiencia Pasantías?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.cargosPasantias.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevoPracticas();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevos cargos
        resetNuevoEmpresa() {
            this.cargos_desempenados = "";
            this.fechacargos="";
            this.fechaFinLabel="";
            this.trabajo = false;
            this.Cargos();
            this.FechaCarg();
           
            this.nuevocargosEmpresas = {
                empresa_institucion: "",
                fecha_inicio_empresa: "",
                fecha_fin_empresa: "",
                cargo_desempenado_empresa: "",
                descripcion_funciones_empresa: "",
                logros_resultados_empresa: ""
            };
        },
        resetNuevoPracticas() {
            
            this.practicas_profesionales = "";
            this.Practicas();
            this.cargos=false;
            this.nuevocargosPasantias = {
                empresa_institucion_practicas: "",
                fecha_inicio_practicas: "",
                fecha_fin_practicas: "",
                area_trabajo_practicas: "",
                descripcion_funciones_practicas: ""
            };
        },

        //Investigaciones y publicacionies
        Investigaciones() {
            if (this.publicaciones === "Si") {
                this.investiga = true;
            } else {
                this.investiga = false;
            }
        },
        // Métodos para añadir/editar investigaciones
        async agregarEditarPublicaciones() {
            if(this.nuevaspublicaciones.publicacion_tipo.trim()!=='' && this.nuevaspublicaciones.publicacion_titulo.trim()!=='' && this.nuevaspublicaciones.link_publicación.trim() !=='' && this.nuevaspublicaciones.congreso_evento.trim() !=='' ){

                if (this.publicacionesEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        publicaciones: this.publicaciones.trim(),
                        publicacion_tipo: this.nuevaspublicaciones.publicacion_tipo.trim(),
                        publicacion_titulo: this.nuevaspublicaciones.publicacion_titulo.trim(),
                        link_publicación: this.nuevaspublicaciones.link_publicación.trim(),
                        congreso_evento: this.nuevaspublicaciones.congreso_evento.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/investigacion_publicacione/' + this.publicacionesEditIndex, 'Publicaciones Actualizada con éxito');
    
                    if (response && response.data) {
                        const index = this.publicacionesarray.findIndex(titulo => titulo.idinvestigacion_publicaciones === this.publicacionesEditIndex);
                        if (index !== -1) {
                            this.publicacionesarray.splice(index, 1, { ...this.nuevaspublicaciones });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.publicacionesEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevoPubliciones();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                publicaciones: this.publicaciones.trim(),
                                publicacion_tipo: this.nuevaspublicaciones.publicacion_tipo.trim(),
                                publicacion_titulo: this.nuevaspublicaciones.publicacion_titulo.trim(),
                                link_publicación: this.nuevaspublicaciones.link_publicación.trim(),
                                congreso_evento: this.nuevaspublicaciones.congreso_evento.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/investigacion_publicacione', 'Publicaciones Agregada con éxito');
                       
                        this.publicacionesarray.push({ idinvestigacion_publicaciones: response.data.data.id, 
                                publicacion_tipo: this.nuevaspublicaciones.publicacion_tipo.trim(),
                                publicacion_titulo: this.nuevaspublicaciones.publicacion_titulo.trim(),
                                link_publicación: this.nuevaspublicaciones.link_publicación.trim(),
                                congreso_evento: this.nuevaspublicaciones.congreso_evento.trim()});
                        this.resetNuevoPubliciones();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar publicacionies
        editarSeleccionPublicaciones(idinvestigacion_publicaciones) {
            this.publicaciones ="Si";
            this.Investigaciones();
            const index = this.publicacionesarray.findIndex(titulo => titulo.idinvestigacion_publicaciones === idinvestigacion_publicaciones);
            if (index !== -1) {
                this.nuevaspublicaciones = { ...this.publicacionesarray[index] };
                this.publicacionesEditIndex = idinvestigacion_publicaciones;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar cargos
        async eliminarSeleccionPublicaciones(idinvestigacion_publicaciones) {
            const index = this.publicacionesarray.findIndex(titulo => titulo.idinvestigacion_publicaciones === idinvestigacion_publicaciones);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/investigacion_publicacione/',idinvestigacion_publicaciones,'Eliminar Publicación','¿Realmente desea eliminar la Publicación?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.publicacionesarray.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevoPubliciones();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevos publicacionies
        resetNuevoPubliciones() {
            this.publicaciones = "";
            this.Investigaciones();
           
            this.nuevaspublicaciones = {
                publicacion_tipo: "",
                publicacion_tipo: "",
                link_publicación: "",
                congreso_evento: ""
            };
        },
        

        //Idioma
        // Métodos para añadir/editar idiomas
        async agregarEditarIdiomas() {
            if(this.nuevosidiomas.comprension_auditiva.trim()!=='' && this.nuevosidiomas.comprension_lectura.trim()!=='' && this.nuevosidiomas.interaccion_oral.trim() !=='' && this.nuevosidiomas.expresion_oral.trim() !=='' && this.nuevosidiomas.expresion_escrita.trim() !=='' && this.nuevosidiomas.certificado.trim() !==''){

                if (this.idiomasEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        idioma: this.nuevosidiomas.idioma.trim(),
                        comprension_auditiva: this.nuevosidiomas.comprension_auditiva.trim(),
                        comprension_lectura: this.nuevosidiomas.comprension_lectura.trim(),
                        interaccion_oral: this.nuevosidiomas.interaccion_oral.trim(),
                        expresion_oral: this.nuevosidiomas.expresion_oral.trim(),
                        expresion_escrita: this.nuevosidiomas.expresion_escrita.trim(),
                        certificado: this.nuevosidiomas.certificado.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/idioma/' + this.idiomasEditIndex, 'Idioma Actualizado con éxito');
    
                    if (response && response.data) {
                        const index = this.idiomasarray.findIndex(titulo => titulo.idlenguaje === this.idiomasEditIndex);
                        if (index !== -1) {
                            this.idiomasarray.splice(index, 1, { ...this.nuevosidiomas });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.idiomasEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevoIdiomas();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                idioma: this.nuevosidiomas.idioma.trim(),
                                comprension_auditiva: this.nuevosidiomas.comprension_auditiva.trim(),
                                comprension_lectura: this.nuevosidiomas.comprension_lectura.trim(),
                                interaccion_oral: this.nuevosidiomas.interaccion_oral.trim(),
                                expresion_oral: this.nuevosidiomas.expresion_oral.trim(),
                                expresion_escrita: this.nuevosidiomas.expresion_escrita.trim(),
                                certificado: this.nuevosidiomas.certificado.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/idioma', 'Idioma Agregado con éxito');
                       
                        this.idiomasarray.push({ idlenguaje: response.data.data.id, 
                                idioma: this.nuevosidiomas.idioma.trim(),
                                comprension_auditiva: this.nuevosidiomas.comprension_auditiva.trim(),
                                comprension_lectura: this.nuevosidiomas.comprension_lectura.trim(),
                                interaccion_oral: this.nuevosidiomas.interaccion_oral.trim(),
                                expresion_oral: this.nuevosidiomas.expresion_oral.trim(),
                                expresion_escrita: this.nuevosidiomas.expresion_escrita.trim(),
                                certificado: this.nuevosidiomas.certificado.trim()});
                        this.resetNuevoIdiomas();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar idiomas
        editarSeleccionIdiomas(idlenguaje) {
            const index = this.idiomasarray.findIndex(titulo => titulo.idlenguaje === idlenguaje);
            if (index !== -1) {
                this.nuevosidiomas = { ...this.idiomasarray[index] };
                this.idiomasEditIndex = idlenguaje;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar idiomas
        async eliminarSeleccionIdiomas(idlenguaje) {
            const index = this.idiomasarray.findIndex(titulo => titulo.idlenguaje === idlenguaje);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/idioma/',idlenguaje,'Eliminar Idioma','¿Realmente desea eliminar el Idioma?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.idiomasarray.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevoIdiomas();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevos idiomas
        resetNuevoIdiomas() {
           
           
            this.nuevosidiomas = {
                idioma: "",
                comprension_auditiva: "",
                comprension_lectura: "",
                interaccion_oral: "",
                expresion_oral: "",
                expresion_escrita: "",
                certificado: ""
            };
        },
        //SW
        //Habilidades
        ComunHabi() {
            if (this.habi_comunicacion === "Si") {
                this.comunicativas = true;
                this.creativas = false;
                this.liderazgo = false;
                this.informaticas_cv = false;
                this.oficios = false;
                this.otro_habili = false;
                this.habi_creacion = "";
                this.habi_liderazgo = "";
                this.habi_informaticos_cv = "";
                this.habi_oficios = "";
                this.habi_otros_habi = "";
            } else {
                this.comunicativas = false;
            }
        },
        CreaHabi() {
            if (this.habi_creacion === "Si") {
                this.creativas = true;
                this.comunicativas = false;
                this.liderazgo = false;
                this.informaticas_cv = false;
                this.oficios = false;
                this.otro_habili = false;
                this.habi_comunicacion = "";
                this.habi_liderazgo = "";
                this.habi_informaticos_cv = "";
                this.habi_oficios = "";
                this.habi_otros_habi = "";
            } else {
                this.creativas = false;
            }
        },
        LideHabi() {
            if (this.habi_liderazgo === "Si") {
                this.liderazgo = true;
                this.creativas = false;
                this.comunicativas = false;
                this.informaticas_cv = false;
                this.oficios = false;
                this.otro_habili = false;
                this.habi_creacion = "";
                this.habi_comunicacion = "";
                this.habi_informaticos_cv = "";
                this.habi_oficios = "";
                this.habi_otros_habi = "";
            } else {
                this.liderazgo = false;
            }
        },
        InfoHabi() {
            if (this.habi_informaticos_cv === "Si") {
                this.informaticas_cv = true;
                this.creativas = false;
                this.liderazgo = false;
                this.comunicativas = false;
                this.oficios = false;
                this.otro_habili = false;
                this.habi_creacion = "";
                this.habi_liderazgo = "";
                this.habi_comunicacion = "";
                this.habi_oficios = "";
                this.habi_otros_habi = "";
                
            } else {
                this.informaticas_cv = false;
            }
        },
        OfiHabi() {
            if (this.habi_oficios === "Si") {
                this.oficios = true;
                this.creativas = false;
                this.liderazgo = false;
                this.informaticas_cv = false;
                this.comunicativas = false;
                this.otro_habili = false;
                this.habi_creacion = "";
                this.habi_liderazgo = "";
                this.habi_informaticos_cv = "";
                this.habi_comunicacion = "";
                this.habi_otros_habi = "";
            } else {
                this.oficios = false;
            }
        },
        OtrosHabi() {
            if (this.habi_otros_habi === "Si") {
                this.otro_habili = true;
                this.creativas = false;
                this.liderazgo = false;
                this.informaticas_cv = false;
                this.oficios = false;
                this.comunicativas = false;
                this.habi_creacion = "";
                this.habi_liderazgo = "";
                this.habi_informaticos_cv = "";
                this.habi_oficios = "";
                this.habi_comunicacion = "";
            } else {
                this.otro_habili = false;
            }
        },
        // Métodos para añadir/editar habilidades Comunicativas
        async agregarEditarHabilidadesComunicativas() {
            if(this.nuevashabilidades_comunicativas.habilidades_comunicativas.trim()!=='' && this.nuevashabilidades_comunicativas.descripcion_habilidades_comunicativas.trim()!==''){

                if (this.habilidades_comunicativas_EditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        habilidades_comunicativas: this.nuevashabilidades_comunicativas.habilidades_comunicativas.trim(),
                        descripcion_habilidades_comunicativas: this.nuevashabilidades_comunicativas.descripcion_habilidades_comunicativas.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/' + this.habilidades_comunicativas_EditIndex, 'Habilidad Actualizada con éxito');
    
                    if (response && response.data) {
                        const index = this.habilidades_comunicativas_array.findIndex(titulo => titulo.idhabilidades_informaticas === this.habilidades_comunicativas_EditIndex);
                        if (index !== -1) {
                            this.habilidades_comunicativas_array.splice(index, 1, { ...this.nuevashabilidades_comunicativas });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.habilidades_comunicativas_EditIndex = null;
                    this.modoedition=false;
                    this.resetNuevasHabilidadesComunicativas();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                habilidades_comunicativas: this.nuevashabilidades_comunicativas.habilidades_comunicativas.trim(),
                                descripcion_habilidades_comunicativas: this.nuevashabilidades_comunicativas.descripcion_habilidades_comunicativas.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica', 'Habilidad Agregada con éxito');
                       
                        this.habilidades_comunicativas_array.push({ idhabilidades_informaticas: response.data.data.id, 
                            habilidades_comunicativas: this.nuevashabilidades_comunicativas.habilidades_comunicativas.trim(),
                            descripcion_habilidades_comunicativas: this.nuevashabilidades_comunicativas.descripcion_habilidades_comunicativas.trim()});
                        this.resetNuevasHabilidadesComunicativas();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar habilidades Comunicativas
        editarSeleccionHabilidadesComunicativas(idhabilidades_informaticas) {
            this.habi_comunicacion ="Si";
            this.ComunHabi();
            
            const index = this.habilidades_comunicativas_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            if (index !== -1) {
                this.nuevashabilidades_comunicativas = { ...this.habilidades_comunicativas_array[index] };
                this.habilidades_comunicativas_EditIndex = idhabilidades_informaticas;
                this.modoedition=true;
                this.scrollToTop();
            }
            
        },
        // Métodos para eliminar habilidades Comunicativas
        async eliminarSeleccionHabilidadesComunicativas(idhabilidades_informaticas) {
            const index = this.habilidades_comunicativas_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/',idhabilidades_informaticas,'Eliminar Habilidad','¿Realmente desea eliminar la Habilidad?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.habilidades_comunicativas_array.splice(index, 1);
                    
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevasHabilidadesComunicativas();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevas habilidades Comunicativas
        resetNuevasHabilidadesComunicativas() {
            this.habi_comunicacion ="";
            this.ComunHabi();
            this.nuevashabilidades_comunicativas= {
                habilidades_comunicativas: "",
                descripcion_habilidades_comunicativas: ""
            };
        },

        // Métodos para añadir/editar habilidades Creativas
        async agregarEditarHabilidadesCreativas() {
            if(this.nuevashabilidades_creativas.habilidades_creativas.trim()!=='' && this.nuevashabilidades_creativas.descripcion_habilidades_creativas.trim()!==''){

                if (this.habilidades_creativas_EditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        habilidades_creativas: this.nuevashabilidades_creativas.habilidades_creativas.trim(),
                        descripcion_habilidades_creativas: this.nuevashabilidades_creativas.descripcion_habilidades_creativas.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/' + this.habilidades_creativas_EditIndex, 'Habilidad Actualizada con éxito');
    
                    if (response && response.data) {
                        const index = this.habilidades_creativas_array.findIndex(titulo => titulo.idhabilidades_informaticas === this.habilidades_creativas_EditIndex);
                        if (index !== -1) {
                            this.habilidades_creativas_array.splice(index, 1, { ...this.nuevashabilidades_creativas });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.habilidades_creativas_EditIndex = null;
                    this.modoedition=false;
                    this.resetNuevasHabilidadesCreativas();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                habilidades_creativas: this.nuevashabilidades_creativas.habilidades_creativas.trim(),
                                descripcion_habilidades_creativas: this.nuevashabilidades_creativas.descripcion_habilidades_creativas.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica', 'Habilidad Agregada con éxito');
                       
                        this.habilidades_creativas_array.push({ idhabilidades_informaticas: response.data.data.id, 
                            habilidades_creativas: this.nuevashabilidades_creativas.habilidades_creativas.trim(),
                            descripcion_habilidades_creativas: this.nuevashabilidades_creativas.descripcion_habilidades_creativas.trim()});
                        this.resetNuevasHabilidadesCreativas();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar habilidades Creativas
        editarSeleccionHabilidadesCreativas(idhabilidades_informaticas) {
            this.habi_creacion ="Si";
            this.CreaHabi();
            const index = this.habilidades_creativas_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            if (index !== -1) {
                this.nuevashabilidades_creativas = { ...this.habilidades_creativas_array[index] };
                this.habilidades_creativas_EditIndex = idhabilidades_informaticas;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar habilidades Creativas
        async eliminarSeleccionHabilidadesCreativas(idhabilidades_informaticas) {
            const index = this.habilidades_creativas_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/',idhabilidades_informaticas,'Eliminar Habilidad','¿Realmente desea eliminar la Habilidad?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.habilidades_creativas_array.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevasHabilidadesCreativas();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevas habilidades Creativas
        resetNuevasHabilidadesCreativas() {
            this.habi_creacion ="";
            this.CreaHabi();
            this.nuevashabilidades_creativas= {
                habilidades_creativas: "",
                descripcion_habilidades_creativas: ""
            };
        },
        

        // Métodos para añadir/editar habilidades Liderazgo
        async agregarEditarHabilidadesLiderazgo() {
            if(this.nuevashabilidades_liderazgo.habilidades_liderazgo.trim()!=='' && this.nuevashabilidades_liderazgo.descripcion_habilidades_liderazgo.trim()!==''){

                if (this.habilidades_liderazgo_EditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        habilidades_liderazgo: this.nuevashabilidades_liderazgo.habilidades_liderazgo.trim(),
                        descripcion_habilidades_liderazgo: this.nuevashabilidades_liderazgo.descripcion_habilidades_liderazgo.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/' + this.habilidades_liderazgo_EditIndex, 'Habilidad Actualizada con éxito');
    
                    if (response && response.data) {
                        const index = this.habilidades_liderazgo_array.findIndex(titulo => titulo.idhabilidades_informaticas === this.habilidades_liderazgo_EditIndex);
                        if (index !== -1) {
                            this.habilidades_liderazgo_array.splice(index, 1, { ...this.nuevashabilidades_liderazgo });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.habilidades_liderazgo_EditIndex = null;
                    this.modoedition=false;
                    this.resetNuevasHabilidadesLiderazgo();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                habilidades_liderazgo: this.nuevashabilidades_liderazgo.habilidades_liderazgo.trim(),
                                descripcion_habilidades_liderazgo: this.nuevashabilidades_liderazgo.descripcion_habilidades_liderazgo.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica', 'Habilidad Agregada con éxito');
                       
                        this.habilidades_liderazgo_array.push({ idhabilidades_informaticas: response.data.data.id, 
                            habilidades_liderazgo: this.nuevashabilidades_liderazgo.habilidades_liderazgo.trim(),
                            descripcion_habilidades_liderazgo: this.nuevashabilidades_liderazgo.descripcion_habilidades_liderazgo.trim()});
                        this.resetNuevasHabilidadesLiderazgo();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar habilidades Liderazgo
        editarSeleccionHabilidadesLiderazgo(idhabilidades_informaticas) {
            this.habi_liderazgo ="Si";
            this.LideHabi();
            const index = this.habilidades_liderazgo_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            if (index !== -1) {
                this.nuevashabilidades_liderazgo = { ...this.habilidades_liderazgo_array[index] };
                this.habilidades_liderazgo_EditIndex = idhabilidades_informaticas;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar habilidades Liderazgo
        async eliminarSeleccionHabilidadesLiderazgo(idhabilidades_informaticas) {
            const index = this.habilidades_liderazgo_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/',idhabilidades_informaticas,'Eliminar Habilidad','¿Realmente desea eliminar la Habilidad?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.habilidades_liderazgo_array.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevasHabilidadesLiderazgo();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevas habilidades Liderazgo
        resetNuevasHabilidadesLiderazgo() {
            this.habi_liderazgo ="";
            this.LideHabi();
            this.nuevashabilidades_liderazgo= {
                habilidades_liderazgo: "",
                descripcion_habilidades_liderazgo: ""
            };
        },


        // Métodos para añadir/editar habilidades Infor_cv
        async agregarEditarHabilidadesInfor_cv() {
            if(this.nuevashabilidades_informaticas_cv.habilidades_informaticas_cv.trim()!=='' && this.nuevashabilidades_informaticas_cv.descripcion_habilidades_informaticas_cv.trim()!==''){

                if (this.habilidades_informaticas_cv_EditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        habilidades_informaticas_cv: this.nuevashabilidades_informaticas_cv.habilidades_informaticas_cv.trim(),
                        descripcion_habilidades_informaticas_cv: this.nuevashabilidades_informaticas_cv.descripcion_habilidades_informaticas_cv.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/' + this.habilidades_informaticas_cv_EditIndex, 'Habilidad Actualizada con éxito');
    
                    if (response && response.data) {
                        const index = this.habilidades_informaticas_array.findIndex(titulo => titulo.idhabilidades_informaticas === this.habilidades_informaticas_cv_EditIndex);
                        if (index !== -1) {
                            this.habilidades_informaticas_array.splice(index, 1, { ...this.nuevashabilidades_informaticas_cv });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.habilidades_informaticas_cv_EditIndex = null;
                    this.modoedition=false;
                    this.resetNuevasHabilidadesInfor_cv();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                habilidades_informaticas_cv: this.nuevashabilidades_informaticas_cv.habilidades_informaticas_cv.trim(),
                                descripcion_habilidades_informaticas_cv: this.nuevashabilidades_informaticas_cv.descripcion_habilidades_informaticas_cv.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica', 'Habilidad Agregada con éxito');
                       
                        this.habilidades_informaticas_array.push({ idhabilidades_informaticas: response.data.data.id, 
                            habilidades_informaticas_cv: this.nuevashabilidades_informaticas_cv.habilidades_informaticas_cv.trim(),
                            descripcion_habilidades_informaticas_cv: this.nuevashabilidades_informaticas_cv.descripcion_habilidades_informaticas_cv.trim()});
                        this.resetNuevasHabilidadesInfor_cv();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar habilidades Infor_cv
        editarSeleccionHabilidadesInfor_cv(idhabilidades_informaticas) {
            this.habi_informaticos_cv ="Si";
            this.InfoHabi();
            const index = this.habilidades_informaticas_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            if (index !== -1) {
                this.nuevashabilidades_informaticas_cv = { ...this.habilidades_informaticas_array[index] };
                this.habilidades_informaticas_cv_EditIndex = idhabilidades_informaticas;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar habilidades Infor_cv
        async eliminarSeleccionHabilidadesInfor_cv(idhabilidades_informaticas) {
            const index = this.habilidades_informaticas_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/',idhabilidades_informaticas,'Eliminar Habilidad','¿Realmente desea eliminar la Habilidad?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.habilidades_informaticas_array.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevasHabilidadesInfor_cv();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevas habilidades Infor_cv
        resetNuevasHabilidadesInfor_cv() {
            this.habi_informaticos_cv ="";
            this.InfoHabi();
            this.nuevashabilidades_informaticas_cv= {
                habilidades_informaticas_cv: "",
                descripcion_habilidades_informaticas_cv: ""
            };
        },


        // Métodos para añadir/editar habilidades Oficios
        async agregarEditarHabilidadesOficios() {
            if(this.nuevasoficios_subactividades.oficios_subactividades.trim()!=='' && this.nuevasoficios_subactividades.descripcion_oficios_subactividades.trim()!==''){

                if (this.oficios_subactividades_EditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        oficios_subactividades: this.nuevasoficios_subactividades.oficios_subactividades.trim(),
                        descripcion_oficios_subactividades: this.nuevasoficios_subactividades.descripcion_oficios_subactividades.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/' + this.oficios_subactividades_EditIndex, 'Habilidad Actualizada con éxito');
    
                    if (response && response.data) {
                        const index = this.oficios_subactividades_array.findIndex(titulo => titulo.idhabilidades_informaticas === this.oficios_subactividades_EditIndex);
                        if (index !== -1) {
                            this.oficios_subactividades_array.splice(index, 1, { ...this.nuevasoficios_subactividades });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.oficios_subactividades_EditIndex = null;
                    this.modoedition=false;
                    this.resetNuevasHabilidadesOficios();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                oficios_subactividades: this.nuevasoficios_subactividades.oficios_subactividades.trim(),
                                descripcion_oficios_subactividades: this.nuevasoficios_subactividades.descripcion_oficios_subactividades.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica', 'Habilidad Agregada con éxito');
                       
                        this.oficios_subactividades_array.push({ idhabilidades_informaticas: response.data.data.id, 
                            oficios_subactividades: this.nuevasoficios_subactividades.oficios_subactividades.trim(),
                            descripcion_oficios_subactividades: this.nuevasoficios_subactividades.descripcion_oficios_subactividades.trim()});
                        this.resetNuevasHabilidadesOficios();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar habilidades Oficios
        editarSeleccionHabilidadesOficios(idhabilidades_informaticas) {
            this.habi_oficios ="Si";
            this.OfiHabi();
            const index = this.oficios_subactividades_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            if (index !== -1) {
                this.nuevasoficios_subactividades = { ...this.oficios_subactividades_array[index] };
                this.oficios_subactividades_EditIndex = idhabilidades_informaticas;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar habilidades Oficios
        async eliminarSeleccionHabilidadesOficios(idhabilidades_informaticas) {
            const index = this.oficios_subactividades_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/',idhabilidades_informaticas,'Eliminar Habilidad','¿Realmente desea eliminar la Habilidad?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.oficios_subactividades_array.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevasHabilidadesOficios();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevas habilidades Oficios
        resetNuevasHabilidadesOficios() {
            this.habi_oficios ="";
            this.OfiHabi();
            this.nuevasoficios_subactividades= {
                oficios_subactividades: "",
                descripcion_oficios_subactividades: ""
            };
        },

        
        // Métodos para añadir/editar habilidades Otros_Oficios
        async agregarEditarHabilidadesOtros_Oficios() {
            if(this.nuevasotro_habilidades.otro_habilidades.trim()!==''){

                if (this.otro_habilidades_EditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        otro_habilidades: this.nuevasotro_habilidades.otro_habilidades.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/' + this.otro_habilidades_EditIndex, 'Habilidad Actualizada con éxito');
    
                    if (response && response.data) {
                        const index = this.otro_habilidades_array.findIndex(titulo => titulo.idhabilidades_informaticas === this.otro_habilidades_EditIndex);
                        if (index !== -1) {
                            this.otro_habilidades_array.splice(index, 1, { ...this.nuevasotro_habilidades });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.otro_habilidades_EditIndex = null;
                    this.modoedition=false;
                    this.resetNuevasHabilidadesOtros_Oficios();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                otro_habilidades: this.nuevasotro_habilidades.otro_habilidades.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/habilidades_informatica', 'Habilidad Agregada con éxito');
                       
                        this.otro_habilidades_array.push({ idhabilidades_informaticas: response.data.data.id, 
                            otro_habilidades: this.nuevasotro_habilidades.otro_habilidades.trim()});
                        this.resetNuevasHabilidadesOtros_Oficios();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar habilidades Otros_Oficios
        editarSeleccionHabilidadesOtros_Oficios(idhabilidades_informaticas) {
            this.habi_otros_habi ="Si";
            this.OtrosHabi();
            const index = this.otro_habilidades_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            if (index !== -1) {
                this.nuevasotro_habilidades = { ...this.otro_habilidades_array[index] };
                this.otro_habilidades_EditIndex = idhabilidades_informaticas;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar habilidades Otros_Oficios
        async eliminarSeleccionHabilidadesOtros_Oficios(idhabilidades_informaticas) {
            const index = this.otro_habilidades_array.findIndex(titulo => titulo.idhabilidades_informaticas === idhabilidades_informaticas);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/habilidades_informatica/',idhabilidades_informaticas,'Eliminar Habilidad','¿Realmente desea eliminar la Habilidad?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.otro_habilidades_array.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevasHabilidadesOtros_Oficios();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevas habilidades Otros_Oficios
        resetNuevasHabilidadesOtros_Oficios() {
            this.habi_otros_habi ="";
            this.OtrosHabi();
            this.nuevasotro_habilidades= {
                otro_habilidades: ""
            };
        },

        //Cursos Capacitaciones
        // Métodos para añadir/editar Cursos Capacitaciones
        async agregarEditarCursosCapacitaciones() {
            if(this.nuevoscurso_capacitacion.intitucion_curso.trim()!=='' && this.nuevoscurso_capacitacion.tipo_evento.trim()!=='' && this.nuevoscurso_capacitacion.area_estudios.trim()!=='' && this.nuevoscurso_capacitacion.nombre_evento.trim()!=='' && this.nuevoscurso_capacitacion.facilitador_curso.trim()!=='' && this.nuevoscurso_capacitacion.tipo_certificado.trim()!=='' && this.nuevoscurso_capacitacion.fecha_inicio_curso.trim()!=='' && this.nuevoscurso_capacitacion.fecha_fin_curso.trim()!=='' && this.nuevoscurso_capacitacion.dias_curso!=='' && this.nuevoscurso_capacitacion.horas_curso.trim()!==''){

                if (this.curso_capacitacionEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        intitucion_curso: this.nuevoscurso_capacitacion.intitucion_curso.trim(),
                        tipo_evento: this.nuevoscurso_capacitacion.tipo_evento.trim(),
                        area_estudios: this.nuevoscurso_capacitacion.area_estudios.trim(),
                        nombre_evento: this.nuevoscurso_capacitacion.nombre_evento.trim(),
                        facilitador_curso: this.nuevoscurso_capacitacion.facilitador_curso.trim(),
                        tipo_certificado: this.nuevoscurso_capacitacion.tipo_certificado.trim(),
                        fecha_inicio_curso: this.nuevoscurso_capacitacion.fecha_inicio_curso.trim(),
                        fecha_fin_curso: this.nuevoscurso_capacitacion.fecha_fin_curso.trim(),
                        dias_curso: this.nuevoscurso_capacitacion.dias_curso,
                        horas_curso: this.nuevoscurso_capacitacion.horas_curso.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/cursoscapacitacion/' + this.curso_capacitacionEditIndex, 'Curso y/o Capactitación Actualizado con éxito');
    
                    if (response && response.data) {
                        const index = this.curso_capacitacionarray.findIndex(titulo => titulo.idcursoscapacitaciones === this.curso_capacitacionEditIndex);
                        if (index !== -1) {
                            this.curso_capacitacionarray.splice(index, 1, { ...this.nuevoscurso_capacitacion });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.curso_capacitacionEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevasCursosCapacitaciones();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                intitucion_curso: this.nuevoscurso_capacitacion.intitucion_curso.trim(),
                                tipo_evento: this.nuevoscurso_capacitacion.tipo_evento.trim(),
                                area_estudios: this.nuevoscurso_capacitacion.area_estudios.trim(),
                                nombre_evento: this.nuevoscurso_capacitacion.nombre_evento.trim(),
                                facilitador_curso: this.nuevoscurso_capacitacion.facilitador_curso.trim(),
                                tipo_certificado: this.nuevoscurso_capacitacion.tipo_certificado.trim(),
                                fecha_inicio_curso: this.nuevoscurso_capacitacion.fecha_inicio_curso.trim(),
                                fecha_fin_curso: this.nuevoscurso_capacitacion.fecha_fin_curso.trim(),
                                dias_curso: this.nuevoscurso_capacitacion.dias_curso,
                                horas_curso: this.nuevoscurso_capacitacion.horas_curso.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/cursoscapacitacion', 'Curso y/o Capactitación Agregado con éxito');
                       
                        this.curso_capacitacionarray.push({ idcursoscapacitaciones: response.data.data.id, 
                                intitucion_curso: this.nuevoscurso_capacitacion.intitucion_curso.trim(),
                                tipo_evento: this.nuevoscurso_capacitacion.tipo_evento.trim(),
                                area_estudios: this.nuevoscurso_capacitacion.area_estudios.trim(),
                                nombre_evento: this.nuevoscurso_capacitacion.nombre_evento.trim(),
                                facilitador_curso: this.nuevoscurso_capacitacion.facilitador_curso.trim(),
                                tipo_certificado: this.nuevoscurso_capacitacion.tipo_certificado.trim(),
                                fecha_inicio_curso: this.nuevoscurso_capacitacion.fecha_inicio_curso.trim(),
                                fecha_fin_curso: this.nuevoscurso_capacitacion.fecha_fin_curso.trim(),
                                dias_curso: this.nuevoscurso_capacitacion.dias_curso,
                                horas_curso: this.nuevoscurso_capacitacion.horas_curso.trim()});
                        this.resetNuevasCursosCapacitaciones();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar Cursos Capcitaciones
        editarSeleccionCursosCapacitaciones(idcursoscapacitaciones) {
            const index = this.curso_capacitacionarray.findIndex(titulo => titulo.idcursoscapacitaciones === idcursoscapacitaciones);
            if (index !== -1) {
                this.nuevoscurso_capacitacion = { ...this.curso_capacitacionarray[index] };
                this.curso_capacitacionEditIndex = idcursoscapacitaciones;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar Cursos Capcitaciones
        async eliminarSeleccionCursosCapacitaciones(idcursoscapacitaciones) {
            const index = this.curso_capacitacionarray.findIndex(titulo => titulo.idcursoscapacitaciones === idcursoscapacitaciones);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/cursoscapacitacion/',idcursoscapacitaciones,'Eliminar Curso y/o Capacitacion','¿Realmente desea eliminar el Curso y/o Capacitacion?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.curso_capacitacionarray.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevasCursosCapacitaciones();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevos Cursos Capcitaciones
        resetNuevasCursosCapacitaciones() {
            this.nuevoscurso_capacitacion= {
                intitucion_curso: "",
                tipo_evento: "",
                area_estudios: "",
                nombre_evento: "",
                facilitador_curso: "",
                tipo_certificado: "",
                fecha_inicio_curso: "",
                fecha_fin_curso: "",
                dias_curso: "",
                horas_curso: ""
            };
        },
        //Otros Datos Relevantes
        // Métodos para añadir/editar Otros Datos Relevantes
        async agregarEditarOtrosDatosRelevantes() {
            if(this.nuevosotros_datos_personales.tipo_logros.trim()!=='' && this.nuevosotros_datos_personales.descripcion_logros.trim()!=='' && this.nuevosotros_datos_personales.descripcion_fracasos.trim()!==''){

                if (this.otros_datos_personalesEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        tipo_logros: this.nuevosotros_datos_personales.tipo_logros.trim(),
                        descripcion_logros: this.nuevosotros_datos_personales.descripcion_logros.trim(),
                        descripcion_fracasos: this.nuevosotros_datos_personales.descripcion_fracasos.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/otros_datos_relevante/' + this.otros_datos_personalesEditIndex, 'Logro Actualizado con éxito');
    
                    if (response && response.data) {
                        const index = this.otros_datos_personalesarray.findIndex(titulo => titulo.idotros_datos_personales === this.otros_datos_personalesEditIndex);
                        if (index !== -1) {
                            this.otros_datos_personalesarray.splice(index, 1, { ...this.nuevosotros_datos_personales });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.otros_datos_personalesEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevosOtrosDatosRelevantes();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                tipo_logros: this.nuevosotros_datos_personales.tipo_logros.trim(),
                                descripcion_logros: this.nuevosotros_datos_personales.descripcion_logros.trim(),
                                descripcion_fracasos: this.nuevosotros_datos_personales.descripcion_fracasos.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/otros_datos_relevante', 'Logro Agregado con éxito');
                       
                        this.otros_datos_personalesarray.push({ idotros_datos_personales: response.data.data.id, 
                                tipo_logros: this.nuevosotros_datos_personales.tipo_logros.trim(),
                                descripcion_logros: this.nuevosotros_datos_personales.descripcion_logros.trim(),
                                descripcion_fracasos: this.nuevosotros_datos_personales.descripcion_fracasos.trim(),});
                        this.resetNuevosOtrosDatosRelevantes();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar Otros Datos Relevantes
        editarSeleccionOtrosDatosRelevantes(idotros_datos_personales) {
            const index = this.otros_datos_personalesarray.findIndex(titulo => titulo.idotros_datos_personales === idotros_datos_personales);
            if (index !== -1) {
                this.nuevosotros_datos_personales = { ...this.otros_datos_personalesarray[index] };
                this.otros_datos_personalesEditIndex = idotros_datos_personales;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar Otros Datos Relevantes
        async eliminarSeleccionOtrosDatosRelevantes(idotros_datos_personales) {
            const index = this.otros_datos_personalesarray.findIndex(titulo => titulo.idotros_datos_personales === idotros_datos_personales);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/otros_datos_relevante/',idotros_datos_personales,'Eliminar Logro','¿Realmente desea eliminar el Logro?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.otros_datos_personalesarray.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevosOtrosDatosRelevantes();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevos Otros Datos Relevantes
        resetNuevosOtrosDatosRelevantes() {
            this.nuevosotros_datos_personales= {
                tipo_logros: "",
                descripcion_logros: "",
                descripcion_fracasos: ""
            };
        },

        //Informacion de Contacto
        // Métodos para añadir/editar Informacion de Contacto
        async agregarEditarInformacionContacto() {
            if(this.nuevosinformacion_contacto.referencia_nombres.trim()!=='' && this.nuevosinformacion_contacto.referencia_apellidos.trim()!=='' && this.nuevosinformacion_contacto.referencia_correo_electronico.trim()!=='' && this.nuevosinformacion_contacto.referencia_telefono.trim()!==''){

                if (this.informacion_contactoEditIndex !== null) {
                    const parametros = {
                        CIInfPer: this.idus,
                        referencia_nombres: this.nuevosinformacion_contacto.referencia_nombres.trim(),
                        referencia_apellidos: this.nuevosinformacion_contacto.referencia_apellidos.trim(),
                        referencia_correo_electronico: this.nuevosinformacion_contacto.referencia_correo_electronico.trim(),
                        referencia_telefono: this.nuevosinformacion_contacto.referencia_telefono.trim(),
                    };
    
                    const response = await enviarsolig('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/informacion_contacto/' + this.informacion_contactoEditIndex, 'Referencia Personal Actualizada con éxito');
    
                    if (response && response.data) {
                        const index = this.informacion_contactoarray.findIndex(titulo => titulo.idinformacion_contacto === this.informacion_contactoEditIndex);
                        if (index !== -1) {
                            this.informacion_contactoarray.splice(index, 1, { ...this.nuevosinformacion_contacto });
                        }
                    } else {
                        console.error('La respuesta no contiene los datos esperados:', response);
                    }
                    this.informacion_contactoEditIndex = null;
                    this.modoedition=false;
                    this.resetNuevasInformacionContacto();
                    this.scrollToTop();
                } else {
                    try {
    
                        const parametros = {
                                CIInfPer: this.idus,
                                referencia_nombres: this.nuevosinformacion_contacto.referencia_nombres.trim(),
                                referencia_apellidos: this.nuevosinformacion_contacto.referencia_apellidos.trim(),
                                referencia_correo_electronico: this.nuevosinformacion_contacto.referencia_correo_electronico.trim(),
                                referencia_telefono: this.nuevosinformacion_contacto.referencia_telefono.trim(),
                            };
                        
                        console.log(parametros);
                       
                        const response = await enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/informacion_contacto', 'Referencia Personal Agregada con éxito');
                       
                        this.informacion_contactoarray.push({ idinformacion_contacto: response.data.data.id, 
                                referencia_nombres: this.nuevosinformacion_contacto.referencia_nombres.trim(),
                                referencia_apellidos: this.nuevosinformacion_contacto.referencia_apellidos.trim(),
                                referencia_correo_electronico: this.nuevosinformacion_contacto.referencia_correo_electronico.trim(),
                                referencia_telefono: this.nuevosinformacion_contacto.referencia_telefono.trim()});
                        this.resetNuevasInformacionContacto();
                        this.scrollToTop();
                        
                    } catch (error) {
                        console.log(error)
                    }
                }
            }else{
                mostraralertas2('No deje campos en blanco','warning');
            }
            
        },
        // Métodos para editar Informacion de Contacto
        editarSeleccionInformacionContacto(idinformacion_contacto) {
            const index = this.informacion_contactoarray.findIndex(titulo => titulo.idinformacion_contacto === idinformacion_contacto);
            if (index !== -1) {
                this.nuevosinformacion_contacto = { ...this.informacion_contactoarray[index] };
                this.informacion_contactoEditIndex = idinformacion_contacto;
                this.modoedition=true;
                this.scrollToTop();
            }
        },
        // Métodos para eliminar Informacion de Contacto
        async eliminarSeleccionInformacionContacto(idinformacion_contacto) {
            const index = this.informacion_contactoarray.findIndex(titulo => titulo.idinformacion_contacto === idinformacion_contacto);
            const response = await confimar('http://cvubackendv2.test/api/cvn/v1/informacion_contacto/',idinformacion_contacto,'Eliminar Referencias Personales','¿Realmente desea eliminar la Referencia Personal?');

            if (response && response.status === 200) {
                if (index !== -1) {
                    this.informacion_contactoarray.splice(index, 1);
                }
            } else {
                console.error('La respuesta no contiene los datos esperados:', response);
            }
            this.resetNuevasInformacionContacto();
            this.scrollToTop();
            this.modoedition=false;
        },
        // Restablecer objetos de nuevos Informacion de Contacto
        resetNuevasInformacionContacto() {
            this.nuevosinformacion_contacto= {
                referencia_nombres: "",
                referencia_apellidos: "",
                referencia_correo_electronico: "",
                referencia_telefono: ""
            };
        },


        //Guardar Datos Personales
        guardarDatosPersonales(event) {

            event.preventDefault();
            /*var mifoto = document.getElementById('fotoimg');
            this.imagen = mifoto.src;/*

           /* var parametros = {
                CIInfPer: this.CIInfPer.trim(),
                ApellInfPer: this.ApellInfPer.trim(),
                ApellMatInfPer: this.ApellMatInfPer.trim(),
                NombInfPer: this.NombInfPer.trim(),
                NacionalidadPer: this.NacionalidadPer.trim(),
                LugarNacimientoPer: this.LugarNacimientoPer.trim(),
                FechNacimPer: this.FechNacimPer.trim(),
                GeneroPer: this.GeneroPer.trim(),
                CiudadPer: this.CiudadPer.trim(),
                DirecDomicilioPer: this.DirecDomicilioPer.trim(),
                Telf1InfPer: this.Telf1InfPer.trim(),
                mailPer: this.mailPer.trim(),
                foto: this.imagen.trim()


            }*/

            //enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/informacionpersonal', 'Datos Personales Guardados');

            this.activeTab = "personal";
            this.mostrardatospersonales = false;
            this.regresar1 = true;


        },
        async regresarADatosPersonales() {
            // Lógica para regresar a datos personales
            const genhom2 = "HOMBRE";
            const genMuj2 = "MUJER";
            const response = await axios.get(this.url1);
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data[0];
                    this.CIInfPer = data.CIInfPer;
                    this.ApellInfPer = data.ApellInfPer;
                    this.ApellMatInfPer = data.ApellMatInfPer;
                    this.NombInfPer = data.NombInfPer;
                    //this.NacionalidadPer = data.NacionalidadPer;
                    if(data.NacionalidadPer="EC"){
                        this.NacionalidadPer = "ECUADOR";
                    }else {
                        this.NacionalidadPer = data.NacionalidadPer;
                    }
                    //this.LugarNacimientoPer = data.LugarNacimientoPer;
                    this.FechNacimPer = data.FechNacimPer;
                    //this.GeneroPer = data.GeneroPer;

                    if(data.GeneroPer == "M"){
                        this.GeneroPer = genMuj2;
                    }else{
                        this.GeneroPer = genhom2;
                    }
                    this.CiudadPer = data.CiudadPer.toUpperCase();
                    this.DirecDomicilioPer = data.DirecDomicilioPer;
                    this.Telf1InfPer = data.Telf1InfPer;
                    this.mailPer = data.mailPer;
                    //this.imagen= data.fotografia;
                   
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
         async guardaDeclaracionPersonal(event) {
            event.preventDefault();
            const usuario = await getMe();
            console.log(usuario);
            this.idus = usuario.name;
            console.log(this.idus);
            if(this.texto.trim()!==''){
                
                var parametros = {
                    CIInfPer: this.idus,
                    texto: this.texto.trim()
    
    
                }
    
                enviarsolig('POST', parametros, 'http://cvubackendv2.test/api/cvn/v1/declaracion_personal', 'Resumen del Curriculum Guardadas');
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data[0];
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
                //console.log(this.estudioactualmentefacultadcarreras);
                console.log(response);
                    
                
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
                    
                    this.titulosBachiller = [];
                    this.titulosUniversitarios = [];
                    this.titulosPosgrado = [];
                    this.estudioactualtitulosUniversitarios = [];
                    
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
                        if (item.estudios_universitarios_culminados === 'No' && item.titulo_universitario_obtenido && item.institucion_universitaria) {
                            this.estudioactualtitulosUniversitarios.push({
                                
                                idformacion_academica: item.id,
                                facultades_universidad: item.titulo_universitario_obtenido || '',
                                titulo_carrera_universidad: item.institucion_universitaria || '',
                                fechaestudioactual: item.fecha_graduacion || '',
                                carrera_universidad: item.especialidad || ''
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
                        const data2 = response2.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
            // Lógica para regresar a datos personales
           
           
                    const response = await axios.get(this.url6);
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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

            if(this.texto !="" && this.titulosBachiller.length > 0 && this.informacion_contactoarray.length > 0 && this.estudioactualtitulosUniversitarios.length > 0 || this.titulosUniversitarios.length > 0 ){

                mostraralertas2('Sus Perfil se ha completado Con Exito', 'success');
                this.us = false;
                this.registro = true;
            }else{
                mostraralertas2('Para finalizar debe por lo menos haber llenado la Declaracion libre del curriculum, Formacion Académica y agregar una Referencia Personal', 'warning');
            }
            


        },
        
       
       
        cargarfoto(event) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function () {
                var mifoto = document.getElementById("fotoimg");
                mifoto.src = reader.result;
                this.imagen = mifoto.src;
            };
        },

        async downloadCV() {
            const doc = new jsPDF('p', 'mm', 'a4');

            const pageHeight = doc.internal.pageSize.getHeight();
            const pageWidth = doc.internal.pageSize.getWidth();
            const headerHeight = 30;
            const footerHeight = 20;
            const marginTop = headerHeight + 10;
            const marginBottom = footerHeight + 10;
            const contentHeight = pageHeight - marginTop - marginBottom;
            const leftMargin = 75;
            const headerImageUrl = require('@/assets/images/portada.png');
            const footerImageUrl = require('@/assets/images/imagenfondo.png');
            
            const headerImg = await this.toDataURL(headerImageUrl);
            const footerImg = await this.toDataURL(footerImageUrl);

            const addHeaderAndFooter = (doc, isFirstPage = false) => {
                if (isFirstPage) {
                    doc.addImage(headerImg, 'JPEG', 0, 0, pageWidth, pageHeight);
                } else {
                    doc.addImage(footerImg, 'JPEG', 0, 0, pageWidth, pageHeight);
                }
            };

            const addVerticalLine = (doc, yStart, yEnd) => {
                doc.setDrawColor(0, 0, 0);
                doc.setLineWidth(0.5);
                doc.line(55, yStart, 55, yEnd);
            };

            const addSectionHeader = (text, x, y) => {
                doc.setFontSize(14);
                doc.setFont('Arial', 'bold');
                doc.text(text, x, y);
                doc.setDrawColor(0, 0, 0);
                doc.setLineWidth(0.5);
                doc.line(x, y + 2, pageWidth - 10, y + 2);
                doc.setFont('Arial', 'normal');
                return y + 14;
            };

            const addText = (text, x, y) => {
                doc.setFontSize(11);
                const lines = doc.splitTextToSize(text, pageWidth - x - 10);
                lines.forEach(line => {
                    if (y > pageHeight - marginBottom) {
                        doc.addPage();
                        addHeaderAndFooter(doc);
                        addVerticalLine(doc, marginTop, pageHeight - marginBottom);
                        y = marginTop;
                    }
                    
                    doc.text(line, x, y);
                    y += 5; 
                });
                return y ;
            };

            const addBoldText = (text, x, y) => {
                doc.setFontSize(12);
                doc.setFont('Arial', 'bold');
                doc.text(text, x, y);
                doc.setFont('Arial', 'normal');
                return y + 5;
            };

            const addBoldText3 = (text, x, y) => {
                doc.setFontSize(12);
                doc.setFont('Arial', 'bold');
                doc.text(text, x, y);
                doc.setDrawColor(0, 0, 0);
                doc.setLineWidth(0.5);
                doc.line(x, y + 2, pageWidth - 10, y + 2);
                doc.setFont('Arial', 'normal');
                return y + 5;
            };

            const addBoldText2 = (text, x, y) => {
                doc.setFontSize(11);
                doc.setFont('Arial', 'bold'); 
                const lines = doc.splitTextToSize(text, pageWidth - x - 10);
                
                lines.forEach(line => {
                    if (y > pageHeight - marginBottom) {
                        doc.addPage();
                        addHeaderAndFooter(doc);
                        addVerticalLine(doc, marginTop, pageHeight - marginBottom);
                        y = marginTop;
                        doc.setFont('Arial', 'bold'); 
                    }
                    doc.text(line, x, y);
                });

                doc.setFont('Arial', 'normal'); 
                return y;
            };

            // Portada
            addHeaderAndFooter(doc, true);

            const currentFontSize = doc.internal.getFontSize();
            const currentFont = doc.internal.getFont();
            const currentTextColor = doc.getTextColor();

            // Agregar texto en la portada
            const date = new Date();
            const options = { month: 'numeric', day: 'numeric', year: 'numeric' };
             
            doc.setFontSize(15);
            doc.setTextColor(2, 107, 41);
            doc.setFont('Arial', 'bold');
            let nuevanacionalidad;
            let carrera;
            let titulacioncarr;
            if(this.NacionalidadPer = 'EC'){
                nuevanacionalidad = 'ECUADOR'
            }else{
                nuevanacionalidad = this.NacionalidadPer
            }

            
            if(this.titulosUniversitarios.length > 0){
                this.titulosUniversitarios.forEach((nuevouni2) => {
                    
                    titulacioncarr = nuevouni2['titulo_universitario_obtenido'];
                    carrera = "";
                });
                //this.estudioactualtitulosUniversitarios=[];
            }
            else if(this.estudioactualtitulosUniversitarios.length > 0 ){
                this.estudioactualtitulosUniversitarios.forEach((nuevouni) => {
                    
                    carrera = nuevouni['carrera_universidad'];
                    titulacioncarr = nuevouni['titulo_carrera_universidad'];
                });
            }
            else {
                titulacioncarr = "Estudiante";
                carrera = "";
            }
            
            const text =`${this.NombInfPer}\n${this.ApellInfPer} ${this.ApellMatInfPer}\n${titulacioncarr} ${carrera}\n${this.CiudadPer}-${nuevanacionalidad}\n${this.mailPer} `;
            const textWidth = doc.getStringUnitWidth(text) * 5 / doc.internal.scaleFactor;
            const x1 = pageWidth - textWidth - 65; 
            const y1 = pageHeight - 50; 

            doc.text(text, x1, y1);

            doc.setFontSize(currentFontSize);
            doc.setFont(currentFont.fontName, currentFont.fontStyle);
            doc.setTextColor(currentTextColor);
            // Nueva página con encabezado, pie de página y línea vertical
            doc.addPage();
            addHeaderAndFooter(doc);
            addVerticalLine(doc, marginTop, pageHeight - marginBottom);

            let y = marginTop;
            
            // Cuadrado para foto tamaño carnet
            
            doc.setDrawColor(0, 0, 0);
            doc.setLineWidth(0.5);
            doc.rect(10, y, 40, 50); 
            
            y += 5;

            // Declaración Personal
            let x = 60;
            y = addSectionHeader('Descripción libre del curriculum', x, y);
            y = addText(`${this.texto}`, x, y);
            y = addBoldText('', x, y);

            // Datos personales
            y = addSectionHeader('1. Datos Personales', x, y);

            const personalData = [
                { label: 'Nombres y Apellidos:', value: `${this.NombInfPer} ${this.ApellInfPer} ${this.ApellMatInfPer}` },
                { label: 'Número de Identificación:', value: `${this.CIInfPer}` },
                { label: 'Nacionalidad:', value: `${nuevanacionalidad}` },
                { label: 'Fecha de Nacimiento:', value: `${this.FechNacimPer}` },
                //{ label: 'Lugar de Nacimiento:', value: `${this.LugarNacimientoPer}` },
                { label: 'Género:', value: `${this.GeneroPer}` },
                { label: 'Edad:', value: `${this.edad}` },
                { label: 'Dirección de Residencia:', value: `${this.DirecDomicilioPer}` },
                { label: 'Ciudad:', value: `${this.CiudadPer}` },
                { label: 'Teléfono:', value: `${this.Telf1InfPer}` },
                { label: 'Correo Electrónico:', value: `${this.mailPer}` }
            ];

            personalData.forEach(item => {
                y = addBoldText2(item.label, x, y);
                y = addText(item.value, x + 60, y); 
            });
            y = addBoldText('', x, y);

            // Formación académica
            if(this.titulosBachiller.length > 0 || this.titulosUniversitarios.length > 0 || this.titulosPosgrado.length > 0 ){
                y = addSectionHeader('1.1 Formación Académica', x, y);
            }
            if (this.titulosBachiller.length > 0) {
                
               
                
                y = addBoldText3('1.1.1 Formación Académica - Bachiller', x, y);

                this.titulosBachiller.forEach((bachiller, index) => {
                    y = addBoldText(``, x, y); 
                    const formacionAcademicaData = [
                        { label: 'Título de Bachiller:', key: 'titulo_bachiller_obtenido' },
                        { label: 'Institución Educativa:', key: 'institucion_bachiller' },
                        { label: 'Año de Graduación:', key: 'fecha_graduacion_bachiller' },
                        { label: 'Especialidad:', key: 'especialidad_bachiller' }
                    ];

                    formacionAcademicaData.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${bachiller[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }

            if (this.titulosUniversitarios.length > 0) {
                
                
                y = addBoldText3('1.1.2 Formación Académica - Universitarios', x, y);

                this.titulosUniversitarios.forEach((universitario, index) => {
                    y = addBoldText(``, x, y); 
                    const formacionAcademicaData2 = [
                        { label: 'Título Universitario:', key: 'titulo_universitario_obtenido' },
                        { label: 'Institución Educativa:', key: 'institucion_universitaria' },
                        { label: 'Año de Graduación:', key: 'fecha_graduacion' },
                        { label: 'Especialidad:', key: 'especialidad' }
                    ];

                    formacionAcademicaData2.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${universitario[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }

            if (this.titulosPosgrado.length > 0) {
               
                
                y = addBoldText3('1.1.3 Formación Académica - Posgrados', x, y);

                this.titulosPosgrado.forEach((posgrado, index) => {
                    y = addBoldText(``, x, y); 
                    const formacionAcademicaData3 = [
                        { label: 'Título Posgrado:', key: 'titulo_posgrado_obtenido' },
                        { label: 'Institución Educativa:', key: 'institucion_posgrado' },
                        { label: 'Año de Graduación:', key: 'fecha_graduacion_posgrado' },
                        { label: 'Especialidad:', key: 'especialidad_posgrado' }
                    ];

                    formacionAcademicaData3.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${posgrado[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }

            // Experiencias Profesionales
            if(this.cargosEmpresas.length > 0 || this.cargosPasantias.length > 0 ){
                y = addSectionHeader('2. Experiencias Profesionales', x, y);
            }
            if (this.cargosEmpresas.length > 0) {
               
                y = addBoldText3('2.1 Experiencias Profesionales - Empresa', x, y);

                this.cargosEmpresas.forEach((empresa, index) => {
                    y = addBoldText(``, x, y); 
                    const experienciaData = [
                        { label: 'Empresa / Institución:', key: 'empresa_institucion' },
                        { label: 'Cargos Desempeñados:', key: 'cargo_desempenado_empresa' },
                        { label: 'Descripción de Funciones:', key: 'descripcion_funciones_empresa' },
                        { label: 'Logros:', key: 'logros_resultados_empresa' }
                    ];

                    experienciaData.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${empresa[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });

                y = addBoldText('', x, y); 
            }

            if (this.cargosPasantias.length > 0) {
                
                
                y = addBoldText3('2.2 Experiencias Profesionales - Prácticas', x, y);

                this.cargosPasantias.forEach((pasn, index) => {
                    y = addBoldText(``, x, y); 
                    const experienciaData = [
                        { label: 'Empresa / Institución:', key: 'empresa_institucion_practicas' },
                        { label: 'Cargos Desempeñados:', key: 'area_trabajo_practicas' },
                        { label: 'Descripción de Funciones:', key: 'descripcion_funciones_practicas' }
                    ];

                    experienciaData.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${pasn[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });

                y = addBoldText('', x, y);
            }
            // Publicaciones
            if (this.publicacionesarray.length > 0) {
                y = addSectionHeader('3. Publicaciones', x, y);
                

                this.publicacionesarray.forEach((publi, index) => {
                    y = addBoldText3(`Publicación #${index+1}`, x, y);
                    y = addBoldText(``, x, y); 
                    const publicacionData2 = [
                        { label: 'Tipo de Publicación:', key: 'publicacion_tipo' },
                        { label: 'Título de la Publicación:', key: 'publicacion_titulo' },
                        { label: 'Likn de la Publicación:', key: 'link_publicación' }
                    ];

                    publicacionData2.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${publi[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            // Idiomas
            if (this.idiomasarray.length > 0) {
                y = addSectionHeader('4. Idiomas', x, y);
                
                this.idiomasarray.forEach((idio, index) => {
                    y = addBoldText3(`Idioma #${index+1}`, x, y);
                    y = addBoldText(``, x, y); 
                    const idiomasData2 = [
                        { label: 'Idioma:', key: 'idioma' },
                        { label: 'Comprensión Auditiva:', key: 'comprension_auditiva' },
                        { label: 'Comprensión de Lectura:', key: 'comprension_lectura' },
                        { label: 'Interacción Oral:', key: 'interaccion_oral' },
                        { label: 'Expresión Oral:', key: 'expresion_oral' },
                        { label: 'Expresión Escrita:', key: 'expresion_escrita' }
                    ];

                    idiomasData2.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${idio[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            // Habilidades
            if(this.habilidades_comunicativas_array.length > 0 || this.habilidades_creativas_array.length > 0 || this.habilidades_liderazgo_array.length > 0 || this.habilidades_informaticas_array.length > 0 || this.oficios_subactividades_array.length > 0 || this.otro_habilidades_array.length > 0){
                y = addSectionHeader('5. Habilidades', x, y);
            }
            
            if (this.habilidades_comunicativas_array.length > 0) {
                
                y = addBoldText3('Habilidades Comunicativas', x, y);
                this.habilidades_comunicativas_array.forEach((habi, index) => {
                   
                    y = addBoldText(``, x, y); 
                    const habilidadData2 = [
                        { label: 'Habilidad:', key: 'habilidades_comunicativas' },
                        { label: 'Descripción:', key: 'descripcion_habilidades_comunicativas' }
                    ];

                    habilidadData2.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${habi[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            if (this.habilidades_creativas_array.length > 0) {
                y = addBoldText3('Habilidades Creativas', x, y);
                this.habilidades_creativas_array.forEach((habic, index) => {
                   
                    y = addBoldText(``, x, y); 
                    const habilidadData3 = [
                        { label: 'Habilidad:', key: 'habilidades_creativas' },
                        { label: 'Descripción:', key: 'descripcion_habilidades_creativas' }
                    ];

                    habilidadData3.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${habic[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            if (this.habilidades_liderazgo_array.length > 0) {
                y = addBoldText3('Habilidades de Liderazgo', x, y);
                this.habilidades_liderazgo_array.forEach((habic4, index) => {
                   
                    y = addBoldText(``, x, y); 
                    const habilidadData4 = [
                        { label: 'Habilidad:', key: 'habilidades_liderazgo' },
                        { label: 'Descripción:', key: 'descripcion_habilidades_liderazgo' }
                    ];

                    habilidadData4.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${habic4[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            if (this.habilidades_informaticas_array.length > 0) {
                y = addBoldText3('Habilidades Informáticas', x, y);
                this.habilidades_informaticas_array.forEach((habic5, index) => {
                   
                    y = addBoldText(``, x, y); 
                    const habilidadData5 = [
                        { label: 'Habilidad:', key: 'habilidades_informaticas_cv' },
                        { label: 'Descripción:', key: 'descripcion_habilidades_informaticas_cv' }
                    ];

                    habilidadData5.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${habic5[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            if (this.oficios_subactividades_array.length > 0) {
                y = addBoldText3('Oficios/Subactividades', x, y);
                this.oficios_subactividades_array.forEach((habic6, index) => {
                   
                    y = addBoldText(``, x, y); 
                    const habilidadData6 = [
                        { label: 'Oficio/Subactividad:', key: 'oficios_subactividades' },
                        { label: 'Descripción:', key: 'descripcion_oficios_subactividades' }
                    ];

                    habilidadData6.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${habic6[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            if (this.otro_habilidades_array.length > 0) {
                y = addBoldText3('Otras Habilidades', x, y);
                this.otro_habilidades_array.forEach((habic7, index) => {
                   
                    y = addBoldText(``, x, y); 
                    const habilidadData7 = [
                        { label: 'Descripción:', key: 'otro_habilidades' }
                    ];

                    habilidadData7.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${habic7[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            // Cursos
            if (this.curso_capacitacionarray.length > 0) {
                y = addSectionHeader('6. Cursos', x, y);
                
                this.curso_capacitacionarray.forEach((cur, index) => {
                    y = addBoldText3(`Curso #${index+1}`, x, y);
                    y = addBoldText(``, x, y); 
                    const cursosData2 = [
                        { label: 'Nombre Evento:', key: 'nombre_evento' },
                        { label: 'Nombre del Facilitador:', key: 'facilitador_curso' },
                        { label: 'Institución:', key: 'intitucion_curso' },
                        { label: 'Tipo de Evento:', key: 'tipo_evento' },
                        { label: 'Area de Estudios:', key: 'area_estudios' },
                        { label: 'Tipó de Certificado:', key: 'tipo_certificado' },
                        { label: 'Dias:', key: 'dias_curso' },
                        { label: 'Horas:', key: 'horas_curso' }
                    ];

                    cursosData2.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${cur[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            // Logros
            if (this.otros_datos_personalesarray.length > 0) {
                y = addSectionHeader('7. Logros y Fracasos', x, y);
               
                this.otros_datos_personalesarray.forEach((logr, index) => {
                    y = addBoldText3(`Logro #${index+1}`, x, y);
                    y = addBoldText(``, x, y); 
                    const logrosData2 = [
                        { label: 'Tipo de Logro:', key: 'tipo_logros' },
                        { label: 'Descripción:', key: 'descripcion_logros' },
                        { label: 'Descripción de Fracasos:', key: 'descripcion_fracasos' }
                    ];

                    logrosData2.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${logr[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
                y = addBoldText('', x, y);
            }
            // Referencias
            if (this.informacion_contactoarray.length > 0) {
                y = addSectionHeader('8. Referencias Personales', x, y);
                
                this.informacion_contactoarray.forEach((info, index) => {
                    y = addBoldText3(`Referencia #${index+1}`, x, y);
                    y = addBoldText(``, x, y); 
                    const inforData2 = [
                        { label: 'Nombres:', key: 'referencia_nombres' },
                        { label: 'Apellidos:', key: 'referencia_apellidos' },
                        { label: 'Correo Electrónico:', key: 'referencia_correo_electronico' },
                        { label: 'Teléfono:', key: 'referencia_telefono' }
                    ];

                    inforData2.forEach(item => {
                        y = addBoldText2(item.label, x, y);
                        y = addText(`${info[item.key]}`, x + 60, y); 
                    });

                    y = addBoldText('', x, y); 
                });
            }

            doc.save(`CVN-${this.CIInfPer}-${this.NombInfPer} ${this.ApellInfPer} ${this.ApellMatInfPer}.pdf`);
        },


        toDataURL(url) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    const dataURL = canvas.toDataURL('image/jpeg');
                    resolve(dataURL);
                };
                img.onerror = () => {
                    reject(new Error('Error al cargar la imagen.'));
                };
                img.src = url;
            });
        },
        
        loadImage(url) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    const dataURL = canvas.toDataURL('image/jpeg');
                    resolve({ dataURL, width: img.width, height: img.height });
                };
                img.onerror = () => {
                    reject(new Error('Error al cargar la imagen.'));
                };
                img.src = url;
            });
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
       
        //Datos Personales
        async getDatosPersonales() {
            try {
                const genhom = "HOMBRE";
                const genMuj = "MUJER";
                const response = await axios.get(this.url1);
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data[0];
                    this.CIInfPer = data.CIInfPer;
                    this.ApellInfPer = data.ApellInfPer;
                    this.ApellMatInfPer = data.ApellMatInfPer;
                    this.NombInfPer = data.NombInfPer;
                    //this.NacionalidadPer = data.NacionalidadPer;
                    if(data.NacionalidadPer == "EC"){
                        this.NacionalidadPer = "ECUADOR";
                    }else {
                        this.NacionalidadPer = data.NacionalidadPer;
                    }
                   // this.LugarNacimientoPer = data.LugarNacimientoPer;
                    this.FechNacimPer = data.FechNacimPer;
                    //this.GeneroPer = data.GeneroPer;
                    if(data.GeneroPer == "M"){
                        this.GeneroPer = genMuj;
                    }else{
                        this.GeneroPer = genhom;
                    }
                    console.log(data.GeneroPer);
                    console.log(this.GeneroPer);
                    this.CiudadPer = data.CiudadPer.toUpperCase();
                    this.DirecDomicilioPer = data.DirecDomicilioPer;
                    this.Telf1InfPer = data.Telf1InfPer;
                    this.mailPer = data.mailPer;
                    this.imagen= data.fotografia;
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
                //console.log(this.estudioactualmentefacultadcarreras);
                console.log(response);
                console.log(this.url11);
                    
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
                    
                    // Limpiamos los arreglos existentes
                    this.titulosBachiller = [];
                    this.titulosUniversitarios = [];
                    this.titulosPosgrado = [];
                    this.estudioactualtitulosUniversitarios = [];
                    
                    
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
                        if (item.estudios_universitarios_culminados === 'No' && item.titulo_universitario_obtenido && item.institucion_universitaria) {
                            this.estudioactualtitulosUniversitarios.push({
                                
                                idformacion_academica: item.id,
                                facultades_universidad: item.titulo_universitario_obtenido || '',
                                titulo_carrera_universidad: item.institucion_universitaria || '',
                                fechaestudioactual: item.fecha_graduacion || '',
                                carrera_universidad: item.especialidad || ''
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
                    
                    if(this.titulosBachiller.length > 0){
                        this.sidatos=false;
                    }else{
                        const response2 = await axios.get(this.url11);
                        const data2 = response2.data[0];
                        console.log(data2);
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                    
                    this.fechacargos="";
                    this.fechaFinLabel="";
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data;
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
                if (response.data.data && response.data.data.length > 0) {
                    const data = response.data.data[0];
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
        eliminar(id, nombre) {
            confimar(
                "http://backendbolsaempleo.test/api/v1/empresas/",
                id,
                "Eliminar registro",
                "¿Realmente desea eliminar a " + nombre + "?"
            );
            this.cargando = false;
            this.$router.push("/principal/" + this.idus);
        },
        //Editar
       
        //Idioma
        handleFileUpload(event) {
            this.archivoCertificado = event.target.files[0];
        },
      
        //editar Datos Personales
        async editarDatosPersonales(event) {
            event.preventDefault();
            /*var mifoto = document.getElementById('fotoimg');
            this.imagen = mifoto.src;*/

            /*var parametros = {
                CIInfPer: this.CIInfPer.trim(),
                ApellInfPer: this.ApellInfPer.trim(),
                ApellMatInfPer: this.ApellMatInfPer.trim(),
                NombInfPer: this.NombInfPer.trim(),
                NacionalidadPer: this.NacionalidadPer.trim(),
                LugarNacimientoPer: this.LugarNacimientoPer.trim(),
                FechNacimPer: this.FechNacimPer.trim(),
                GeneroPer: this.GeneroPer.trim(),
                CiudadPer: this.CiudadPer.trim(),
                DirecDomicilioPer: this.DirecDomicilioPer.trim(),
                Telf1InfPer: this.Telf1InfPer.trim(),
                mailPer: this.mailPer.trim(),
                fotografia: this.imagen.trim()


            }*/

            //mostraralertas2('Experiencias Profesionales Actualizada','success');
            this.activeTab = "personal";
            this.mostrardatospersonales = false;
            this.regresar1 = true;
            this.isEditing = false;


        },

        //editar Fomacion Academica
        async editarFormacionAcademica(event) {
            event.preventDefault();
            
            //mostraralertas2('Formación Académica Actualizada','success');
            
            this.activeTab = "experiencia";
            this.mostrarformacionacademica = false;
            this.regresar3 = true;


        },
        //editar Experiencia
        async editarExperiencia(event) {
            event.preventDefault();

            //mostraralertas2('Experiencias Profesionales Actualizada','success');

            
            this.activeTab = "investigacion";
            this.mostrarexperienciasprofesionales = false;
            this.regresar4 = true;


        },
        //editar Investigacion
        async editarInvestigacion(event) {
            event.preventDefault();

           //mostraralertas2('Investigaciones y Publicaciones Actualizada','success');

           
            this.activeTab = "idioma";
            this.mostrarinvestigacionpublicaciones = false;
            this.regresar5 = true;


        },
        //editar Idiomas
         editarIdiomas(event) {
            event.preventDefault();
            //mostraralertas2('Idiomas Actualizados','success');
            
            this.activeTab = "habilidades";
            this.mostraridiomas = false;
            this.regresar6 = true;


        },
        //editar Habilidades
        async editarHabilidades(event) {
            event.preventDefault();

            //mostraralertas2('Habilidades Actualizados','success');
            this.activeTab = "capacitaciones";
            this.mostrarsw = false;
            this.regresar9 = true;
        },
        async editarCursoCapacitaciones(event) {
            event.preventDefault();

           //mostraralertas2('Cursos y/o Capacitaciones Actualizados','success');
            this.activeTab = "relevantes";
            this.mostrarcapacitaciones = false;
            this.regresar7 = true;
        },
        //editar Relevantes
        async editarRelevantes(event) {
            event.preventDefault();
            //mostraralertas2('Logros Actualizados','success');

            
            this.activeTab = "contacto";
            this.mostrardatosrelevantes = false;
            this.regresar8 = true;


        },
        //editar Contacto
        async editarContacto(event) {
            event.preventDefault();
            //mostraralertas2('Referencias Actualizadas','success');
             
            if(this.texto !="" && this.titulosBachiller.length > 0 && this.informacion_contactoarray.length > 0 || this.estudioactualtitulosUniversitarios.length > 0 || this.titulosUniversitarios.length > 0 ){

                mostraralertas2('Sus Perfil se ha Actualizado Con Exito', 'success');
                this.us = false;
                this.registro = true;
                this.editus= false;
                this.eseditar= false;
            }else{
                mostraralertas2('Para finalizar debe por lo menos haber llenado la Declaracion libre del curriculum, Formacion Académica y agregar una Referencia Personal', 'warning');
            }


        },
        //editar Declaracion Personal
        async editarDeclaracionPersonal(event) {
            event.preventDefault();

            var parametros = {
                CIInfPer: this.CIInfPer,
                texto: this.texto.trim()


            }

            var resp = await enviarsoliedit('PUT', parametros, 'http://cvubackendv2.test/api/cvn/v1/declaracion_personal/'+this.iddeclaracion_personal, 'Resumen Actualizado');
           
              this.activeTab = "formacion";
            this.mostrardelaracionpersonal = false;
           this.regresar2 = true;


        },

    },
    mixins: [script2],
};
</script>
