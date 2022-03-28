<template>
  <div>
    <div class="fixed-bar top">
      <div class="fixed-bar">
        <v-system-bar class="" window dark color="">
          <v-icon>mdi-dropbox </v-icon>
          <span>My-Products &mdash; {{ size }}</span>
          <v-spacer></v-spacer>
          <!-- <v-icon>mdi-minus</v-icon>
                      <v-icon>mdi-checkbox-blank-outline</v-icon>
                      <v-icon>mdi-close</v-icon> -->
        </v-system-bar>

        <v-row class="" color="#d1dbec">
          <v-col cols="12" sm="6" md="4"> </v-col>
        </v-row>
      </div>
    </div>

    <!-- <div class="pt-16">
    <v-card>
    <v-tabs
        color="dark"
        right
      >
        <v-tab><v-icon>mdi-grid</v-icon></v-tab>
        <v-tab><v-icon>mdi-grid</v-icon></v-tab>
        <v-tab><v-icon>mdi-grid</v-icon></v-tab>

        <v-tab-item
          v-for="n in 3"
          :key="n"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 12"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>

  </div> -->
    <div class="header-store accent">
    <v-card>
      <v-toolbar fixed color="#d1dbec">
        <v-toolbar-title class="d-flex justify-lg-space-between">
          <v-spacer></v-spacer>
          <div class="d-flex justify-end ">
            <v-btn outlined @click="shareUrl">share-url</v-btn>
          </div>
        </v-toolbar-title>
      </v-toolbar>

      <v-tabs color="">
        <v-tab>
          <v-icon left> mdi-grid </v-icon>
        </v-tab>
        <v-tab>
          <v-icon left> mdi-playlist-edit </v-icon>
        </v-tab>

        <v-tab-item class="header-store accent">
          <v-card flat>
            <div class="home header-store accent">
              <!-- Hero -->
              <!-- <Hero /> -->

              <!-- search box -->
              <!-- <div class="container search">
                <input v-model.lazy="searchInput" type="text" placeholder="Search" @keyup.enter="$fetch">
                <v-btn icon v-show="searchInput !='' " class="button" @click="clearSearch"><v-icon>mdi-close</v-icon></v-btn>
              </div> -->

              <!-- <div v-for="(product, index) in products" :key="index" class="">
                <p>{{ product.images}}</p>
              </div> -->

              <!-- <div  id="product-grid" class="products-grid">
                  <div v-for="(product, index) in products" :key="index" class="product">
                    <div class="product-img"> -->
              <!-- <img src="`https://image.tmdb.org/t/p/w500/${ product.poster_path }`" alt=""> -->
              <!-- <img :src="product.images[0]" alt=""> -->
              <!-- <p class="review">{{ product.vote_average }}</p> -->
              <!-- <p class="overview">{{ product.overview }}</p> -->
              <!-- </div>
                    
                  </div>
              </div> -->

              <!-- Loading -->
              <!-- <Loading v-if="$fetchState.pending" /> -->

              <!-- Movies -->
              <div class="container products">

                <div  class="d-flex flex-wrap justify-content-start">
                <div
                  v-for="(product, index) in products"
                  :key="index"
                  class="product col d-flex"
                  v-gsap.fromTo="[
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1 },
                  ]"
                >
                  <NuxtLink
                    :to="{
                        name: 'products-productid',
                        params: { productid: product.id },
                      }"
                  >
                    <v-card flat class="mx-auto imgBox" width="220" >
                      <v-img :src="product.images[0]" cover height="205px" ></v-img>

                      <div class="card-subtitle">
                        <v-card-title>
                          {{ product.name.slice(0, 12) }} <span v-if="product.name.length >12">...</span>
                        </v-card-title>

                        <v-card-subtitle>
                          {{ product.price }} {{ product.currency }}
                        </v-card-subtitle>
                      </div>
                    </v-card>
                  </NuxtLink>
                </div>
              </div>

                <!-- Now streaming -->
                
              </div>
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item class="header-store accent">
          <v-card flat class="header-store accent">
            <product-table />
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
    </div>

    <v-snackbar v-model="snackbar" shaped color="primary" right top>
      <v-icon>{{ icon }}</v-icon> {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="s" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
      snackbar: false,
      snack: "Url  copied.",
      timeout: 2000,
      text: "",
      icon: "mdi-checkbox-marked-circle",
      searchedMovies: [],
      searchProducts: [],
      searchInput: "",
      dialog: false,
      images: [],
      show: false,
      products: [],
      size: "",
      user: "",
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
  // computed: {
  //   products() {
  //     return this.$store.getters.products;
  //   },
  // },
  // middleware: "auth",

  // async fetch() {
  //   if(this.searchInput === ''){
  //     await this.getMovies();
  //     await this.getProducts();
  //     return
  //   }
  //   await this.searchMovies()
  //   await this.searchProducts()
  // },

  created() {
    this.readData();
  },
  // mounted() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user);
  //     this.user = user

  //     if(!this.user) {
  //       this.$router.push('/auth/signin')
  //     }
  //   })
  // },

  layout: "admin",

  methods: {
    initialize() {
      this.products = [];
    },
    shareUrl() {
      const uid = sessionStorage.getItem("user_id");
      const name = sessionStorage.getItem("shop_name");
      console.log(uid);
      var link = document.location.origin + "/stores" + `/${name}/`;
      console.log(link);
      const share_link = link;
      console.log(share_link);
      this.$copyText(share_link).then(() => {
        this.text = "URL successfully copied to clipboard!";
        this.snackbar = true;
      });
    },

    // async getProducts() {
    //   getMovies()

    //   var productsRef = await firebase.firestore().collection("products");

    //     productsRef.onSnapshot((snap) => {
    //       this.size = snap.size
    //       console.log(this.size);
    //       this.products = [];
    //       snap.forEach((doc) => {
    //         var product = doc.data();
    //         product.id = doc.id;
    //         this.products.push(product);
    //       });
    //     });
    //   },

    //   const data = axios.get('https://api.themoviedb.org/3/product/now_playing?api_key=f63c91664f4898d609ca0a78c351fb36&language=en-US&page=1'
    //   )
    //   eslint-disable-next-line no-unused-vars
    //   const result = await data
    //   result.data.results.forEach(product => {
    //     this.products.push(product)

    //   })
    //   // eslint-disable-next-line no-console
    //   console.log('hi')
    // },
    // async searchMovies() {
    //   db.collection('products').where('name', '==', this.searchInput).get().then((snap) => {
    //     this.products = [];
    //     snap.forEach((doc) => {
    //       var product = doc.data();
    //       product.id = doc.id;
    //       this.products.push(product);
    //     });

    //   })

    // },

    async readData() {
      //   db.collection("desserts2").get().then((querySnapshot) =>{
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, "=>",doc.data());
      //     this.products = doc.data();
      //     this.products.push(doc.data())
      //   })
      // })

      var productsRef = await firebase.firestore().collection("products");

      const uid = sessionStorage.getItem("user_id");

      productsRef.where("userId", "==", uid).onSnapshot((snap) => {
        this.size = snap.size;
        this.products = [];
        snap.forEach((doc) => {
          var product = doc.data();
          product.id = doc.id;
          this.products.push(product);
        });
      });
    },

    // async save() {
    //     const product = {}
    //     product.name = this.product.name
    // },

    clearSearch() {
      this.searchInput = "";
      this.searchedMovies = [];
    },

    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
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
}
.card-subtitle {
  //  background: radial-gradient(#fff, #d1dbec);
  background: radial-gradient(rgb(241, 241, 241), #d1dbec);
}
a {
  text-decoration: none;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
