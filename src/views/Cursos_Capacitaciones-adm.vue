<template>
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="mb-0">Curos Registrados</h4>
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
                            <th scope="col">Institución</th>
                            <th scope="col">Tipo de Evento</th>
                            <th scope="col">Área de Estudios</th>
                            <th scope="col">Nombre del Evento</th>
                            <th scope="col">Facilitador</th>
                            <th scope="col">Tipo de Certificado</th>
                            <th scope="col">Dias</th>
                            <th scope="col">Horas</th>
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
                        <tr v-else v-for="cursosdata,  in this.filteredcursos" :key="cursosdata.id">

                            <td v-text="cursosdata.id"></td>
                            <td v-text="cursosdata.CIInfPer"></td>
                            <td v-text="cursosdata.intitucion_curso"></td>
                            <td v-text="cursosdata.tipo_evento"></td>
                            <td v-text="cursosdata.area_estudios"></td>
                            <td v-text="cursosdata.nombre_evento"></td>
                            <td v-text="cursosdata.facilitador_curso"></td>
                            <td v-text="cursosdata.tipo_certificado"></td>
                            <td v-text="cursosdata.dias_curso"></td>
                            <td v-text="cursosdata.horas_curso"></td>

                            <td v-text="new Date(cursosdata.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(cursosdata.updated_at).toLocaleDateString('en-US')"></td>

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
            url255: 'http://192.168.38.177/cvubackendv2/api/cvn/v1/cursoscapacitacion',
            cursos_capa: [],
            filteredcursos: [],
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
        this.getcursos_capa();
    },

    methods: {
       
        async getcursos_capa() {
            if (this.buscando) return;
            this.cargando = true;

            try {
                const response = await axios.get(`${this.url255}??all=true`);
                const allData = response.data.data;


                
                this.cursos_capa = allData;
                this.lastPage = Math.ceil(this.cursos_capa.length / 10);
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
            this.filteredcursos = this.cursos_capa.slice(startIndex, endIndex);
        },
        actualizar() {
            this.cargando = true;
            this.getcursos_capa()
        },
        filterResults() {
            const query = this.searchQuery.trim();
            if(query){
                this.buscando = true;
                this.filteredcursos = this.cursos_capa.filter(cur =>
                    cur.CIInfPer.includes(query)
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
