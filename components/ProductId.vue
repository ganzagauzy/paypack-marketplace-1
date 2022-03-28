<template>
  <div class="header-store accent">
    <div class="py-5 header-store accent">
      <v-card class="header-store accent" color="#111">
        <v-toolbar flat color="#d1dbec">
          <v-toolbar-title class="">
            <nuxt-link to="/products">Product</nuxt-link>-{{
              $route.params.productid
            }}
          </v-toolbar-title>

          <v-spacer></v-spacer>

          


          
            
              <v-btn @click="onCopy" color=""  dark>
                Copy Url
              </v-btn>
        </v-toolbar>

        <v-tabs class="header-store accent" color="" >
          

          <v-tab class="">
            <v-icon left> </v-icon>
            Customise
          </v-tab>
          <v-tab class="">
            <v-icon left> </v-icon>
            Delivery
          </v-tab>
          
          <v-tab-item class="py-5 header-store accent">
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
                      contain
                    ></v-carousel-item>
                  </v-carousel>

                  <!-- <div class="movie-img py-16 w-25">
                  <img :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt="">
                </div> -->
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="5 header-store accent">
                <v-card class="header-store accent">
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
          <v-tab-item class="py-5 header-store accent">
            <v-row class="py-5 header-store accent">
              <v-card class="py-5 px-5 header-store accent">
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
         
          <!-- tab5 end -->
        </v-tabs>
      </v-card>
    </div>
    <v-snackbar v-model="snackbar" shaped color="primary" right top>
      <v-icon>{{ icon }}</v-icon> {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="" text v-bind="attrs" @click="snackbar = false">
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
    switch1: true,

    width: 100,
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
      // console.log(id);
      var docRef = await db.collection("products").doc(id);

      onSnapshot(docRef, (doc) => {
        if (doc.exists) {
          this.products = [];
          var product = doc.data();
          product.id = doc.id;
          this.products.push(product);
          console.log(product);

          // console.log("Document data:", doc.data());
          // console.log("Document data:", doc.id);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
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
a {
  color: #111;
}
</style>

