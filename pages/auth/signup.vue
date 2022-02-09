<template>
  <div>
      <v-container>
        <div class="center">
          <v-card width="500"
            class="">
                <v-toolbar
                flat
                color=""
                dark
                class=""
                >
                <v-toolbar-title class="">SIGNUP</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                <v-text-field
                      
                      label="Name"
                      type="text"
                    ></v-text-field>
                <v-divider class="my-2"></v-divider>
                <v-text-field
                      v-model="email"
                      label="Email"
                      type="email"
                    ></v-text-field>
                <v-divider class="my-2"></v-divider>

                <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                </v-card-text>

                <v-divider></v-divider>
                {{ errors }}
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color=""
                    dark
                    @click="submit"
                >
                    Signup
                </v-btn>
                </v-card-actions>
                <p class="py-3">Already have account? <NuxtLink to="/auth/signin">Sign in</NuxtLink></p>
            </v-card>
      </div>
      </v-container>
  </div>
</template>

<script>
import db from "../../plugins/firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



  export default {
    data: () => ({
      email: '',
      password: '',
      name: '',
      errors: ''
    }),
    components: {},

    methods: {
        submit(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {

                console.log(user.user.uid);

                db.collection("users").doc(user.user.uid).set({
                  name: user.user.uid
                }).then(() => {
                  console.log("document written");
                }).catch(error => {
                  console.log("error", error);
                })
                // alert(user)

                this.$router.push('/auth/signin')
            }).catch(error => {
                this.errors = error

            })
        }
    },
    
    layout: "empty",
  }
</script>
<style scoped>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>