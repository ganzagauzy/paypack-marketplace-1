<template>
  <!-- <v-app app style="top: 70px"> -->
  <v-app >
    <!-- <nav-layout /> -->
    <newnav />
    <!-- Navigation bar ends -->

    <v-main class="header-store accent">
      <Nuxt />
    </v-main>
    <newfooter />
    <!-- <v-footer
      class="text-center text-white py-5 px-7 custom-footer"
      dark
      :absolute="!fixed"
    >
      <span class="text-center"
        >&copy; {{ new Date().getFullYear() }}
        <a
          style="font-size: 20px"
          class="font-weight-bold text-decoration-none"
          href="https://paypack.rw/"
          >Paypack
        </a>
      </span>
    </v-footer> -->
  </v-app>
</template>
<script>
import NavLayout from "../components/NavLayout.vue";
import Newfooter from '../components/newfooter.vue';
import Newnav from '../components/newnav.vue';
export default {
  components: { NavLayout, Newfooter, Newnav },
  data() {
    return {
      fixed: true,
      drawer: false,
      tab: null,

      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },

        {
          icon: "mdi-shopping",
          title: "Stores",
          to: "/stores",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
html {
  overflow-y: auto;
}
.v-application--wrap {
  top: 70px;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;

  color: #111;
}
NuxtLink {
  color: #111;
}
.color {
  background: #da9412;
}
// .header-store {

//   background: radial-gradient(rgb(241, 241, 241), #d1dbec);
// }
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}

@media screen and(max-width:767px) {
  .v-footer {
    margin-bottom: 64px;
  }
}
</style>