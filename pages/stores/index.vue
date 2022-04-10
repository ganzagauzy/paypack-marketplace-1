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
        <h1>
          The Simplest Way <br /><span> To Sell</span> <br />Your Products
        </h1>
        <p>
          Set up your online store now and start selling your products. <br />
          It is that simple
        </p>
        <div class="button-nav">
          <div class="pr-5 pb-5">
            <v-btn
              href="#available-store"
              elevation="0"
              color="primary"
              outlined
            >
              Available Stores
            </v-btn>
          </div>
          <div>
            <v-btn
              to="/auth/login_signup"
              elevation="0"
              color="primary"
              outlined
            >
              Register Now
            </v-btn>
          </div>
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
      <h1 class="store-title mb-5">Available Stores</h1>
      <div class="container">
        <div class="loading mt-5" v-if="state.loading">
          <h4 class="font-weight-medium text-center">Loading Stores...</h4>
        </div>
        <div v-else>
          <div class="row" v-if="stores.length < 1">
            <h1>No Stores available</h1>
          </div>
          <div class="buttons" v-else>
            <div v-for="(store, i) in stores" :key="i">
              <v-btn
                :to="{
                  name: 'stores-storeid',
                  params: { storeid: store.id },
                }"
                class="ma-2 d-flex button"
                outlined
                color=""
              >
                {{ store.shopname }}
              </v-btn>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../../plugins/firebase";

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
      state: { loading: false },
    };
  },
  mounted() {
    this.readData();
  },

  methods: {
    initialize() {
      this.stores = [];
    },
    async readData() {
      // try {
      //   this.state.loading = true;
      //   var snapshot = await db.collection("products").get();
      //   const uniqueStores = new Set();
      //   this.stores = snapshot.docs
      //     .map((doc) => {
      //       if (!uniqueStores.has(doc.data().shopname)) {
      //         uniqueStores.add(doc.data().shopname);
      //         return doc.data();
      //       }
      //     })
      //     .filter((doc) => !!doc);
      // } catch (error) {
      //   console.log(error);
      // } finally {
      //   this.state.loading = false;
      // }

            var productsRef = await firebase.firestore().collection("stores");
            productsRef.onSnapshot((snap) => {
              this.stores = [];
              snap.forEach((doc) => {
                var store = doc.data();
                store.id = doc.id;
                this.stores.push(store);
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

.button {
  transition: 250ms ease-in-out;
}

.button:hover {
  background: #da9412;
  color: #ffffff;
  border-color: #da9412;
}
.buttons {
  min-width: 100px;
  display: flex;
  @media screen and (max-width: 500px) {
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
  border-radius: 5px;
}
.btn-store:hover {
  background: #da9412;
  color: #ffffff;
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

.card {
  position: relative;
  width: 220px;
  height: 250px;
  margin: 30px;
  background: rgb(5, 109, 134);
  border-radius: 30px;
  border-bottom-left-radius: 140px;
  border-bottom-right-radius: 140px;
  box-shadow: 0 15px 0 #da9412;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;

}
.card::before {
  content: "";
  position: absolute;
  top: -105px;
  left: -40px;
  width: 100%;
  height: 120%;
  // background: linear-gradient(90deg,transparent, rgba(255,255,255,0.16));
  transform: rotate(35deg);
  pointer-events: none;
  filter: blur(5px);
}
.icon {
  position: relative;
  width: 120px;
  height: 100px;
  background: #ffffff;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  box-shadow: 0 10px 0 #da9412;
  z-index: 1000;
  display: flex;
  justify-content: center;
  
}
.icon::before {
    content: "";
    position: absolute;
    top: 0;
    left: -30px;
    width: 30px;
    height: 30px;
    background: transparent;
    border-top-right-radius: 50px;
    box-shadow: 15px -15px 0 15px #d1dbec;
  }

.icon::after {
    content: "";
    position: absolute;
    top: 0;
    right: -30px;
    width: 30px;
    height: 30px;
    background: transparent;
    border-top-left-radius: 50px;
    box-shadow: -15px -15px 0 15px #d1dbec;
  }
  .icon .icon-icon {
    position: relative;
    font-size: 5em;
    z-index: 10000;
  }
  .content {
    position: absolute;
    width: 100%;
    padding: 20px;
    padding-top: 130px;
  }
  
</style>