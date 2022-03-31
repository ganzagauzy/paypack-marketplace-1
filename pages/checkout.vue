<template>
  <div >
      <v-container class="top">
          <v-row>
              <v-col 
                cols="12"
                md="9">
                <h2>My Cart</h2>
                <div class="pt-5">
                    <v-list-item v-for="(product, index) in Cart" :key="index">
                        <v-list-item-avatar>
                        <v-img :src="product.images[0]"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title class="">
                            <v-row>
                                <v-col cols="12" md="7">
                                    <p class="">{{product.name}} </p>
                                </v-col>
                                <v-col cols="12" md="5">
                                    <v-btn text 
                                        @click="$store.commit('removeData', product)"><v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            
                           
                        </v-list-item-title>
                        
                        <small><strong>Price: </strong>{{product.price}}</small>
                        <small><strong>Quantity: </strong>{{product.nproducts}}</small>
                        <small><strong>Total Price: </strong>{{product.price*product.nproducts}}</small>
                        </v-list-item-content>
                        
                    </v-list-item>
                </div>
            </v-col>
              <v-col 
                cols="12"
                md="3">
                <span class="text-h6">Total Price:</span> {{Total}}
                <v-btn color="primary" elevation="0" block x-large class="mt-5"
                    
                    >Checkout</v-btn>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    
    data() {
        return {
            sum: '', 
        }
    },

    computed: {
        Cart() {
        return this.$store.getters.orders
        },
        Total() {
            return this.$store.getters.ordersTotal
        }
    },
    
    middleware: 'customer'
}
</script>

<style lang="scss" scoped>
.top { 
    padding-top: 50px;
}
.line-heigh {
    line-height: 100px;
}
</style>