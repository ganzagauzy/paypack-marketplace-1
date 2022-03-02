<template>
<div>
  <v-container>
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
          
        </div>

        <div class="row flex-nowrap">
          <div class="category">
            <h4>Categories</h4>
            <v-btn text class="text-center" @click="fetchProducts">
              <span class="text-big">All</span>
            </v-btn>
            <ul v-for="(product, index) in shopproducts" :key="index">
              <li>
                <v-btn
                  @click="readDataByCategory(product)"
                  text
                >
                  <span class="text-big">{{ product.category }}</span>
                </v-btn>
              </li>
            </ul>
          </div>
          <div class="all-products">
            <Loading v-if="$fetchState.pending" />

            <!-- Products -->
            <div v-else class="container products" id="products">
              <!-- Searched Products -->
              <div v-if="searchInput !== ''">
                <div
                  v-for="(product, index) in searchedProducts"
                  :key="index"
                  class="product"
                  v-gsap.fromTo="[
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.5 },
                  ]"
                >
                  <NuxtLink
                    :to="{
                      name: 'stores-storeid-id',
                      params: { id: product.id },
                    }"
                  >
                    <v-card flat class="mx-auto" max-width="344">
                      <v-img :src="product.images[0]" height="250px"></v-img>

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
                    <v-card flat class="mx-auto" width="255">
                      <v-img :src="product.images[0]" height="200px"></v-img>

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
  <div class="footer">
      <div class="col">Name and descriotion</div>
      <div class="col">contact</div>
      <div class="col">Paypack MArket Place</div>
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
      products: [],
      size: "",
      searchedProducts: [],
      shopproducts: [],
      nameproducts: [],
      filterproducts: [],
      searchInput: "",
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

      productsRef.where("userId", "==", this.id).onSnapshot((snap) => {
        this.size = snap.size;
        this.products = snap.docs.map((doc) => {
          var product = doc.data();
          product.id = doc.id;
          return product;
        });
        console.log(this.products);
      });
    },

    async searchProducts() {
      const productsRef = firebase.firestore().collection("products");

      //We define an async function
      async function getIsNameOrCategory(searchInput, id) {
        const isName = productsRef
          .where("name", "==", searchInput)
          .where("userId", "==", id)
          .get();
        const isCategory = productsRef
          .where("category", "==", searchInput)
          .where("userId", "==", id)
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

      shopproductsRef.where("userId", "==", this.id).onSnapshot((snap) => {
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

      nameproductsRef.where("userId", "==", this.id).onSnapshot((snap) => {
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

      filterproductsRef.where("userId", "==", this.id).onSnapshot((snap) => {
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

      var productsRef = await firebase.firestore().collection("products");

      // const uid = sessionStorage.getItem("user_id")
      // const my_shop = this.myproducts[0].shopname
      // console.log(my_shop);

      productsRef
        .where("category", "==", product.category)
        .where("userId", "==", this.id)
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

    clearSearch() {
      this.searchInput = "";
      this.searchedProducts = [];
    },
  },
  layout: "",
};
</script>



<style lang="scss" scoped>
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
.category ul {
  list-style: none;
}
.text-big {
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 400;
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
  .products {
    .products-grid {
      display: grid;
      column-gap: 32px;
      row-gap: 64px;
      grid-template-columns: 1fr;
      @media (min-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
      }
      .product {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        .product-img {
          position: relative;
          overflow: hidden;
          &:hover {
            .overview {
              transform: translateY(0);
            }
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .info1 {
          margin-top: auto;
          .title {
            margin-top: 8px;
            color: #111;
            font-size: 20px;
          }
          .release {
            margin-top: 8px;
            color: #c9c9c9;
          }
        }
      }
    }
  }
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.v-card--reveal2 {
  align-items: right;
  bottom: 0;
  justify-content: right;
  opacity: 0.9;
  position: absolute;
  width: 100%;
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
    padding-bottom: 100px;
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
  left: 95%;
  color: #da9412;
}
</style>

