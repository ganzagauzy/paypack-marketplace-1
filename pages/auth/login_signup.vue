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
                    <v-form class="px-4">
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
                      {{ errors }}
                      <div class="text-center mb-3">
                        <v-btn
                          block
                          elevation="0"
                          color="primary"
                          @click="login"
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
                      Don't have an account?
                      <span class="text-link" @click="step++"
                        >Register Here</span
                      >
                    </p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text>
                <h5
                  class="
                    text-center
                    font-weight-bold
                    text-h5
                    font-primary
                    card-height
                  "
                >
                  Register an Account
                </h5>
                <v-form ref="form">
                  <div>
                    <label for="">Names</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="name"
                      type="text"
                      :rules="inputRules"
                    ></v-text-field>
                  </div>
                  <div>
                    <label for="">Telephone</label>
                    <v-text-field
                      dense
                      outlined
                      type="tel"
                      v-model="telephone"
                      :rules="inputRules"
                    ></v-text-field>
                  </div>
                  <div>
                    <label for="">Shop Name</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="shopname"
                      type="text"
                      :rules="inputRules"
                    ></v-text-field>
                  </div>
                  <div class="text-center mt-3">
                    <v-btn block color="primary" @click="step++">Next</v-btn>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-text>
                <p
                  class="text-center"
                  style="font-size: 15px; font-weight: 600"
                >
                  Already have an account?
                  <span class="text-link" @click="step--">Sign In</span>
                </p>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="3">
              <v-card-text>
                <h3
                  class="
                    text-center
                    font-primary font-weight-bold
                    text-h5
                    card-height
                  "
                >
                  Finish last steps
                </h3>
                <h4></h4>
                <v-form ref="form">
                  <div>
                    <label for="">Description</label>
                    <v-textarea
                      clearable
                      auto-grow
                      rows="3"
                      row-height="20"
                      clear-icon="mdi-close-circle"
                      v-model="description"
                      type="text"
                      outlined
                      required
                      :rules="inputRules"
                      dense
                    ></v-textarea>
                  </div>
                  <div>
                    <label for="">Email</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="email"
                      type="email"
                      :rules="inputRules"
                    ></v-text-field>
                  </div>
                  <div>
                    <label for="">Password</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="password"
                      type="password"
                      required
                      :rules="inputRules"
                    ></v-text-field>
                    {{ errors }}
                  </div>
                  <div class="text-center mt-3">
                    <v-btn block color="primary" @click="submit">
                      Register
                    </v-btn>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-text>
                <p
                  class="text-center"
                  style="font-size: 15px; font-weight: 600"
                >
                  Already have an account?
                  <span class="text-link" @click="step -= 2">Sign In</span>
                </p>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>

        <v-snackbar v-model="snackbar" shaped color="success" right top>
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
    submit() {
      if (this.$refs.form.validate()) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log(user.user.uid);
            if (firebase.auth().currentUser != null) {
              firebase
                .auth()
                .currentUser.updateProfile({
                  displayName: this.shopname,
                  phoneNumber: this.telephone,
                  email: this.email,
                })
                .then(
                  function () {
                    console.log("Updated");
                  },
                  function (error) {
                    console.log("Error happened");
                  }
                );
            }

            db.collection("users")
              .doc(user.user.uid)
              .set({
                id: user.user.uid,
                username: this.name,
                shopname: this.shopname,
                telephone: this.telephone,
                description: this.description,
              })
              .then(() => {
                console.log("document written");
                this.text = "Successfull Created Account!";
                this.snackbar = true;
              })
              .catch((error) => {
                console.log("error", error);
              });
            // alert(user)

            // this.$router.push('/auth/login_signup')
            this.step = 1;
          })
          .catch((error) => {
            this.errors = error;
          });
      }
    },

    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
          this.text = "Successfull Loged in!";
          this.snackbar = true;
          sessionStorage.setItem("user_id", user.user.uid);
          this.$router.push("/products");
        })
        .catch((error) => {
          this.errors = error;
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