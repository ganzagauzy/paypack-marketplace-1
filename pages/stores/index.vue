<template>
  <div class="header-store"> 
   <v-container class="">
      <div class="row">
        <div class="cols-2">
        <h1>Get A <span>Store</span> <br>For Your Self</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis unde, <br> id cum dolorum natus nostrum, itaque eum ab amet modi sapiente dignissimos<br> odio  at animi, incidunt voluptatibus. Corrupti, libero iste.</p>
        <a href="#available-store" class="btn-store">Available Stores</a>
      </div>
      <div class="cols-2">
        <img class="" src="~/assets/images/cart1.png" />
      </div>
      </div>
      <div class="available-store" id="available-store">
        <h1 class="store-title">Available Stores</h1>
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
.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cols-2 {
  flex-basis: 50%;
  min-width: 300px;
}
.cols-2 img {
  background: radial-gradient(#fff, #d1dbec);
  max-width: 100%;
  padding: 50px 0;
}
.cols-2 h1 {
  font-size: 50px;
  line-height: 60px;
  margin: 25px 0;
}
.cols-2 h1 span {
  color: #DA9412;
}
.btn-store {
  text-decoration: none;
  display: inline-block;
  background: #DA9412;
  color: #111;
  padding: 8px 30px;
  margin: 30px 0;
  border-radius: 30px;
}

.store-title {
  text-align: center;
  margin: 30px auto 80px;
  position: relative;
  line-height: 60px;
  color: #555;
}
.store-title::before {
  content: '';
  background: #DA9412;
  width: 100px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.header-store {
    min-height: 100%;
   background: radial-gradient(#fff, #d1dbec);
}

//media query <600
@media only screen and (max-width:600px) {
  .cols-2 h1 {
    padding-top: 30px;
  }
  .row {
    margin: 0 10px;
    display: flex;
    justify-content: center;
  align-items: center;
  }
  .cols-2 {
    padding-top: 50px;
    flex-basis: 100%;
  }
}
//media query <1267
@media only screen and (max-width:1267px) {
 
  .cols-2 {
    padding-top: 50px;
    
  }
}
//media query <888
@media only screen and (max-width:888px) {
  
 
  .cols-2 {
    padding-top: 50px;
    
  }
}
//media query <958
@media only screen and (max-width:958px) {
  .row {
    margin: 0 10px;
  }
 
  .cols-2 {
    padding-top: 50px;
    flex-basis: 100%;
    
  }
}


</style>