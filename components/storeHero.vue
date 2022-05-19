<template>
  <v-window show-arrows>
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color=""
        v-bind="attrs"
        v-on="on"
      >-</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color=""
        
        v-bind="attrs"
        v-on="on"
      >+</v-btn>
    </template>
    <v-window-item
      v-for="n in 10"
      :key="`card-${n}`"
    >
      <v-card
        color="grey"
        height="200"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h1
            style="font-size: 5rem;"
            class="white--text"
          >
            Slide {{ n }}
          </h1>
        </v-row>
      </v-card>
    </v-window-item>
  </v-window>
</template>