<template>
<div>
  <v-container class="container">
    <div class="header-store">
      <div class="home">
        <!-- search box -->
        
      
        <div class="row">
          
          <div class="col">
            
            <v-btn text outlined v-if="products[0]">
              {{ products[0].shopname }}'s store
            </v-btn>
            
          </div>
          
          <div class="col-auto search-btn">
            <div class="row">
            <div class="col-auto ">
              <v-btn
          icon
          v-show="searchInput != ''"
          class="button-btn"
          @click="clearSearch"
          ><v-icon color="#da9412">mdi-close</v-icon></v-btn>
          
          
            <v-text-field
              v-model.lazy="searchInput"
              label="Search Here"
              type="search"
              class="input"
              outlined
              dense
              @keyup.enter="$fetch"
              @keypress.enter="$fetch"
            ></v-text-field>
            </div>
            <div class="col right">
              <v-btn icon text  @click.stop="rightDrawer = !rightDrawer" v-show="this.$store.state.Cart.length>0">
                <!-- <v-icon class="nav_icon">mdi-cart</v-icon> -->
                <v-icon outlined class="text-h3 " color="#da9412">mdi-cart</v-icon>
                <span  class=" text-color"> {{this.$store.state.Cart.length}} </span>
              </v-btn>
            </div>
            </div>
          </div>
          
        </div>

        <div class="row flex-nowrap">
          <div class="category">
            
            <!-- <p class="text-h6">{{categoryName}}</p> -->
            
            
            <v-menu offset-y  open-on-hover 
            max-height="300px"
            class="tile"
            >
              
              <template v-slot:activator="{ on, attrs }"  > 
                <v-btn
                  text
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  class="tile"
                  
                >
                  Categories<v-icon
                      right
                      dark
                    >
                      mdi-menu-down
                    </v-icon>
                </v-btn>
              </template>
              <v-list class="tile">
                <v-list-item
                link>
                  <v-list-item-title><p
                  @click="fetchProducts"
                  text
                >
                  <span class="">All</span>
                </p></v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-for="(product, index) in shopproducts" :key="index"
                  class="tile"
                  link
                >
                  <v-list-item-title><p
                  @click="readDataByCategory(product)"
                  text
                >
                  <span class="">{{ product.category }}</span>
                </p></v-list-item-title>
                </v-list-item>
                
              </v-list>
            </v-menu>
            
            
          </div>
          <div class="all-products">
            <p class="text-center text-h6 text-capitalize">{{categoryName}}</p>
            <Loading v-if="$fetchState.pending" />

            <!-- Products -->
            <div v-else class="container products" id="products">
              <!-- Searched Products -->
              <div v-if="searchInput !== ''">
                <div  class="d-flex flex-wrap justify-content-start">
                <div
                  v-for="(product, index) in searchedProducts"
                  :key="index"
                  class="product col d-flex"
                  v-gsap.fromTo="[
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1 },
                  ]"
                >
                  <NuxtLink
                    :to="{
                      name: 'stores-storeid-id',
                      params: { id: product.id },
                    }"
                  >
                    <v-card flat class="mx-auto" width="205">
                      <v-img :src="product.images[0]"  height="205px" class="imgBox"></v-img>

                      <div class="card-subtitle">
                        <v-card-title>
                          {{ product.name }}
                        </v-card-title>

                        <v-card-subtitle>
                          {{ product.price }} {{ product.currency }}
                        </v-card-subtitle>
                      </div>
                    </v-card>
                  </NuxtLink>
                </div>
              </div>
              </div>

              <!-- Now Products -->
              <div v-else class="d-flex flex-wrap justify-content-start">
                <div
                  v-for="(product, index) in products"
                  :key="index"
                  class="product col d-flex"
                  v-gsap.fromTo="[
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1 },
                  ]"
                >
                  <NuxtLink
                    :to="{
                      name: 'stores-storeid-id',
                      params: { id: product.id },
                    }"
                  >
                    <v-card flat class="mx-auto imgBox" width="205" >
                      <v-img :src="product.images[0]" cover height="205px" ></v-img>

                      <div class="card-subtitle">
                        <v-card-title>
                          {{ product.name }}
                        </v-card-title>

                        <v-card-subtitle>
                          {{ product.price }} {{ product.currency }}
                        </v-card-subtitle>
                      </div>
                    </v-card>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </v-container>
  <div  class="footer" v-for="(user, index) in userinfo" :key="index">
      <div class="col">
        <h4>Info</h4>
        <p class="text-small">{{user.username}}</p>
       
        <p class="text-small">{{user.shopname}}</p>
        
        <p class="text-small">{{user.description}}</p>
      </div>
      <div class="col">
        <h4>Contact</h4>
        <p class="text-small">{{user.telephone}}</p>
        <p class="text-small">{{user.email}}</p>
      </div>
      <div class="col">
        <h4>Paypack MArket Place</h4>
        <p>
          Paypack marketplace is paypack’s answer to the current e-commerce chaos. 
            It gives you all the advantages of selling online without the hassle of 
            putting up a new domain and all the marketing that goes into it.
        </p>
      </div>
    </div>
    <div>
       <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      color="#d1dbec"
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
          <v-list-item-title>Leave drawer (click me)</v-list-item-title>
        </v-list-item>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="(product, index) in this.$store.state.Cart" :key="index">
            <v-list-item-avatar>
              <v-img :src="product.images[0]"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="">{{product.name}}     <v-btn text 
              @click="$store.commit('removeData', product)"><v-icon>mdi-delete</v-icon></v-btn> </v-list-item-title>
              
              <small><strong>Price: </strong>{{product.price}}</small>
              <small><strong>Quantity: </strong>{{product.nproducts}}</small>
              <small><strong>Total Price: </strong>{{product.price*product.nproducts}}</small>
            </v-list-item-content>
               
        </v-list-item>
        
        <v-divider></v-divider>
        
        <v-divider></v-divider>
        <div class="checkout-button">
          <v-list-item-action>
            <v-btn color="primary" >Buy Now</v-btn>
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
  head() {
    return {
      
      title: "Single Store",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Single Store page for PayPack Market Place",
        },
      ],
    };
  },
  data() {
    return {
      rightDrawer: false,
      right: true,
      products: [],
      userinfo: [],
      size: "",
      searchedProducts: [],
      shopproducts: [],
      nameproducts: [],
      filterproducts: [],
      searchInput: "",
      categoryName: "",
    };
  },
  async fetch() {
    if (this.searchInput === "") {
      await this.fetchProducts();
      return;
    }

    await this.searchProducts();
  },
  computed: {
    id() {
      return this.$route.params.storeid;
    },
  },
  mounted() {
    this.fetchProducts();
    this.fetchUserInfo();
    this.readDataFilterCategory();
    this.readDataFilterName();
    this.staggering();
  },
  methods: {
    staggering() {
      const gsap = this.$gsap;
      gsap.to(".box", {
        y: 200,
        stagger: 0.5,
      });
    },

    async fetchProducts() {
      const productsRef = firebase.firestore().collection("products");

      productsRef.where("shopname", "==", this.id).onSnapshot((snap) => {
        this.size = snap.size;
        this.products = snap.docs.map((doc) => {
          var product = doc.data();
          product.id = doc.id;
          return product;
        });
        this.categoryName = ""
        console.log(this.products);
      });
    },

    async searchProducts() {
      const productsRef = firebase.firestore().collection("products");

      //We define an async function
      async function getIsNameOrCategory(searchInput, id) {
        const isName = productsRef
          .where("name", "==", searchInput)
          .where("shopname", "==", id)
          .get();
        const isCategory = productsRef
          .where("category", "==", searchInput)
          .where("shopname", "==", id)
          .get();

        const [nameQuerySnapshot, categoryQuerySnapshot] = await Promise.all([
          isName,
          isCategory,
        ]);

        const nameArray = nameQuerySnapshot.docs;
        const categoryArray = categoryQuerySnapshot.docs;

        const searchArray = nameArray.concat(categoryArray);
        return searchArray;
      }

      //We call the asychronous function
      getIsNameOrCategory(this.searchInput, this.id).then((result) => {
        result.forEach((doc) => {
          var product = doc.data();
          product.id = doc.id;
          this.searchedProducts.push(product);
          console.log(doc.data());
        });
      });
    },

    async readDataFilterCategory() {
      //   db.collection("desserts2").get().then((querySnapshot) =>{
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, "=>",doc.data());
      //     this.products = doc.data();
      //     this.products.push(doc.data())
      //   })
      // })

      var shopproductsRef = await firebase.firestore().collection("products");

      // const uid = sessionStorage.getItem("user_id")

      shopproductsRef.where("shopname", "==", this.id).onSnapshot((snap) => {
        // this.size = snap.size
        this.shopproducts = [];
        this.shopproducts = snap.docs.map((doc) => {
          var shopproduct = doc.data();
          shopproduct.id = doc.id;
          return shopproduct;
        });

        this.shopproducts = this.shopproducts.filter((product, i) => {
          return (
            i ==
            this.shopproducts.findIndex((p) => p.category == product.category)
          );
        });
      });
    },

    async readDataFilterName() {
      var nameproductsRef = await firebase.firestore().collection("products");

      // const uid = sessionStorage.getItem("user_id")

      nameproductsRef.where("shopname", "==", this.id).onSnapshot((snap) => {
        // this.size = snap.size
        this.nameproducts = [];
        this.nameproducts = snap.docs.map((doc) => {
          var nameproduct = doc.data();
          nameproduct.id = doc.id;
          return nameproduct;
        });

        this.nameproducts = this.nameproducts.filter((product, i) => {
          return (
            i ==
            this.nameproducts.findIndex((p) => p.shopname == product.shopname)
          );
        });
      });
    },

    async readDataFilter() {
      var filterproductsRef = await firebase.firestore().collection("products");

      // const uid = sessionStorage.getItem("user_id")

      filterproductsRef.where("shopname", "==", this.id).onSnapshot((snap) => {
        // this.size = snap.size
        this.filterproducts = [];
        this.filterproducts = snap.docs.map((doc) => {
          var filterproduct = doc.data();
          filterproduct.id = doc.id;
          return filterproduct;
        });

        this.filterproducts = this.filterproducts.filter((product, i) => {
          return (
            i ==
            this.filterproducts.findIndex((p) => p.category == product.category)
          );
        });
      });
    },

    async readDataByCategory(product) {
      console.log(product);
      this.categoryName = product.category
      console.log(this.categoryName);

      var productsRef = await firebase.firestore().collection("products");

      // const uid = sessionStorage.getItem("user_id")
      // const my_shop = this.myproducts[0].shopname
      // console.log(my_shop);

      productsRef
        .where("category", "==", product.category)
        .where("shopname", "==", this.id)
        .onSnapshot((snap) => {
          this.size = snap.size;
          this.products = [];
          snap.forEach((doc) => {
            var product = doc.data();
            product.id = doc.id;
            this.products.push(product);
          });
        });

    },
    async fetchUserInfo() {
      const userinfoRef = firebase.firestore().collection("users");

      userinfoRef.where("shopname", "==", this.id).onSnapshot((snap) => {
        this.userinfo = snap.docs.map((doc) => {
          var user = doc.data();
          user.id = doc.id;
          return user;
        });
        console.log(this.userinfo);
      });
    },

    clearSearch() {
      this.searchInput = "";
      this.searchedProducts = [];
    },
  },
  layout: "",
};
</script>



<style lang="scss" scoped>
.container {
  padding-top: 70px;
}
.row {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width:500px) {
    flex-direction: column;
  }
}
.category {
  padding: 10px;
  @media screen and (max-width:500px) {
    flex-basis: 100%;
  }
}
.tile {
    margin: 5px;
    border-radius: 4px;
  }
  .tile:hover {
    background: radial-gradient(rgb(241, 241, 241), #d1dbec);
  }
  // .tile:active {
  //   background: yellow;
  // }
.category ul {
  list-style: none;
}
.text-big {
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 400;
}
.padding-right {
  background: #111;
}
.all-products {
  flex-basis: 100%;
  padding: 10px;
}
.home {
  .top {
    padding-top: 30px;
  }
  .loading {
    padding-top: 120px;
    align-items: flex-start;
  }
  .store-name {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 100px;
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;

    .input {
      max-width: 350px;
      width: 100%;

      padding: 5px 5px;
      font-size: 14px;

      &:focus {
        outline: none;
      }
    }
  }
  
}

.munu {
  position: absolute;
  width: 100%;
  background: rgba(255, 255, 255, 255.5);
  padding: 0 10px;
}
.nav {
  position: relative;
}
.nav ul {
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.nav ul li {
  list-style: none;
  cursor: pointer;
}
.nav ul li p:hover {
  background: #184771;
  color: #fff;
}
.nav ul li ul {
  display: block;
  background: rgba(255, 255, 255, 255.5);
  min-width: 150px;
  position: absolute;
  margin-top: 1px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  transform: translateY(40px);
}

.nav ul li:hover ul {
  top: 60px;
  opacity: 1;
  z-index: 10000;
  visibility: visible;
  transform: translateY(0);
}
a {
  text-decoration: none;
  color: #111;
}
.card-subtitle {
  //  background: radial-gradient(#fff, #d1dbec);
  background: radial-gradient(rgb(241, 241, 241), #d1dbec);
}
.footer {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  align-items: flex-start;
  justify-content: space-between;
  background: #da9412;
  @media screen and (max-width: 700px) {
    padding-bottom: 10px;
  }
}
.footer .col {
  flex-basis: 25%;
  @media screen and (max-width: 600px) {
    flex-basis: 100%;
  }
}
.search-btn {
  position: relative;
}
.button-btn {
  position: absolute;
  left: 70%;
  @media screen and(max-width:500px) {
    left: 90%;
  }
  
  color: #da9412;
}
.checkout-button {
  padding-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.text-color {
  position: absolute;
  padding-bottom: 15px;
}
.right {
  padding-left: 50px;
}
.container{
@media (min-width: 960px) {
  max-width: 1200px;
}

}


</style>

