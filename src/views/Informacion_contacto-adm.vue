<template>
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="mb-0">Refrencias Personales Registradas</h4>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0 text-dark" type="search" placeholder="Buscar"
                        v-model="searchQuery" @input="filterResults" @keypress="onlyNumbers">
                </form>
            </div>
            <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Nombres y Apellidos</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Registro</th>
                            <th scope="col">Actualización</th>
                        </tr>
                    </thead>
                    <tbody id="contenido">
                        <tr v-if="this.cargando">
                            <td colspan="12">
                                <div class="spinner-border text-primary d-flex justify-content-center" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </td>

                        </tr>
                        <tr v-else v-for="informacion,  in this.filteredreferencias" :key="informacion.id">

                            <td v-text="informacion.id"></td>
                            <td v-text="informacion.CIInfPer"></td>
                            <td v-text="informacion.referencia_apellidos + informacion.referencia_nombres"></td>
                            <td v-text="informacion.referencia_correo_electronico"></td>
                            <td v-text="informacion.referencia_telefono"></td>

                            <td v-text="new Date(informacion.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(informacion.updated_at).toLocaleDateString('en-US')"></td>

                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="pagination">
                <button @click="previousPage" :disabled="currentPage === 1 || buscando" class="btn btn-primary">
                    Anterior
                </button>
                <span class="text-dark">Página {{ currentPage }} de {{ lastPage }}</span>
                <button @click="nextPage" :disabled="currentPage === lastPage || buscando" class="btn btn-primary">
                    Siguiente
                </button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                <button class="btn btn-primary" @click="actualizar">Actualizar Datos</button>
            </div>
        </div>
    </div>
    <!-- Recent Sales End -->
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
            url255: 'http://cvubackendv2.test/api/cvn/v1/informacion_contacto',
            informacion_contactos: [],
            filteredreferencias: [],
            searchQuery: '',
            cargando: false,
            currentPage: 1,
            lastPage: 1,
            buscando: false,
        }
    },
    mounted() {
        const ruta = useRoute();
        this.idus = ruta.params.id;
        this.getinformacion_contactos();
    },

    methods: {

        
        async getinformacion_contactos() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.url255}?all=true`);
                const allData = response.data.data;

                this.informacion_contactos = allData;
                this.lastPage = Math.ceil(this.informacion_contactos.length / 10);
                this.updateFilteredData();
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },
        updateFilteredData() {
            // Aplicar paginación local
            const startIndex = (this.currentPage - 1) * 10;
            const endIndex = startIndex + 10;
            this.filteredreferencias = this.informacion_contactos.slice(startIndex, endIndex);
        },
        actualizar() {
            this.cargando = true;
            this.getinformacion_contactos()
        },
        filterResults() {
            const query = this.searchQuery.trim();
            if (query) {
                this.buscando = true;
                this.filteredreferencias = this.informacion_contactos.filter(info =>
                    info.CIInfPer.includes(query)
                );
            } else {
                this.buscando = false;
                this.actualizar();
            }
        },
        onlyNumbers(event) {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode < 48 || charCode > 57) {
                event.preventDefault();
            }
        },
        nextPage() {
            if (this.currentPage < this.lastPage) {
                this.currentPage++;
                this.updateFilteredData();
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.updateFilteredData();
            }
        },

    },
    mixins: [script2],
};
</script>
