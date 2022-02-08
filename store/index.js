export const state = () => ({

  // auth
  user: null,
  
  products: [],
  
})

export const getters = {
  
  //auth

  getUser(state) {
    return state.user
  },
  
  products(state) {
    return state.products
  },

  
}

export const mutations = {

  //auth 

  SET_USER(state, user) {
    state.user = user
  },
  
  setProducts(state, data) {
    state.products = data
  },

 
}

export const actions = {

  //auth

  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // claims = null
      // Perform logout operations
      state.commit('SET_USER', null)

      //redirect from here 
      this.$router.push({
        path: 'auth/signin',
      })
    } else {
      // Do something with the authUser and the claims object...
      const { uid, email} = authUser
      state.commit('SET_USER', {
        uid,
        email
      })
    }
  },



  
  fetchProducts(vuexContext, products) {
    vuexContext.commit('setProducts', products)
  },

}
