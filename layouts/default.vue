<template>
  <v-app  class="override">
    <div>
      <!-- <nav-layout /> -->
    <newnav />
    <!-- Navigation bar ends -->

    <v-main class="header-store accent">
      <Nuxt />
    </v-main>
    <newfooter />
    </div>
  
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
.override {
  .application--wrap {
    min-height: 1vh !important;
  }
}
::v-deep .v-application--wrap {
    min-height: fit-content;
  }


</style>