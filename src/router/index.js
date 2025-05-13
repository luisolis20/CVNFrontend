import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Administrador from '../views/Administrador.vue'
import Usuariosall from '../views/Usuariosall.vue'
import Datos_personales from '../views/Datos_personales-adm.vue'
import Declaracion_personal from '../views/Declaracion_personal-adm.vue'
import Experiencia_profesional from '../views/Experiencia_profesional-adm.vue'
import Formacion_academica from '../views/Formacion_academica-adm.vue'
import Habilidades_informaticas from '../views/Habilidades_informatica-adm.vue'
import Idioma from '../views/Idioma-adm.vue'
import Informacion_contacto from '../views/Informacion_contacto-adm.vue'
import Investigacion_Publicaciones from '../views/Investigacion_Publicaciones-adm.vue'
import Otros_datos from '../views/Otros_datos-adm.vue'
import User from '../views/Registro.vue'
import AdminEdit from '../views/AdminEdit.vue'
import Cursos_capa from '../views/Cursos_Capacitaciones-adm.vue'
import Userdocente from '../views/RegistroDocente.vue'
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/adminus/:id',
    name: 'adminus',
    component: Administrador
  },
  {
    path: '/userall/:id',
    name: 'userall',
    component: Usuariosall
  },
  {
    path: '/datos_personales_adm/:id',
    name: 'datos_personales_adm',
    component: Datos_personales
  },
  {
    path: '/declaracion_personal_adm/:id',
    name: 'declaracion_personal_adm',
    component: Declaracion_personal
  },
  {
    path: '/experiencia_profesionales_adm/:id',
    name: 'experiencia_profesionales_adm',
    component: Experiencia_profesional
  },
  {
    path: '/formacion_academica_adm/:id',
    name: 'formacion_academica_adm',
    component: Formacion_academica
  },
  {
    path: '/habilidades_informatica_adm/:id',
    name: 'habilidades_informatica_adm',
    component: Habilidades_informaticas
  },
  {
    path: '/idioma_adm/:id',
    name: 'idioma_adm',
    component: Idioma
  },
  {
    path: '/informacion_contacto_adm/:id',
    name: 'informacion_contacto_adm',
    component: Informacion_contacto
  },
  {
    path: '/investigacion_publicaciones_adm/:id',
    name: 'investigacion_publicaciones_adm',
    component: Investigacion_Publicaciones
  },
  {
    path: '/otros_datos_adm/:id',
    name: 'otros_datos_adm',
    component: Otros_datos
  },
  {
    path: '/cursos_capacitacion_adm/:id',
    name: 'cursos_capacitacion_adm',
    component: Cursos_capa
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  },
  {
    path: '/userdocente/:id',
    name: 'userdocente',
    component: Userdocente
  },
  {
    path: '/useredit/:id',
    name: 'useredit',
    component: AdminEdit
  }
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
