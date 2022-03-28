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
                  <div class="chart-div">
                    <userschart
                      :chartData="chartData"
                      :options="chartOptions"
                      class="line-chart"
                       />
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat class="headerstore accent">
                <v-card-text>
                  <div class="chart-div">
                    <revenuechart 
                      :chartData="chartData"
                      :options="chartOptions"
                       />
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat class="headerstore accent">
                <v-card-text>
                  <div class="chart-div">
                    <orderschart 
                      :chartData="chartData"
                      :options="chartOptions"
                      class="line-chart"
                       />
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </div>
  </div>
</template>

<script>
import orderschart from '../../../components/orderschart.vue';

export default {
  components: { orderschart },

  data() {
    return {
      chartData: {
        labels: ["jan", "feb", "mar", "apr"],
        datasets: [
        {
          label:"Number",
          borderColor: "#4bcc96",
          pointBackgroundColor: "000",
          pointRadius: 4,
          pointHoverRadius: 8,
          pointRadius: 4,
          pointerHoverBackgroundColor: "303030",
          borderWidth: 4,
          fill: false, 
          data: [100,150,5,50]
        },
        ]
      },
      chartOptions: {
        maintainAspectRatio:false,
        responsive: true,
        tooltips: {
          backgroundColor: "#000055e",
          titleFontColor: "#ffffff",
          bodyFontColor: "#ffffff",
          position: "nearest",
          mode: "nearest",
          intersect: 0,
          bodySpacing: 4,
          xPadding: 20,

        }
      }
    };
  },
layout: "Dashboard",
}
</script>

<style lang="scss" scoped>
.line-chart {
  width: 70vw;
 
}
</style>