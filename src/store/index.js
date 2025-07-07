import { createStore } from 'vuex'

export default createStore({
  state: {
    role: localStorage.getItem('Rol_cvn') || null,
    email: localStorage.getItem('email_cvn') || null,
    idusu: localStorage.getItem('id_cvn') || null,
    name: localStorage.getItem('name_cvn') || null,
    token: localStorage.getItem('token_cvn') || null,
    token_type: localStorage.getItem('token_type_cvn') || null,
  },
  getters: {
    getIdusu: state => state.idusu,
    isAuthenticated: state => !!state.token,
    getFullToken: state => `${state.token_type} ${state.token}`,
  },
  mutations: {
    setRol_CVN(state, nuevoRol) {
      state.role = nuevoRol;
      localStorage.setItem('Rol_cvn', nuevoRol);
    },
    setemail_CVN(state, nuevoemail) {
      state.email = nuevoemail;
      localStorage.setItem('email_cvn', nuevoemail);
    },
    setid_CVN(state, nuevoid) {
      state.idusu = nuevoid;
      localStorage.setItem('id_cvn', nuevoid);
    },
    setname_CVN(state, nuevoname) {
      state.name = nuevoname;
      localStorage.setItem('name_cvn', nuevoname);
    },
    setToken_CVN(state, token) {
      state.token = token;
      localStorage.setItem('token_cvn', token);
    },
    setTokenType_CVN(state, type) {
      state.token_type = type;
      localStorage.setItem('token_type_cvn', type);
    },
    logout_CVN(state) {
      // Limpia el state y localStorage al cerrar sesión
      state.role = null;
      state.email = null;
      state.idusu = null;
      state.name = null;
      state.token = null;
      state.token_type = null;

      localStorage.removeItem('Rol_cvn');
      localStorage.removeItem('email_cvn');
      localStorage.removeItem('id_cvn');
      localStorage.removeItem('name_cvn');
      localStorage.removeItem('token_cvn');
      localStorage.removeItem('token_type_cvn');
      localStorage.removeItem('user_cvn');
    },
  },
  actions: {},
  modules: {}
})
