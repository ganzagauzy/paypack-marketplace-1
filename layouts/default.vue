<template>
  <v-app app>
    <NavLayout />
    <!-- Navigation bar ends -->

    <v-main class="header-store">
      
        <Nuxt />
      
    </v-main>
    <v-footer class="text-center" :absolute="!fixed" app color="">
      <span class="text-center">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
 
  data () {
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
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
a {
  text-decoration: none;

  color: #111;
}
NuxtLink  {
  color: #111;
}
.color {
  background: #DA9412;
}
.header-store {
    
   background: radial-gradient(#fff, #d1dbec);
}

</style>