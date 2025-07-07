<template>
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h6 class="mb-0">Usuarios Registrados</h6>
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
    data(){
            return{
                idus:0,
                url255:'http://vinculacionconlasociedad.utelvt.edu.ec/cvubackendv2/api/cvn/v1/users',
                usuarios:null,
                cargando:false
            }
        },
        mounted(){
            const ruta = useRoute();
            this.idus = ruta.params.id;
            this.getUsuarios();
        },
       
        methods:{
            getUsuarios(){
                this.cargando=true;
                axios.get(this.url255).then(
                    res =>{
                        this.usuarios = res.data;
                        this.cargando = false;
                    }
                   
                );
            },
            eliminar(id,nombre){
                confimar2('http://vinculacionconlasociedad.utelvt.edu.ec/cvubackendv2/api/cvn/v1/eliminar/',id,'Deshabilitar Usuario','¿Realmente desea deshabilitar a '+nombre+'?');
                this.getUsuarios();
                this.cargando = false;
                this.$router.push('/adminus/'+this.idus);

            }
           
        },
    mixins: [script2],
  };
</script>