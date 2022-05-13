<template>
  <v-sheet
    class="mx-auto "
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, }"
      >
        <v-card
          :color="active ? 'primary' : '#fff'"
          class="ma-4"
          height="100"
          width="100"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="avatar-image">
                <v-avatar size="82" >
                <img 
                    src="https://cdna.artstation.com/p/assets/images/images/013/667/868/large/soni-graphics-img-20180617-wa0024.jpg?1540617113"
                    alt="logo"
                >
                </v-avatar>
            </div>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<style lang="scss" scoped>
.avatar-image {
    padding-top: 20px;
}
</style>