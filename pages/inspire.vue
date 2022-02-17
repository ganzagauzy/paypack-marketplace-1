<template>
 <div>
  <v-row>
    <v-col class="text-center">
      <!-- <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      > -->
      <blockquote class="blockquote">
        &#8220;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, illum. Officiis quibusdam ipsum nostrum laboriosam harum ad laudantium eum quasi praesentium deleniti quis cum tempora saepe, iste, ipsam inventore reiciendis. Ea, doloribus! Exercitationem eum maxime ea vitae ex numquam fugiat. Architecto impedit culpa error! Sequi placeat voluptas fugiat! Non, molestiae.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
  

  



 </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { VueEditor } from "vue2-editor";
import { doc, deleteDoc } from "firebase/firestore";

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import db from "../plugins/firebase";
import 'firebase/compat/storage'

export default {
   data() {
    return {
      show: false,
      products: [],
      size: '',
      user: "",
      product: "",
      // product: {
      //   name: '',
      //   description: '',
      // },

    }
  },
  created() {
    this.readData();
  },
  methods: {

    initialize() {
      this.products = [];
    },

      async readData() {
    //   db.collection("desserts2").get().then((querySnapshot) =>{
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, "=>",doc.data());
    //     this.products = doc.data();
    //     this.products.push(doc.data())
    //   })
    // })

    var productsRef = await firebase.firestore().collection("published");

    const uid = sessionStorage.getItem("user_id")

       
      productsRef.onSnapshot((snap) => {
      this.size = snap.size
      this.products = [];
      snap.forEach((doc) => {
        var product = doc.data();
        product.id = doc.id;
        this.products.push(product);
      });
    });

  

  },


  },
  
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
