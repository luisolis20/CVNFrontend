import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.min.css'
//import 'bootstrap/dist/css/bootstrap.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import $ from 'jquery';




import '@/assets/lib/animate/animate.min.css'
import '@/assets/lib/animate/animate.css'
import '@/assets/styles/bootstrap.min.css'
import '@/assets/lib/easing/easing.min.js'
import '@/assets/lib/swiper/swiper-bundle.min.css'
import '@/assets/lib/waypoints/waypoints.min.js'
import '@/assets/lib/lightbox/js/lightbox.min.js'
import '@/assets/lib/aos/aos.js'
import '@/assets/lib/glightbox/js/glightbox.min.js'
import '@/assets/lib/swiper/swiper-bundle.min.js'
import '@/assets/lib/glightbox/css/glightbox.min.css'
import '@/assets/lib/aos/aos.css'


createApp(App).use(store).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap'
