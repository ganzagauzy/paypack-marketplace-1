<template>
  <div class="container">
    published for {{$route.params.movieid}}

    <v-row>

           <v-col cols="" sm="12" md="9">
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

                  <v-carousel :show-arrows="true" hide-delimiters class="">
                    <v-carousel-item
                      class="center pb-16"
                      v-for="(image, i) in images"
                      :key="i"
                      :src="image.src"
                      max-height="400"
                      max-width="600"
                      cover
                    ></v-carousel-item>
                  </v-carousel>

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
      md="3"
      cols="12">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas dolorum excepturi aut tempore fuga doloribus, illum voluptatum, beatae velit sit perspiciatis alias explicabo aliquid distinctio sed ex corporis debitis. Iusto!</p>
      <v-btn
      color="primary"
      class="px-16 current-theme">Buy Now</v-btn>
      </v-col>
    </v-row>




      </div>




</template>

<script>
import { Photoshop } from 'vue-color'
export default {


  data () {
    return {

  colors: [
    {
      hex: '#194d33',
      hex8: '#194D33A8',
      hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
      hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
      rgba: { r: 25, g: 77, b: 51, a: 1 },
      a: 1
    }
  ],
  images: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],


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
  methods: {
    switchTheme(theme) {
      localStorage.setItem("theme-color", theme);
      this.currentTheme = localStorage.getItem("theme-color");
    },
  },
  layout: "empty",

}
</script>

<style>

</style>
