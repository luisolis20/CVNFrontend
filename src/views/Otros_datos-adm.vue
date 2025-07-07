<template>
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="mb-0">Otros Datos Relevantes Registrados</h4>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0 text-dark" type="search" placeholder="Buscar"
                        v-model="searchQuery" @input="filterResults" @keypress="onlyNumbers">
                </form>
            </div>
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Logros</h6>
                </div>
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Tipo de Logros</th>
                            <th scope="col">Descripción de Logros</th>
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
                        <tr v-else v-for="otros_dato,  in filteredLogros" :key="otros_dato.id">

                            <td v-text="otros_dato.id"></td>
                            <td v-text="otros_dato.CIInfPer"></td>
                            <td v-text="otros_dato.tipo_logros"></td>
                            <td v-text="otros_dato.descripcion_logros"></td>
                            <td v-text="new Date(otros_dato.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(otros_dato.updated_at).toLocaleDateString('en-US')"></td>

                        </tr>

                    </tbody>
                </table>
            </div>
            &nbsp;&nbsp;
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Fracasos</h6>
                </div>
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Descripción de Fracasos</th>
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
                        <tr v-else v-for="otros_dato,  in filteredFracasos" :key="otros_dato.id">

                            <td v-text="otros_dato.id"></td>
                            <td v-text="otros_dato.CIInfPer"></td>
                            <td v-text="otros_dato.descripcion_fracasos"></td>
                            <td v-text="new Date(otros_dato.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(otros_dato.updated_at).toLocaleDateString('en-US')"></td>

                        </tr>

                    </tbody>
                </table>
            </div>
            &nbsp;&nbsp;
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
            url255: 'http://vinculacionconlasociedad.utelvt.edu.ec/cvubackendv2/api/cvn/v1/otros_datos_relevante',
            otros_datos_relevantes: [],
            otrosDATA: [],
            searchQuery: '',
            cargando: false,
            currentPage: 1,
            lastPage: 1,
            buscando: false,
        }
    },
    computed: {
        filteredLogros() {
            const query = this.searchQuery.trim();
            return this.otros_datos_relevantes
                .filter(logro => logro.tipo_logros)
                .filter(logro => logro.CIInfPer.includes(query));
        },
        filteredFracasos() {
            const query = this.searchQuery.trim();
            return this.otros_datos_relevantes
                .filter(logro => logro.descripcion_fracasos)
                .filter(logro => logro.CIInfPer.includes(query));
        },
    },
    mounted() {
        const ruta = useRoute();
        this.idus = ruta.params.id;
        this.getotros_datos_relevantes();
    },

    methods: {
        
        async getotros_datos_relevantes() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.url255}?all=true`);
                const allData = response.data.data;

                this.otrosDATA = allData;
                this.lastPage = Math.ceil(this.otrosDATA.length / 10);
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
            this.otros_datos_relevantes = this.otrosDATA.slice(startIndex, endIndex);
        },
        actualizar() {
            this.cargando = true;
            this.getotros_datos_relevantes()
        },
        filterResults() {
            const query = this.searchQuery.trim();
            if (query) {
                this.buscando = true;
                this.otros_datos_relevantes = this.otrosDATA.filter(otro =>
                    otro.CIInfPer.includes(query)
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
