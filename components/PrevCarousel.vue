<template>
  <div class="">
     <!-- {{$route.params.movieid}} -->

    <v-row>

           <v-col cols="" sm="12" md="7"
           class="">
                <v-card id="app" :style="{
                    backgroundColor: prodBackgroundColor,
                  }">
                <!-- <v-card id="app" v-bind:class="currentTheme"> -->
                  <div class="py-2 pb-5 px-3">

                    <div class="rounded-circle">
                    <v-btn >
                      <!-- <v-icon>mdi-palette</v-icon> -->
                      <input
                      type="color"
                      name=""
                      style="border-radius:50%"
                      id=""
                      class="rounded-circle"
                      v-model="prodBackgroundColor"
                    />
                    </v-btn>
                    
                  </div>
                    

                  
                  </div>

                  <!-- <v-img

                    max-height="250"
                    max-width="350"
                    contain
                    :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`"
                  ></v-img> -->

                  <!-- <v-carousel :show-arrows="true" hide-delimiters class="">
                    <v-carousel-item
                      class="center pb-16"
                      v-for="(image, i) in images"
                      :key="i"
                      :src="image.src"
                      max-height="400"
                      max-width="600"
                      cover
                    ></v-carousel-item>
                  </v-carousel> -->

                  
                    
                     <div class=" py-5 carousel ">
                        <v-carousel :show-arrows="true" hide-delimiters
                      
                    v-for="(product, index) in products" :key="index"
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
                   
                  




                  <!-- <div class="movie-img py-16 w-25">
                  <img :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt="">
                </div> -->
                </v-card>
              </v-col>





      <!-- <v-col
      md="9"
      cols="12">
        <v-card class="py-16 px-10">
        <PrevCarousel />
      </v-card>
      </v-col> -->
      <v-col
      class=""
      md="5"
      cols="12">
      <div v-for="(product, index) in products" :key="index" class="">
        <p>{{ product.description}}</p>
      </div>
      <v-btn
      :style="{
                    backgroundColor: prodBackgroundColor,
                  }"
      class="px-16 ">Buy Now</v-btn>
      </v-col>
    </v-row>




      </div>




</template>

<script>

import "firebase/compat/firestore";
import db from "../plugins/firebase";
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import { onSnapshot } from '@firebase/firestore';


import { Photoshop } from 'vue-color'
export default {


  data () {
    return {

  

  products: [],
    
  product: "",

  prodBackgroundColor: "#111",


 

  menu:false,
  currentTheme: localStorage.getItem("theme-color"),
    }
  },
  components: {
    // 'material-picker': material,
  //   'compact-picker': compact,
  //   'swatches-picker': swatches,
  //   'slider-picker': slider,
  //   'sketch-picker': sketch,
    // 'chrome-picker': chrome,
    // 'photoshop-picker': photoshop
  },

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
          })

     
    },

    initialize() {
    this.products = [];
    },


  },


}
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
