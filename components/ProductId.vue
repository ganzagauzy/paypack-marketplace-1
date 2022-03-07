<template>
  <div>
    <div class="py-5">
      <v-card>
        <v-toolbar flat color="#d1dbec">
          <v-toolbar-title class="">
            <nuxt-link to="/products">Product</nuxt-link>-{{
              $route.params.productid
            }}
          </v-toolbar-title>

          <v-spacer></v-spacer>

          


          
            
              <v-btn @click="onCopy" color="" v-bind="attrs" v-on="on" dark>
                Copy Url
              </v-btn>
        </v-toolbar>

        <v-tabs color="dark">
          <v-tab>
            <v-icon left> </v-icon>
            Orders
          </v-tab>

          <v-tab>
            <v-icon left> </v-icon>
            Customise
          </v-tab>
          <v-tab>
            <v-icon left> </v-icon>
            Delivery
          </v-tab>
          <v-tab>
            <v-icon left> </v-icon>
            After Purchase
          </v-tab>

          <!-- tab1 start -->
          <v-tab-item class="py-5">
            <v-row>
              <v-col>
                <v-row>
                  <v-col md="">
                    <div class="text-cetern">
                      <v-menu
                        v-model="menu5"
                        :close-on-content-click="false"
                        :nudge-width="200"
                        offset-y
                      >
                        <template v-slot:activator="{ on , attrs }">
                          <v-btn
                            color=""
                            style="text-transform: none"
                            right
                            v-bind="attrs"
                            v-on="on"
                          >
                            Filter
                          </v-btn>
                        </template>

                        <v-card>
                          <div class="py-5 px-5">
                            Status
                            <v-select
                              :items="items"
                              label=""
                              dense
                              outlined
                            ></v-select>
                            Order Date Delivery Date
                            <v-select
                              :items="items1"
                              label=""
                              dense
                              outlined
                            ></v-select>
                          </div>

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text @click="menu = false"> Reset </v-btn>
                            <v-btn
                              color="#d1dbec"
                              style="text-transform: none"
                              @click="menu = false"
                            >
                              Filter
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-menu>
                    </div>
                  </v-col>
                  <v-col md="6" cols="12"> </v-col>
                  <v-spacer></v-spacer>
                  <v-col md="">
                    <v-btn style="text-transform: none">Export</v-btn>
                  </v-col>
                </v-row>
                <div class="bottom">
                  <h4 class="text-center">No orders yet</h4>
                  <p class="px-5">
                    This is where you'll see and manage orders as they come in.
                  </p>
                </div>
              </v-col>

              <v-col cols="12" md="6" class="bg-dark">
                <div class="px-5 py-16">
                  <p>Unit solid</p>
                  {{ movie.vote_average }}
                  <p class="py-5">Revenue</p>
                  RWF {{ movie.revenue }}

                  <div
                    v-for="(product, index) in products"
                    :key="index"
                    class="movie"
                  >
                    <p>{{ product.id }}</p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-tab-item>
          <!-- tab1 end -->

          <!-- tab3 start -->
          <v-tab-item class="py-5">
            <v-row>
              <v-col cols="12" sm="6" md="7">
                <v-card
                  id="app"
                  :style="{
                    backgroundColor: prodBackgroundColor,
                  }"
                >
                  <div class="rounded-circle">
                    <v-btn>
                      <!-- <v-icon>mdi-palette</v-icon> -->
                      <input
                        type="color"
                        name=""
                        style="border-radius: 50%"
                        id=""
                        class="rounded-circle"
                        v-model="prodBackgroundColor"
                      />
                    </v-btn>
                  </div>

                  <!-- <v-img

                    max-height="250"
                    max-width="350"
                    contain
                    :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`"
                  ></v-img> -->

                  <v-carousel
                    :show-arrows="true"
                    hide-delimiters
                    v-for="(product, index) in products"
                    :key="index"
                  >
                    <v-carousel-item
                      class="center"
                      v-for="(image, i) in product.images"
                      :key="i"
                      :aspect-ratio="16 / 9"
                      :src="`${image}`"
                      max-height="400"
                      max-width="400"
                      cover
                    ></v-carousel-item>
                  </v-carousel>

                  <!-- <div class="movie-img py-16 w-25">
                  <img :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt="">
                </div> -->
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="5">
                <v-card>
                  <v-container>
                    <h4>Description</h4>
                    <br />
                    <div
                      v-for="(product, index) in products"
                      :key="index"
                      class="movie"
                    >
                      <!-- <p>{{ product.id}}</p> -->
                      <article class="mb-0" v-html="product.description"></article>
                    </div>

                    <div class="py-5">
                      <h4>Sharable Url</h4>
                      <p>{{ urlToCopy }}</p>

                      <v-btn @click="getUrl" color="#d1dbec"> Get </v-btn>
                      <v-btn @click="onCopy" color="#d1dbec"> Copy </v-btn>
                    </div>

                    <!-- <div>
                      <v-container class="px-0" fluid>
                        <h4>Status</h4>

                        <v-switch
                          v-model="switch1"
                          :label="`Switch 1: ${switch1.toString()}`"
                        ></v-switch>
                      </v-container>
                    </div> -->
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <!-- tab3 end -->

          <!-- tab4 start -->
          <v-tab-item class="py-5">
            <v-row class="py-5">
              <v-card class="py-5 px-5">
                <v-container>
                  <h4>Delivery Fields</h4>
                  <v-container fluid>
                    <v-row align="center">
                      <v-col cols="6">
                        <v-subheader>
                          <v-icon left>mdi-map-marker</v-icon>Delivery Address
                        </v-subheader>
                      </v-col>
                      <v-col cols="6">
                        <v-select
                          v-model="e1"
                          :items="states"
                          menu-props="auto"
                          label="Select"
                          hide-details
                          single-line
                        ></v-select>
                      </v-col>
                      <v-col cols="6">
                        <v-subheader>
                          <v-icon left>mdi-note</v-icon>Delivery Note
                        </v-subheader>
                      </v-col>
                      <v-col cols="6">
                        <v-select
                          v-model="e2"
                          :items="states"
                          disabled
                          menu-props="auto"
                          hide-details
                          label="Select"
                          single-line
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-container>
              </v-card>
            </v-row>
          </v-tab-item>
          <!-- tab4 end -->

          <!-- tab5 start -->
          <v-tab-item class="py-5">
            <v-row class="py-5">
              <v-card class="py-5 px-5">
                <v-row>
                  <v-col cols="12" sm="10" md="10">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col cols="12" sm="2" md="2">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="" v-bind="attrs" v-on="on">
                          mdi-map
                        </v-icon>
                      </template>
                      <span>Tooltip11</span>
                    </v-tooltip>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="10" md="10">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col cols="12" sm="2" md="2">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="" v-bind="attrs" v-on="on">
                          mdi-map
                        </v-icon>
                      </template>
                      <span>Tooltip2222</span>
                    </v-tooltip>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="10" md="10">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <div
                      v-for="(product, index) in products"
                      :key="index"
                      class="movie"
                    >
                      <p>{{ product.id }}</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col cols="12" sm="2" md="2">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="" v-bind="attrs" v-on="on">
                          mdi-map
                        </v-icon>
                      </template>
                      <span>Tooltip333</span>
                    </v-tooltip>
                  </v-col>
                </v-row>

                <v-btn class="py-5" color="#d1dbec"> Edit </v-btn>
              </v-card>
            </v-row>
          </v-tab-item>
          <!-- tab5 end -->
        </v-tabs>
      </v-card>
    </div>
    <v-snackbar v-model="snackbar" shaped color="success" right top>
      <v-icon>{{ icon }}</v-icon> {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="success" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../plugins/firebase";
import "firebase/compat/storage";
import { onSnapshot } from "@firebase/firestore";

export default {
  data: () => ({
    //snackbar
    snackbar: false,

    timeout: 2000,
    icon: "mdi-checkbox-marked-circle",

    prodBackgroundColor: "#111",
    urlToCopy: "",

    movie: "",
    products: [],

    product: "",
    dialog: false,
    dialog1: false,
    // crud table
    dialogDelete: false,
    image: null,
    uploading: false,
    saveDate: false,
    image_name: "Please, select image to upload",
    images: [],
    is_submitting: false,
    e1: "Florida",
    e2: "Texas",
    e3: null,
    e4: null,

    menu5: false,

    //date
    formData: {
      eventtimeSpecific: new Date(),
    },

    //selection
    items: [
      "Show all",
      "Order delivered",
      "Order not delivered",
      "Order cancelled",
    ],
    items1: ["All the time", "Specfic time"],

    // drop menu
    fav: true,
    menu: false,
    message: false,
    hints: true,

    headers: [
      {
        text: "Product",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Price(Rwf)", value: "calories" },
      { text: "In Stock", value: "fat" },
      { text: "Min Order", value: "carbs" },
      { text: "Max Order", value: "protein" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      images_url: [],
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      images_url: [],
    },

    switch1: true,

    width: 100,

    currentTheme: localStorage.getItem("theme-color"),

    menus: [{ title: "Copy" }, { title: "Archive" }, { title: "Delete" }],

    fav: true,
    menu: false,
    message: false,
    hints: true,
    snackbar: false,

    states: ["Alabama", "Alaska"],

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),

  
  head() {
    return {
      title: this.product.name,
    };
  },
  fetchDelay: 1000,

  // crud computed
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  //date mounted
  mounted() {
    const today = new Date();
    this.formData.eventtimeSpecific.setHours(
      today.getHours(),
      today.getMinutes(),
      0,
      0
    );
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.readSingleData();
  },

  methods: {
    async readSingleData() {
      const id = this.$route.params.productid;
      console.log(id);
      var docRef = await db.collection("products").doc(id);

      onSnapshot(docRef, (doc) => {
        if (doc.exists) {
          this.products = [];
          var product = doc.data();
          product.id = doc.id;
          this.products.push(product);
          console.log(product);

          console.log("Document data:", doc.data());
          console.log("Document data:", doc.id);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        onsole.log("Error getting document:", error);
      });
    },

    //Copy
    onCopy() {
      const P_id = this.$route.params.productid;
      const name = sessionStorage.getItem("shop_name");
      var link = document.location.origin + "/stores" + `/${name}`;
      console.log(link);
      const share_link = link + `/${P_id}/`;
      console.log(share_link);
      this.$copyText(share_link).then(() => {
        this.text = "URL successfully copied to clipboard!";
        this.snackbar = true;
      });
    },

    // get url to copy
    getUrl() {
      const P_id = this.$route.params.productid;
      const uid = sessionStorage.getItem("user_id");
      var link = document.location.origin + "/stores" + `/${uid}`;
      console.log(link);
      const share_link = link + `/${P_id}/`;
      console.log(share_link);
      this.urlToCopy = share_link;
    },

    colorChanged(e) {
      console.log(e);
    },
    initialize() {
      this.products = [];
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
.center {
  /* padding-left: 15%; */
  padding: 10% 15%;
}
.theme-options {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  padding: 20px 0;
}
.p1 {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 2px 10px;
  border: 1px solid #fff;
  display: inline-block;
  opacity: 0.5;
}
.p1.active {
  opacity: 1;
}
a {
  text-decoration: none;
}

.search {
  display: flex;
  input {
    max-width: 350px;
    width: 100%;
    color: #111;
    padding: 5px 5px;
    font-size: 14px;
    border-bottom: 1px solid #111;
  }
}
.bg-dark {
  background: rgb(241, 241, 241);
}
.bottom {
  padding-top: 55%;
}
.rounded-circle {
  padding: 3px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
}
</style>

