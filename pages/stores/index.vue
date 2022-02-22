<template>
  <div>
    <v-container>
    <div class="top">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis iusto illum repudiandae saepe totam deleniti pariatur nihil obcaecati quas nostrum fuga aspernatur, possimus consequatur. Officia mollitia voluptas et autem!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis iusto illum repudiandae saepe totam deleniti pariatur nihil obcaecati quas nostrum fuga aspernatur, possimus consequatur. Officia mollitia voluptas et autem!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis iusto illum repudiandae saepe totam deleniti pariatur nihil obcaecati quas nostrum fuga aspernatur, possimus consequatur. Officia mollitia voluptas et autem!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis iusto illum repudiandae saepe totam deleniti pariatur nihil obcaecati quas nostrum fuga aspernatur, possimus consequatur. Officia mollitia voluptas et autem!</p>
    <h2>Available Stores</h2>
    <div class="buttons">
      <div v-for="(product, index) in myproducts" :key="index" >
      <v-btn :to="{ name: 'stores-storeid', params: { storeid: product.userId } }" class="ma-2 d-flex button" outlined color=""> {{product.shopname}}'store </v-btn>
    </div>
    </div>
    
    
    </div>
    </v-container>
  </div>
</template>

<script>


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import db from "../plugins/firebase";

export default {
  data() {
    return {
      selectedItem: null,
      movies: [],
      searchedMovies: [],
      searchProducts: [],
      searchInput: "",
      dialog: false,
      images: [],
      show: false,
      products: [],
      myproducts: [],
      shopproducts: [],
      size: "",
      user: "",
      shop: "",
      shopname: "",
      editedIndex: -1,
      // product: {
      //   name: '',
      //   description: '',
      // },
    };
  },

 

  created() {
    this.readData();
    
  },

  methods: {
    initialize() {
      this.products = [];
      this.myproducts = [];
      this.shopproducts = [];
    },

    async readData() {
      //   db.collection("desserts2").get().then((querySnapshot) =>{
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, "=>",doc.data());
      //     this.products = doc.data();
      //     this.products.push(doc.data())
      //   })
      // })

      var myproductsRef = await firebase.firestore().collection("products");

      // const uid = sessionStorage.getItem("user_id")

      myproductsRef.onSnapshot((snap) => {
        // this.size = snap.size
        this.myproducts = [];
        this.myproducts = snap.docs.map((doc) => {
          var myproduct = doc.data();
          myproduct.id = doc.id;
          return myproduct;
        });

        this.myproducts = this.myproducts.filter((product, i) => {
          return i == this.myproducts.findIndex(
            (p) => p.shopname == product.shopname
          );
        });
      });
    },

    clearSearch() {
      this.searchInput = "";
      this.searchedMovies = [];
    },
  },
};
</script>


<style lang="scss" scoped>
.top {
  margin-top: 100px;
  margin-bottom: 100px;
}
.buttons {
  min-width: 100px;
  display: flex;
  
}
</style>