<template>
  <div>
    <v-container>
      <div>

    <p class="py-3"> This is a published page for <span class="h4 text-decoration-underline">{{$route.params.movieid}}</span></p> 


    <PrevCarousel />


  </div>
    </v-container>
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
  layout: "empty",

}
</script>

<style>

</style>
