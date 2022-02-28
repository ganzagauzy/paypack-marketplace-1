<template>
  <div>
    <div class="fixed-bar top">
      <div class="fixed-bar">
        <v-system-bar class="" window dark color="">
          <v-icon>mdi-dropbox </v-icon>
          <span>Products &mdash;{{ size }}</span>
          <v-spacer></v-spacer>
        </v-system-bar>

        <v-row class="" color="#d1dbec">
          <v-col cols="12" sm="6" md="4"> </v-col>
        </v-row>
      </div>
    </div>

    <v-card>
      <v-toolbar fixed color="#d1dbec">
        <v-toolbar-title>
          <h6 class="d-flex justify-center pt-15">
            <v-row>
              <v-col>
                <marquee
                  behavior="scroll"
                  width="100%"
                  direction="left"
                  scrollamount="1"
                  height="100px"
                >
                  Buy All You Want No Limits !!!!!!
                </marquee>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <marquee
                  behavior="scroll"
                  width="100%"
                  direction="left"
                  scrollamount="1"
                  height="100px"
                >
                  You Can Get Your Own Shop!!
                </marquee>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <marquee
                  behavior="scroll"
                  width="100%"
                  direction="left"
                  scrollamount="1"
                  height="100px"
                >
                  Call 0788888888 For More Details!!
                </marquee>
              </v-col>
            </v-row>
          </h6>
        </v-toolbar-title>
      </v-toolbar>

      <v-card flat>
        <div class="home">
          <v-row>
            <v-col>
              <div class="menu px-3">
                <div class="nav py-3">
                  <ul>
                    <li>
                      <v-btn @click="readData" class="ma-2" outlined color="">
                        All Products
                      </v-btn>
                    </li>
                  </ul>
                </div>
              </div>
            </v-col>

            <v-spacer></v-spacer>

            <v-col>
              <div class="menu px-3">
                <div class="nav py-3">
                  <ul>
                    <li>
                      <v-btn class="ma-2" outlined color="">
                        Filter By Shop
                      </v-btn>
                      <ul>
                        <li v-for="(product, index) in myproducts" :key="index">
                          <v-btn @click="readDataByShop(product)" text>{{
                            product.shopname
                          }}</v-btn>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <div class="menu px-3">
                <div class="nav py-3">
                  <ul>
                    <li>
                      <v-btn class="ma-2" outlined color="">
                        Filter By Category</v-btn
                      >
                      <ul>
                        <li
                          v-for="(product, index) in shopproducts"
                          :key="index"
                        >
                          <v-btn @click="readDataByCategory(product)" text>{{
                            product.category
                          }}</v-btn>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Products -->
          <div class="container products">
            <!-- Searched products -->
            <div
              v-if="searchInput !== ''"
              id="product-grid"
              class="products-grid"
            >
              <div
                v-for="(product, index) in searchProducts"
                :key="index"
                class="product"
              >
                <div class="product-img">
                  <!-- <img src="`https://image.tmdb.org/t/p/w500/${ product.poster_path }`" alt=""> -->
                  <img :src="product.images[0]" alt="" />
                  <!-- <p class="review">{{ product.vote_average }}</p> -->
                  <!-- <p class="overview">{{ product.overview }}</p> -->
                </div>
                <div class=""></div>
              </div>
            </div>
            <!-- Now streaming -->
            <div v-else id="product-grid" class="products-grid">
              <div
                v-for="(product, index) in products"
                :key="index"
                class="product"
              >
                <v-card flat class="mx-auto" max-width="344">
                  <v-img :src="product.images[0]" height="250px"></v-img>

                  <v-card-title>
                    {{ product.name }}
                  </v-card-title>

                  <v-card-subtitle>
                    {{ product.price }} {{ product.currency }}
                  </v-card-subtitle>
                </v-card>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-card>
  </div>
</template>


<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import axios from "axios";
import { mapState } from "vuex";
import ProductTable from "../../components/ProductTable.vue";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import db from "../plugins/firebase";

export default {
  data() {
    return {
      selectedItem: null,
      searchProducts: [],
      searchInput: "",
      dialog: false,
      images: [],
      show: false,
      products: [],
      myproducts: [],
      shopproducts: [],
      size: "",
      user: "",
      shop: "",
      shopname: "",
      editedIndex: -1,
      loading: false,
      selection: 1,
      // product: {
      //   name: '',
      //   description: '',
      // },
    };
  },

  components: {
    VueUploadMultipleImage,
    ProductTable,
  },

  created() {
    this.readData();
    this.readDataFilterShop();
    this.readDataByShop();
    this.readDataByCategory();
    this.readDataFilterCategory();
  },

  methods: {
    initialize() {
      this.products = [];
      this.myproducts = [];
      this.shopproducts = [];
    },

    async readData() {
      var productsRef = await firebase.firestore().collection("published");

      productsRef.onSnapshot((snap) => {
        this.size = snap.size;
        this.products = [];
        snap.forEach((doc) => {
          var product = doc.data();
          product.id = doc.id;
          this.products.push(product);
        });
      });
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },

    async readDataFilterShop() {
      var myproductsRef = await firebase.firestore().collection("published");

      // const uid = sessionStorage.getItem("user_id")

      myproductsRef.onSnapshot((snap) => {
        // this.size = snap.size
        this.myproducts = [];
        this.myproducts = snap.docs.map((doc) => {
          var myproduct = doc.data();
          myproduct.id = doc.id;
          return myproduct;
        });

        this.myproducts = this.myproducts.filter((product, i) => {
          return (
            i ==
            this.myproducts.findIndex((p) => p.shopname == product.shopname)
          );
        });
      });
    },

    async readDataFilterCategory() {
      var shopproductsRef = await firebase.firestore().collection("published");

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
          return (
            i ==
            this.shopproducts.findIndex((p) => p.category == product.category)
          );
        });
      });
    },

    async readDataByShop(product) {
      console.log(product);

      var productsRef = await firebase.firestore().collection("published");

      productsRef
        .where("shopname", "==", product.shopname)
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

    async readDataByCategory(product) {
      console.log(product);

      var productsRef = await firebase.firestore().collection("published");

      // const uid = sessionStorage.getItem("user_id")
      // const my_shop = this.myproducts[0].shopname
      // console.log(my_shop);

      productsRef
        .where("category", "==", product.category)
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
      this.searchedMovies = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 3.9em;
  z-index: 2;
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
    padding: 32px 16px;
    input {
      max-width: 350px;
      width: 100%;
      color: #111;
      padding: 5px 5px;
      font-size: 14px;
      border-bottom: 1px solid #111;

      &:focus {
        outline: none;
      }
    }
  }
  .products {
    padding: 32px 16px;
    .products-grid {
      display: grid;
      column-gap: 32px;
      row-gap: 64px;
      grid-template-columns: 1fr;
      @media (min-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
      }
      .product {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        .product-img {
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


