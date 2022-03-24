<template>
  <div class="header-store">
    
      <div class="row px-10">
        <div
          class="cols-2 px-2"
          v-gsap.fromTo="[
            { opacity: 0, x: -350 },
            { opacity: 1, x: 0, duration: 2 },
          ]"
        >
          <h1>The Simplest WAy <br><span> To Sell</span> <br />Your Products</h1>
          <p>
            Set up your online store now and start selling your products. <br> It is that simple
          </p>
          <div class="button-nav">
            <div class="pr-5 pb-5">
              <v-btn href="#available-store" elevation="0" color="primary" outlined>
            Available Stores
          </v-btn>
            </div>
          <div><v-btn nutx to="/auth/login_signup"  elevation="0" color="primary" outlined>
            Register Now
          </v-btn></div>
          </div>
        </div>
        <div
          class="cols-2 px-2"
          v-gsap.fromTo="[
            { opacity: 0, x: 350 },
            { opacity: 1, x: 0, duration: 2 },
          ]"
        >
          <img
            class="rounded d-none d-md-block"
            src="~/assets/images/cart1.png"
          />
        </div>
      </div>
      <div class="available-store px-10" id="available-store">
        <h1 class="store-title">Available Stores</h1>
        <div class="buttons">
          <div v-for="(store, i) in stores" :key="i">
            <v-btn
              :to="{
                name: 'stores-storeid',
                params: { storeid: store.shopname },
              }"
              class="ma-2 d-flex button"
              outlined
              color=""
            >
              {{ store.shopname }}'store
            </v-btn>
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import db from "../plugins/firebase";

export default {
  head() {
    return {
      title: "Stores",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "stores page for PayPack Market Place",
        },
      ],
    };
  },
  data() {
    return {
      stores: [],
    };
  },
  created() {
    this.readData();
  },

  methods: {
    initialize() {
      this.stores = [];
    },

    async readData() {
      var storesRef = await firebase.firestore().collection("products");

      storesRef.onSnapshot((snap) => {
        this.stores = [];
        this.stores = snap.docs.map((doc) => {
          var store = doc.data();
          store.id = doc.id;
          return store;
        });

        this.stores = this.stores.filter((product, i) => {
          return (
            i == this.stores.findIndex((p) => p.shopname == product.shopname)
          );
        });
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.available-store {
  margin-bottom: 50px;
}

.button:hover {
  background: #da9412;
  border: none;
}
.buttons {
  min-width: 100px;
  display: flex;
  @media screen and (max-width:500px) {
    flex-direction: column;
    
  }
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
  max-width: 100%;
}
.cols-2 h1 {
  font-size: 50px;
  line-height: 60px;
  margin: 25px 0;
}
.cols-2 h1 span {
  color: #da9412;
}
.btn-store {
  text-decoration: none;
  display: inline-block;
  color: #111;
  border: 1px solid #da9412;
  padding: 8px 30px;
  margin: 30px 0;
  border-radius: 10px;
}
.btn-store:hover {
  background: #da9412;
  border: none;
}

.store-title {
  text-align: center;
  margin: 100px auto 80px;
  position: relative;
  line-height: 60px;
  color: #555;
}
.store-title::before {
  content: "";
  background: #da9412;
  width: 100px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

//media query <600
@media only screen and (max-width: 600px) {
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
@media only screen and (max-width: 1267px) {
  .cols-2 {
    padding-top: 50px;
  }
}
//media query <888
@media only screen and (max-width: 888px) {
  .cols-2 {
    padding-top: 50px;
  }
}
//media query <958
@media only screen and (max-width: 958px) {
  .row {
    margin: 0 10px;
  }

  .cols-2 {
    padding-top: 50px;
    flex-basis: 100%;
  }
}
.button-nav {
  display: flex;
  flex-wrap: wrap;
}
</style>