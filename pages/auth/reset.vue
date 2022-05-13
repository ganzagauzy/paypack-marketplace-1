<template>
  <div class="bg">
      <newnav />
      <div class="main"> 
          <v-container>
              <v-row>
                 
                  <v-col>
                      <div class="content">
                          <div class="form-head">
                              <v-card width="300" class="card-border">
                                    <div class="sub-form">
                                       <br>
                                        <h4>Reset Password</h4>
                                        <br>
                                        <p>Reset  password link will be sent to your email</p>
                                        <br>
                                        <p>Your new password must be different from previously used passwords</p>
                                        <br>
                                        <div class="form">
                                            <v-text-field
                                                label="Emal"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            
                                            
                                            <v-card-actions>
                                                <v-btn block dark color="#153A5B" class="form-btn">Continue</v-btn>
                                            </v-card-actions>
                                            <div class="end-text">
                                                
                                                <nuxt-link to="/auth/login"><small class="nuxt-link"> <v-icon>mdi-menu-left</v-icon>Back to login</small></nuxt-link>
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
.text h4 {
    margin-top: 150px;
    margin-bottom: 50px;
    color: #153A5B;
}
.text h3 {
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
    margin-top: -40px;
}
a {
    text-decoration: none;
}
.nuxt-link {
    color: #153A5B;
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
    justify-content: flex-end;
    align-items: center;
}
</style>