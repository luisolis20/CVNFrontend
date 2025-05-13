<template>
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="mb-0">Idiomas Registrados</h4>
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
                            <th scope="col">Idioma</th>
                            <th scope="col">Comprensión Auditiva</th>
                            <th scope="col">Comprensión Lectura</th>
                            <th scope="col">Interacción Oral</th>
                            <th scope="col">Expresión Oral</th>
                            <th scope="col">Expresión Escrita</th>
                            <th scope="col">Certificado</th>
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
                        <tr v-else v-for="idiomasdata,  in this.filteredidiomas" :key="idiomasdata.id">

                            <td v-text="idiomasdata.id"></td>
                            <td v-text="idiomasdata.CIInfPer"></td>
                            <td v-text="idiomasdata.idioma"></td>
                            <td v-text="idiomasdata.comprension_auditiva"></td>
                            <td v-text="idiomasdata.comprension_lectura"></td>
                            <td v-text="idiomasdata.interaccion_oral"></td>
                            <td v-text="idiomasdata.expresion_oral"></td>
                            <td v-text="idiomasdata.expresion_escrita"></td>
                            <td v-text="idiomasdata.certificado"></td>

                            <td v-text="new Date(idiomasdata.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(idiomasdata.updated_at).toLocaleDateString('en-US')"></td>

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
            url255: 'http://cvubackendv2.test/api/cvn/v1/idioma',
            idiomas: [],
            filteredidiomas: [],
            searchQuery: '',
            cargando: false,
            currentPage: 1,
            lastPage: 1,
        }
    },
    mounted() {
        const ruta = useRoute();
        this.idus = ruta.params.id;
        this.getidiomas();
    },

    methods: {
        
        async getidiomas() {
            if (this.buscando) return;
            this.cargando = true;

            try {
                const response = await axios.get(`${this.url255}?all=true`);
                const allData = response.data.data;

                
                this.idiomas = allData;
                this.lastPage = Math.ceil(this.idiomas.length / 10);
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
            this.filteredidiomas = this.idiomas.slice(startIndex, endIndex);
        },
        actualizar() {
            this.cargando = true;
            this.getidiomas()
        },
        filterResults() {
            
            const query = this.searchQuery.trim();
            if(query){
                this.buscando = true;
                this.filteredidiomas = this.idiomas.filter(idio =>
                    idio.CIInfPer.includes(query)
                );
            }else{
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