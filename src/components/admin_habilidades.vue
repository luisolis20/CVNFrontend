<template>
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="mb-0">Habilidades Registradas</h4>
                 <p class="text-dark text-justify">Da clic <a class="text-secondary" @click="openPdfModal(80)">aquí</a> para ver la guia de este punto</p>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0 text-dark" type="search" placeholder="Buscar"
                        v-model="searchQuery" @input="filterResults" @keypress="onlyNumbers">
                </form>
            </div>
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Habilidades Comunicativas</h6>
                </div>
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Habilidad</th>
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
                        <tr v-else v-for="habilidades,  in filteredComunicativas" :key="habilidades.id">

                            <td v-text="habilidades.id"></td>
                            <td v-text="habilidades.CIInfPer"></td>
                            <td v-text="habilidades.habilidades_comunicativas"></td>
                            <td v-text="habilidades.descripcion_habilidades_comunicativas"></td>

                            <td v-text="new Date(habilidades.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(habilidades.updated_at).toLocaleDateString('en-US')"></td>

                        </tr>

                    </tbody>
                </table>
            </div>
            &nbsp;&nbsp;
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Habilidades Creativas</h6>
                </div>
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Habilidad</th>
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
                        <tr v-else v-for="habilidades,  in filteredCreativas" :key="habilidades.id">

                            <td v-text="habilidades.id"></td>
                            <td v-text="habilidades.CIInfPer"></td>
                            <td v-text="habilidades.habilidades_creativas"></td>
                            <td v-text="habilidades.descripcion_habilidades_creativas"></td>

                            <td v-text="new Date(habilidades.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(habilidades.updated_at).toLocaleDateString('en-US')"></td>

                        </tr>

                    </tbody>
                </table>
            </div>
            &nbsp;&nbsp;
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Habilidades de Liderazgo</h6>
                </div>
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Habilidad</th>
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
                        <tr v-else v-for="habilidades,  in filteredLiderazgo" :key="habilidades.id">

                            <td v-text="habilidades.id"></td>
                            <td v-text="habilidades.CIInfPer"></td>
                            <td v-text="habilidades.habilidades_liderazgo"></td>
                            <td v-text="habilidades.descripcion_habilidades_liderazgo"></td>

                            <td v-text="new Date(habilidades.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(habilidades.updated_at).toLocaleDateString('en-US')"></td>

                        </tr>

                    </tbody>
                </table>
            </div>
            &nbsp;&nbsp;
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Habilidades Informáticas</h6>
                </div>
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Habilidad</th>
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
                        <tr v-else v-for="habilidades,  in filteredInformat" :key="habilidades.id">

                            <td v-text="habilidades.id"></td>
                            <td v-text="habilidades.CIInfPer"></td>
                            <td v-text="habilidades.habilidades_informaticas_cv"></td>
                            <td v-text="habilidades.descripcion_habilidades_informaticas_cv"></td>

                            <td v-text="new Date(habilidades.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(habilidades.updated_at).toLocaleDateString('en-US')"></td>

                        </tr>

                    </tbody>
                </table>
            </div>
            &nbsp;&nbsp;
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Oficio o Sub actividad</h6>
                </div>
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Habilidad</th>
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
                        <tr v-else v-for="habilidades,  in filteredOficios" :key="habilidades.id">

                            <td v-text="habilidades.id"></td>
                            <td v-text="habilidades.CIInfPer"></td>
                            <td v-text="habilidades.oficios_subactividades"></td>
                            <td v-text="habilidades.descripcion_oficios_subactividades"></td>

                            <td v-text="new Date(habilidades.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(habilidades.updated_at).toLocaleDateString('en-US')"></td>

                        </tr>

                    </tbody>
                </table>
            </div>
            &nbsp;&nbsp;
            <div class="table-responsive">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">Otras Habilidades</h6>
                </div>
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Identificación</th>
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
                        <tr v-else v-for="habilidades,  in filteredOtros" :key="habilidades.id">

                            <td v-text="habilidades.id"></td>
                            <td v-text="habilidades.CIInfPer"></td>
                            <td v-text="habilidades.otro_habilidades"></td>

                            <td v-text="new Date(habilidades.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(habilidades.updated_at).toLocaleDateString('en-US')"></td>

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
import API from '@/store/axios';
import { useRoute } from 'vue-router';
export default {
    data() {
        return {
            idus: 0,
            pdfUrl: `${process.env.BASE_URL}Docs/Manual_CVN__V1.pdf`,
            // página inicial (se reemplaza al llamar al modal)
            pdfPage: 1,
            pdfKey: 0,
            url255: '/cvn/v1/habilidades_informatica',
            habilidades_informaticas: [],
            HabiDATA: [],
            searchQuery: '',
            cargando: false,
            currentPage: 1,
            lastPage: 1,
            buscando: false,
        }
    },
    computed: {
         pdfSrc() {
            return `${this.pdfUrl}#page=${this.pdfPage}`;
        },
        
        filteredComunicativas() {
            const query = this.searchQuery.trim();
            return this.habilidades_informaticas
                .filter(habi => habi.habilidades_comunicativas)
                .filter(habi => habi.CIInfPer.includes(query));
        },
        filteredCreativas() {
            const query = this.searchQuery.trim();
            return this.habilidades_informaticas
                .filter(habi => habi.habilidades_creativas)
                .filter(habi => habi.CIInfPer.includes(query));
        },
        filteredLiderazgo() {
            const query = this.searchQuery.trim();
            return this.habilidades_informaticas
                .filter(habi => habi.habilidades_liderazgo)
                .filter(habi => habi.CIInfPer.includes(query));
        },
        filteredInformat() {
            const query = this.searchQuery.trim();
            return this.habilidades_informaticas
                .filter(habi => habi.habilidades_informaticas_cv)
                .filter(habi => habi.CIInfPer.includes(query));
        },
        filteredOficios() {
            const query = this.searchQuery.trim();
            return this.habilidades_informaticas
                .filter(habi => habi.oficios_subactividades)
                .filter(habi => habi.CIInfPer.includes(query));
        },
        filteredOtros() {
            const query = this.searchQuery.trim();
            return this.habilidades_informaticas
                .filter(habi => habi.otro_habilidades)
                .filter(habi => habi.CIInfPer.includes(query));
        },
    },
    mounted() {
        const ruta = useRoute();
        this.idus = ruta.params.id;
        this.gethabilidades_informaticas();
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
        async gethabilidades_informaticas() {
            this.cargando = true;

            try {
                const response = await API.get(`${this.url255}?all=true`);
                const allData = response.data.data;

                this.HabiDATA = allData;
                this.lastPage = Math.ceil(this.HabiDATA.length / 10);
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
            this.habilidades_informaticas = this.HabiDATA.slice(startIndex, endIndex);
        },
        actualizar() {
            this.cargando = true;
            this.gethabilidades_informaticas()
        },
        filterResults() {
            const query = this.searchQuery.trim();
            if (query) {
                this.buscando = true;
                this.habilidades_informaticas = this.HabiDATA.filter(habilidades =>
                    habilidades.CIInfPer.includes(query)
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
    name:'admin_habilidades',
};
</script>
