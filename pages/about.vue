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
          <h1>Get To Know About <span>PayPack </span> <br />Market Place</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
            Officiis unde, id cum dolorum natus nostrum, itaque eum ab amet modi
            sapiente dignissimos<br />
            odio at animi, incidunt voluptatibus. Corrupti, libero iste.
          </p>
          <v-btn elevation="0" color="primary" outlined> Read More </v-btn>
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
            src="~/assets/images/info.png"
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
      title: "About",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About page for PayPack Market Place",
        },
      ],
    };
  },
  mounted() {
    this.staggering();
  },
  methods: {
    staggering() {
      const gsap = this.$gsap;
      gsap.to(".box", {
        y: -20,
        stagger: 0.5,
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.box {
  width: 100px;
  display: flex;
  flex-direction: row;
  height: 100px;
  background-color: #00c58e;
}
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
  margin: 30px auto 80px;
  position: relative;
  line-height: 60px;
  color: #555;
}
.store-title::before {
  content: "";
  background: #da9412;
  width: 200px;
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
</style>