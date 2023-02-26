import { createStore } from 'vuex'

const mutations = {
    SET_PRODUCTS(state, products) {
      state.allProducts = products
    },
    SET_ACTIVEUSER(state) {
      state.activeUser =
        JSON.parse(sessionStorage.getItem('activeUser')) || null
    },
    SET_OUT(state) {
      state.activeUser = null
    },
    SET_ONEPRODUCT(state, item) {
      state.oneProduct = item
      console.log('item', item)
    }
  },
  state = {
    allProducts: null,
    activeUser: null,
    oneProduct: null
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
      const allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]')
      let indexOfUser
      if (currentUser != null) {
        for (let i = 0; i < allUsers.length; i++) {
          if (allUsers[i].username == currentUser.username) {
            indexOfUser = i
            break
          }
        }

        allUsers[indexOfUser] = currentUser
        localStorage.setItem('allUsers', JSON.stringify(allUsers))
      }
    },
    logout({ commit }) {
      commit('SET_OUT')

      sessionStorage.removeItem('activeUser')
      localStorage.removeItem('rememberUser')
    },
    setOneProduct({ commit }, item) {
      commit('SET_ONEPRODUCT', item)
    }
  }

export default createStore({ mutations, state, actions, strict: true })
