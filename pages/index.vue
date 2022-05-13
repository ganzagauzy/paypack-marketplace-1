<template>
  <div class="header-store">
    <div class="hero">
      <div>
        <v-container>
          <div>
            <v-row>
              <v-col>
                <div class="text">
                  <h1 class="main-text">
                    You Bring Your <span class="main-text-strong">Merch</span> <br> We provide the platform
                  </h1>
                  <p class="sub-text">
                    Paypack marketplace is paypack’s answer to the current e-commerce chaos. It gives you all the advantages of selling online without the hassle of putting up a new domain and all the marketing that goes into it.
                  </p>
                  <div class="nuxt-link">
                    <div class="nuxt-main-button">
                      <nuxt-link to="" class="nuxt-btn ">Explore Now</nuxt-link>
                      
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col>
                <div class="image">
                  image
                </div>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>
    <div class="section-one">
      <div>
        <v-container>
          <div>
            <div class="stores">
              <h2 class="section-title text-center pt-5">
              Top Stores
              <div class="underline"> <span></span> </div>
            </h2>
            <div class="top-stores">
              stores
            </div>
            </div>
            <div class="choose-us">
              <div class="chose-us-card">
                <v-card class="card-border">
                  <h3 class="card-header text-center py-5">Why Choosing Us</h3>
                  <v-container>
                    <div class="card-row">
                    <div class="card-col">
                      <div class="icon text-center">
                        <v-icon>
                          mdi-marker
                        </v-icon>
                      </div>
                      <h3 class="card-sub-text text-center pb-5">Made In Rwanda</h3>
                      <p class="card-sub-sub-text">
                        We share the best of Made in Rwanda with you! Our top priority is to bring the beauty, culture and craftmanship right to your door.
                      </p>
                    </div>
                    <div class="card-col">
                      <div class="icon text-center">
                        <v-icon>
                          mdi-home
                        </v-icon>
                      </div>
                      <h3 class="card-sub-text text-center pb-5">Direct to your door</h3>
                      <p class="card-sub-sub-text">
                        Say goodbye to rushing to do the shopping after a long day. Say hello to having exactly what you want delivered direct to your door. Complete convenience at your service.
                      </p>
                    </div>
                    <div class="card-col">
                      <div class="icon text-center">
                        <v-icon >
                          mdi-moped
                        </v-icon>
                      </div>
                      <h3 class="card-sub-text text-center pb-5">Fast Free Delivery</h3>
                      <p class="card-sub-sub-text">
                        If you're located in Kigali, we're offering you the option of free pick up at E-Commerce Center Rwanda or a flat fee for standard delivery this month! Take advantage of it while you can.
                      </p>
                    </div>
                    <div class="card-col">
                      <div class="icon text-center">
                        <v-icon>
                          mdi-handshake
                        </v-icon>
                      </div>
                      <h3 class="card-sub-text text-center pb-5">Showcase Small businesses</h3>
                      <p class="card-sub-sub-text">
                        We are big supporters of small businesses right across Rwanda. This is a place where we shine a spotlight on their contribution to our nation.
                      </p>
                    </div>
                  </div>
                  </v-container>
                </v-card>
              </div>
            </div>
            <div class="buyer-seller">
              <div class="buyer-seller-btns">
                <nuxt-link to="" class="nuxt-btn-buyer">Become a Buyer</nuxt-link>
                <nuxt-link to="" class="nuxt-btn-seller">Become a Seller</nuxt-link>
              </div>
            </div>
            <div class="Partners">
              <h2 class="section-title text-center pt-5">
              Our Partners
              <div class="underline"> <span></span> </div>
            </h2>
            <div class="top-partners">
              <div class="partner-card pt-10">
                <v-card>
                  <div class="chips">
                    <chips />
                  </div>
                </v-card>
              </div>
            </div>
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import Chips from '../components/chips.vue';
export default {
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "home page for PayPack Market Place",
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
  comments: {
    Chips
  },
  layout: "",
};
</script>



<style lang="scss" scoped>
.hero {
  background: #E5E5E5;
}
.text {
  margin-top: 50px;
  color: #153A5B;
}

.main-text-strong {
  color: #da9412;
}
.sub-text {
  margin: 5px 20px;
}
.nuxt-main-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 30px;
  margin-bottom: 50px;
}
.nuxt-btn {
  background: #153A5B;
  color: #fff;
  text-decoration: none;
  padding: 5px 20px;
  z-index: 100;
  border-radius: 5px;
  position: relative;
}
.nuxt-btn::before {
  border: 2px solid #153A5B;
  border-radius: 5px;
  content: '';
  position: absolute;
  width: 135px;
  height: 35px;
  left: 5px;
  bottom: 1;
}

// section one
.section-title  {
  color: #153A5B;
  position: relative;
}
.underline {
  width: 50px;
  height: 3px;
  background: #da9412;
  border-radius: 3px;
  position: absolute;
  top: 60px;
  right: 530px;
}

// choose us
.choose-us {
  margin-bottom: 50px;
}
.chose-us-card {
  margin-top: 50px;
  border-radius: 10px;
}
.card-border {
  border-radius: 10px;
}
.card-header {
  color: #da9412;
}

.card-row {
  width: 85%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  color: #153A5B;
  
  
}
.card-col {
  padding: 0 auto;
  flex-basis: 25%;
}
.card-sub-sub-text {
  font-size: 12px;
  margin: 0 20px;
}

//buy sell
.buyer-seller {
  margin: 50px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.buyer-seller-btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nuxt-btn-buyer {
  background: #153A5B;
  color: #fff;
  text-decoration: none;
  padding: 5px 20px;
  z-index: 100;
  border-radius: 5px;
  position: relative;
  margin-right: 30px;
}
.nuxt-btn-buyer::before {
  border: 2px solid #153A5B;
  border-radius: 5px;
  content: '';
  position: absolute;
  width: 165px;
  height: 35px;
  left: 5px;
  bottom: 1;
}

.nuxt-btn-seller {
  background: #da9412;
  color: #fff;
  text-decoration: none;
  padding: 5px 20px;
  z-index: 100;
  border-radius: 5px;
  position: relative;
}
.nuxt-btn-seller::before {
  border: 2px solid #da9412;
  border-radius: 5px;
  content: '';
  position: absolute;
  width: 165px;
  height: 35px;
  left: 5px;
  bottom: 1;
}
// parteners
.partner-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}










.top {
  margin-top: 100px;
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
</style>