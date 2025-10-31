<template>
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="mb-0">Estudiantes Con CVN</h4>
                 <p class="text-dark text-justify">Da clic <a class="text-secondary" @click="openPdfModal(71)">aquí</a> para ver la guia de este punto</p>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0 text-dark" type="search" placeholder="Buscar"
                        v-model="searchQuery" @input="filterResults" @keypress="onlyNumbers">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label class="text-dark"> Total de Usuarios con cvn: {{ personasdata.length }}</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </form>
                <div>
                    <label class="text-dark" for="">Filtrar por:</label>
                    <div class="input-group-icon">
                        <select v-model="filtros" class="form-select1 form-voyage-select input-box" id="inputPersonOne">
                            <option value="" disabled selected>Seleccione..</option>
                            <option value="Completado">Completado</option>
                            <option value="Incompleto">Incompleto</option>
                            <option value="En Proceso">En Proceso</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">Identificación</th>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Apellido Materno</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Estado del CVN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="cargando">
                            <td colspan="5">
                                <div class="spinner-border text-primary d-flex justify-content-center" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </td>
                        </tr>
                        <tr v-else v-for="datos in Filtrados" :key="datos.CIInfPer">

                            <td v-text="datos.CIInfPer"></td>
                            <td v-text="datos.ApellInfPer"></td>
                            <td v-text="datos.ApellMatInfPer"></td>
                            <td v-text="datos.NombInfPer"></td>
                            <td>
                                <router-link :to="{ path: '/useredit/' + datos.CIInfPer }" :class="{
                                    'btn btn-success': datos.completionStatus === 'Completado',
                                    'btn btn-warning': datos.completionStatus === 'Incompleto',
                                    'btn btn-danger': datos.completionStatus === 'No ha hecho CVN'
                                }" :disabled="datos.completionStatus === 'No ha hecho CVN'"
                                    v-if="datos.completionStatus !== 'No ha hecho CVN'">
                                    {{ datos.completionStatus }}
                                </router-link>
                                <button v-else class="btn btn-danger" disabled>
                                    {{ datos.completionStatus }}
                                </button>
                            </td>

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
    <div>
        <canvas id="cvnPieChart"></canvas>
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
</template>
<style>
@import url('@/assets/styles/style.css');
</style>
<script>
import script2 from '@/store/custom.js';
import axios from 'axios';
import { useRoute } from 'vue-router';
import store from "@/store";
import jsPDF from 'jspdf';
import { mostraralertas2 } from '@/store/funciones';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
export default {
    props: ['data'],
    data() {
        return {
            idus: 0,
             // ruta base de tu PDF
            pdfUrl: `${process.env.BASE_URL}Docs/Manual_CVN__V1.pdf`,
            // página inicial (se reemplaza al llamar al modal)
            pdfPage: 1,
            pdfKey: 0,
            urlPersonal: "http://cvubackendv2.test/api/cvn/v1/informacionpersonal",
            //urlDeclaracionPersonal: "http://cvubackendv2.test/api/cvn/v1/declaracion_personal",
            urlDeclaracionPersonal: "http://cvubackendv2.test/api/cvn/v1/sicvn",
            urlExperienciaProfesional: "http://cvubackendv2.test/api/cvn/v1/experiencia_profesionale",
            urlFormacionAcademica: "http://cvubackendv2.test/api/cvn/v1/formacion_academica",
            urlHabilidadesInformatica: "http://cvubackendv2.test/api/cvn/v1/habilidades_informatica",
            urlIdiomas: "http://cvubackendv2.test/api/cvn/v1/idioma",
            urlInformacionContacto: "http://cvubackendv2.test/api/cvn/v1/informacion_contacto",
            urlInvestigacionPublicaciones: "http://cvubackendv2.test/api/cvn/v1/investigacion_publicacione",
            urlOtrosDatosRelevantes: "http://cvubackendv2.test/api/cvn/v1/otros_datos_relevante",
            urlCursosCapa: "http://cvubackendv2.test/api/cvn/v1/cursoscapacitacion",

            filteredDatosPersonales: [],
            personasdata: [],
            filtereddeclaracion_personals: [],
            filteredcursos: [],
            experiencia_profesionales: [],
            formacion_academicas: [],
            habilidades_informaticas: [],
            filteredidiomas: [],
            filteredreferencias: [],
            filteredpublicacion: [],
            otros_datos_relevantes: [],
            totalperson: "",

            searchQuery: "",
            cargando: false,
            currentPage: 1,
            lastPage: 1,
            buscando: false,
            filtros: '',
        };
    },
    mounted() {
            const ctx = document.getElementById('cvnPieChart');
            const labels = Object.keys(this.data);
            const values = Object.values(this.data);

            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                    label: 'Usuarios CVN',
                    data: values,
                    backgroundColor: ['#28a745', '#ffc107', '#dc3545']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                    legend: {
                        position: 'bottom'
                    }
                    }
                }
            });
        const ruta = useRoute();
        this.idus = ruta.params.id;
        Promise.all([

            this.getDatos_Personales(),
            this.getformacion_academicas(),
            this.getexperiencia_profesionales(),
            this.getinvestigacion_publicaciones(),
            this.getidiomas(),
            this.gethabilidades_informaticas(),
            this.getcursos_capa(),
            this.getotros_datos_relevantes(),
            this.getinformacion_contactos()

        ])
    },
      computed: {
        pdfSrc() {
            return `${this.pdfUrl}#page=${this.pdfPage}`;
        }
    },
    methods: {

        async getDatos_Personales() {
            if (this.buscando) return;
            this.cargando = true;

            try {
                // Traer todos los datos de la API sin paginación
                const response = await axios.get(`${this.urlDeclaracionPersonal}?all=true`);
                const allData = response.data.data;

                console.log(response);

                // Clasificar y ordenar los datos
                const sortedData = allData.map((person) => {
                    if (!person || !person.CIInfPer) return null;

                    const CIInfPer = person.CIInfPer;

                    const hasDataInAtLeastOneTable =
                        this.filteredcursos.some((data) => data.CIInfPer === CIInfPer) ||
                        this.experiencia_profesionales.some((data) => data.CIInfPer === CIInfPer) ||
                        this.formacion_academicas.some((data) => data.CIInfPer === CIInfPer) ||
                        this.habilidades_informaticas.some((data) => data.CIInfPer === CIInfPer) ||
                        this.filteredidiomas.some((data) => data.CIInfPer === CIInfPer) ||
                        this.filteredreferencias.some((data) => data.CIInfPer === CIInfPer) ||
                        this.otros_datos_relevantes.some((data) => data.CIInfPer === CIInfPer) ||
                        this.filteredpublicacion.some((data) => data.CIInfPer === CIInfPer);

                    const hasDataInAllTables =
                        this.filteredcursos.some((data) => data.CIInfPer === CIInfPer) &&
                        this.experiencia_profesionales.some((data) => data.CIInfPer === CIInfPer) &&
                        this.formacion_academicas.some((data) => data.CIInfPer === CIInfPer) &&
                        this.habilidades_informaticas.some((data) => data.CIInfPer === CIInfPer) &&
                        this.filteredidiomas.some((data) => data.CIInfPer === CIInfPer) &&
                        this.filteredreferencias.some((data) => data.CIInfPer === CIInfPer) &&
                        this.otros_datos_relevantes.some((data) => data.CIInfPer === CIInfPer) &&
                        this.filteredpublicacion.some((data) => data.CIInfPer === CIInfPer);

                    // Asignar estado según los datos
                    if (hasDataInAllTables) {
                        person.completionStatus = "Completado";
                    } else if (hasDataInAtLeastOneTable) {
                        person.completionStatus = "Incompleto";
                    } else {
                        person.completionStatus = "En Proceso";
                    }

                    return person;
                }).filter(Boolean);

                // Ordenar los datos
                sortedData.sort((a, b) => {
                    const statusOrder = {
                        "Completado": 1,
                        "Incompleto": 2,
                        "En Proceso": 3,
                    };
                    return statusOrder[a.completionStatus] - statusOrder[b.completionStatus];
                });

                // Guardar datos ordenados y configurar paginación local
                this.personasdata = sortedData;
                this.lastPage = Math.ceil(this.personasdata.length / 10);
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
            this.filtereddeclaracion_personals = this.personasdata.slice(startIndex, endIndex);
        },

        actualizar() {
            this.cargando = true;

            Promise.all([

                this.getDatos_Personales(),
                this.getformacion_academicas(),
                this.getexperiencia_profesionales(),
                this.getinvestigacion_publicaciones(),
                this.getidiomas(),
                this.gethabilidades_informaticas(),
                this.getcursos_capa(),
                this.getotros_datos_relevantes(),
                this.getinformacion_contactos()

            ])
            this.filtros = '';
        },
        async getexperiencia_profesionales() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.urlExperienciaProfesional}?all=true`);
                const { data, current_page, last_page } = response.data;

                this.experiencia_profesionales = data;

            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },
        async getformacion_academicas() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.urlFormacionAcademica}?all=true`);
                const { data, current_page, last_page } = response.data;

                this.formacion_academicas = data;
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },
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
                const response = await axios.get(`${this.urlHabilidadesInformatica}?all=true`);
                const { data, current_page, last_page } = response.data;

                this.habilidades_informaticas = data;
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },
        async getidiomas() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.urlIdiomas}?all=true`);
                const { data, current_page, last_page } = response.data;

                this.filteredidiomas = data;
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },
        async getinformacion_contactos() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.urlInformacionContacto}?all=true`);
                const { data, current_page, last_page } = response.data;

                this.filteredreferencias = data;
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },
        async getcursos_capa() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.urlCursosCapa}?all=true`);
                const { data, current_page, last_page } = response.data;

                this.filteredcursos = data;
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },
        async getinvestigacion_publicaciones() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.urlInvestigacionPublicaciones}?all=true`);
                const { data, current_page, last_page } = response.data;

                this.filteredpublicacion = data;
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },
        async getotros_datos_relevantes() {
            this.cargando = true;

            try {
                const response = await axios.get(`${this.urlOtrosDatosRelevantes}?all=true`);
                const { data, current_page, last_page } = response.data;

                this.otros_datos_relevantes = data;
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },


        filterResults() {

            const query = this.searchQuery.trim();
            if (query) {
                this.buscando = true;
                this.filtereddeclaracion_personals = this.personasdata.filter(person =>
                    person.CIInfPer.includes(query)
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
    computed: {
        Filtrados() {
            if (this.filtros === '') {
                // Si no hay categoría seleccionada, mostrar todas las ofertas
                return this.filtereddeclaracion_personals;
            } else {
                // Si hay una categoría seleccionada, filtrar las ofertas
                return this.filtereddeclaracion_personals.filter(estado => estado.completionStatus === this.filtros);
            }
        }

    },
    mixins: [script2],
    name:'admin_personal_data',
};
</script>
