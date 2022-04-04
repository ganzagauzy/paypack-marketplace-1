<template>
  <div>
    <header class="header shadow" id="header">
      <nav class="nav container">
        <nuxt-link to="/" class="text--primary nav_logo title font-weight-bold">
          Paypack MarketPlace
        </nuxt-link>

        <div class="nav_menu" id="nav_menu">
          <ul class="nav_list">
            <li class="nav_item">
              <NuxtLink to="/" class="nav_link">
                <v-icon class="nav_icon">mdi-home</v-icon>
                <span class="nav_name">Home</span>
              </NuxtLink>
            </li>

            

            <li class="nav_item">
              <NuxtLink to="/stores" class="nav_link">
                <v-icon class="nav_icon">mdi-store</v-icon>
                <span class="nav_name">Stores</span>
              </NuxtLink>
            </li>
            <!-- <li class="nav_item">
              <v-btn text @click.stop="rightDrawer = !rightDrawer" class="nav_link">
                <v-icon class="nav_icon">mdi-cart</v-icon>
                <span class="nav_name"><v-icon>mdi-cart</v-icon></span>
              </v-btn>
            </li> -->
            <!-- <li>
              <v-btn
                color=""
                text
                dark
                @click.stop="drawer = !drawer"
              >
                Toggle
              </v-btn>
            </li> -->
          </ul>
        </div>

        <div class="right">
          <v-btn v-if="!user"  @click="signin"  elevation="0" color="primary">
            Sign in
          </v-btn>
          <v-btn v-if="user" @click="signout"  elevation="0" color="primary">
            sign out
          </v-btn>
          <v-btn class="ml-2 margin-top" icon text  @click.stop="rightDrawer = !rightDrawer" v-show="this.$store.state.Cart.length>0">
                <!-- <v-icon class="nav_icon">mdi-cart</v-icon> -->
                <v-icon outlined class="text-h3 " color="#da9412">mdi-cart</v-icon>
                <span  class=" text-color"> {{this.$store.state.Cart.length}} </span>
              </v-btn>
        </div>
      </nav>
    </header>
    

    <div>
       <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      color="#d1dbec"
      width="350"
      temporary
      fixed
      class="pt-16"
    >
      <v-list class="">
        <v-list-item @click.stop="rightDrawer = !rightDrawer">
          <v-list-item-action>
            <v-icon light>
              mdi-close
            </v-icon>
          </v-list-item-action>
          <!-- <v-list-item-title>Leave drawer (click me)</v-list-item-title> -->
        </v-list-item>
        <!-- <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item> -->
        <v-list-item v-for="(product, index) in this.$store.state.Cart" :key="index">
            <div>
              <div class="fluid">
              <v-img :src="product.images[0]" ></v-img>

              </div>
            </div>

            <v-list-item-content class="pl-5">
              <v-list-item-title class="d-flex justify-space-between">
                {{product.name}}     <v-btn text 
              @click="$store.commit('removeData', product)"><v-icon>mdi-delete</v-icon></v-btn> 
              </v-list-item-title>
              
              <small><strong>Price: </strong>{{product.price}}</small>
              <small><strong>Quantity: </strong>{{product.nproducts}}</small>
              <small><strong>Total Price: </strong>{{product.price*product.nproducts}}</small>
            </v-list-item-content>
               
        </v-list-item>
        
        <v-divider></v-divider>
        
        <v-divider></v-divider>
        <div class="checkout-button">
          <v-list-item-action>
            <v-btn color="primary " nuxt to="/checkout" >Buy Now</v-btn>
        </v-list-item-action>
        </div>

      </v-list>
    </v-navigation-drawer>
     </div>
     
     
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  data () {
      return {
        rightDrawer: false,
        right: true,
        // items: [
        //   { title: 'Home', icon: 'mdi-view-dashboard' },
        //   { title: 'About', icon: 'mdi-forum' },
        // ],
        user: "",
      }
    },
    mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      this.user = user;
    });
  },


  methods: {
    scrollHeader() {
      const header = document.querySelector("#header");
      if (this.scrollY >= 200) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
      window.addEventListener("scroll", this.scrollHeader);
    },

    signout() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          console.log(res);
          this.user = "";
          
          this.$router.push("/");
        });
    },
    signin() {
        this.$router.push("/auth/login_signup");
    },


  },
};
</script>

<style lang="scss" scoped>
body {
  margin: var(--header-height) 0 0 0;
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}
.title {
  font-family: var(--body-font) !important;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.btn {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  color: #111;
  border: 1px solid #da9412;
  padding: 8px 30px;
  margin: 30px 5px;
  border-radius: 10px;
}
.btn:hover {
  border: none;
  background: #da9412;
}
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #da9412;
}

//layout
.container {
  margin-left: 1rem;
  margin-right: 1rem;
}
//header
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #d1dbec;
  z-index: var(--z-fixed);
  transition: 0.4s;
}
.title {
  font-size: 30px;
}
// nav
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_logo {
  color: var(--title-color);
  font-weight: 600;
}

//media queries

@media screen and(max-width:767px) {
  .container {
    margin: 1rem 1rem;
  }
  .nav_menu {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #d1dbec;
    box-shadow: 0 -1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
    width: 100%;
    height: 4rem;
    display: grid;
    align-content: center;
    transition: 0.4s;
  }
}

.nav_list,
.nav_link {
  display: flex;
}
.nav_link {
  flex-direction: column;
  align-items: center;
  row-gap: 0.25rem;
  color: var(--title-color);
  font-weight: 600;
}
.nav_list {
  justify-content: space-around;
}
.nav_name {
  font-size: var(--tiny-font-size);
}
.nav_icon {
  font-size: 1.5rem;
}
//active link
.active_link {
  position: relative;
  color: var(--first-color);
  transition: 0.3s;
}
// minimal
.active_link::before {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  width: 4px;
  height: 4px;
  background: var(--first-color);
  border-radius: 50%;
}
// background header
.scroll-header {
  box-shadow: 0 1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
}

// media queries 2
// minimal list
@media screen and(max-width:575px) {
  .right {
    padding-right: 30px;
  }
}
// medium
@media screen and(min-width:576px) {
  .nav_list {
    justify-content: center;
    column-gap: 3rem;
  }
  .right {
    padding-right: 30px;
  }
}
// large
@media screen and(min-width:767px) {
  body {
    margin: 0;
  }
  .section {
    padding: 7rem 0 2rem;
  }
  .nav {
    height: calc(var(--header-height) + 1.5rem);
  }
  .nav_icon {
    display: none;
  }
  .nav_name {
    font-size: var(--normal-font-size);
    display: block;
  }
  .nav_link:hover {
    color: var(--first-color);
  }
  .active_link::before {
    bottom: -0.75rem;
  }
}
.checkout-button {
  padding-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
// .checkout-btn {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #da9412;
//   padding: 10px 0;
// }

// larger device
@media screen and(min-width:1024px) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }
}
.text-color {
  position: absolute;
  padding-bottom: 15px;
}
.fluid {
  max-height: 150px;
  max-width: 90px;
}
.fluid img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
@media screen and (max-width:425px) {
  margin-top {
    padding-top: 15px;
    margin-top: 15px;
  }
}
</style>