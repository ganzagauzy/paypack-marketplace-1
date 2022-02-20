<template>
  <div>

  <div class="fixed-bar top">
    <div class="fixed-bar">
            <v-system-bar  class=""
                      window
                      dark
                      color=""
                    >
                      <v-icon>mdi-dropbox </v-icon>
                      <span>Products &mdash;{{ size }}</span>
                      <v-spacer></v-spacer>
                      <!-- <v-icon>mdi-minus</v-icon>
                      <v-icon>mdi-checkbox-blank-outline</v-icon>
                      <v-icon>mdi-close</v-icon> -->
                    </v-system-bar>

                    <v-row class=""
                   
                    color="#d1dbec"
                    >
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">

                      </v-col>
                      
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

  

  <v-card>
    <v-toolbar
      
      fixed
      color="#d1dbec"
      
    >
      <v-toolbar-title>MY PRODUCTS</v-toolbar-title>
    </v-toolbar>

    <v-tabs >
      <v-tab>
        <v-icon left>
          mdi-grid
        </v-icon>
        
      </v-tab>
      
    
      <v-tab-item>
        <v-card flat>
          <div class="home">
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

              <!-- <div  id="movie-grid" class="movies-grid">
                  <div v-for="(product, index) in products" :key="index" class="movie">
                    <div class="movie-img"> -->
                      <!-- <img src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt=""> -->
                      <!-- <img :src="product.images[0]" alt=""> -->
                      <!-- <p class="review">{{ movie.vote_average }}</p> -->
                      <!-- <p class="overview">{{ movie.overview }}</p> -->
                    <!-- </div>
                    
                  </div>
              </div> -->



     

              <!-- Loading -->
              <!-- <Loading v-if="$fetchState.pending" /> -->

              

              <!-- Movies -->
              <div  class="container movies">
                <!-- Searched movies -->
                
                <!-- Now streaming -->
                <div  id="movie-grid" class="movies-grid">
                  <div v-for="(product, index) in products" :key="index" class="movie">
                    <NuxtLink  :to="{ name: 'stores-storeid-id', params: {id: product.id} }">
                      <v-hover v-slot="{ hover }">
                        <v-card
                      class="mx-auto"
                      color="grey lighten-4"
                      max-width="600"
                    >
                      <div class="movie-img">
                        <v-img
                        :aspect-ratio="16/14"
                        :src="product.images[0]"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal text-h3 white--text"
                            style="height: 100%;"
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
                      <p class="text-h6 px-2 py-1 font-weight-light blue--text mb-2">
                        {{ product.name.slice(0, 25) }}  <span v-if="product.name.length >25">...</span>
                      </p>
                          
                          
                       

                    </v-card>
                  </v-hover>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              

            </div>
        </v-card>
      </v-tab-item>
      
     
    </v-tabs>
  </v-card>







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
      size:'',
    };
  },
  computed: {
    id() {
      return this.$route.params.storeid;
    },
  },
  mounted() {
    this.fetchProducts();
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
  },
  layout: '',
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

