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
                            <th scope="col">Fecha de Registro</th>
                            <th scope="col">Fecha de Actualización</th>
                            <!-- <th scope="col">Action</th> -->

                        </tr>
                    </thead>
                    <tbody id="contenido">
                        <tr v-if="this.cargando">
                            <td colspan="8">
                                <div class="spinner-border text-primary d-flex justify-content-center" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </td>

                        </tr>
                        <tr v-else v-for="us,  in this.usuarios" :key="us.id">

                            <td v-text="us.id"></td>
                            <td v-text="us.name"></td>
                            <td v-text="us.email"></td>
                            <td v-text="us.role"></td>
                            <td v-text="us.estado"></td>
                            <td v-text="new Date(us.created_at).toLocaleDateString('en-US')"></td>
                            <td v-text="new Date(us.updated_at).toLocaleDateString('en-US')"></td>

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
import { useRoute } from 'vue-router';
import { confimar2 } from '@/store/funciones';
export default {
    data() {
        return {
            idus: 0,
            url255: 'http://cvubackendv2.test/api/cvn/v1/users',
            usuarios: null,
            pdfUrl: `${process.env.BASE_URL}Docs/Manual_CVN__V1.pdf`,
            // página inicial (se reemplaza al llamar al modal)
            pdfPage: 1,
            pdfKey: 0,
            cargando: false
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
        getUsuarios() {
            this.cargando = true;
            axios.get(this.url255).then(
                res => {
                    this.usuarios = res.data;
                    this.cargando = false;
                }

            );
        },
        eliminar(id, nombre) {
            confimar2('http://cvubackendv2.test/api/cvn/v1/eliminar/', id, 'Deshabilitar Usuario', '¿Realmente desea deshabilitar a ' + nombre + '?');
            this.getUsuarios();
            this.cargando = false;
            this.$router.push('/adminus/' + this.idus);

        }

    },
    mixins: [script2],
    name:'admin_users',
};
</script>