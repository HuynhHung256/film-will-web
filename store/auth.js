export const state = () => ({
  isLogin: false
})

export const mutations = {
  set_state(state, value) {
    state.isLogin = value
  }
}

export const actions = {
  login({ commit }, value) {
    if(value.email === 'admin@gmail.com' && value.password === 'admin') {
      commit('set_state', true)
    }
  },
  logout({ commit }) {
    commit('set_state', false)
  }
}

export const getters = {
  isLogin: state => state.isLogin
}