<template>
  <div>
    <v-container>
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
          ></v-text-field>
          

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
          ></v-text-field>
        </v-card-text>

        
        
        
        {{ errors }}

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" dark @click="submit"> Signin </v-btn>
        </v-card-actions>
        <p class="p-1">
          Don't have account? <NuxtLink to="/auth/signup">Sign up</NuxtLink>
        </p>
        <a @click="forgotPassword">Forgot Pasword?</a>
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
          this.$router.push("/");
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
<style scoped>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>