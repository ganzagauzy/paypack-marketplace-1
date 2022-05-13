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
                                        <small class="small">WELCOME BACK</small>
                                       <br>
                                        <h4>Log In to your account</h4>
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
                                            <div class="form-text">
                                                <v-checkbox
                                                    v-model="checkbox"
                                                    class="checkbox"
                                                    :label="`Remember me: `"
                                                    ></v-checkbox>
                                                <nuxt-link to="/auth/reset"><small class="nuxt-link ">Forgot Password??</small></nuxt-link>
                                            </div>
                                            <v-card-actions>
                                                <v-btn block dark color="#153A5B" class="form-btn">Continue</v-btn>
                                            </v-card-actions>
                                            <div class="end-text">
                                                <small>New User?</small>
                                                <nuxt-link to="/auth/register"><small class="nuxt-link">SIGNUP HERE</small></nuxt-link>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -30px;
}
.checkbox {
    font-size: 10px;
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
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>