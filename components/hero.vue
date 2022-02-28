<template>
  <div class="">
    <div class="hero">
      <img class="" src="~/assets/images/movieHero.jpg" />
      <div class="text-container">
        <div class="text">
          <span class="mini-heading">Now Selling</span>
          <h1>Get A <span>Store</span> For Yourself</h1>
          <p class="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            similique, <br />
            placeat molestiae nulla consequuntur ex id nam deserunt commodi
            tenetur.
          </p>
          <v-btn outlined class="btn" nuxt to="/auth/signup"
            >Register Now</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "",
};
</script>

<style lang="scss" scoped>
.img {
  max-height: 200px;
  object-fit: cover;
  @media (max-width: 500px) {
    max-width: 300px;
    object-fit: cover;
  }
}
.btn {
  background: #da9412;
}
h1 span {
  color: #da9412;
  font-size: 55px;
  font-weight: 700;
}
.color {
  background: #da9412;
}
.hero {
  height: 400px;
  position: relative;
  @media (min-width: 750px) {
    height: 500px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text-container {
    z-index: 99;
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text {
      padding: 0 16px;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }
    .mini-heading {
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      color: #d1dbec;
      margin-bottom: 8px;
      @media (min-width: 750px) {
        font-size: 22px;
      }
    }
    .paragraph {
      color: #fff;
    }
    h1 {
      color: #fff;
      font-size: 24px;
      font-weight: 200;
      margin-bottom: 8px;
      @media (min-width: 750px) {
        font-size: 44px;
      }
      span {
        font-weight: 500;
      }
    }
    .button {
      font-size: 20px;
      align-self: flex-start;
    }
  }
}
</style>