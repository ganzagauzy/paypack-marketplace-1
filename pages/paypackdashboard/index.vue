<template>
  <div>
    
      <div class="py-5">
          <div>
           <v-row>
             <v-col cols="12" md="6">
               <h3 class="text-center">Users</h3>
               <div class="chart-div">
                  <userschart
                    :userchartData="userchartData"
                    :useroptions="userchartOptions"
                    class="line-chart"
                      />
                </div>
             </v-col>
             <v-col cols="12" md="6">
               <h3 class="text-center">Revenues</h3>
               <div class="chart-div">
                    <revenuechart 
                      :revenuechartData="revenuechartData"
                      :revenueoptions="revenuechartOptions"
                       />
                  </div>
             </v-col>
             <v-col cols="12" md="6">
               <h3 class="text-center">Orders</h3>
               <div class="chart-div">
                    <orderschart 
                      :orderchartData="orderchartData"
                      :orderoptions="orderchartOptions"
                      class="line-chart"
                       />
                  </div>
             </v-col>
           </v-row>
          </div>
      </div>
  </div>
</template>



<script>
import orderschart from '../../components/orderschart.vue';

export default {
  components: { orderschart },

  data() {
    return {
      userchartData: {
        labels: ["jan", "feb", "mar", "apr"],
        datasets: [
        {
          label:"Number",
          // borderColor: "#4bcc96",
          // backgroundColor: '#da9412',
          backgroundColor: '#B67805',
          pointBackgroundColor: "000",
          pointRadius: 4,
          pointHoverRadius: 8,
          pointRadius: 4,
          pointerHoverBackgroundColor: "303030",
          borderWidth: 4,
          // fill: false, 
          data: [100,150,90,80]
        },
        ]
      },

      userchartOptions: {
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
      },

      revenuechartData: {
        labels: ["jan", "feb", "mar", "apr"],
        datasets: [
        {
          label:"Number",
          // borderColor: "#4bcc96",
          backgroundColor: '#B67805',
          pointBackgroundColor: "000",
          pointRadius: 4,
          pointHoverRadius: 8,
          pointRadius: 4,
          pointerHoverBackgroundColor: "303030",
          borderWidth: 4,
          // fill: false, 
          data: [80,100,90,150]
        },
        ]
      },
      
      revenuechartOptions: {
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
      },
      orderchartData: {
        labels: ["jan", "feb", "mar", "apr"],
        datasets: [
        {
          label:"Number",
          // borderColor: "#4bcc96",
          backgroundColor: '#B67805',
          pointBackgroundColor: "000",
          pointRadius: 4,
          pointHoverRadius: 8,
          pointRadius: 4,
          pointerHoverBackgroundColor: "303030",
          borderWidth: 4,
          // fill: false, 
          data: [80,100,150,90]
        },
        ]
      },
      
      orderchartOptions: {
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
      },
    };
  },
layout: "Dashboard",
}
</script>

<style lang="scss" scoped>

</style>
