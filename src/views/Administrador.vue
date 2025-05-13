<template>
    <div class="container-fluid pt-4 px-4">
       <!-- Spinner Start -->
       <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->
        <div class="row vh-100 bg-white rounded align-items-center justify-content-center mx-0">
       
            <div class="col-md-6 text-center p-4">
                <video width="650" height="650" autoplay loop>
                    <source src="@/assets/images/Tu currículum Único Universitario.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>
<style>
@import url('@/assets/styles/style.css');
</style>
<script>
import script2 from '@/store/custom.js';
import axios from 'axios';
import { useRoute } from 'vue-router';
export default {
    data() {
        return {
            idus: 0,
            url255: 'http://cvubackendv2.test/api/cvn/v1/users',
            usuarios: null,
            cargando: false
        }
    },
    mounted() {
        const ruta = useRoute();
        this.idus = ruta.params.id;
        this.getUsuarios();
        
        
    },

    methods: {
        getUsuarios() {
            this.cargando = true;
            axios.get(this.url255).then(
                res => {
                    this.usuarios = res.data;
                    this.cargando = false;
                }

            );
        },
        eliminar(id, nombre) {
            confimar('http://backendbolsaempleo.test/api/v1/empresas/', id, 'Eliminar registro', '¿Realmente desea eliminar a ' + nombre + '?');
            this.cargando = false;
            this.$router.push('/principal/' + this.idus);

        }

    },
    mixins: [script2],
};
</script>