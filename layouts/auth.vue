<template>
  <v-app app>
    <!-- Navigation bar ends -->

    <v-main class="header-store accent">
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
import NavLayout from "../components/NavLayout.vue";
export default {
  components: { NavLayout },
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
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>