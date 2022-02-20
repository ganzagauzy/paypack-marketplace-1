<template>
  <v-app app>
    <v-app-bar app>
       <v-app-bar-nav-icon @click="drawer = true" 
                           class="d-flex d-sm-none" 
                           ></v-app-bar-nav-icon>
        <v-toolbar-title>Your Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
  
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-with-title
            class="d-none d-sm-flex" 
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
  
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
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
    
  </v-app>
</template>
<script>
export default {
  el: '#app',
  data () {
    return {
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
          title: "Shop-Here",
          to: "/shops",
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