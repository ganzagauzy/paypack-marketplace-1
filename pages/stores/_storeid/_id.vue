<template>
  <div>
    <v-container class="py-10">
      <div class="" v-for="(product, index) in products" :key="index">
        <v-btn
          :style="{ backgroundColor: prodBackgroundColor }"
          :to="{ name: 'stores-storeid', params: { storeid: product.shopname } }"
          dark
        >
          Back
        </v-btn>
        <h2 class="py-1">{{product.name}}</h2>
      </div>
      <v-row>
        <v-col cols="12" md="7">
          <v-card id="app" :style="{ backgroundColor: prodBackgroundColor }">
            <div class="py-2 pb-5 px-3">
              <div class="rounded-circle">
                <v-btn>
                  <input
                    type="color"
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
                  max-height="600"
                  max-width="600"
                  class="move-right justify-center"
                  contain
                ></v-carousel-item>
              </v-carousel>
            </div>
          </v-card>
        </v-col>
        <v-col md="5" cols="12">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="d-flex flex-column"
          >
            <div class="">
              <h4>Description</h4>
              <article class="mb-0" v-html="product.description"></article>
            </div>
            <div class="mb-4">
              <h4>Price</h4>
              {{ product.price }} {{ product.currency }}
            </div>
            <div class="mb-4">
              <h4>Size</h4>
              {{ product.size }} 
            </div>
            <div class="mb-4">
              <h4>Color</h4>
              {{ prodBackgroundColor }} 
            </div>
            <div class="mb-4">
              <h4>Quantity</h4>
              <small class="text-small"><v-icon @click="decrement" class="pb-1">mdi-minus</v-icon> <span class="text-h6">{{ nproducts }}</span>
               <v-icon @click="increment" class="pb-1">mdi-plus</v-icon></small> 
            </div>
            <!-- <div class="mb-1">
              <h4 class="mb-2">Quantity</h4>
              <v-text-field
                v-model="nproducts"
                type="number"
                outlined
                dense
              ></v-text-field>
            </div> -->
          </div>
          <div v-for="(product, index) in products"
                :key="'product'+index">
                
            <v-btn color="primary" elevation="0" block x-large class="mt-1"
            @click="addtocart(product)"
            >Add To Cart</v-btn>
          </div>
        </v-col>
      </v-row>
      <div>
        <v-snackbar v-model="snackbar" shaped color="primary" right top>
          <v-icon>{{ icon }}</v-icon> {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color=""
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-container>

    <!-- <div class="footer">
      <div class="col">Name and descriotion</div>
      <div class="col">contact</div>
      <div class="col">Paypack MArket Place</div>
    </div> -->
  </div>
</template>

<script>
import "firebase/compat/firestore";
import db from "../../../plugins/firebase";
import "firebase/compat/storage";
import "firebase/compat/auth";
import { onSnapshot } from "@firebase/firestore";

import { Photoshop } from "vue-color";
export default {
  head() {
    return {
      title: "Single product",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Single product page for PayPack Market Place",
        },
      ],
    };
  },

  data() {
    return {
      text: "",
      icon: "mdi-checkbox-marked-circle",
      snackbar: false,
      products: [],
      nproducts: "",
      product: "",

      prodBackgroundColor: "#111",
    };
  },
  components: {},

  created() {
    this.initialize();
    this.readSingleData();
  },

  methods: {
    async readSingleData() {
      const p_id = this.$route.params.id;
      console.log(p_id);
      var docRef = await db.collection("products").doc(p_id);

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
    addtocart(product) {
      product.nproducts  = this.nproducts
      this.$store.commit("fecthProduct", product);
      this.text = "Successfull Added to cart";
      this.snackbar = true;
    },
    decrement () {
      if (this.nproducts < 1) {
        this.nproducts = 1;
      }
      else {
        this.nproducts --;
      }
    },
    increment () {
      this.nproducts ++;
    },

    initialize() {
      this.products = [];
      this.nproducts = 1;
    },
  },
  layout: "",
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom {
  padding-top: 55%;
}
.btn-center {
  margin-left: 150px;
  margin-top: 20px;
}
.rounded-circle {
  padding: 3px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #111;
}

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
.top {
  padding-top: 50px;
}
@media screen and (max-width: 600px) {
  .btn-center {
    margin-bottom: 100px;
    margin-left: 100px;
  }
}

.footer {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  align-items: flex-start;
  justify-content: space-between;
  background: #da9412;
  @media screen and (max-width: 700px) {
    padding-bottom: 100px;
  }
}
.footer .col {
  flex-basis: 25%;
  @media screen and (max-width: 600px) {
    flex-basis: 100%;
  }
}
</style>
