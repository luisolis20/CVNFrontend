//Funcion para el login del usuario
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
      if (response.data.error) {
        return {
          error: response.data.error,
          clave: response.data.clave,
          mensaje: response.data.mensaje,
        };
      }
       else if (response.data.Rol === "Estudiante Graduado") {
        store.commit("setRol_CVN", response.data.Rol);
        store.commit("setemail_CVN", response.data.mailPer);
        store.commit("setid_CVN", response.data.CIInfPer);

        store.commit("setname_CVN", response.data.ApellInfPer);
        store.commit("setToken_CVN", response.data.token);
        store.commit("setTokenType_CVN", response.data.token_type || "Bearer");
        return {
          token: response.data.token,
          Rol: response.data.Rol,
          CIInfPer: response.data.CIInfPer,
          ApellInfPer: response.data.ApellInfPer,
          mailPer: response.data.mailPer,
          token_type: response.data.token_type,
        };
      }
       else if (response.data.Rol === "Estudiante") {
        store.commit("setRol_CVN", response.data.Rol);
        store.commit("setemail_CVN", response.data.mailPer);
        store.commit("setid_CVN", response.data.CIInfPer);

        store.commit("setname_CVN", response.data.ApellInfPer);
        store.commit("setToken_CVN", response.data.token);
        store.commit("setTokenType_CVN", response.data.token_type || "Bearer");
        return {
          token: response.data.token,
          Rol: response.data.Rol,
          CIInfPer: response.data.CIInfPer,
          ApellInfPer: response.data.ApellInfPer,
          mailPer: response.data.mailPer,
          token_type: response.data.token_type,
        };
      } else if (response.data.Rol === "Docente") {
        store.commit("setRol_CVN", response.data.Rol);
        store.commit("setemail_CVN", response.data.mailPer);
        store.commit("setid_CVN", response.data.CIInfPer);

        store.commit("setname_CVN", response.data.ApellInfPer);
        store.commit("setToken_CVN", response.data.token);
        store.commit("setTokenType_CVN", response.data.token_type || "Bearer");
        return {
          token: response.data.token,
          Rol: response.data.Rol,
          CIInfPer: response.data.CIInfPer,
          ApellInfPer: response.data.ApellInfPer,
        };
      } else if (response.data.Rol === "Administrador") {
        store.commit("setRol_CVN", response.data.Rol);
        store.commit("setemail_CVN", response.data.email);
        store.commit("setid_CVN", response.data.id);

        store.commit("setname_CVN", response.data.name);
        store.commit("setToken_CVN", response.data.token);
        store.commit("setTokenType_CVN", response.data.token_type || "Bearer");
        return {
          token: response.data.token,
          Rol: response.data.Rol,
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        };
      }
    } else {
      console.error("Respuesta inesperada:", response);
      return null;
    }
  } catch (error) {
    console.error("Error:", error.response.data);
    throw error;
  }
}
