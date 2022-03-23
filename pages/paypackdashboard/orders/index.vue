<template>
  <div>
      <div>
        <v-card>
          <v-toolbar
            flat
            color=""
            class="headerstore accent"
            
          >
            <v-toolbar-title>Orders</v-toolbar-title>
          </v-toolbar>
          <v-tabs >
            <v-tab>
              <v-icon left>
                mdi-check
              </v-icon>
              Completed
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-loading
              </v-icon>
              Pending
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-cancel
              </v-icon>
              Cancelled
            </v-tab>

            <v-tab-item > 
              <v-card flat class="headerstore accent">
                <v-card-text>
                  <orderscomplete />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat class="headerstore accent">
                <v-card-text>
                  <orderspending />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat class="headerstore accent">
                <v-card-text>
                  <orderscancelled />
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </div>
  </div>
</template>

<script>
import Orderscomplete from '../../../components/orderscomplete.vue'
import orderspending from '../../../components/orderspending.vue'
export default {
  components: { orderspending, Orderscomplete },
layout: "Dashboard",
}
</script>

<style>

</style>