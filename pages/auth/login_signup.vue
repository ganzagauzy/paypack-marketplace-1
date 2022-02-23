<template>
<div class="header-store">
    <navigation />
    
    <v-container class="container">
        <v-row align="center" justify="center">
            <v-col
            cols="12"
            md="8"
            sm="8">
            <v-card class="elevation-12 ">
                <v-window v-model="step">
                    <v-window-item :value="1">
                        <v-row class="">
                            <v-col cols="12"
                            md="8">
                            <v-card-text class="mt-12">
                                <h3 class="text-center display-2  text--accent-3 card-height">
                                    Sign in PayPAck MArket Place
                                </h3>
                                <h4></h4>
                                <v-form>
                                    <v-text-field
                                        v-model="email"
                                        label="Email"
                                        type="email"
                                        outlined
                                        dense
                                    ></v-text-field>
                                    

                                    <v-text-field
                                        v-model="password"
                                        label="Password"
                                        type="password"
                                        outlined
                                        dense
                                    ></v-text-field>
                                    {{errors}}
                                </v-form>
                                <br>
                                <h3 class="text-center mt-3 py-3">Forgot Your Paswword?</h3>


                            </v-card-text>
                            <div class="text-center mt-3 button">
                                <v-btn  @click="login" text class="btn" >Sign in</v-btn>
                            </div>
                            </v-col> 
                            <v-col cols="12" md="4" class="text--accent-3 card-color">
                                <v-card-text class="mt-12 align">
                                    <h3 class="text-center display-1">
                                        Welcome BAck !!!!
                                    </h3>
                                    <h5 class="text-center">
                                        Don't have acoount go to sign up
                                    </h5>
                                    
                                </v-card-text>
                                <div class="text-center button">
                                    <v-btn rounded class="" outlined="" @click="step++">Signup</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-window-item>
                    <v-window-item :value="2">
                        <v-row class="">
                            <v-col cols="12" md="4" class="text--accent-3 card-color">
                                <v-card-text class="mt-12 align">
                                    <h3 class="text-center display-1">
                                        Hello There !!!!!
                                    </h3>
                                    <h5 class="text-center">
                                        Already have anaccount go to sign in please!!
                                    </h5>
                                    
                                </v-card-text>
                                <div class="text-center button">
                                    <v-btn rounded outlined="" @click="step--">Signin</v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12"
                            md="8">
                            <v-card-text class="mt-12">
                                <h3 class="text-center display-2  text--accent-3 card-height">
                                    Create Account on PayPack MArket Place
                                </h3>
                                <h4></h4>
                                <v-form ref="form">
                                    <v-text-field
                                            
                                        dense
                                        outlined
                                        v-model="shopname"
                                        label="ShopName"
                                        type="text"
                                        :rules="inputRules"
                                        ></v-text-field>
                                    
                                    <v-text-field
                                        
                                        dense
                                        outlined
                                        v-model="email"
                                        label="Email"
                                        type="email"
                                        :rules="inputRules"
                                        ></v-text-field>
                                    

                                    <v-text-field
                                        
                                        dense
                                        outlined
                                        v-model="password"
                                        label="Password"
                                        type="password"
                                        required
                                        :rules="inputRules"
                                        ></v-text-field>
                                        {{errors}}
                                    </v-form>
                                


                            </v-card-text>
                            <div class="text-center mt-3 button">
                                <v-btn  text @click="submit" class="btn">Sign up</v-btn>
                            </div>
                            </v-col> 
                            
                        </v-row>
                    </v-window-item>
                </v-window>
            </v-card>

            </v-col>
        </v-row>

        <v-snackbar
      v-model="snackbar"
      shaped
      color="success"
      right
      top
    >
      <v-icon>{{ icon }}</v-icon> {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="#DA9412"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>


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
    email: "",
    password: "",
    errors: "",
    step: "",
    name: '',
    text: '',
    icon: "mdi-checkbox-marked-circle",
    snackbar: false,
    shopname: '',
    errors: '',
    inputRules: [
    v => v.length >=3 || 'fill all'
    ],
  }),
  
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
                  name: user.user.uid,
                  username: this.shopname
                }).then(() => {
                  console.log("document written");
                  this.text = "Successfull Created Account!"
                    this.snackbar = true
                }).catch(error => {
                  console.log("error", error);
                })
                // alert(user)

                // this.$router.push('/auth/login_signup')
                this.step = 1
            }).catch(error => {
                this.errors = error

            })
            }
        },

        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                console.log(user);
                this.text = "Successfull Loged in!"
                    this.snackbar = true
                sessionStorage.setItem("user_id", user.user.uid);
                this.$router.push("/adminwelcome");
                })
                .catch((error) => {
                this.errors = error;
            });
        },
    },
    

  layout: 'empty',

}
</script>

<style lang="scss" scoped>
.container {
    padding-top: 10%;
    padding-left: 20%;
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:600px) {
        padding-left: 0;
        padding-right: 0;
        
    }
}
.card-height {
    margin: 20px 0;
}

.card-color {
    background: #DA9412;
}
.button {
    margin: 20px 20px;
    
}
.btn {
    background: #DA9412;
}
.align {
    margin-top: 100px;
    @media screen and (max-width:600px) {
        margin-top: 10px;
    }
}
.header-store {
    min-height: 100vh;
   background: radial-gradient(#fff, #d1dbec);
}
</style>