import { createStore } from 'vuex'

export default createStore({
  state: {
    role: localStorage.getItem('role') || null,
    email: localStorage.getItem('email') || null,
    idusu: localStorage.getItem('idusu') || null,
    name: localStorage.getItem('name') || null,
  },
  getters: {
  },
  mutations: {
    setRol(state, nuevoRol) {
      state.role = nuevoRol;
    },
    setemail(state, nuevoemail) {
      state.email = nuevoemail;
    },
    setid(state, nuevoid) {
      state.idusu = nuevoid;
    },
   
    setname(state, nuevoname) {
      state.name = nuevoname;
    },
    
  },
  actions: {
  },
  modules: {
  }
})
