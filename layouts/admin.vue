<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      width="200"
      permanent
      fixed
      persistent
      app
      color="#d1dbec"
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              <h6>PayPack Market Place</h6>
              <v-subheader v-if="user">{{ user.email }}</v-subheader>
              <!-- <p class="small">{{user.email}}</p> -->
              <!-- <small class="small">{{ user.email }}</small> -->
            </v-list-item-title>
            <v-list-item-subtitle> </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item
          class="pt-5"
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
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app persistent color="#d1dbec">
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

        <v-btn v-if="user" @click="signout" color="dark" dark>signout</v-btn>

        <!-- <v-btn v-if="!user" @click="signin" color="dark" dark>signin</v-btn> -->
      </div>
    </v-app-bar>
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
          icon: "mdi-dropbox",
          title: "Products",
          to: "/products",
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
  head() {
    return {
      title: "Dashboard",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Dashboard for PayPack Market Place",
        },
      ],
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "/style/home.css",
      //   },
      // ],
      // script: [
      //   {
      //     src: "/js/owl-carsoul.js",
      //     type: "text/javascript",
      //     body: true,
      //   },
      //   {
      //     src: "/js/mixItUp.js",
      //     body: true,
      //     type: "text/javascript",
      //   },
      // ],
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      this.user = user;
    });
  },

  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          console.log(res);
          this.user = "";
          sessionStorage.removeItem("user_id");
          sessionStorage.removeItem("shop_name");
          this.$router.push("/");
        });
    },
    // signin() {
    //   this.$router.push("/auth/signin");
    // },
  },
};
</script>



