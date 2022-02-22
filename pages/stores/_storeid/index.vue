<template>
  <div>
    
      
        
        
      
        <div class="home">
          <!-- Hero -->
          <!-- <Hero /> -->

          <!-- search box -->
          <div class=" search">
            <!-- <input
              v-model.lazy="searchInput"
              type="text"
              placeholder="Search"
              @keyup.enter="$fetch"
            /> -->
            <v-text-field 
              v-model.lazy="searchInput"
              label="Search Here"
              type="text"
              outlined
              class="input"
              dense
              @keyup.enter="$fetch"
              
            ></v-text-field>
            <v-btn
              icon
              v-show="searchInput != ''"
              class="button"
              @click="clearSearch"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </div>

          <div class="row">
            <div class="category">
              <h2>Categories</h2>
              <ul v-for="(product, index) in shopproducts" :key="index">
                <li> <v-btn @click="readDataByCategory(product)"  text>{{
                          product.category
                        }}</v-btn></li>
              </ul>
            </div>
            <div class="products">

            

          
          
            

          <Loading v-if="$fetchState.pending" />
          
          <!-- Movies -->
          <div v-else class="container movies">
            <!-- Searched movies -->
            <div v-if="searchInput !== ''" id="movie-grid" class="movies-grid">
              <div
                v-for="(product, index) in searchedProducts"
                :key="index"
                class="movie"
              >
                <NuxtLink
                  :to="{
                    name: 'stores-storeid-id',
                    params: { id: product.id },
                  }"
                >
                  <v-hover v-slot="{ hover }">
                    <v-card
                      class="mx-auto"
                      color="grey lighten-4"
                      max-width="600"
                    >
                      <div class="movie-img">
                        <v-img :aspect-ratio="16 / 14" :src="product.images[0]">
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="
                                d-flex
                                transition-fast-in-fast-out
                                blue
                                darken-2
                                v-card--reveal
                                text-h3
                                white--text
                              "
                              style="height: 100%"
                            >
                              More
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </div>

                      <!-- <p class="text-h5 font-weight-light orange--text mb-2 title text-sm-h6">{{ product.name.slice(0, 25) }}  <span v-if="product.name.length >25">...</span></p> -->
                      <div class="info1 py-1 px-2">
                        <!-- <p class="title text-sm-h6">{{ product.name.slice(0, 25) }}  <span v-if="product.name.length >25">...</span>
                        </p> -->
                      </div>
                      <p
                        class="
                          text-h6
                          px-2
                          py-1
                          font-weight-light
                          blue--text
                          mb-2
                        "
                      >
                        {{ product.name.slice(0, 25) }}
                        <span v-if="product.name.length > 25">...</span>
                        {{product.price}}
                      </p>
                    </v-card>
                  </v-hover>
                </NuxtLink>
              </div>
            </div>

            <!-- Now Products -->
            <div v-else id="movie-grid" class="movies-grid">
              <div
                v-for="(product, index) in products"
                :key="index"
                class="movie"
              >
                <NuxtLink
                  :to="{
                    name: 'stores-storeid-id',
                    params: { id: product.id },
                  }"
                >
                  <v-hover v-slot="{ hover }">
                    <v-card
                      class="mx-auto"
                      color="grey lighten-4"
                      max-width="600"
                    >
                      <div class="movie-img">
                        <v-img :aspect-ratio="16 / 14" :src="product.images[0]">
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="
                                d-flex
                                transition-fast-in-fast-out
                                blue
                                darken-2
                                v-card--reveal
                                text-h3
                                white--text
                              "
                              style="height: 100%"
                            >
                              More
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </div>

                      <!-- <p class="text-h5 font-weight-light orange--text mb-2 title text-sm-h6">{{ product.name.slice(0, 25) }}  <span v-if="product.name.length >25">...</span></p> -->
                      <div class="info1 py-1 px-2">
                        <!-- <p class="title text-sm-h6">{{ product.name.slice(0, 25) }}  <span v-if="product.name.length >25">...</span>
                        </p> -->
                      </div>
                      <p
                        class="
                          text-h6
                          px-2
                          py-1
                          font-weight-light
                          d-flex
                          justify-space-between
                          
                          mb-2
                        "
                      >
                        {{ product.name.slice(0, 25) }}
                        <span v-if="product.name.length > 25">...</span>
                        <span class="">{{product.price}}{{product.currency}}</span>
                      </p>
                    </v-card>
                  </v-hover>
                </NuxtLink>
              </div>
            </div>
          </div>
          </div>
          </div>
          
        </div>
      
    
    
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  data() {
    return {
      products: [],
      size: "",
      searchedProducts: [],
      shopproducts: [],
      searchInput: "",
      
      
    };
  },
  async fetch() {

    if (this.searchInput === "") {
      await this.fetchProducts();
      return;
    }
    
    await this.searchProducts();
  },
  computed: {
    id() {
      return this.$route.params.storeid;
    },
  },
  mounted() {
    this.fetchProducts();
    this.readDataFilterCategory();
    
    
  },
  methods: {
    async fetchProducts() {
      const productsRef = firebase.firestore().collection("products");

      productsRef.where("userId", "==", this.id).onSnapshot((snap) => {
        this.size = snap.size;
        this.products = snap.docs.map((doc) => {
          var product = doc.data();
          product.id = doc.id;
          return product;
        });
      });
    },
    async searchProducts() {
      const productsRef = firebase.firestore().collection("products");

      //We define an async function
      async function getIsNameOrCategory(searchInput, id) {
       
        const isName = productsRef.where("name", "==", searchInput).where("userId", "==", id).get();
        const isCategory = productsRef
          .where("category", "==", searchInput).where("userId", "==", id)
          .get();

        const [nameQuerySnapshot, categoryQuerySnapshot] = await Promise.all([
          isName,
          isCategory,
        ]);

        const nameArray = nameQuerySnapshot.docs;
        const categoryArray = categoryQuerySnapshot.docs;

        const searchArray = nameArray.concat(categoryArray);
        return searchArray;
      }

      //We call the asychronous function
      getIsNameOrCategory(this.searchInput, this.id).then((result) => {
        
        result.forEach((doc) => {
          var product = doc.data();
          product.id = doc.id;
          this.searchedProducts.push(product);
          console.log(doc.data());
        });
      });
    },

    async readDataFilterCategory() {
      //   db.collection("desserts2").get().then((querySnapshot) =>{
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, "=>",doc.data());
      //     this.products = doc.data();
      //     this.products.push(doc.data())
      //   })
      // })

      var shopproductsRef = await firebase.firestore().collection("products");

      // const uid = sessionStorage.getItem("user_id")

      shopproductsRef.onSnapshot((snap) => {
        // this.size = snap.size
        this.shopproducts = [];
        this.shopproducts = snap.docs.map((doc) => {
          var shopproduct = doc.data();
          shopproduct.id = doc.id;
          return shopproduct;
        });

        this.shopproducts = this.shopproducts.filter((product, i) => {
          return i == this.shopproducts.findIndex(
            (p) => p.category == product.category
          );
        });
      });
    },

    async readDataByCategory(product) {
      console.log(product);
      //   db.collection("desserts2").get().then((querySnapshot) =>{
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, "=>",doc.data());
      //     this.products = doc.data();
      //     this.products.push(doc.data())
      //   })
      // })

      var productsRef = await firebase.firestore().collection("products");

      // const uid = sessionStorage.getItem("user_id")
      // const my_shop = this.myproducts[0].shopname
      // console.log(my_shop);

      productsRef
        .where("category", "==", product.category).where("userId", "==", this.id)
        .onSnapshot((snap) => {
          this.size = snap.size;
          this.products = [];
          snap.forEach((doc) => {
            var product = doc.data();
            product.id = doc.id;
            this.products.push(product);
          });
        });
    },

    clearSearch() {
      this.searchInput = "";
      this.searchedProducts = [];
    },
  },
  layout: "",
};
</script>



<style lang="scss" scoped>

.row {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.category {
  flex-basis: 20%;
  padding: 10px;
}
.category ul {
  list-style: none;
}
.products {
  flex-basis: 80%;
  padding: 10px;
}
.home {
  .top {
    padding-top: 30px;
  }
  .loading {
    padding-top: 120px;
    align-items: flex-start;
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-left:  16px;
    padding-right:  16px;
    
    .input {
      max-width: 350px;
      width: 100%;

      padding: 5px 5px;
      font-size: 14px;
      

      &:focus {
        outline: none;
      }
    }
  }
  .movies {
    padding: 32px 16px;
    .movies-grid {
      display: grid;
      column-gap: 32px;
      row-gap: 64px;
      grid-template-columns: 1fr;
      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
      }
      .movie {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        .movie-img {
          position: relative;
          overflow: hidden;
          &:hover {
            .overview {
              transform: translateY(0);
            }
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
          .review {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #c92502;
            color: #fff;
            border-radius: 0 0 16px 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .overview {
            line-height: 1.5;
            position: absolute;
            bottom: 0;
            background-color: rgba(201, 38, 2, 0.9);
            padding: 12px;
            color: #fff;
            transform: translateY(100%);
            transition: 0.3s ease-in-out all;
          }
        }
        .info1 {
          margin-top: auto;
          .title {
            margin-top: 8px;
            color: #111;
            font-size: 20px;
          }
          .release {
            margin-top: 8px;
            color: #c9c9c9;
          }
        }
      }
    }
  }
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.v-card--reveal2 {
  align-items: right;
  bottom: 0;
  justify-content: right;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.munu {
  position: absolute;
  width: 100%;
  background: rgba(255, 255, 255, 255.5);
  padding: 0 10px;
}
.nav {
  position: relative;
}
.nav ul {
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.nav ul li {
  list-style: none;
  cursor: pointer;
}
.nav ul li p:hover {
  background: #184771;
  color: #fff;
}
.nav ul li ul {
  display: block;
  background: rgba(255, 255, 255, 255.5);
  min-width: 150px;
  position: absolute;
  margin-top: 1px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  transform: translateY(40px);
}

.nav ul li:hover ul {
  top: 60px;
  opacity: 1;
  z-index: 10000;
  visibility: visible;
  transform: translateY(0);
}
a {
  text-decoration: none;
  color: #111;
}
</style>

