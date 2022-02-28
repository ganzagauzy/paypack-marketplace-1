<template>
  <div>
    <v-toolbar flat  class="align-center background">
          <v-toolbar-title class="nav text-center "><span>PayPack Market Place</span></v-toolbar-title>
        </v-toolbar>
        <NuxtLink to="/" class="btn"><span class="nuxt-btn">Home</span></NuxtLink>
  </div>
        
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>


.nav {
    display: flex;
    justify-content: center;
    align-items: center;
}
span {
    display: flex;
    justify-content: center;
}
.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #DA9412;
  text-align: center;
}
.background {
  background: #DA9412;
}
a {
  text-decoration: none;
  color: #111;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  max-width: 100px;
  padding-left: 50%;
}
.btn span {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  background: #111;
  
}
.btn span:hover {
  border: none;
  
}

</style>