<template>

    <div class="container-fluid py-5">

        <div class="container edicion">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="contact-form">
                        <h2 class="mb-4">Información del Estudiante</h2>
                        <h3>Verifique la información del estudiante antes de descargar el cv</h3>
                        <form action="" method="get">
                            <div class="row">
                                <div class="col-lg-6 col-12">
                                    <label class="text-dark" for="">Cédula</label>
                                    <input type="text" class="form-control text-drak" name="name" v-model="CIInfPer"
                                        placeholder="Nuevo Nombre de Usuario" id="CIInfPer" disabled>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <label class="text-dark" for="">Apellido Paterno</label>
                                    <input type="email" class="form-control text-drak" name="email" v-model="ApellInfPer" placeholder="Email" id="ApellInfPer"
                                        disabled>
                                </div>
                                <div class="col-lg-6 col-12">
                                    <label class="text-dark" for="">Apellido Materno</label>
                                    <input type="email" class="form-control text-drak" name="email" v-model="ApellMatInfPer" placeholder="Email" id="ApellMatInfPer"
                                        disabled>
                                </div>
                                <div class="col-lg-6 col-12">
                                    <label class="text-dark" for="">Nombres</label>
                                    <input type="email" class="form-control text-drak" name="email" v-model="NombInfPer" placeholder="Email" id="NombInfPer"
                                        disabled>
                                </div>
                                <div class="col-lg-6 col-12">
                                    <label class="text-dark" for="">E-mail</label>
                                    <input type="email" class="form-control text-drak" name="email" v-model="mailPer" placeholder="Email" id="mailPer"
                                        disabled>
                                </div>

                               
                                
                               


                                <div class="ml-lg-auto col-lg-5 col-12">
                                    <input type="button" class="form-control submit-btn" v-on:click="downloadCV" value="Descargar CV">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<style>
@import url("@/assets/styles/tooplate-style.css");
@import url("@/assets/styles/unicons.css");
</style>
<script>
import script2 from '@/store/editar.js';

export default {
  mixins: [script2],
  mounted() {
    $(".toggle-password").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
   
  },
};
</script>