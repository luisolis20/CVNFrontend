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
                    <input class="form-control border-0 text-dark" type="search" placeholder="Buscar por Cédula..."
                        v-model="searchQuery" @input="filterResults" @keypress="onlyNumbers">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label class="text-dark"> Total de Usuarios con cvn: {{ totalusercvn }}</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </form>
                <div>
                    <label class="text-dark" for="">Filtrar por Estado:</label>
                    <div class="input-group-icon">
                        <select v-model="filtros" @change="applyStateFilter"
                            class="form-select1 form-voyage-select input-box" id="inputPersonOne">
                            <option value="">Todos</option> <!-- Cambiado para facilitar la lógica -->
                            <option value="Completado">Completado</option>
                            <option value="Incompleto">Incompleto</option>
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
                                <img :src="getFotoUrl(datos.CIInfPer)" alt="Foto del estudiante"
                                    class="rounded-circle border" width="80" height="80" style="object-fit: cover;"
                                    @error.once="$event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png'" />
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="pagination">
                <button @click="previousPage" :disabled="currentPage === 1 || cargando" class="btn btn-primary">
                    Anterior
                </button>
                <span class="text-dark">Página {{ currentPage }} de {{ lastPage }}</span>
                <button @click="nextPage" :disabled="currentPage === lastPage || cargando" class="btn btn-primary">
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

            // datos originales del servidor (solo CVN iniciados)
            allCVNData: [],

            // array que contiene los datos después de aplicar la búsqueda/filtro de estado, antes de la paginación.
            currentFilteredData: [],
            // array que solo contiene la página actual.
            paginatedData: [],

            searchQuery: "",
            cargando: false,
            currentPage: 1,
            lastPage: 1,
            filtros: '', // 'Completado', 'Incompleto', o '' (Todos)
            totalusercvn: 0,
            totalcvncompleto: 0,
            totalcvnincompleto: 0,
            totalsincvn: 0, // Conteo de usuarios omitidos (los que nunca han hecho CVN)
        };
    },
    mounted() {

        const ruta = useRoute();
        this.idus = ruta.params.id;
        this.getDatos_Personales();


    },
    computed: {
        pdfSrc() {
            return `${this.pdfUrl}#page=${this.pdfPage}`;
        },
        // La propiedad computada ahora solo devuelve la página actual de la data filtrada.
        Filtrados() {
            return this.paginatedData;
        },

    },
    watch: {
        // Observar cambios en el filtro de estado
        filtros(newVal, oldVal) {
            // Reaplicar todos los filtros (búsqueda + estado)
            this.filterResultsNow();
        },
        // Observar cambios en la cadena de búsqueda (ya está con debounce, pero esta es la función final)
        searchQuery(newVal, oldVal) {
            // Esto se maneja mejor con el @input y debounce en el template
            // Si el debounce llama a filterResultsNow(), no necesitamos watch.
        }
    },
    methods: {
        getFotoUrl(ci) {
            if (!ci) {
                return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png';
            }
            // Obtenemos la URL base de Axios para asegurarnos de que el endpoint sea absoluto
            const baseURL = API.defaults.baseURL || '';

            // Generamos la URL completa que llama al nuevo método de streaming en Laravel
            return `${baseURL}/cvn/v1/informacionpersonal/${ci}/foto`;
        },
        async getDatos_Personales() {
            if (this.cargando) return; // Evitar llamadas múltiples
            this.cargando = true;

            try {
                // 1. Traer todos los datos de CVN iniciados + el conteo de omitidos
                const response = await API.get(`${this.urlPersonal}?all=true`);
                const allData = response.data.data;
                this.totalsincvn = response.data.omittedCount || 0;

                // 2. Guardar la data original (solo CVN iniciados)
                this.allCVNData = allData;

                // 3. Aplicar los filtros iniciales (estado por defecto y posible búsqueda)
                this.filterResultsNow();

            } catch (error) {
                console.error("Error al obtener datos:", error);
                this.totalsincvn = 0;
            } finally {
                this.cargando = false;
            }
        },

        applyStateFilter() {
            // Cuando cambia el filtro de estado, se aplica inmediatamente
            this.currentPage = 1; // Reiniciar la paginación al cambiar el filtro
            this.filterResultsNow();
        },

        filterResultsNow() {
            const query = this.searchQuery.trim();
            let dataToFilter = this.allCVNData; // Empezamos con todos los CVN iniciados

            // 1. FILTRADO por CÉDULA (se aplica sobre toda la data)
            if (query) {
                dataToFilter = dataToFilter.filter(person =>
                    person.CIInfPer.includes(query)
                );
            }

            // 2. FILTRADO por ESTADO (se aplica sobre el resultado del filtro de cédula)
            if (this.filtros !== '') {
                dataToFilter = dataToFilter.filter(person =>
                    person.completionStatus === this.filtros
                );
            }

            // 3. ACTUALIZAR EL ARRAY FILTRADO Y RECALCULAR PAGINACIÓN
            this.currentFilteredData = dataToFilter;
            this.lastPage = Math.ceil(this.currentFilteredData.length / 10);
            this.currentPage = Math.min(this.currentPage, this.lastPage > 0 ? this.lastPage : 1); // Asegurar que la página actual sea válida

            // 4. Actualizar la data visible (paginación)
            this.updatePaginatedData();

            // 5. Recalcular contadores (para mostrar los totales correctos en el pie de página)
            this.contarOfertas();
        },

        // Función con debounce para la búsqueda por cédula
        filterResults: debounce(function () {
            this.currentPage = 1; // Reiniciar la paginación al buscar
            this.filterResultsNow();
        }, 800),

        updatePaginatedData() {
            // Aplicar paginación local sobre la data ya filtrada (currentFilteredData)
            const startIndex = (this.currentPage - 1) * 10;
            const endIndex = startIndex + 10;
            this.paginatedData = this.currentFilteredData.slice(startIndex, endIndex);
        },

        actualizar() {
            this.cargando = true;
            this.filtros = '';
            this.searchQuery = '';
            this.getDatos_Personales();
        },
        contarOfertas() {
            // Los conteos se hacen sobre la data original (allCVNData) para mostrar los totales generales correctos
            this.totalusercvn = this.allCVNData.length;
            this.totalcvncompleto = this.allCVNData.filter(u => u.completionStatus == "Completado").length;
            this.totalcvnincompleto = this.allCVNData.filter(u => u.completionStatus == "Incompleto").length;
            // this.totalsincvn ya viene del backend (omittedCount)

        },

        openPdfModal(page) {
            this.pdfPage = page;
            this.pdfKey++;
            const modalEl = document.getElementById('pdfModal');
            if (modalEl && typeof bootstrap !== 'undefined') {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            }
        },
        closePdfModal() {
            const modalEl = document.getElementById('pdfModal');
            if (modalEl && typeof bootstrap !== 'undefined') {
                const modal = bootstrap.Modal.getInstance(modalEl);
                modal.hide();
            }
        },

        onlyNumbers(event) {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode < 48 || charCode > 57) {
                event.preventDefault();
            }
        },
        nextPage() {
            this.currentPage++;
            this.updatePaginatedData();
        },
        previousPage() {
            this.currentPage--;
            this.updatePaginatedData();
        },
    },

    mixins: [script2],
    name: 'admin_personal_data',
};
</script>
