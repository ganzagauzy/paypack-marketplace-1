<template>
  <div>
    <div class="py-5">
      <v-card>
        <v-toolbar flat color="#d1dbec">
          <v-toolbar-title class="">
            <nuxt-link to="/products">Product</nuxt-link>-{{
              $route.params.movieid
            }}
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color=""
                fab
                nuxt
                :to="{
                  name: 'products-movieid-publish',
                  
                }"
                exact
                v-bind="attrs"
                v-on="on"
                icon
              >
                <v-icon>mdi-publish</v-icon>
              </v-btn>
            </template>
            <span>Publish</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color=""
                fab
                nuxt
                :to="{
                  name: 'products-movieid-preview',
                  
                }"
                exact
                v-bind="attrs"
                v-on="on"
                icon
              >
                <v-icon>mdi-eye</v-icon>
              </v-btn>
            </template>
            <span>Preview</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn @click="onCopy"  color="" v-bind="attrs" v-on="on" icon>

                <v-snackbar
                  v-model="snackbar"
                  :timeout="timeout"
                  :value="true"
                  absolute
                  left
                  shaped

                >
                  {{ snack }}


                </v-snackbar>



                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </template>
            <span>Copy Link</span>
          </v-tooltip>

          <!-- <v-btn icon>
              <v-icon>mdi-eye</v-icon>
            </v-btn>

            <v-btn icon>

            </v-btn> -->
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" color="" icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(menu, index) in menus" :key="index" link>
                <v-list-item-title class="cursor-pointer">{{
                  menu.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->
        </v-toolbar>

        <v-tabs color="dark">
          <v-tab>
            <v-icon left> </v-icon>
            Orders
          </v-tab>

          <v-tab>
            <v-icon left> </v-icon>
            Inventory
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
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color=""
                            style="text-transform:none"

                            right
                            v-bind="attrs"
                            v-on="on"
                          >
                             Filter
                          </v-btn>

                          <!-- <v-btn
                            style="text-transform:none"
                            v-bind="attrs"
                            v-on="on"
                          >
                            Filter
                            <v-icon

                              right
                              small
                            >
                              mdi-menu-down
                            </v-icon>
                          </v-btn> -->


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
                            Order Date

                            Delivery Date
                             <v-select
                              :items="items1"
                              label=""
                              dense
                              outlined
                            ></v-select>
                          </div>


                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              text
                              @click="menu = false"
                            >
                              Reset
                            </v-btn>
                            <v-btn
                              color="#d1dbec"

                              style="text-transform:none"

                              @click="menu = false"
                            >
                              Filter
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-menu>
                    </div>






                  </v-col>
                  <v-col md="6" cols="12">
                    <!-- <div class="search">
                      <input
                        v-model.lazy="searchInput"
                        type="text"
                        placeholder="Search"
                        @keyup.enter="$fetch"
                      />
                      <v-btn
                        icon
                        v-show="searchInput != ''"
                        class="button"
                        @click="clearSearch"
                        ><v-icon>mdi-close</v-icon></v-btn
                      >
                    </div> -->
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col md="">
                    <v-btn
                    style="text-transform:none">Export</v-btn>
                  </v-col>
                </v-row>
                <div class="bottom">
                  <h4 class="text-center">No orders yet</h4>
                  <p class="px-5">This is where you'll see and manage orders as they come in.</p>
                </div>
              </v-col>

              <v-col cols="12" md="6" class="bg-dark">
                <div class="px-5 py-16">
                 <p> Unit solid</p>
                  {{ movie.vote_average }}
                  <p class="py-5">
                    Revenue
                  </p>
                  RWF {{movie.revenue}}

                  <div v-for="(product, index) in products" :key="index" class="movie">
                    <p>{{ product.id}}</p>
                  </div>

                </div>
              </v-col>
            </v-row>
          </v-tab-item>
          <!-- tab1 end -->

          <!-- tab2 start -->
          <v-tab-item class="py-5">
            <v-row>
              <v-col>
                <v-card color="">
                  <v-container class="py-5 px-5">
                    <v-row>
                      <v-col>
                        <v-data-table
                          :headers="headers"
                          :items="desserts"
                          sort-by="calories"
                          class="elevation-1"
                        >
                          <template v-slot:top>
                            <v-toolbar flat>
                              <v-toolbar-title>Overview</v-toolbar-title>
                              <v-divider
                                class="mx-4"
                                inset
                                vertical
                              ></v-divider>
                              <v-spacer></v-spacer>
                              <v-dialog v-model="dialog" max-width="400px">
                                <!-- <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    color="#d1dbec"

                                    class="mb-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    New Item
                                  </v-btn>
                                </template> -->
                                <v-card>
                                  <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                  </v-card-title>

                                  <v-card-text>
                                    <v-container>
                                      <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                          <v-text-field
                                            v-model="editedItem.name"
                                            label="Dessert name"
                                          ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                          <v-text-field
                                            v-model="editedItem.calories"
                                            label="Calories"
                                          ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                          <v-text-field
                                            v-model="editedItem.fat"
                                            label="Fat (g)"
                                          ></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="12">
                                          <div class="form-group col-lg-12">
                                            <label>Browse Here</label>
                                            <div class="d-flex">
                                              <input
                                                type="file"
                                                accept="image/*"
                                                @change="saveImage($event)"
                                                class="cursor-pointer"
                                              />
                                            </div>
                                          </div>

                                          <div
                                            class="col-lg-12 mb-4"
                                            v-if="images && images.length > 0"
                                          >
                                            <ul
                                              class="attached-photos p-30 bg-gray d-table list-unstyled"
                                            >
                                              <li
                                                class="attached-photo mt-sm-30"
                                                v-for="image in images"
                                                :key="image.id"
                                              >
                                                <img
                                                  :src="image.image"
                                                  alt="image"
                                                  style="
                                                    height: 177px;
                                                    min-width: 150px;
                                                  "
                                                />
                                                <span
                                                  style="cursor: pointer"
                                                  @click="removeImage(image.id)"
                                                  ><i
                                                    class="fa fa-times text-danger"
                                                  ></i
                                                ></span>
                                              </li>
                                            </ul>
                                          </div>
                                        </v-col>

                                        <v-col cols="12" sm="6" md="4">
                                          <v-text-field
                                            v-model="editedItem.carbs"
                                            label="Carbs (g)"
                                          ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                          <v-text-field
                                            v-model="editedItem.protein"
                                            label="Protein (g)"
                                          ></v-text-field>
                                        </v-col>
                                      </v-row>
                                    </v-container>
                                  </v-card-text>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="blue darken-1"
                                      text
                                      @click="close"
                                    >
                                      Cancel
                                    </v-btn>
                                    <v-btn
                                      color="blue darken-1"
                                      text
                                      @click="save"
                                    >
                                      Save
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                              <v-dialog
                                v-model="dialogDelete"
                                max-width="500px"
                              >
                                <v-card>
                                  <v-card-title class="text-h5"
                                    >Are you sure you want to delete this
                                    item?</v-card-title
                                  >
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="blue darken-1"
                                      text
                                      @click="closeDelete"
                                      >Cancel</v-btn
                                    >
                                    <v-btn
                                      color="blue darken-1"
                                      text
                                      @click="deleteItemConfirm"
                                      >OK</v-btn
                                    >
                                    <v-spacer></v-spacer>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-toolbar>
                          </template>
                          <template v-slot:item.actions="{ item }">
                            <v-icon small class="mr-2" @click="editItem(item)">
                              mdi-pencil
                            </v-icon>
                            <v-icon small @click="deleteItem(item)">
                              mdi-delete
                            </v-icon>
                          </template>
                          <template v-slot:no-data>
                            <v-btn color="primary" @click="initialize">
                              Reset
                            </v-btn>
                          </template>
                        </v-data-table>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <!-- tab2 end -->

          <!-- tab3 start -->
          <v-tab-item class="py-5">
            <v-row>
              <v-col cols="12" sm="6" md="7">
                <v-card id="app" v-bind:class="currentTheme">
                  <div class="py-2 px-3">
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-width="200"
                      offset-x
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="" v-bind="attrs" v-on="on">
                          <v-icon>mdi-palette</v-icon>
                        </v-btn>
                      </template>

                      <v-card color="#d1dbec">
                        <v-list>
                          <v-list-item>
                            <v-list-item-action>
                              <div class="theme-options">
                                <div
                                  id="theme-white"
                                  class="p1"
                                  v-bind:class="{
                                    active: currentTheme === 'theme-white',
                                  }"
                                  v-on:click="switchTheme('theme-white')"
                                  @click="menu = false"
                                ></div>

                                <div
                                  id="theme-blue"
                                  class="p1"
                                  v-bind:class="{
                                    active: currentTheme === 'theme-blue',
                                  }"
                                  v-on:click="switchTheme('theme-blue')"
                                  @click="menu = false"
                                ></div>

                                <div
                                  id="theme-orange"
                                  class="p1"
                                  v-bind:class="{
                                    active: currentTheme === 'theme-orange',
                                  }"
                                  v-on:click="switchTheme('theme-orange')"
                                  @click="menu = false"
                                ></div>

                                <div
                                  id="theme-purple"
                                  class="p1"
                                  v-bind:class="{
                                    active: currentTheme === 'theme-purple',
                                  }"
                                  v-on:click="switchTheme('theme-purple')"
                                  @click="menu = false"
                                ></div>
                                <div
                                  id="theme-green"
                                  class="p1"
                                  v-bind:class="{
                                    active: currentTheme === 'theme-green',
                                  }"
                                  v-on:click="switchTheme('theme-green')"
                                  @click="menu = false"
                                ></div>
                                <div
                                  id="theme-black"
                                  class="p1"
                                  v-bind:class="{
                                    active: currentTheme === 'theme-black',
                                  }"
                                  v-on:click="switchTheme('theme-black')"
                                  @click="menu = false"
                                ></div>

                                <!-- <div id="theme-blue" class="p1"></div>
                              <div id="theme-orange" class="p1"></div>
                              <div id="theme-purple" class="p1"></div>
                              <div id="theme-green" class="p1"></div>
                              <div id="theme-black" class="p1"></div> -->
                              </div>
                            </v-list-item-action>
                          </v-list-item>
                        </v-list>

                        <!-- <v-divider></v-divider> -->

                        <!-- <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                          text
                          @click="menu = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          color="primary"
                          text
                          @click="menu = false"
                        >
                          Save
                        </v-btn>
                      </v-card-actions> -->
                      </v-card>
                    </v-menu>
                  </div>

                  <!-- <v-img

                    max-height="250"
                    max-width="350"
                    contain
                    :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`"
                  ></v-img> -->

                  <v-carousel :show-arrows="true" hide-delimiters
                    v-for="(product, index) in products" :key="index"
                    >
                    <v-carousel-item
                      class="center"
                      v-for="(image, i) in product.images"
                      :key="i"
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
                    <div v-for="(product, index) in products" :key="index" class="movie">
                    <!-- <p>{{ product.id}}</p> -->
                    <p class="overview">{{ product.description }}</p>
                    
                  </div>
                    

                    <v-row class="py-5">
                      <v-dialog v-model="dialog1" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="#d1dbec" v-bind="attrs" v-on="on">
                            Edit
                          </v-btn>
                        </template>
                        <v-card >
                          <v-card-title>
                            <span class="text-h5">User Profile</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col>
                                  <v-textarea
                                    clearable
                                    clear-icon="mdi-close-circle"
                                    label="Text"
                                    value="This is clearable text."
                                  ></v-textarea>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog1 = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog1 = false"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>

                    <div class="py-5">
                      <h4>Sharable Url</h4>
                      <p>urltobecopied</p>
                      <v-btn color="#d1dbec"> Edit </v-btn>
                      <v-btn color="#d1dbec"> Copy </v-btn>
                    </div>

                    <div>
                      <v-container class="px-0" fluid>
                        <h4>Status</h4>

                        <v-switch
                          v-model="switch1"
                          :label="`Switch 1: ${switch1.toString()}`"
                        ></v-switch>
                      </v-container>
                    </div>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <!-- tab3 end -->

          <!-- tab4 start -->
          <v-tab-item class="py-5">
            <v-row  class="py-5">
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
            <v-row  class="py-5">
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
                    <div v-for="(product, index) in products" :key="index" class="movie">
                      <p>{{ product.id}}</p>
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
  </div>
</template>

<script>
import axios from "axios";

import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
import "firebase/compat/firestore";
import db from "../plugins/firebase";
import 'firebase/compat/storage'
import { onSnapshot } from '@firebase/firestore';

export default {
  data: () => ({

    //snackbar
    snackbar: false,
    snack: 'Url  copied.',
    timeout: 2000,



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
    formData:{
    eventtimeSpecific: new Date(),
   },

    //selection
    items: ['Show all', 'Order delivered', 'Order not delivered', 'Order cancelled'],
    items1: ['All the time', 'Specfic time',],

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

    states: ["Alabama", "Alaska"],

    images: [
      {
        src: "https://image.shutterstock.com/image-photo/pavia-italy-november-2-2020-600w-1918622864.jpg",
      },
      {
        src: "https://image.shutterstock.com/image-photo/special-boot-bad-weather-600w-1901795302.jpg",
      },
      {
        src: "https://image.shutterstock.com/image-photo/special-boot-bad-weather-600w-1902795302.jpg",
      },
      {
        src: "https://image.shutterstock.com/image-photo/special-boot-bad-weather-600w-1903795302.jpg",
      },
      {
        src: "https://image.shutterstock.com/image-photo/special-boot-bad-weather-600w-1904795302.jpg",
      },
      {
        src: "https://image.shutterstock.com/image-photo/special-boot-bad-weather-600w-1905795302.jpg",
      },
    ],

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),

  // async fetch() {
  //   await this.getSingleMovie();
  // },
  head() {
    return {
      title: this.movie.title,
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
  mounted () {
  const today = new Date()
  this.formData.eventtimeSpecific.setHours(today.getHours(), today.getMinutes(), 0, 0)
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
      //   db.collection("desserts2").get().then((querySnapshot) =>{
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, "=>",doc.data());
      //     this.products = doc.data();
      //     this.products.push(doc.data())
      //   })
      // })
      const id = this.$route.params.movieid
      console.log(id);
      var docRef = await db.collection("products").doc(id);

      onSnapshot(docRef, (doc) => {
          if (doc.exists) {
            this.products = [];
            var product = doc.data()
            product.id = doc.id
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

      this.$copyText("localhost:3000/published")
    },
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    },

    // async getSingleMovie() {
    //   const data = axios.get(
    //     `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=f63c91664f4898d609ca0a78c351fb36&language=en-US`
    //   );
    //   const result = await data;
    //   this.movie = result.data;
    // },

    switchTheme(theme) {
      localStorage.setItem("theme-color", theme);
      this.currentTheme = localStorage.getItem("theme-color");
    },

    // crud methods

    saveImage(e) {
      const image = e.target.files[0];
      this.image_name = image.name;
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        e.target.result;
        this.images.push({
          image: e.target.result,
          id: Date.now(),
          old: false,
          data: image,
        });
      };
    },
    removeImage(imageID) {
      const index = this.images.findIndex((data) => data.id === imageID);
      this.images.splice(index, 1);
    },

    initialize() {
      
      this.products = [];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },

  // clearSearch() {
  //   this.searchInput = ''
  //   this.searchedMovies = []
  // },

};
</script>

<style lang="scss">
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
#theme-white {
  background-color: #eee;
}
#theme-blue {
  background-color: #1e41c1;
}
#theme-orange {
  background-color: #b64b1e;
}
#theme-purple {
  background-color: #7852ae;
}
#theme-green {
  background-color: #5faf3b;
}
#theme-black {
  background-color: #111;
}

#app.theme-white {
  background-color: #eee;
}
#app.theme-blue {
  background-color: #1e41c1;
}
#app.theme-orange {
  background-color: #b64b1e;
}
#app.theme-purple {
  background-color: #7852ae;
}
#app.theme-green {
  background-color: #5faf3b;
}
#app.theme-black {
  background-color: #111;
}
a {
  text-decoration: none;
  color: #111;
}
nuxt-link {
  color: #111;
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
  padding-top:55%;
}

</style>

