<template>
  <div>
    <v-container class="align">
      <div class="center">
      <v-card width="500" class="">
        <v-toolbar flat color="" dark class="">
          <v-toolbar-title>SIGNIN</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            outlined
          ></v-text-field>
          

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            outlined
          ></v-text-field>
        </v-card-text>

        
        
        
        {{ errors }}

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" dark @click="submit"> Signin </v-btn>
        </v-card-actions>
        <p class="p-1 px-2">
          Don't have account? <NuxtLink to="/auth/signup">Sign up</NuxtLink>
        </p>
        <div class="py-3 px-2">
          <a @click="forgotPassword">Forgot Pasword?</a>
        </div>
      </v-card>
    </div>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  data: () => ({
    email: "",
    password: "",
    errors: "",
  }),
  components: {},

  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
          sessionStorage.setItem("user_id", user.user.uid);
          this.$router.push("/products");
        })
        .catch((error) => {
          this.errors = error;
        });
    },

    forgotPassword() {
      console.log("reset");
    },
  },

  layout: "empty",
};
</script>
<style lang="scss" scoped>
  
  .align {
    
    .center {
      
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 80px;
      @media (min-width: 500px) {
        padding-top: 80px;
      }
      @media (min-width: 750px) {
        padding-top: 80px;
      }
      @media (min-width: 1100px) {
        padding-top: 100px;
      }
     
    }
}
a {
  text-decoration: none;
}
</style>