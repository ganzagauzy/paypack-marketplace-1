<template>
  <div>
      <ul>
        <li v-for="order in Myorders" :key="order.id">
          <p>{{order}} {{order.userId}}</p>
        </li>
      </ul>
      <div>
        <orders />
      </div>
  </div>
</template>

<script>
import db from "../../plugins/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Orders from '../../components/Orders.vue';
export default {
  components: { Orders },
  data () {
    return {
      Myorders: [],
    }
  },


    layout: "admin",
  //   computed: {
  //   orders() {
  //     return this.$store.getters.orders;
  //   },
  // },
  created() {
    this.initialize();
    this.getOrders();
  },
  methods: {
    initialize() {
      this.Myorders = [];
    },
    getOrders () {
      const uid = sessionStorage.getItem("user_id");
      console.log(uid);
      this.Myorders = this.$store.getters.orders
      this.Myorders = this.Myorders.filter((product, i) => {
          return (
            i ==
            this.Myorders.findIndex((p) => p.userId == uid)
          );
        });
    }
  },

}
</script>

<style>

</style>