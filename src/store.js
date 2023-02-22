import { createStore } from 'vuex'

const mutations = {
    increment(state) {
      state.counter += 1
    },
    SET_PRODUCTS(state, products) {
      state.allProducts = products
    },
    SET_ACTIVEUSER(state) {
      state.activeUser =
        JSON.parse(sessionStorage.getItem('activeUser')) || null
    },
    SET_OUT(state) {
      state.activeUser = null
    }
  },
  state = {
    counter: 0,
    allProducts: null,
    activeUser: null
  },
  actions = {
    getProducts({ commit }) {
      fetch('api.json')
        .then((response) => response.json())
        .then((result) => {
          commit('SET_PRODUCTS', result.data)
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
        console.log(indexOfUser)
        allUsers[indexOfUser] = currentUser
        localStorage.setItem('allUsers', JSON.stringify(allUsers))
      }
    },
    logout({ commit }) {
      commit('SET_OUT')

      sessionStorage.removeItem('activeUser')
    }
  }

export default createStore({ mutations, state, actions, strict: true })
