<template>
  <div>

  <div class="fixed-bar top">
    <div class="fixed-bar">
            <v-system-bar justify="end" class=""
                      window
                      dark
                      color=""
                    >
                      <v-icon>mdi-dropbox </v-icon>
                      <span>Products &mdash;5</span>
                      <v-spacer></v-spacer>
                      <!-- <v-icon>mdi-minus</v-icon>
                      <v-icon>mdi-checkbox-blank-outline</v-icon>
                      <v-icon>mdi-close</v-icon> -->
                    </v-system-bar>

                    <v-row class=""
                    justify=""
                    color="#d1dbec"
                    >
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">

                      </v-col>
                      <v-col
                        >

                          <v-card
                              color="#d1dbec"
                              flat
                              height="45px"
                              tile
                            >
                              <v-toolbar dense
                              >
                                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>

                                <v-toolbar-title>Title</v-toolbar-title> -->
                                <v-btn icon>
                                  <v-icon>mdi-filter-menu</v-icon>
                                </v-btn>

                                <v-spacer></v-spacer>

                                <!-- <v-btn icon>
                                  <v-icon>mdi-magnify</v-icon>
                                </v-btn>

                                <v-btn icon>
                                  <v-icon>mdi-heart</v-icon>
                                </v-btn> -->

                                <v-row justify="end">
                                  <v-dialog
                                    v-model="dialog"

                                    max-width="400px"
                                  >
                                    <template v-slot:activator="{ on, attrs }">
                                      <v-btn
                                        color="dark"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                      >
                                        <v-icon>mdi-plus</v-icon>New Product
                                      </v-btn>
                                    </template>

                                      <v-card>
                                        <v-card-title
                                        color="#d1dbec"
                                        dark>
                                          <span class="text">New Product</span>
                                        </v-card-title>
                                        <v-card-text>
                                          <v-container>
                                            <v-row>
                                              <v-col

                                              >
                                                <v-text-field

                                                  label=" Product name*"
                                                  v-model="product.name"
                                                  required
                                                ></v-text-field>
                                              </v-col>
                                              {{product.name}}
                                              <!-- <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                              >
                                                <v-text-field
                                                  label=""
                                                  hint="example of helper text only on focus"
                                                ></v-text-field>
                                              </v-col> -->


                                              <v-col cols="12">
                                                <v-textarea
                                                  clearable
                                                  clear-icon="mdi-close-circle"
                                                  label="Description*"
                                                  v-model="product.description"
                                                  type="text"
                                                  required
                                                ></v-textarea>
                                                {{product.description}}
                                              </v-col>
                                                <v-col
                                                cols="12"

                                              >
                                                <v-select
                                                  :items="['Rwf', 'SSD']"
                                                  label="Currency*"
                                                  v-model="product.currency"
                                                  required
                                                ></v-select>
                                              </v-col>
                                              {{product.currency}}

                                              <v-col
                                                cols="12"

                                              >
                                                <v-autocomplete
                                                  :items="['Limited', 'Unlimited', ]"
                                                  label="Quantity"
                                                  v-model="product.quantity"
                                                  multiple
                                                ></v-autocomplete>
                                              </v-col>
                                              {{product.quantity}}
                                              <v-col

                                              >
                                                <v-text-field
                                                  label="Price*"
                                                  v-model="product.price"
                                                  type="number"


                                                  required
                                                ></v-text-field>
                                              </v-col>
                                              {{product.price}}

                                              <v-col cols="12">
                                                <p class="text-center">Upload Pictures (Images)</p>

                                                <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">

                                                  <vue-upload-multiple-image
                                                    @upload-success="uploadImageSuccess"
                                                    @before-remove="beforeRemove"
                                                    @edit-image="editImage"
                                                    :data-images="images"
                                                    idUpload="myIdUpload"
                                                    editUpload="myIdEdit"
                                                    primary-text="Default"
                                                    :max-image=20
                                                    browse-text="Browse picture(s)"
                                                    drag-text="Drag pictures"
                                                    mark-is-primary-text="Set as default"
                                                    popup-text="This image will be displayed as default"

                                                    ></vue-upload-multiple-image>
                                                </div>
                                              </v-col>

                                              <!-- <v-col cols="12">
                                                <v-file-input
                                                  label="File input*"
                                                  filled
                                                  prepend-icon="mdi-camera"
                                                  required
                                                ></v-file-input>
                                              </v-col> -->
                                            </v-row>
                                          </v-container>
                                          <small class="pt-5 text-center">*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                          <v-spacer></v-spacer>
                                          <v-btn
                                            color="secondary"
                                            text
                                            @click="dialog = false"
                                          >
                                            Close
                                          </v-btn>
                                          <v-btn
                                            color="dark"
                                            text
                                            @click="save"

                                          >


                                            Save




                                          </v-btn>
                                        </v-card-actions>
                                      </v-card>

                                  </v-dialog>
                                </v-row>




                                <!-- <v-btn
                                dark
                                color="dark"
                                to="/newproducts" nuxt>
                                  <v-icon>mdi-plus</v-icon>New Product
                                </v-btn> -->
                              </v-toolbar>
                            </v-card>

                      </v-col>
                    </v-row>
    </div>

  </div>

  <div class="home">
    <!-- Hero -->
    <Hero />



    <!-- search box -->
    <div class="container search">
      <input v-model.lazy="searchInput" type="text" placeholder="Search" @keyup.enter="$fetch">
      <v-btn icon v-show="searchInput !='' " class="button" @click="clearSearch"><v-icon>mdi-close</v-icon></v-btn>
    </div>

    <!-- Loading -->
    <Loading v-if="$fetchState.pending" />

    <!-- Movies -->
    <div v-else class="container movies">
      <!-- Searched movies -->
      <div v-if="searchInput !== ''" id="movie-grid" class="movies-grid">
        <div v-for="(movie, index) in searchedMovies" :key="index" class="movie">
          <div class="movie-img">
            <!-- <img src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt=""> -->
            <img :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt="">
            <p class="review">{{ movie.vote_average }}</p>
            <!-- <p class="overview">{{ movie.overview }}</p> -->
          </div>
          <div class="info">
            <p class="title h6">{{ movie.title.slice(0, 25) }}  <span v-if="movie.title.length >25">...</span>
            </p>
            <!-- <p class="release">
              Released:
              {{
                new Date(movie.release_date).toLocaleString('en-us', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
            </p> -->
            <v-btn class="py-3"
                color=""
                width="100%"
                 :to="{ name: 'products-movieid', params: {movieid: movie.id} }" nuxt>
                  Read More
              </v-btn>
            <!-- <NuxtLink class="button button-light" :to= "`/products/${movie.id}`">
              Get More Info
            </NuxtLink> -->
          </div>
        </div>
      </div>
      <!-- Now streaming -->
      <div v-else id="movie-grid" class="movies-grid">
        <div v-for="(movie, index) in movies" :key="index" class="movie">
          <div class="movie-img">
            <!-- <img src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt=""> -->
            <img :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt="">
            <p class="review">{{ movie.vote_average }}</p>
            <!-- <p class="overview">{{ movie.overview }}</p> -->
          </div>
          <div class="info1">
            <p class="title text-sm-h6">{{ movie.title.slice(0, 25) }}  <span v-if="movie.title.length >25">...</span>
            </p>
            <!-- <p class="release">
              Released:
              {{
                new Date(movie.release_date).toLocaleString('en-us', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
            </p> -->

             <v-btn class="py-3 top"
                color=""
                width="100%"
                :to="{ name: 'products-movieid', params: {movieid: movie.id} }" nuxt>
                  Read More
              </v-btn>

            <!-- <NuxtLink class="button button-light" :to="{ name: 'movies-movieid', params: {movieid: movie.id} }">
              Get More Info
            </NuxtLink> -->
          </div>
        </div>
      </div>
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







  </div>
</template>


<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      movies: [],
      searchedMovies: [],
      searchInput: '',
      dialog: false,
      images: [],
      show: false,
      products: [],
      product: {
        name: '',
        description: '',
      },

    }
  },

  components: {
    VueUploadMultipleImage
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  async fetch() {
    if(this.searchInput === ''){
      await this.getMovies();
      return
    }
    await this.searchMovies()
  },

  methods: {
    async getMovies() {
      const data = axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f63c91664f4898d609ca0a78c351fb36&language=en-US&page=1'
      )
      // eslint-disable-next-line no-unused-vars
      const result = await data
      result.data.results.forEach(movie => {
        this.movies.push(movie)

      })
      // eslint-disable-next-line no-console
      console.log('hi')
    },
    async searchMovies() {
      const data = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=f63c91664f4898d609ca0a78c351fb36&language=en-US&page=1&query=${this.searchInput}`
      )
      const result = await data
       result.data.results.forEach(movie => {
        this.searchedMovies.push(movie)

      })
      // eslint-disable-next-line no-console
      // console.log(this.searchedMovies)
    },

    async save() {
        const product = {}
        product.name = this.product.name
    },

    clearSearch() {
      this.searchInput = ''
      this.searchedMovies = []
    },

    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },




  },
}
</script>

<style lang="scss" >

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

</style>
















  // export default {
  //   data: () => ({
  //     isLoading: false,
  //     items: [],
  //     model: null,
  //     search: null,
  //     tab: null,
  //   }),

  //   watch: {
  //     model (val) {
  //       if (val != null) this.tab = 0
  //       else this.tab = null
  //     },
  //     search (val) {
  //       // Items have already been loaded
  //       if (this.items.length > 0) return

  //       this.isLoading = true

  //       // Lazily load input items
  //       fetch('https://api.coingecko.com/api/v3/coins/list')
  //         .then(res => res.clone().json())
  //         .then(res => {
  //           this.items = res
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         })
  //         .finally(() => (this.isLoading = false))
  //     },
  //   },
  // }
