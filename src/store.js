import { createStore } from 'vuex'

const mutations = {
    SET_PRODUCTS(state, products) {
      state.allProducts = products
    },
    SET_ACTIVEUSER(state) {
      state.activeUser = JSON.parse(sessionStorage.getItem('activeUser'))
    },
    SET_OUT(state) {
      state.activeUser = null
    }
  },
  state = {
    allProducts: null,
    activeUser: null
  },
  actions = {
    getProducts({ commit }) {
      fetch('api.json')
        .then((response) => response.json())
        .then((result) => {
          //Simulating 1/10 of a second delay
          setTimeout(() => {
            commit('SET_PRODUCTS', result.data)
          }, 100)
        })
    },
    getLogged({ commit }) {
      commit('SET_ACTIVEUSER')

      const currentUser = JSON.parse(sessionStorage.getItem('activeUser'))
      const allUsers = JSON.parse(localStorage.getItem('allUsers'))

      const indexOfUser = allUsers.findIndex(
        (el) => el.username === currentUser.username
      )

      allUsers[indexOfUser] = currentUser
      localStorage.setItem('allUsers', JSON.stringify(allUsers))
    },
    logout({ commit }) {
      commit('SET_OUT')

      sessionStorage.removeItem('activeUser')
      localStorage.removeItem('rememberUser')
    }
  }

export default createStore({ mutations, state, actions, strict: true })
