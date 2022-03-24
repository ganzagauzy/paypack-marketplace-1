<template>
  <div>
      <div>
        <v-card>
          <v-toolbar
            flat
            color=""
            class="headerstore accent"
            
          >
            <v-toolbar-title>Growth Rate</v-toolbar-title>
          </v-toolbar>
          <v-tabs >
            <v-tab>
              <v-icon left>
                mdi-account-multiple
              </v-icon>
              Users
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-upload
              </v-icon>
              Revenue
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-cart
              </v-icon>
              Orders
            </v-tab>

            <v-tab-item > 
              <v-card flat class="headerstore accent">
                <v-card-text>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat class="headerstore accent">
                <v-card-text>
                  <div class="chart-div">
                    <revenuechart />
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat class="headerstore accent">
                <v-card-text>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </div>
  </div>
</template>

<script>

export default {
layout: "Dashboard",
}
</script>

<style>

</style>