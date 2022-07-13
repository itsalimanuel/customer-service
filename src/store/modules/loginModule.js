export default {
  namespaced: true,
  state: {
    isShowLogin: false,
    isShowGoogle: false,
  },
  mutations: {
    updateLogin(state, data) {
      state.isShowLogin = data;
    },
    updateGoogle(state, data) {
      state.isShowGoogle = data;
    },
  },
};
