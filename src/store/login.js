import { mostraralertas } from "@/store/funciones";
import { enviarsolilogin } from "@/store/loginfuncion";
import store from "@/store";
import { getMe } from '@/store/auth'; 
export default {
  data() {
    return {
      emaillo: "",
      clave: "",
      url2: "http://vinculacionconlasociedad.utelvt.edu.ec/cvubackendv2/api/cvn/login",
    };
  },
  methods: {
    async login(event) {
      event.preventDefault();
      try {
        var parametros = {
          CIInfPer: this.emaillo.trim(),
          codigo_dactilar: this.clave.trim(),
        };

        const response = await enviarsolilogin('POST', parametros, this.url2, 'Logueado');

        if (response.error) {
          mostraralertas(response.mensaje, 'warning');
        } else if(response) {
          // ✅ Aquí llamas a getMe() justo después de guardar el token
          const usuario = await getMe(); // Esto obtiene los datos del usuario autenticado desde /auth/me
          //console.log("Usuario autenticado:", usuario);

          // Redirección según el rol
          const role = response.Rol;
          const tok = response.token;
          console.log(response.id);
         //console.log(response);
          if (role === 'Administrador') {
            mostraralertas('LE DAMOS LA BIENVENIDA ADMIN ' + (response.name || ''), 'success');
            this.$router.push('/adminus/' + response.id);
          } else if (role === 'Estudiante') {
            mostraralertas('LE DAMOS LA BIENVENIDA ESTUDIANTE ' + (response.ApellInfPer || ''), 'success');
            this.$router.push('/user/' + response.CIInfPer);
          } else if (role === 'Docente') {
            mostraralertas('LE DAMOS LA BIENVENIDA DOCENTE ' + (response.ApellInfPer || ''), 'success');
            this.$router.push('/userdocente/' + response.CIInfPer);
          }
        }
      } catch (error) {
        mostraralertas(error.response.data.mensaje, 'warning');
      }
    },
  },
};
