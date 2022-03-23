<template>
  <v-app app class="header-store accent">
    <navigation />
    <v-main>
      <v-container class="py-10">
        <v-card class="shadow mx-auto" max-width="400">
          <v-window v-model="step">
            <v-window-item :value="1">
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
                      SIGN IN
                    </h5>
                    <h4></h4>
                    <v-form @submit.prevent="login" class="px-4">
                      <label>Email</label>
                      <v-text-field
                        cols="12"
                        v-model="email"
                        type="email"
                        outlined
                        dense
                      ></v-text-field>

                      <label>Password</label>
                      <v-text-field
                        v-model="password"
                        type="password"
                        outlined
                        dense
                      ></v-text-field>
                      
                     
                      <div class="text-center mb-3">
                        <v-btn
                          type="submit"
                          block
                          elevation="0"
                          color="primary"
                        >
                          Sign in
                        </v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                  <v-card-text>
                    <p
                      class="text-center"
                      style="font-size: 15px; font-weight: 600"
                      
                    >
                      {{ errors }}
                      
                    </p>
                    
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>

           
           
            
          </v-window>
        </v-card>

        <v-snackbar v-model="snackbar" shaped color="primary" right top>
          <v-icon>{{ icon }}</v-icon> {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color=""
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
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
    email: "",
    password: "",
    errors: "",
    step: "",
    name: "",
    text: "",
    icon: "mdi-checkbox-marked-circle",
    snackbar: false,
    shopname: "",
    telephone: "",
    description: "",
    errors: "",
    inputRules: [(v) => v.length >= 3 || "fill all"],
  }),

  methods: {
    
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
            if (user.user.email == "paypack@me.com") {
                if (!firebase.auth().currentUser.emailVerified) {
              //resend verification email
              user.user.sendEmailVerification()
              
              console.log(user);
              this.text = "Successfull Loged in and email verification is sent to your email!";
              this.snackbar = true;
              // sessionStorage.setItem("user_id", user.user.uid);
              // sessionStorage.setItem("shop_name", user.user.displayName);
              this.$router.push("/paypackdashboard");
          } else {
              //login
              
          }
            }
            else {
                this.errors = "you have no  access";
            }
          
          
        })
        .catch((error) => {
          this.errors = error;
          console.log({ error });
          if (error.code) {
            switch (error.code) {
              case "auth/network-request-failed":
                this.errors = "Network error while trying to authenticate.";
                break;
              case "auth/user-not-found":
                this.errors = "Email or password not found.";
                break;
              default:
                this.errors = error.message;
                break;
            }
          }
        });
    },
    
   
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