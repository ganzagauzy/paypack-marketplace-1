<template>
  <v-app app class="header-store accent">
    <navigation />
    <v-main>
      <v-container class="py-10">
        <v-card class="shadow mx-auto" max-width="400">
          <v-window v-model="step">
            <v-window-item >
              <v-row>
                <v-col cols="12">
                  <v-card-text>
                    <h5
                      class="
                        text-center text-h6
                        font-weight-bold
                        text--accent-3
                        card-height
                        font-primary
                      "
                    >
                      Verify Your Acount
                    </h5>
                    <h4></h4>
                    
                  </v-card-text>
                  <v-card-text>
                    <p
                      class="text-center"
                      style="font-size: 15px; font-weight: 600"
                      
                    >
                      Verification email was sent to your email please go to your email and verify your account
                      
                    </p>
                    
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>

           
           
            
          </v-window>
        </v-card>

       
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import db from "../../plugins/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import navigation from "../../components/navigation.vue";

export default {
  layout: "auth",
  components: { navigation },
  data: () => ({
   
  }),

  methods: {
    
    
    
   
  },
};
</script>

<style lang="scss" scoped>
.card-height {
  margin: 10px 0;
}

.font-primary {
  font-family: var(--body-font) !important;
}

.card-color {
  background: #da9412;
}
.button {
  margin: 20px 20px;
}
.btn {
  background: #da9412;
}
.align {
  margin-top: 80px;
  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
}
.header-store {
  min-height: 100vh;
}
.text-link {
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: underline;
}
</style>