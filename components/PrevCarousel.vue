<template>
  <div class="">
    <!-- {{$route.params.movieid}} -->

    <v-row>
      <v-col cols="" sm="12" md="7" class="">
        <v-card
          id="app"
          :style="{
            backgroundColor: prodBackgroundColor,
          }"
        >
          <!-- <v-card id="app" v-bind:class="currentTheme"> -->
          <div class="py-2 pb-5 px-3">
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
          </div>

          <div class="py-5 carousel">
            <v-carousel
              :show-arrows="true"
              hide-delimiters
              v-for="(product, index) in products"
              :key="index"
            >
              <v-carousel-item
                v-for="(image, i) in product.images"
                :key="i"
                :src="`${image}`"
                max-height="400"
                max-width="400"
                class="move-right justify-center"
                cover
              ></v-carousel-item>
            </v-carousel>
          </div>
        </v-card>
      </v-col>

      <v-col class="" md="5" cols="12">
        <div v-for="(product, index) in products" :key="index" class="">
          <p>{{ product.description }}</p>
        </div>
        <v-btn
          :style="{
            backgroundColor: prodBackgroundColor,
          }"
          class="px-16"
          >Buy Now</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "firebase/compat/firestore";
import db from "../plugins/firebase";
import "firebase/compat/storage";
import "firebase/compat/auth";
import { onSnapshot } from "@firebase/firestore";

import { Photoshop } from "vue-color";
export default {
  data() {
    return {
      products: [],

      product: "",

      prodBackgroundColor: "#111",

      menu: false,
      currentTheme: localStorage.getItem("theme-color"),
    };
  },
  components: {},

  created() {
    this.initialize();
    this.readSingleData();
  },

  methods: {
    switchTheme(theme) {
      localStorage.setItem("theme-color", theme);
      this.currentTheme = localStorage.getItem("theme-color");
    },

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
      });
    },

    initialize() {
      this.products = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  .move-right {
    display: flex;
    @media (min-width: 500px) {
    }
    @media (min-width: 750px) {
      padding-left: 10px;
    }
    @media (min-width: 1100px) {
      padding-left: 5px;
    }
  }
}
</style>
