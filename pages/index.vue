<template>
  <div class="header-store">
    <v-container>
      <div class="row">
        <div
          class="cols-2 px-2"
          v-gsap.fromTo="[
            { opacity: 0, x: -350 },
            { opacity: 1, x: 0, duration: 2 },
          ]"
        >
          <h1>You bring <span>your merch</span> <br />we provide the platform</h1>
          <p>
            Paypack marketplace is paypack’s answer to the current e-commerce chaos. 
            It gives you all the advantages of selling online without the hassle of 
            putting up a new domain and all the marketing that goes into it. 
            
          </p>
          <NuxtLink to="/about" class="btn-store">Explore Now</NuxtLink>
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
            src="~/assets/images/market.png"
          />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
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
  layout: "",
};
</script>



<style lang="scss" scoped>
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