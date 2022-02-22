<template>
  <div class="">
    

    
    <Hero />
    <v-container class="py-5">
    
    </v-container>
      
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
  @media (max-width: 500px) {
    max-width: 300px;
    object-fit: cover;
  }
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