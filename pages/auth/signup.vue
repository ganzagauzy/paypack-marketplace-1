<template>
  <div>
      <v-container class="align">
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
                <v-form ref="form">
                  <v-text-field
                        outlined
                      v-model="shopname"
                      label="ShopName"
                      type="text"
                      :rules="inputRules"
                    ></v-text-field>
                
                <v-text-field
                      outlined
                      v-model="email"
                      label="Email"
                      type="email"
                      :rules="inputRules"
                    ></v-text-field>
                

                <v-text-field
                      outlined
                      v-model="password"
                      label="Password"
                      type="password"
                      required
                      :rules="inputRules"
                    ></v-text-field>
                </v-form>
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
                <p class="py-3 px-2">Already have account? <NuxtLink to="/auth/signin">Sign in</NuxtLink></p>
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
      shopname: '',
      errors: '',
      inputRules: [
        v => v.length >=3 || 'fill all'
      ],
    }),
    components: {},

    methods: {
        submit(){
            if(this.$refs.form.validate()) {
              firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {

                console.log(user.user.uid);
                if (firebase.auth().currentUser != null) {
                    firebase.auth().currentUser.updateProfile({
                        displayName: this.shopname
                    }).then(function () {
                        console.log("Updated");
                    }, function (error) {
                        console.log("Error happened");
                    });
                }

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
        }
    },
    
    layout: "empty",
  }
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
</style>