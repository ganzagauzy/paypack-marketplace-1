<template>
  <v-app dark>
    <div>
       <div class="hero">
          <!-- <img class="" src="~/assets/images/movieHero.jpg" /> -->
          <img class="" src="https://media.giphy.com/media/fsnNgnq0CSeTLU9pW6/giphy.gif" />
          <div class="text-container">
            <div class="text-center">
              <h1 v-if="error.statusCode === 404">
              {{ pageNotFound }}
              <br>
              Fly Back Home
            </h1>
            <h1 v-else>
              {{ otherError }}
              <br>
              Fly Back Home
            </h1>
            <NuxtLink to="/" class="btn">
              <v-icon dark>mdi-arrow-left</v-icon> Home
            </NuxtLink>
            </div>
          </div>
        </div>
      
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404(Page) Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>


<style lang="scss" scoped>
.img {
  max-height: 100%;
  object-fit: cover;
  @media (max-width: 500px) {
    max-width: 100%;
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
  height: 100vh;
  position: relative;
  @media (min-width: 750px) {
    height: 100vh;
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
  a {
    display: inline-block;
  }
  .btn {
    display: inline-block;
    padding: 10px 50px;
    color: #fff;
    text-decoration: none;
    border-radius: 20px;
    background: none;
    border: 1px solid #fff;
  }
}
</style>
