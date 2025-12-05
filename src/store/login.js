import { mostraralertas } from "@/store/funciones";
import { enviarsolilogin } from "@/store/loginfuncion";
import store from "@/store";
import { getMe } from '@/store/auth';
export default {
  data() {
    return {
      emaillo: "",
      clave2: "",
      url2: `${__API_CVN__}/cvn/login`,
    };
  },
  methods: {
    async login(event) {
      event.preventDefault();
      try {
        var parametros = {
          CIInfPer: this.emaillo.trim(),
          codigo_dactilar: this.clave2.trim(),
        };

        const response = await enviarsolilogin('POST', parametros, this.url2, 'Logueado');
        //console.log("Respuesta del login:", response);
        if (response.error) {
          mostraralertas(response.mensaje, 'warning');
        } else if (response) {
          //  getMe() justo después de guardar el token
          const usuario = await getMe(); // Esto obtiene los datos del usuario autenticado desde /auth/me
          //console.log("Usuario autenticado:", usuario);

          // Redirección según el rol
          const role = response.Rol;
          const tok = response.token;
          //console.log(response.id);
          //console.log(response);
          if (role === 'Administrador') {
            mostraralertas('LE DAMOS LA BIENVENIDA ADMIN ' + (response.name || ''), 'success');
            this.$router.push('/adminus/' + response.id);
          } else if (role === 'Estudiante') {
            mostraralertas('LE DAMOS LA BIENVENIDA ESTUDIANTE ' + (response.ApellInfPer || ''), 'success');
            this.$router.push('/user/' + response.CIInfPer);

          } else if (role === 'Estudiante Graduado') {
            mostraralertas('LE DAMOS LA BIENVENIDA ESTUDIANTE GRADUADO ' + (response.ApellInfPer || ''), 'success');
            this.$router.push('/user/' + response.CIInfPer);
          }
          else if (role === 'A') {
            mostraralertas('LE DAMOS LA BIENVENIDA ADMINISTRATIVO ' + (response.ApellInfPer || ''), 'success');
            this.$router.push('/userdocente/' + response.CIInfPer);
          }
          else if (role === 'D') {
            mostraralertas('LE DAMOS LA BIENVENIDA DOCENTE ' + (response.ApellInfPer || ''), 'success');
            this.$router.push('/userdocente/' + response.CIInfPer);
          }
          else if (role === 'T') {
            mostraralertas('LE DAMOS LA BIENVENIDA TRABAJADOR ' + (response.ApellInfPer || ''), 'success');
            this.$router.push('/userdocente/' + response.CIInfPer);
          }
        }
      } catch (error) {
        console.error("Error en login:", error);
        if (error.response?.data?.mensaje) {
          mostraralertas(error.response.data.mensaje, 'warning');
        } else {
          mostraralertas('No se pudo conectar con el servidor o error inesperado.', 'error');
        }
      }
    },
  },
};
