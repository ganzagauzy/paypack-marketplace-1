export const state = () => ({
  
  products: [],
  
})

export const getters = {
  
  products(state) {
    return state.products
  },

  
}

export const mutations = {
  
  setProducts(state, data) {
    state.products = data
  },

 
}

export const actions = {
  
  fetchProducts(vuexContext, products) {
    vuexContext.commit('setProducts', products)
  },

}
