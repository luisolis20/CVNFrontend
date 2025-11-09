<template>
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="mb-0">Estudiantes Con CVN</h4>
                <p class="text-dark text-justify">Da clic <a class="text-secondary" @click="openPdfModal(71)">aquí</a>
                    para ver la guia de este punto</p>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0 text-dark" type="search" placeholder="Buscar"
                        v-model="searchQuery" @input="filterResults" @keypress="onlyNumbers">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label class="text-dark"> Total de Usuarios con cvn: {{totalusercvn}}</label>
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
                            <option value="No ha hecho CVN">No ha hecho CVN</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">Identificación</th>
                            <th scope="col">Estudiante</th>
                            <th scope="col">Estado del CVN</th>
                            <th scope="col">Foto</th>
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
                            <td v-text="datos.ApellInfPer + ' ' + datos.ApellMatInfPer + ' ' + datos.NombInfPer"></td>

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
                            <td>
                                <img v-if="datos.fotografia" :src="datos.fotografia" alt="Foto del estudiante"
                                    class="rounded-circle border" width="80" height="80" style="object-fit: cover;" />
                                <img v-else
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png"
                                    class="rounded-circle border" width="80" height="80" style="object-fit: cover;"
                                    alt="Sin foto" />
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
        <div class="alert alert-info d-flex justify-content-around fw-bold text-dark">
            <div>Total de usuarios con CVN: {{ totalusercvn }} -</div>
            <div>Total de CVN completos: <span class="text-success">{{ totalcvncompleto }} -</span></div>
            <div>Total de CVN incompletos: <span class="text-warning">{{ totalcvnincompleto }} -</span></div>
            <div>Total de usuarios sin CVN: <span class="text-danger">{{ totalsincvn }}</span></div>
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
                    <object :key="pdfKey" :data="`${pdfUrl}#page=${pdfPage}`" type="application/pdf" width="100%"
                        height="600">
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
import API from '@/store/axios';
import axios from 'axios';
import { useRoute } from 'vue-router';
import store from "@/store";
import jsPDF from 'jspdf';
import { mostraralertas2 } from '@/store/funciones';
import debounce from 'lodash.debounce';
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
            urlPersonal: "/cvn/v1/informacionpersonal",
            //urlDeclaracionPersonal: "/cvn/v1/declaracion_personal",
            urlDeclaracionPersonal: "/cvn/v1/sicvn",
            urlExperienciaProfesional: "/cvn/v1/experiencia_profesionale",
            urlFormacionAcademica: "/cvn/v1/formacion_academica",
            urlHabilidadesInformatica: "/cvn/v1/habilidades_informatica",
            urlIdiomas: "/cvn/v1/idioma",
            urlInformacionContacto: "/cvn/v1/informacion_contacto",
            urlInvestigacionPublicaciones: "/cvn/v1/investigacion_publicacione",
            urlOtrosDatosRelevantes: "/cvn/v1/otros_datos_relevante",
            urlCursosCapa: "/cvn/v1/cursoscapacitacion",

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
            totalusercvn: 0,
            totalcvncompleto: 0,
            totalcvnincompleto: 0,
            totalsincvn: 0,
        };
    },
    mounted() {
        /*    const ctx = document.getElementById('cvnPieChart');
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
            });*/
        const ruta = useRoute();
        this.idus = ruta.params.id;
        Promise.all([

            this.getDatos_Personales(),


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
                const response = await API.get(`${this.urlPersonal}?all=true`);
                const allData = response.data.data;

                // ✅ Traemos el estado real del backend (verificar)
                const updatedData = await Promise.all(allData.map(async (person) => {
                    const ci = person.CIInfPer;
                    const verif = await this.verificarCVN(ci);

                    // Normalizamos el estado
                    let estado = 'En Proceso';
                    if (verif.estado.includes('CVN completo')) estado = 'Completado';
                    else if (verif.estado.includes('CVN incompleto')) estado = 'Incompleto';
                    else if (verif.estado.includes('No ha')) estado = 'No ha hecho CVN';

                    person.completionStatus = estado;
                    return person;
                }));

                // Ordenar los datos
                updatedData.sort((a, b) => {
                    const statusOrder = { "Completado": 1, "Incompleto": 2, "En Proceso": 3, "No ha hecho CVN": 4 };
                    return statusOrder[a.completionStatus] - statusOrder[b.completionStatus];
                });

                this.personasdata = updatedData;
                //console.log(this.personasdata);
                this.lastPage = Math.ceil(this.personasdata.length / 10);
                this.updateFilteredData();
                this.contarOfertas();

            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                this.cargando = false;
            }
        },
        async verificarCVN(ci) {
            try {
                const response = await API.get(`/cvn/v1/verficiar_cvn/${ci}`);
                //console.log(response);
                return response.data; // contiene estado, detalle, totales, etc.
            } catch (error) {
                console.error("Error verificando CVN:", error);
                return { estado: "Error al verificar" };
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


            ])
            this.filtros = '';
        },
        contarOfertas() {
            this.totalusercvn = this.personasdata.filter(u => u.completionStatus != "No ha hecho CVN").length;
            this.totalcvncompleto = this.personasdata.filter(u => u.completionStatus == "Completado").length;
            this.totalcvnincompleto = this.personasdata.filter(u => u.completionStatus == "Incompleto").length;
            this.totalsincvn = this.personasdata.filter(u => u.completionStatus == "No ha hecho CVN").length;
            
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



        filterResultsNow() {
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
        // ✅ versión con debounce
        filterResults: debounce(function () {
            this.filterResultsNow();
        }, 800),
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
    name: 'admin_personal_data',
};
</script>
