<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      width="200"
      absolute
      permanent
      fixed
      persistent
      app
      color=""
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              <h6>AGASOKO</h6>
              <!-- <v-subheader v-if="user">{{ user.email }}</v-subheader> -->
              <!-- <p class="small">{{user.email}}</p> -->
              <!-- <small class="small">{{ user.email }}</small> -->
            </v-list-item-title>
            <v-list-item-subtitle> </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        
        

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
    <v-app-bar :clipped-left="clipped" fixed app persistent color="">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
     
      <v-btn class="mr-md-16" icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      

      <div v-text="title" class="" />
      <v-spacer />

      <div class="">
        <v-divider></v-divider>
        <!-- <v-menu >
      <template v-slot:activator="{ on, attrs }">
        <v-btn


          v-bind="attrs"
          v-on="on"
          color="#d1dbec"
          class="d-flex justify-end"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(menu, index) in menus"
          :key="index"
          link
        >
        <v-list-item-title class="cursor-pointer">{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
        <v-btn nuxt
            to="/adminwelcome" color="dark" dark>Go To Admin</v-btn>
        <!-- <v-btn v-if="user" @click="signout" color="dark" dark>signout</v-btn>

        <v-btn v-if="!user" @click="signin" color="dark" dark>signin</v-btn> -->
      </div>

      <!-- <v-btn
        icon

      >
        <v-icon>mdi-account</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer class="text-center" :absolute="!fixed" app color="">
      <span class="text-center">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      user: "",
      menus: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "",
    };
  },

  // mounted() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     // console.log(user);
  //     this.user = user;
      
  //   });
  // },

  // methods: {
  //   signout() {
  //     firebase
  //       .auth()
  //       .signOut()
  //       .then((res) => {
  //         console.log(res);
  //         this.user = "";
  //         sessionStorage.removeItem("user_id");
  //         this.$router.push("/");
  //       });
  //   },
  //   signin() {
  //     this.$router.push("/auth/signin");
  //   },
  // },
};
</script>



