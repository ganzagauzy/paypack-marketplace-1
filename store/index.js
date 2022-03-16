let cart = window.localStorage.getItem('mycart')

export const state = () => ({

  // auth
  user: null,
  orders: [],
  Cart: cart ? JSON.parse(cart) :[] ,
  
})

export const getters = {
  
  //auth

  getUser(state) {
    return state.user
  },
  
  orders(state) {
    return state.Cart
  },

  
}

export const mutations = {

  //auth 

  SET_USER(state, user) {
    state.user = user
  },
  
  fecthProduct(state, product) {
    let found = state.Cart.find(item => item.id == product.id)
    if(found) {
    }
    else {
      state.Cart.push(product)
    }
    this.commit('saveData');
    
  },
  saveData (state) {
    window.localStorage.setItem('mycart', JSON.stringify(state.Cart))
  },
  removeData (state,product) {
    let index = state.Cart.indexOf(product);
    state.Cart.splice(index,1);
    this.commit('saveData');
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
  // fetchProduct(vuexContext, product) {
  //   vuexContext.commit('setProduct', product)
  // },

}
