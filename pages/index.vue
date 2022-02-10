<template>
  <v-row justify="center" align="center" color="primary">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <!-- <NuxtLogo />
        <VuetifyLogo /> -->
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Agasoko template
        </v-card-title>
        <v-card-text>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aliquam iure deleniti debitis! Nostrum a tenetur facilis, at porro, eaque ex consequuntur aut cupiditate et aperiam incidunt ullam ipsa id.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, vero.<a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem.
            </a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illum! <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              Lorem.
            </a>.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste. <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              Lorem, ipsum.
            </a>.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum explicabo, quisquam impedit quas doloribus at ut blanditiis ea? Animi, nulla.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lorem, ipsum dolor.
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lorem, ipsum.
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="dark"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-hover v-slot="{ hover }">
        <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal text-h20 white--text"
            style="height: 100%;"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sunt minus sed vitae explicabo! Soluta iure reprehenderit perferendis ullam ex culpa
            Lorem ipsum dolor sit amet consectetur <br>
            <v-btn
            color="dark"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        
        <div class="font-weight-light grey--text text-h6 mb-2">
          For the perfect meal
        </div>
        <h3 class="text-h5 font-weight-light orange--text mb-2">
          QW cooking utensils
        </h3>
        
      </v-card-text>
      <v-btn
            color="dark"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
    </v-card>
  </v-hover>


    </v-col>
  </v-row>
</template>


<script>

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default {
  data () {
    return {
      user: '',
    }
  },

  // mounted() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user);
  //     this.user = user

  //     if(!this.user) {
  //       this.$router.push('/auth/signin')
  //     }
  //   })
  // },
}
</script>

<style scoped>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
