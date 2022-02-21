<template>
  <v-app app>
    <v-app-bar app>
       <v-app-bar-nav-icon @click="drawer = true" 
                           class="d-flex d-sm-none" 
                           ></v-app-bar-nav-icon>
        <v-toolbar-title><span class="text-h5">PayPack</span></v-toolbar-title>
        
        <v-spacer></v-spacer>
        <nav class=" d-none d-md-flex d-lg-flex px-5">
            <ul v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                router
                class="text--dark"
                exact>
                <li class=""> <NuxtLink class="text--dark" :to="item.to"><span class="t text--black">{{item.title}}</span></NuxtLink></li>
            </ul>
        </nav>
        <v-btn class="mr-md-10" icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
  
        <v-btn @click="$vuetify.theme.dark = ! $vuetify.theme.dark" icon class="mr-md-10" >
          <v-icon>mdi-toggle-switch-outline</v-icon>
        </v-btn>
  
        <v-btn nuxt
            to="/auth/signin" class="px-5 color" outlined>
          signin
        </v-btn>

        
  
        
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
         <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        
        
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn class="mr-md-16" icon @click="$vuetify.theme.dark = ! $vuetify.theme.dark">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
        </div>
      </template>
      
    </v-navigation-drawer>
    <!-- Navigation bar ends -->

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
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
      fixed: false,
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

</style>