<template>
  <!-- Spinner Start 
  <div id="spinner"
    class="w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center"
    style="z-index: 9999;">
    <div class="spinner-grow text-primary" role="status"></div>
  </div>-->
  <!-- Spinner End -->

  <!-- Inicio Start -->
  <div class="container-fluid carousel-header px-0" id="Inicio">
    <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <!--Video de Fondo y Texto Encima-->
          <video autoplay muted loop id="bg-video" height="900px">
            <source src="@/assets/images/course-video.mp4" type="video/mp4" />
          </video>
          <div class="carousel-caption">
            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
              <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                style="border-style: double;">
                <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">LE DAMOS LA BIENVENIDA
                  AL</h4>
              </div>
              <h1 class="display-1 text-capitalize text-white mb-3">Curriculum vitae Normalizad<img
                  src="@/assets/images/ESCUDETO_UTE-LVT.png" alt=""
                  style="width: 1.2em; height: auto; vertical-align: middle; margin-bottom: 4em;"></h1>
              <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5"
                style="border-style: double;">
                <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">{{ formattedDate }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Inicio End -->

  <!-- Features Start -->
  <section class="features">
    <div class="container">
      <div class="row">
        <!-- Cuadro Despegable De Estudio Actualmente -->
        <div class="col-lg-4 col-12">
          <div class="features-post">
            <div class="features-content rounded">
              <div class="content-show">
                <h4><i class="fa fa-pencil"></i>ESTUDIO ACTUALMENTE</h4>
              </div>
              <div class="content-hide">
                <p>
                  Si sigues estudiando, no te apresures. Crea tu currículum UTLVTE a
                  medida que avanzas. Al graduarte, presentarás tu perfil completo a
                  empresas e instituciones. Actualiza tu currículum según necesites; es
                  esencial para tu perfil profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Cuadro Despegable De SOY EGRESADO/A -->
        <div class="col-lg-4 col-12">
          <div class="features-post second-features">
            <div class="features-content rounded">
              <div class="content-show">
                <h4><i class="fa fa-graduation-cap"></i> SOY EGRESADO/A</h4>
              </div>
              <div class="content-hide">
                <p>
                  Si ya te graduaste, enfócate en tu currículum UTLVTE. Es clave para
                  presentarte a empresas e instituciones. Actualízalo regularmente y
                  resalta tus logros y habilidades. Un currículum sólido marca la
                  diferencia en tu búsqueda laboral. ¡Aprovecha esta herramienta para
                  destacar!
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Cuadro Despegable De ¿DE QUÉ TRATA EL CURRICULUM? -->
        <div class="col-lg-4 col-12">
          <div class="features-post third-features">
            <div class="features-content rounded">
              <div class="content-show">
                <h4><i class="fa fa-book"></i>¿DE QUÉ TRATA EL CURRICULUM?</h4>
              </div>
              <div class="content-hide">
                <p>
                  Un currículum vitae normalizado resume de forma clara tu formación,
                  experiencia y habilidades. Es esencial en la selección, da impresión
                  inicial y facilita la comparación. Al seguir un formato, demuestras
                  profesionalismo y destacas cualidades. Un currículum bien hecho resalta
                  y marca la diferencia, así que ¡anímate y crea el tuyo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Features End -->

  <!-- Sobre la UTLVTE Start -->
  <section class="section why-us py-5" data-section="section2">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Encabezado con Efecto fadeInUp -->
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s" id="SobreUTLVTE">
            <h4 class="display-4 text-white">Sobre la UTLVTE</h4>
          </div>
        </div>
        <div class="col-md-12">
          <div id="tabs">
            <section class="tabs-content">
              <article id="tabs-1">
                <div class="row align-items-center wow fadeInUp" data-wow-delay="0.1s">
                  <!-- Imagen a la Izquierda -->
                  <div class="col-md-6">
                    <img src="@/assets/images/i1.png" alt="" class="img-fluid w-100 rounded-top anima23" />
                  </div>
                  <!-- Contenido a la Derecha -->
                  <div class="col-md-6">
                    <h4>EDUCACIÓN DE EXCELENCIA</h4>
                    <p>
                      La Universidad Técnica "Luis Vargas Torres" de Esmeraldas se esfuerza constantemente por brindar
                      una educación
                      de excelencia a sus estudiantes. A través de programas académicos
                      rigurosos, recursos de calidad y un enfoque en la innovación
                      educativa, la universidad busca fomentar un entorno propicio para el
                      aprendizaje y el crecimiento personal.
                    </p>
                  </div>
                </div>
              </article>
              <article id="tabs-2">
                <div class="row align-items-center wow fadeInUp" data-wow-delay="0.1s">
                  <!-- Imagen a la Izquierda -->
                  <div class="col-md-6">
                    <img src="@/assets/images/i2.png" alt="" class="img-fluid w-100 rounded-top anima23" />
                  </div>
                  <!-- Contenido a la Derecha -->
                  <div class="col-md-6">
                    <h4>CONFRATERNIDAD</h4>
                    <p>
                      La confraternidad universitaria se promueve a través de una variedad
                      de actividades y programas diseñados para fomentar el compañerismo y
                      la colaboración. Los eventos deportivos, las actividades culturales,
                      las organizaciones estudiantiles y los proyectos comunitarios son
                      solo algunos ejemplos de cómo se fomenta la interacción entre los
                      estudiantes.
                    </p>
                  </div>
                </div>
              </article>
              <article id="tabs-3">
                <div class="row align-items-center wow fadeInUp" data-wow-delay="0.1s">
                  <!-- Imagen a la Izquierda -->
                  <div class="col-md-6">
                    <img src="@/assets/images/i3.png" alt="" class="img-fluid w-100 rounded-top anima23" />
                  </div>
                  <!-- Contenido a la Derecha -->
                  <div class="col-md-6">
                    <h4>VISITAS TÉCNICAS</h4>
                    <p>
                      Las visitas técnicas universitarias desempeñan un papel fundamental
                      en la preparación del futuro profesional de los estudiantes. Estas
                      experiencias enriquecedoras brindan la oportunidad de aplicar y
                      complementar los conocimientos adquiridos en el aula, al tiempo que
                      permiten explorar el entorno laboral y establecer conexiones con el
                      mundo real.
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Sobre la UTLVTE End -->

  <!-- Formulario de Inicio de sesión Start -->
  <section class="section coming-soon" data-section="section3">
    <div class="container-fluid position-relative py-5" id="IniciarSesion">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-xs-12">
            <div class="continer centerIt">
              <div></div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="right-content wow fadeInUp" data-wow-delay="0.1s">
              <div class="top-content">
                <h6>
                  Accede para llenar tu curriculum vitae normalizado por la
                  UTLVTE
                </h6>
              </div>
              <!-- Formulario Start-->
              <div class="registration-form">
                <!-- Formulario Login Start-->
                <form>
                  <div class="row">
                    <div class="col-md-12">
                      <fieldset>
                        <div class="login-text">
                          <p class="text-white">
                            Por favor, inicia sesión para continuar.
                          </p>
                          <p class="text-white">
                            El usuario y contraseña es la misma que usa en el SIAD.
                          </p>
                        </div>
                        <input v-model="emaillo" type="email" class="form-control" placeholder="Usuario" required />
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <div class="input-group-icon">
                        <input :type="passwordFieldType" class="form-control clave" v-model="clave2"
                          placeholder="Contraseña" required />

                        <span @click="togglePasswordVisibility" class="fa fa-fw field-icon toggle-password text-white"
                          :class="{ 'fa-eye': passwordFieldType === 'password', 'fa-eye-slash': passwordFieldType === 'text' }">
                        </span>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <button v-on:click="login" class="button">Iniciar Sesión</button>
                      </fieldset>
                    </div>
                    <br>
                    &nbsp;&nbsp;
                    <div class="login-text">
                      <h6 class="text-white">
                        ¿Deseas saber cómo funciona el cvn?, Da clic en ver tutorial o en ver Manual de Usuario.
                      </h6>
                    </div>
                    &nbsp;&nbsp;
                    <a class="text-center text-white" @click="openPdfModal(1)"><i class="fas fa-book-open"></i><b> Ver
                        Manual de Usuario</b></a>

                    &nbsp;&nbsp;
                    <div class="herose">

                      <a href="https://www.youtube.com/watch?v=_5GJJpFVXkk"
                        class="glightbox btn-watch-video2 text-center"><i class="fa-solid fa-circle-play"></i><span>Ver
                          Tutorial</span></a>
                    </div>

                  </div>
                </form>

              </div>
              <!-- formulario End-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Formulario de Inicio de sesión End -->



  <!-- Vesitable Shop Start-->
  <div class="container-fluid vesitable py-5">
    <div class="container py-5">
      <div class="text-center" id="Carreras">
        <h4 class="display-4 text-white">Carreras de la UTLVTE</h4>
      </div>

      <div class="owl-carousel vegetable-carousel justify-content-center">
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACI/CARRERA ELECTRICA.jpg" class="img-fluid rounded-top" />
            <div class="p-3 rounded-bottom">
              <h3>Ingeniería Eléctrica</h3>
              <p class="text-white">Proyecta, calcula, dirige y realiza peritajes y tasaciones de sistemas,
                máquinas, equipos e instrumentos eléctricos y electromecánicos, y construye, opera y da
                mantenimiento a esos dichos dispositivos, circuitos y sistemas eléctricos</p>

            </div>
          </div>

        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACI/CARRERA MECANICA.jpg" class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Ingeniería Mecánica</h3>
            <p class="text-white">Estudia los materiales y de los sistemas mecánicos utilizados para poder
              realizar la transformación de la materia prima en producto terminado, aplicando criterios
              técnicos, éticos, económicos y ecológicos bien fundamentados.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACI/CARRERA QUIMICA.jpeg" class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Ingeniería Química</h3>
            <p class="text-white">Diseña productos y procesos que requieran de transformación física, química
              y bioquímica de materiales, mediante la aplicación de operaciones unitarias. Analiza, modela y
              calcula sistemas que impliquen reacción química o bioquímica.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACI/tics.png" class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Ingeniería en Tecnología de la Información</h3>
            <p class="text-white">Desarrolla, mantiene y valida aplicaciones en las diferentes plataformas de
              desarrollo además de manejos de hardware, que respondan a las demandas sociales dentro de su
              campo de acción; contribuyendo eficientemente al mejoramiento de la ciencia, la tecnología y a
              los intereses educativos y empresariales.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACPED/CARRERA PEDAGOGIA DE LA FISICA Y MATEMATICAS.jpeg"
              class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Pedagogía de Ciencias Experimentales de la Matemática y la Física</h3>
            <p class="text-white">Aplica los fundamentos teóricos y metodológicos, para la consolidación de
              profesionales con capacidad de análisis, planificación, gestión, evaluación e innovación en
              modelos y estrategias de intervención en los campos profesionales de la docencia asociados con
              las ciencias de la educación, las matemáticas y la física, en las instituciones.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACPED/PEDAGOGIA DE LA QUIMICA Y BIOLOGIA.jpeg"
              class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Pedagogía de Ciencias Experimentales de la Química y Biología</h3>
            <p class="text-white">Analiza los fundamentos de la didáctica, química, biología y ética
              profesional, para desarrollar capacidades que permitan la planificación, ejecución, evaluación,
              investigación y gestión de la enseñanza aprendizaje de las Química, Biología y afines, en las
              instituciones.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACPED/CARRERA DE EDUCACION BASICA.jpeg"
              class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Licenciatura en Educación Básica</h3>
            <p class="text-white">Formar profesionales para el sistema nacional educativo, capaces de
              organizar, aplicar y construir conocimientos en todos los ámbitos educativos, y que respondan a
              las necesidades de la educación actual, facultados para desenvolverse en su campo laboral en
              Educación Básica.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACPED/CARRERA DE LENGUA Y LITERATURA.jpeg"
              class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Pedagogía de la Lengua y Literatura</h3>
            <p class="text-white">Formar docentes para enseñar lengua y literatura, donde aprenden a
              planificar, gestionar, evaluar e innovar modelos y estrategias de intervención en la docencia.
            </p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACPED/CARRERA EDUCACION INICIAL.jpeg"
              class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Licenciatura en Eduación Inicial</h3>
            <p class="text-white">Formar profesiones de educación inicial con conocimientos técnicos,
              científicos y actitudes de emprendimiento para impulsar el desarrollo de la educación inicial
              hasta satisfacer la demanda social y garantizar una adecuada formación psicopedagógica para el
              ejercicio de la profesión en las instituciones infantiles.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACPED/CARRERA ACTIVIDAD FISICA Y DEPORTE.png"
              class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Pedagogía de la Actividad Física y Deporte</h3>
            <p class="text-white">Estudia los contextos, problemas, procesos y fenómenos socioeducativos
              relacionados con la enseñanza aprendizaje de la Actividad Física como práctica corporal y motriz
              que relaciona la acción corporal con normas sociales, valores éticos, salud, tematizando
              pedagógicamente las percepciones subjetivas del cuerpo y las práctica corporales con sentido y
              significado contextuado.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACAP/CARRERA AGRONOMIA.jpg" class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Ingeníeria en Agronomía</h3>
            <p class="text-white">Aplica conocimientos científicos y tecnológicos al proceso productivo
              agrícola, respetando la biodiversidad y las condiciones socio-culturales y económicas de los
              seres humanos, para satisfacer las demandas del sector productivo agrícola público y privado.
            </p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACAP/ZOOTECNIA.png" class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Ingeniería Zootécnica</h3>
            <p class="text-white">Formula, diseña, ejecuta y evalua de manera sostenible y sustentablemente
              proyectos y programas de mejoramiento genético, de nutrición y producción pecuaria a nivel
              nacional. Además, identifica y cuantifica las diversas variables que afectan al proceso
              productivo de las especies zootécnicas.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACAP/CARRERA FORESTAL.jpeg" class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Ingeniería Forestal</h3>
            <p class="text-white">Formar profesionales con alta calidad científica y técnica en el área de las
              ciencias forestales y ambientales con suficiente solvencia moral para enfrentar, priorizando la
              conservación del ambiente y formación integral del hombre como actor principal del desarrollo.
            </p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACAE/CARRERA ADMINISTRACION DE EMPRESAS.jpeg"
              class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Administración de Empresas</h3>
            <p class="text-white">Planifica, organiza, direcciona y controla los recursos y actividades de una
              organización para alcanzar sus objetivos. Además, diseña, analiza, planifica y evalua modelos
              empresariales y herramientas administrativas.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACAE/CONTABILIDAD Y AUDIORIA.png"
              class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Contabilidad y Auditoría</h3>
            <p class="text-white">Formar profesionales que pueden manejar y controlar la información
              económica, tributaria y financiera de una empresa. Los estudiantes aprenden a: Reconocer, medir
              y presentar las actividades económicas de las empresas y generar informes de auditoría
              fundamentados en los análisis de datos para la toma de decisiones estratégicas.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACAE/CARRERA COMERCIO.jpeg" class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Comercio</h3>
            <p class="text-white">Formar profesionales con calidad, espíritu humano y creativo, preparado en
              las áreas de administración, comercio exterior, finanzas y marketing, emprendedores en
              conquistar nuevos mercados con productos y servicios negociables a nivel nacional e
              internacional, adaptándose a la dinámica de una sociedad globalizada.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACSOS/CARRERA TURISMO.jpeg" class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Turismo</h3>
            <p class="text-white">Formar profesionales con elevados principios éticos y morales y sólidos
              conocimientos científicos, capaz de diseñar y aplicar estrategias para desarrollar
              sustentablemente la actividad turística. Estará en capacidad de formular, gestionar y evaluar,
              planes y proyectos turísticos sostenibles a nivel nacional, trabajar en equipos
              multidisciplinarios, planificar, organizar, ejecutar y evaluar congresos y eventos locales,
              nacionales e internacionales</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACSOS/CARRERA SOCIOLOGiA.jpeg" class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Sociología</h3>
            <p class="text-white">Formar Profesionales capases de investigar y examinar críticamente los
              aportes de la cultura emergente y los procesos de cambio social.</p>
          </div>
        </div>
        <div class="border border-primary1 rounded position-relative vesitable-item">
          <div class="vesitable-img">
            <img src="@/assets/images/FACULTADES/FACSOS/CARRERA TRABAJO SOCIAL.jpeg"
              class="img-fluid w-100 rounded-top" />
          </div>

          <div class="p-4 rounded-bottom">
            <h3>Trabajo Social</h3>
            <p class="text-white">Preparar al futuro profesional competente con las capacidades habilidades y
              destrezas en la carrera de Trabajo Social.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Vesitable Shop End -->
  <!-- UTLVTE PAL MUNDO Start -->
  <section class="section video" data-section="section5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <div class="left-content wow fadeInUp" data-wow-delay="0.1s">
            <h4>UTLVTE <em> PAL MUNDO!</em></h4>
            <p class="text-white">
              La Universidad Técnica “Luis Vargas Torres” de Esmeraldas (UTLVTE) es una
              entidad autónoma de derecho público sin fines de lucro financiada por el
              Estado, está ubicada en la ciudad de Esmeraldas, provincia de Esmeraldas, al
              noroeste de Ecuador. <br /><br />La UTLVTE se ha convertido en el centro de
              educación superior público insigne de la Provincia y del norte del País,
              otorgando al alumnado beneficios como: inclusión social, gratuidad de la
              educación, diversidad académica y amplios ambientes de aprendizaje.
            </p>
            <div class="main-button">
              <a rel="nofollow" href="https://www.utelvt.edu.ec/site/" target="_blank">Sitio web de la universidad</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- UTLVTE PAL MUNDO End -->

  <div class="fondonormal"></div>
  <!-- CONTACT -->
  <div class="comentcontac">
    <section class="contacto1 py-5" id="iocontacto">
      <div class="container wow fadeInUp" data-wow-delay="0.1s" id="Comentario">
        <div class="row">

          <div class="col-lg-5 mr-lg-5 col-12">
            <div class="google-map w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.467687507572!2d-79.6711511987359!3d0.9739060997482285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fd4bc1a30135aa3%3A0xe28151571fb3e66d!2sTechnical%20University%20Luis%20Vargas%20Torres%20Esmeraldas!5e0!3m2!1sen!2sbd!4v1694261157793!5m2!1sen!2sbd"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="400" height="300" frameborder="0"
                style="border:0" allowfullscreen></iframe>
            </div>

            <div class="contacto1-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div class="contact-info-item">
                <h3 class="mb-3 text-white">Ubicación de Bienestar Universitario</h3>
                <p class="footer-text mb-0"></p>
                <p><a href="mailto:bienestaruniversitario@utelvt.edu.ec">bienestaruniversitario@utelvt.edu.ec</a></p>
              </div>

              <ul class="social-links">
                <li><a href="https://whatsapp.com/channel/0029VakylN1BfxnyuIBDjw1J" target="_blank"
                    class="fab fa-whatsapp" data-toggle="tooltip" data-placement="left" title="WahtsApp"></a>
                </li>
                <li><a href="https://www.instagram.com/bienestar_utlvte/" target="_blank" class="uil uil-instagram"
                    data-toggle="tooltip" data-placement="left" title="Instagram"></a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 col-12">
            <div class="contacto1-form">
              <h2 class="mb-4 text-white">Ayúdanos a Mejorar. Cuéntanos tu experiencia.</h2>

              <form @submit.prevent="enviarComentario">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <input type="text" class="form-control text-dark" name="name"
                      placeholder="Ingresa tus nombres y apellidos" v-model="apellidonombre">
                  </div>

                  <div class="col-lg-6 col-12">
                    <input type="email" @input="validateEmail" class="form-control text-dark" name="email"
                      placeholder="Ingresa tu email" v-model="correoss">
                  </div>
                  <p v-if="correoErrornue" class="text-danger">Por favor, ingrese un correo válido</p>

                  <div class="col-12">
                    <textarea name="message" rows="6" class="form-control text-dark" v-model="mensaje"
                      placeholder="Describe tu experiencia y que deseas que se mejore"></textarea>
                  </div>

                  <div class="ml-lg-auto col-lg-5 col-12">
                    <input type="submit" class="form-control submit1-btn" value="Enviar Comentario">
                  </div>
                </div>
              </form>
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
  <div class="modal fade" id="pdfModal" tabindex="-1" aria-labelledby="pdfModalLabel" aria-hidden="true" ref="pdfModal">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="pdfModalLabel">Manual de Usuario de la Plataforma CVN</h5>
          <button type="button" class="btn-close" @click="closePdfModal()"></button>
        </div>
        <div class="modal-body p-0">
          <!-- Iframe con el PDF -->
          <object :data="`${pdfUrl}#page=${pdfPage}`" type="application/pdf" width="100%" height="600">
            <p>
              Tu navegador no soporta PDFs embebidos.
              <a :href="`${pdfUrl}#page=${pdfPage}`" target="_blank" rel="noopener">
                Ábrelo aquí
              </a>.
            </p>
          </object>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Importación Estilos Necesarios Start-->
<style>
@import url("@/assets/styles/templatemo-grad-school.css");
@import url("@/assets/styles/flex-slider.css");
@import url("@/assets/styles/owl.css");
@import url("@/assets/styles/main.css");
</style>
<!-- Importación Estilos Necesarios End-->

<!-- Importación de Scripts y Creación de Métodos start-->
<script>
//Importar Librerías y Archivos Js
//import $ from "jquery"; //Librería para poder usar el jquery
//Librería para poder usar el owl.carousel
import 'owl.carousel';
import GLightbox from 'glightbox';
//Importar Archivos js para poder usar sus métodos
import script3 from "@/store/login.js";
import script4 from "@/store/datas.js";
import script2 from '@/store/custom.js';

//Importar Componentes para poder crear el carousel
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({

  mixins: [script3, script4, script2],//Habilitar el uso del archivos js
  //name: "Autoplay",
  //name: 'VegetableCarousel',
  data() {
    return {
      // ... (tus otras variables de datos) ...
      // 🆕 NUEVOS DATOS PARA EL TOGGLE DE CONTRASEÑA
      passwordFieldType: 'password',
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },

  computed: {
    //Método para iniciar el otro método para obtener la fecha actual
    formattedDate() {
      return this.getCurrentDate();
    }
  },
  //Creción de Métodos
  methods: {
    //Método para obtener la fecha actual en un formato Texto (26 de Junio de 2024)
    getCurrentDate() {
      const date = new Date();
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      return date.toLocaleDateString('es-ES', options);
    },
    togglePasswordVisibility() {
      if (this.passwordFieldType === 'password') {
        this.passwordFieldType = 'text';
      } else {
        this.passwordFieldType = 'password';
      }
    },
    //Método para activar los menu link
    toggleContent() {
      $(document).ready(function () {
        $("body").addClass("js");
        var $menu = $("#menu"),
          $menulink = $(".menu-link");

        $menulink.click(function () {
          $menulink.toggleClass("active");
          $menu.toggleClass("active");
          return false;
        });
      });

    },

  },
  //El conted carga las funciones al momento en que la página inicie
  mounted() {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
    /*
    $(".toggle-password").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      // Ahora, asume que 'toggle' es un selector de clase (ej: .login-clave)
      var selector = $(this).attr("toggle");
      var input = $(selector);

      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });*/

    //Método para mostrar y ocultar los Features al pasar el cursor
    $("section.features-post").hover(
      function () {
        $(this).find("div.content-hide").stop(true, true).slideDown("medium");
        $(this).find("div.content-show").stop(true, true).slideUp("medium");
      },
      function () {
        $(this).find("div.content-hide").stop(true, true).slideUp("medium");
        $(this).find("div.content-show").stop(true, true).slideDown("medium");
      }
    );

    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="bi bi-arrow-right"></i>',
          '<i class="bi bi-arrow-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 4
          }
        }
      });
    });

  },
});
</script>
