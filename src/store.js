import { createStore } from 'vuex'

const mutations = {
    SET_PRODUCTS(state, products) {
      state.allProducts = products
    },
    SET_POSTS(state, posts) {
      state.allPosts = posts
    },
    SET_NEW_POST(state, post) {
      state.allPosts.unshift(post)
    },
    SET_NEW_COMMENT(state, payload) {
      state.allPosts = state.allPosts.map((post) => {
        if (post.id == payload.id) {
          post.comments.unshift(payload.comment)
        }
        return post
      })
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
    activeUser: null,
    allPosts: null
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
    getPosts({ commit }) {
      fetch('blogapi.json')
        .then((response) => response.json())
        .then((result) => {
          commit('SET_POSTS', result.data)
        })
    },
    setNewPost({ commit }, payload) {
      commit('SET_NEW_POST', payload)
    },
    setNewComment({ commit }, payload) {
      commit('SET_NEW_COMMENT', payload)
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
