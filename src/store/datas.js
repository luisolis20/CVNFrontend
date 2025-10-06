
import {mostraralertas, enviarsoli, mostraralertas2} from '@/store/funciones'
import axios from 'axios'
export default {
  data() {
    return {
      nombre: "",
      email: "",
      claven: "",
      apellidonombre: "",
      correoss: "",
      mensaje: "",
      mostrarregister:false,
      mostringreso:false,
      envio1:true,
      codigov: "",
      codigoVerificacion: "",
      passwordError: '',
      passwordTouched: false,
      correoTouched: false,
      correoError: '',
      correoErrornue: false,
      url: "http://cvubackendv2.test/api/cvn/v1/users",
    };
  },
  watch: {
    claven(newVal) {
      if (this.passwordTouched) {
        this.validatePassword(newVal);
      }
    },
    email(newVal) {
      if (this.correoTouched) {
        this.validateEmail(newVal);
      }
    }
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.correoss)) {
          this.correoErrornue = true;
      } else {
          this.correoErrornue = false;
      }
    },
    onEmailInput() {
      this.correoTouched = true;
      this.validateEmail(this.email);
    },
    validatePassword(password) {
      const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!regex.test(password)) {
        this.passwordError = 'La contraseña debe tener al menos 8 caracteres, incluyendo un número, un carácter especial y una letra mayúscula.';
        this.envio1=false;
      } else {
        this.passwordError = '';
        this.envio1=true;
      }
    },
    onPasswordInput() {
      this.passwordTouched = true;
      this.validatePassword(this.claven);
    },
   
    guardar(event){
        event.preventDefault();
        if (this.passwordError) {
          mostraralertas(this.passwordError, 'error');
          return;
        }
        if(this.nombre.trim()==''){
            mostraralertas('Ingrese Nombre de Usuario','warning','nombre');
        }
        else if (this.email.trim() === '') {
            mostraralertas('Ingrese un correo electrónico válido para estudiantes', 'warning', 'email');
        }
        else if(this.claven.trim()==''){
            mostraralertas('Ingrese clave','warning','claven');
        }
        else{
            var parametros = {
                name:this.nombre.trim(),
                email:this.email.trim(),
                password:this.claven.trim()

            }
            enviarsoli('POST',parametros,this.url,'Usuario Registrado Correctamente  Puedes iniciar Sesiòn');
            this.nombre="";
            this.email="";
            this.claven="";
            this.passwordError = '';
            this.passwordTouched = false;
            this.correoTouched= false;
            this.correoError= '';
            this.mostrarregister=false;
            this.mostringreso=false;
            this.envio1=true;
            document.getElementById('IniciarSesion').scrollIntoView({ behavior: 'smooth' });
        }
    },
    async enviarComentario() {
      const comentarioData = {
        nombre: this.apellidonombre,
        correo: this.correoss,
        mensaje: this.mensaje
      };

      await axios.post('http://cvubackendv2.test/api/cvn/v1/enviar-comentario', comentarioData)
        .then(response => {
          mostraralertas2('Comentario enviado con éxito','success');
          this.apellidonombre = '';
          this.correoss = '';
          this.mensaje = '';
          window.setTimeout(function(){
                window.location.href='/home'
              },4000);
        })
        .catch(error => {
          mostraralertas2('Error de envío','warning' + error.message);
          this.apellidonombre = '';
          this.correoss = '';
          this.mensaje = '';
        });
    },
    async enviarCodigo() {
      try {
        
        if (this.email.trim() === '') {
            mostraralertas('Ingrese un correo electrónico válido para estudiantes', 'warning', 'email');
        }else{
          const response = await axios.post("http://cvubackendv2.test/api/cvn/v1/enviar-correo",
          {
            email: this.email.trim(),
            }
          );
          console.log(response);
          
          this.codigoVerificacion = response.data.data;
          console.log(this.codigoVerificacion);
          this.mostringreso=true;
          this.envio1=false;
          alert("Código enviado a "+this.email );
        }
       
      } catch (error) {
        console.error(error);
        alert("Ocurrió un error al enviar el correo electrónico  a "+this.email );
      }
      
    },
    verificarCodigo() {
      // Verificar si el código ingresado por el usuario es correcto
      if (this.codigov === this.codigoVerificacion) {

        this.mostringreso=false;  
        this.mostrarregister= true,
        this.correoValidado = false;
      } else {
        alert("Código incorrecto. Inténtalo nuevamente.");
      }
    },
  },
};