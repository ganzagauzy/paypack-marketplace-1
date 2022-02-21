<template>
  <div class="">
    <v-row class="">
      <v-col cols="12" md="6" class="full-width">
        <h1>Sell <span>Online</span> Now</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quas error porro doloremque eius molestias, quisquam rerum itaque? Doloribus eveniet beatae voluptates, libero doloremque incidunt nulla ipsam cupiditate in molestiae?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quas error porro doloremque eius molestias, quisquam rerum itaque? Doloribus eveniet beatae voluptates, libero doloremque incidunt nulla ipsam cupiditate in molestiae?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quas error porro doloremque eius molestias, quisquam rerum itaque? Doloribus eveniet beatae voluptates, libero doloremque incidunt nulla ipsam cupiditate in molestiae?</p>
        <v-btn nuxt class="color"
            to="/auth/signup" outlined >sign up now</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="6">
        <img class="img" src="~/assets/images/cart1.png" />
      </v-col>
    </v-row>
      
  </div>
</template>

<script>
export default {
  layout: '',
}
</script>

<style lang="scss" scoped>
.img {
  max-width: 500px;
  object-fit: cover;
}
.full-width {
  max-width: 100%;
}
h1 span {
  color: #DA9412;
  font-size: 55px;
  font-weight: 700;
}
.color {
  background: #DA9412;
}
</style>