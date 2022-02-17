<template>
  <div class="container">
      Page for {{this.$route.params.id}}

    
    
    <!-- <v-btn class="py-5"
        color=""
        :style="{
          backgroundColor: prodBackgroundColor,
        }"
        dark
        :to="{ name: 'stores-storeid', params: {storeid: sid} }" nuxt>
          Back
      </v-btn> -->
    <!-- <NuxtLink class="button button-light py-3" to= "/published">
        Back
      </NuxtLink> -->
      
      
     <!-- {{$route.params.movieid}} -->

    <v-row class="py-3">

           <v-col cols="" sm="12" md="7">
                <v-card id="app" :style="{
                    backgroundColor: prodBackgroundColor,
                  }">
                <!-- <v-card id="app" v-bind:class="currentTheme"> -->
                  <div class="py-2 pb-5 px-3 ">

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

                 
                    
                       <div class=" py-5 carousel">
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
      md="5"
      cols="12">
      <div v-for="(product, index) in products" :key="index" class="">
        <h4>Description</h4>
        {{ product.description}} 
      </div>
      <v-btn
      :style="{
        backgroundColor: prodBackgroundColor,
      }"
      dark
      class="px-16 py-3 ">Buy Now</v-btn>
      </v-col>
    </v-row>




      </div>




</template>

<script>

import "firebase/compat/firestore";
import db from "../../../plugins/firebase";
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
    

     async readSingleData() {
      //   db.collection("desserts2").get().then((querySnapshot) =>{
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, "=>",doc.data());
      //     this.products = doc.data();
      //     this.products.push(doc.data())
      //   })
      // })
      const p_id = this.$route.params.id
      console.log(p_id);
      var docRef = await db.collection("published").doc(p_id);

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
.center {
  display: flex;
  justify-content: center;
  align-items: center;
 
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
</style>
