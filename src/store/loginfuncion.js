import axios from "axios";
import store from "@/store";
export async function enviarsolilogin(method, parametros, url, mensaje) {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: parametros,
    });

    if (response.data && response.data.token) {
      // ✅ Guardar token y tipo
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("token_type", response.data.token_type || "Bearer");

      // ✅ Guardar info del usuario si deseas
      localStorage.setItem("user", JSON.stringify(response.data.user || {}));

      // ✅ Opcional: usar Vuex si lo necesitas
      store.commit("setRol", response.data.Rol || "");
      store.commit("setemail", response.data.email || "");
      store.commit("setid", response.data.id || "");
      store.commit("setname", response.data.name || "");
      console.log(response.data);
      // ✅ Guardar el token en el store  
     
      if (response.data.Rol === "Estudiante") {
        return {
          token: response.data.token,
          role: response.data.Rol,
          CIInfPer: response.data.CIInfPer,
          ApellInfPer: response.data.ApellInfPer,
        };
      }else if(response.data.Rol === "Docente"){
        return {
          token: response.data.token,
          role: response.data.Rol,
          CIInfPer: response.data.CIInfPer,
          ApellInfPer: response.data.ApellInfPer,
        };
      }else if(response.data.Rol === "Administrador"){
        return {
          token: response.data.token,
          role: response.data.Rol,
          CIInfPer: response.data.id,
          name: response.data.name,
        };
      }
     
    } else {
      return {
        error: true,
        mensaje: response.data.message || "Credenciales incorrectas",
      };
    }
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
}
