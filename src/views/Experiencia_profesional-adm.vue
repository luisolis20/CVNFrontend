<template>
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="mb-0">Expeciencias Profesionales Registradas</h4>
                 <p class="text-dark text-justify">Da clic <a class="text-secondary" @click="openPdfModal(78)">aquí</a> para ver la guia de este punto</p>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0 text-dark" type="search" placeholder="Buscar"
                        v-model="searchQuery" @input="filterResults" @keypress="onlyNumbers">
                </form>
            </div>
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Empresas</h6>
                </div>

                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificacion</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Inicio</th>
                            <th scope="col">Fin</th>
                            <th scope="col">Cargo Desempeñado</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Logros</th>
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
                        <tr v-else v-for="experiencia, in filteredEmpresas" :key="experiencia.id">

                            <td v-text="experiencia.id"></td>
                            <td v-text="experiencia.CIInfPer"></td>
                            <td v-text="experiencia.empresa_institucion"></td>
                            <td v-text="new Date(experiencia.fecha_inicio_empresa).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(experiencia.fecha_fin_empresa).toLocaleDateString('en-US')"></td>
                            <td v-text="experiencia.cargo_desempenado_empresa"></td>
                            <td v-text="experiencia.descripcion_funciones_empresa"></td>
                            <td v-text="experiencia.logros_resultados_empresa"></td>
                            <td v-text="new Date(experiencia.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(experiencia.updated_at).toLocaleDateString('en-US')"></td>

                        </tr>

                    </tbody>
                </table>
            </div>
            &nbsp;&nbsp;
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Prácticas</h6>
                </div>
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificacion</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Inicio</th>
                            <th scope="col">Fin</th>
                            <th scope="col">Área</th>
                            <th scope="col">Descripción</th>
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
                        <tr v-else v-for="experiencia1,  in filteredPracticas" :key="experiencia1.id">

                            <td v-text="experiencia1.id"></td>
                            <td v-text="experiencia1.CIInfPer"></td>
                            <td v-text="experiencia1.empresa_institucion_practicas"></td>
                            <td v-text="new Date(experiencia1.fecha_inicio_practicas).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(experiencia1.fecha_fin_practicas).toLocaleDateString('en-US')"></td>
                            <td v-text="experiencia1.area_trabajo_practicas"></td>
                            <td v-text="experiencia1.descripcion_funciones_practicas"></td>
                            <td v-text="new Date(experiencia1.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(experiencia1.updated_at).toLocaleDateString('en-US')"></td>

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
     <div class="modal fade" id="pdfModal" tabindex="-1" aria-labelledby="pdfModalLabel" aria-hidden="true"
        ref="pdfModal">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="pdfModalLabel">Manual de Usuario de la Plataforma CVN</h5>
                    <button type="button" class="btn-close" @click="closePdfModal()"></button>
                </div>
                <div class="modal-body p-0">
                    <!-- Iframe con el PDF -->
                    <object :key="pdfKey" :data="`${pdfUrl}#page=${pdfPage}`" type="application/pdf" width="100%" height="600">
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
             // ruta base de tu PDF
            pdfUrl: `${process.env.BASE_URL}Docs/Manual_CVN__V1.pdf`,
            // página inicial (se reemplaza al llamar al modal)
            pdfPage: 1,
            pdfKey: 0,
            url255: 'http://cvubackendv2.test/api/cvn/v1/experiencia_profesionale',
            experiencia_profesionales: [],
            experiencia_profesionalesData: [],
            searchQuery: '',
            buscando: false,
            cargando: false,
            currentPage: 1,
            lastPage: 1,
        }
    },
    computed: {
         pdfSrc() {
            return `${this.pdfUrl}#page=${this.pdfPage}`;
        },
        filteredEmpresas() {
            const query = this.searchQuery.trim();
            return this.experiencia_profesionales
                .filter(expe => expe.empresa_institucion)
                .filter(expe => expe.CIInfPer.includes(query));
        },
        filteredPracticas() {
            const query = this.searchQuery.trim();
            return this.experiencia_profesionales
                .filter(expe => expe.empresa_institucion_practicas)
                .filter(expe => expe.CIInfPer.includes(query));
        },
    },
    mounted() {
        const ruta = useRoute();
        this.idus = ruta.params.id;
        this.getexperiencia_profesionales();
    },

    methods: {
          openPdfModal(page) {
            this.pdfPage = page;
            this.pdfKey++;
            const modalEl = this.$refs.pdfModal;
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        },
        closePdfModal() {
            const modalEl = this.$refs.pdfModal;
            const modal = bootstrap.Modal.getInstance(modalEl);
            modal.hide();
        },
       
        async getexperiencia_profesionales() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.url255}?all=true`);
                const allData = response.data.data;

                this.experiencia_profesionalesData = allData;
                this.lastPage = Math.ceil(this.experiencia_profesionalesData.length / 10);
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
            this.experiencia_profesionales = this.experiencia_profesionalesData.slice(startIndex, endIndex);
        },
        actualizar() {
            this.cargando = true;
            this.getexperiencia_profesionales()
        },
        filterResults() {
            const query = this.searchQuery.trim();
            if (query) {
                this.buscando = true;
                this.experiencia_profesionales = this.experiencia_profesionalesData.filter(experiencia =>
                    experiencia.CIInfPer.includes(query)
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
