<template>
  <div class="bg">
      <newnav />
      <div class="main"> 
          <v-container>
              <v-row>
                  <v-col>
                      <div class="content">
                          <div class="text">
                              <h3 class="head">Paypack Market Place</h3>
                              <h2 class="sub-head">Building the <br>Future...</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quaerat ipsum neque, et tempore alias vitae hic sunt earum maxime.</p>
                          </div>
                      </div>
                  </v-col>
                  <v-col>
                      <div class="">
                          <div class="form-head">
                              <v-card width="300" class="card-border">
                                    <div class="sub-form">
                                        <small class="small">LET'S GET YOU STARTED</small>
                                       <br>
                                        <h4>Create an Account</h4>
                                        <div class="form">
                                            <v-text-field
                                                label="Emal"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-text-field
                                                label="Emal"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-text-field
                                                label="Password"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <div class="form-text">
                                                
                                                <small>By Signing up you agree to the <span class="strong-text"> Terms and Conditions, Return Policy</span> and <span class="strong-text"> Privacy Policy</span></small>
                                            </div>
                                            <v-card-actions>
                                                <v-btn block dark color="#153A5B" class="form-btn">Continue</v-btn>
                                            </v-card-actions>
                                            <div class="end-text">
                                                <small>Already have an account? </small>
                                                <nuxt-link to="/auth/login"> <small class="nuxt-link">LOGIN HERE</small></nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </v-card>
                          </div>
                      </div>
                  </v-col>
              </v-row>
          </v-container>
      </div>
      
  </div>
</template>

<script>
import newnav from '../../components/newnav.vue'
export default {
  components: { newnav },
  data () {
      return {
        checkbox: true,
      }
    },
layout: "empty"
}
</script>

<style lang="scss" scoped>
.main {
    background: #E5E5E5;
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
}
.text h3 {
    margin-top: 150px;
    margin-bottom: 50px;
    color: #153A5B;
}
.text h2 {
    margin-bottom: 10px;
    color: #153A5B;
}
.text p {
    color: #153A5B;
    width: 400px;
}
.form-head {
    margin-top: 50px;
}
.sub-form {
    color: #153A5B;
    padding: 20px;
}
.sub-form h4 {
    margin-top: 5px;
}
.card-border {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.small {
    margin-bottom: 30px;
}
.form {
    margin-top: 20px;
}
.form-text {
    font-size: 10px;
    margin-bottom: 10px;
}
.strong-text {
    color: #039BE5;
}
a {
    text-decoration: none;
}
.nuxt-link {
    color: #039BE5;
}
.decoration {
    text-decoration: #039BE5;
}
.form-btn {
    margin-bottom: 30PX;
}
.end-text {
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>