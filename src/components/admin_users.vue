<template>
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h6 class="mb-0">Usuarios Registrados</h6>
                <p class="text-dark text-justify">Da clic <a class="text-secondary" @click="openPdfModal(71)">aquí</a>
                    para ver la guia de este punto</p>
            </div>

            <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr class="text-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Conexión</th>
                            <!-- <th scope="col">Action</th> -->

                        </tr>
                    </thead>
                    <tbody id="contenido">
                        <!--<tr v-if="this.cargando">
                            <td colspan="8">
                                <div class="spinner-border text-primary d-flex justify-content-center" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </td>

                        </tr>-->
                        <tr v-for="us,  in this.usuarios" :key="us.id">

                            <td v-text="us.id"></td>
                            <td v-if="us.id == this.idus">Yo</td>
                            <td v-else v-text="us.name"></td>
                            <td v-text="us.email"></td>
                            <td v-text="us.role"></td>
                            <td>
                                <span :class="us.estado === 1 ? 'text-success' : 'text-danger'">
                                    {{ us.estado === 1 ? 'Habilitado' : 'Deshabilitado' }}
                                </span>
                            </td>

                            <td>
                                <span v-if="us.is_online == 1" style="color: green;">🟢 En línea</span>
                                <span v-else style="color: gray;">Desconectado {{ tiempoDesde(us.last_logout_at)
                                }}</span>
                            </td>



                        </tr>

                    </tbody>
                </table>
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
    <!-- Recent Sales End -->
</template>
<style>
@import url('@/assets/styles/style.css');
</style>
<script>
import script2 from '@/store/custom.js';
import axios from 'axios';
import API from '@/store/axios';
import { useRoute } from 'vue-router';
import { confimar2 } from '@/store/funciones';
export default {
    data() {
        return {
            idus: 0,
            url255: '/cvn/v1/users',
            usuarios: null,
            pdfUrl: `${process.env.BASE_URL}Docs/Manual_CVN__V1.pdf`,
            // página inicial (se reemplaza al llamar al modal)
            pdfPage: 1,
            pdfKey: 0,
            cargando: false,
            usuariosCache: [],
        }
    },
    computed: {
        pdfSrc() {
            return `${this.pdfUrl}#page=${this.pdfPage}`;
        }
    },
    mounted() {
        const ruta = useRoute();
        this.idus = ruta.params.id;
        this.getUsuarios();
        // 🔁 Refresca cada 10 segundos
        this.interval = setInterval(() => {
            this.getUsuarios();
        }, 20000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
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
        async getUsuarios() {
            this.cargando = true;
            try {
                const res = await API.get(this.url255);

                // ⚙️ Solo actualiza si hay cambios reales
                if (JSON.stringify(res.data) !== JSON.stringify(this.usuariosCache)) {
                    this.usuarios = res.data;
                    this.usuariosCache = JSON.parse(JSON.stringify(res.data));
                }
            } catch (e) {
                console.error("❌ Error al obtener usuarios:", e);
            } finally {
                this.cargando = false;
            }
        },
        eliminar(id, nombre) {
            confimar2('http://cvubackendv2.test/api/cvn/v1/eliminar/', id, 'Deshabilitar Usuario', '¿Realmente desea deshabilitar a ' + nombre + '?');
            this.getUsuarios();
            this.cargando = false;
            this.$router.push('/adminus/' + this.idus);

        },
        tiempoDesde(fecha) {
            if (!fecha) return "—";
            const diff = Math.floor((new Date() - new Date(fecha)) / 1000);
            if (diff < 60) return `hace ${diff} seg`;
            const min = Math.floor(diff / 60);
            if (min < 60) return `hace ${min} min`;
            const hrs = Math.floor(min / 60);
            if (hrs < 24) return `hace ${hrs} h`;
            const dias = Math.floor(hrs / 24);
            return `hace ${dias} día${dias > 1 ? "s" : ""}`;
        },

    },
    mixins: [script2],
    name: 'admin_users',
};
</script>