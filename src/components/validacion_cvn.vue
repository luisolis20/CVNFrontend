<template>
    <div class="container mt-4">
        <div class="card p-4 shadow-sm">
            <h4 class="text-dark fw-bold mb-3 text-center">Verificación de CVN</h4>
            <p class="text-muted text-center mb-4">
                Ingrese el código único que aparece debajo del QR en el CVN descargado para validar su autenticidad.
            </p>

            <div class="row justify-content-center">
                <div class="col-md-6 col-sm-8">
                    <div class="input-group-icon mb-3">
                        <label for="codigo" class="text-dark fw-bold mb-1">Código de Verificación:</label>
                        <div class="input-group-icon">

                            <input type="text" v-model="codigo" class="form-control1 input-box" id="codigo"
                                placeholder="Ejemplo: 8F3A1C" maxlength="10" />
                            <span class="nav-link-icon text-800 fs--1 input-box-icon"><i
                                    class="fa-solid fa-qrcode"></i></span>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center mt-3">
                        <button class="btn1 btn-secondary1 px-4" :disabled="loading || !codigo"
                            @click="verificarCodigo">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            &nbsp; Validar CVN
                        </button>
                    </div>
                </div>
            </div>

            <!-- Resultados -->
            <div v-if="resultado" class="mt-5 text-center">
                <div class="alert alert-success py-3">
                    <i class="fa-solid fa-check-circle text-success fa-2x mb-2"></i>
                    <h5 class="fw-bold text-dark">CVN válido</h5>
                    <p class="mb-1 text-dark"><strong>Cédula:</strong> {{ resultado.CIInfPer }}</p>
                    <p class="mb-1 text-dark"><strong>Nombres:</strong> {{ resultado.nombres }}</p>
                    <p class="mb-1 text-dark"><strong>Apellidos:</strong> {{ resultado.apellidos }}</p>
                    <p class="mb-0 text-dark"><strong>Generado el:</strong> {{ resultado.fecha_generacion }}</p>
                </div>
            </div>

            <div v-if="error" class="mt-4 text-center">
                <div class="alert alert-danger py-3">
                    <i class="fa-solid fa-circle-xmark text-danger fa-2x mb-2"></i>
                    <h5 class="fw-bold text-dark">Código no válido</h5>
                    <p class="text-muted">El código ingresado no existe o ha expirado.</p>
                </div>
            </div>

            <div v-if="loading" class="text-center mt-4">
                <i class="fa-solid fa-spinner fa-spin text-dark"></i>
                <p class="text-muted mt-2">Verificando...</p>
            </div>
        </div>
    </div>
</template>
<style>
@import url("@/assets/styles/tooplate-style.css");
@import url("@/assets/styles/unicons.css");
</style>
<script>
import API from '@/store/axios';
import { mostraralertas2, enviarsolig, enviarsoliedit, confimar, enviarsoligqr } from '@/store/funciones';

export default {
    name: 'validacion_cvn',
    data() {
        return {
            codigo: "",
            resultado: null,
            error: null,
            loading: false,
            url: "/cvn/v1/verificar",
        };
    },
    methods: {
        async verificarCodigo() {
        
            this.loading = true;
            this.error = null;
            this.resultado = null;
            const newurl = this.url + '/' + this.codigo;

            try {
                const response = await API.get(`${newurl}`);
                if (response.data.data) {
                    this.resultado = response.data.data;
                    this.codigo = "";
                    //console.log(this.resultado);
                } else {
                    this.error = true;
                }
            } catch (err) {
                console.error(err);
                this.error = true;
            } finally {
                this.loading = false;
            }
        },
    },

};
</script>