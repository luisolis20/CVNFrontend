import { mostraralertas } from "@/store/funciones";
import { enviarsolilogin } from "@/store/loginfuncion";
import store from "@/store";
import { getMe } from '@/store/auth'; 
export default {
  data() {
    return {
      emaillo: "",
      clave: "",
      url2: "http://cvubackendv2.test/api/cvn/login",
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
        } else {
          // ✅ Aquí llamas a getMe() justo después de guardar el token
          const usuario = await getMe(); // Esto obtiene los datos del usuario autenticado desde /auth/me
          console.log("Usuario autenticado:", usuario);

          // Redirección según el rol
          const role = response.role;
          
         
          if (role === 'Administrador') {
            mostraralertas('Bienvenido ADMIN ' + (usuario.name || ''), 'success');
            this.$router.push('/adminus/' + usuario.id);
          } else if (role === 'Estudiante') {
            mostraralertas('Bienvenido ESTUDIANTE ' + (response.ApellInfPer || ''), 'success');
            this.$router.push('/user/' + response.CIInfPer);
          } else if (role === 'Docente') {
            mostraralertas('Bienvenido DOCENTE ' + (response.ApellInfPer || ''), 'success');
            this.$router.push('/userdocente/' + response.CIInfPer);
          } else {
            mostraralertas('Rol no reconocido', 'warning');
          }
        }
      } catch (error) {
        console.error("Login error:", error);
        mostraralertas("Error en el login", "error");
      }
    },
  },
};
