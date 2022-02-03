<template>
  <div>
    

    <v-data-table
      :headers="headers"
      :items="products"
      sort-by="price"
      class="elevation-1 py-5"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title></v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="400px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="" dark class="mb-2" v-bind="attrs" v-on="on">
                New Product
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Product name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" >
                      <v-textarea
                        clearable
                        clear-icon="mdi-close-circle"
                        v-model="editedItem.description"
                        label="Description"
                        type="text"
                      ></v-textarea>
                    </v-col>

                    <v-col
                      cols="12"

                    >
                      <v-select
                        :items="['Rwf', 'SSD']"
                        label="Currency*"
                        v-model="editedItem.currency"
                      ></v-select>
                    </v-col>

                    <v-col
                      cols="12"

                    >
                      <v-autocomplete
                        :items="['Limited', 'Unlimited', ]"
                        label="Quantity"
                        v-model="editedItem.quantity"
                        multiple
                      ></v-autocomplete>
                    </v-col>

                    <v-col
                    cols="12"
                      >
                        <v-text-field
                          label="Price*"
                          v-model="editedItem.price"
                          type="number"
                        ></v-text-field>
                      </v-col>

                    <v-col
                    cols="12"
                      >
                        <label for="product_Image">Product Images</label>
                        <input type="file" @change="uploadImage" class="form-control">
                      </v-col>
                    <v-col

                    cols="12"
                    class="form-group d-flex"
                      >
                      <div v-for="(image, index) in editedItem.images" :key="index" class="pa-2">
                        <div class="img-wrapp">
                          <img :src="image" alt="" width="80px" >
                          <span class="delete-img" @click="deleteImage(image,index)">X</span>
                        </div>
                      </div>
                        
                      </v-col>
                    <!-- <v-col
                    cols="12"
                      >
                        <v-file-input
                          label="File input"
                          
                          prepend-icon="mdi-camera"
                          type="file"
                          @change="uploadImage"
                        ></v-file-input>
                      </v-col> -->
                      


                    <!-- <v-col cols="12" >
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Calories"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" >
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Fat (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" >
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" >
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col> -->
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="update"> Edit </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>

    <!-- <div v-for="(product, index) in products" :key="index" class="movie">
      <p>{{ product}}</p>
    </div> -->
  </div>
</template>

<script>
import { doc, deleteDoc } from "firebase/firestore";

import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
import "firebase/compat/firestore";
import db from "../plugins/firebase";
import 'firebase/compat/storage'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Product Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Description", value: "description" },
      { text: "Currency", value: "currency" },
      { text: "Quantity", value: "quantity" },
      { text: "Price", value: "price" },
      // { text: "Calories", value: "calories" },
      // { text: "Fat (g)", value: "fat" },
      // { text: "Carbs (g)", value: "carbs" },
      // { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      description: "",
      currency: "",
      quantity: "",
      price: '',
      images: []
      // calories: 0,
      // fat: 0,
      // carbs: 0,
      // protein: 0,
    },
    defaultItem: {
      name: '',
      description: '',
      currency: '',
      quantity: '',
      price: '',
      // calories: '',
      // fat: '',
      // carbs: '',
      // protein: '',
    },
    activeItem: null
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.readData();
  },

  methods: {
    initialize() {
      this.products = [];
    },

    uploadImage(e){

      if(e.target.files[0]){
           let file = e.target.files[0];
          var storageRef = firebase.storage().ref('products/'+doc.id+file.name);
          let uploadTask = storageRef.put(file);
          uploadTask.on('state_changed', 
          (snapshot) => {
          
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.editedItem.images.push(downloadURL)
              // console.log('File available at', downloadURL);
              console.log('File available at', this.editedItem.images);
            });
          }
        );
      }
      // console.log(e.target.files[0]);
    },

    deleteImage(img,index){
      let image = firebase.storage().refFromURL(img);

      this.editedItem.images.splice(index,1);
      image.delete().then( () => {
        console.log("image deleted");
      }).catch((error) => {
        console.log("an error occured");
      });
    },



    async readData() {
      //   db.collection("desserts2").get().then((querySnapshot) =>{
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, "=>",doc.data());
      //     this.products = doc.data();
      //     this.products.push(doc.data())
      //   })
      // })

      var productsRef = await firebase.firestore().collection("products");

      productsRef.onSnapshot((snap) => {
        this.products = [];
        snap.forEach((doc) => {
          var product = doc.data();
          product.id = doc.id;
          this.products.push(product);
        });
      });
    },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // this.product = product.data()
      // this.activeItem = product.id

    // db.collection("desserts2").doc(item.id).update({
    //     name: this.editedItem.name,
    //     calories: this.editedItem.calories,
    //     fat: this.editedItem.fat,
    //     carbs: this.editedItem.carbs,
    //     protein: this.editedItem.protein,
    // })
    // .then(() => {
    //     console.log("Document successfully updated!");
    // })
    // .catch((error) => {
        
    //     console.error("Error updating document: ", error);
    // });

      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      const itemID = this.products[this.editedIndex].id;
      this.products.splice(this.editedIndex, 1);

      db.collection("products")
        .doc(itemID)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });

      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    update() {
      const product = {}
      const itemID = this.products[this.editedIndex].id;

        db.collection("products").doc(itemID).update({
        name: this.editedItem.name,
        description: this.editedItem.description,
        currency: this.editedItem.currency,
        quantity: this.editedItem.quantity,
        price: this.editedItem.price,
        images: this.editedItem.images,
        // calories: this.editedItem.calories,
        // fat: this.editedItem.fat,
        // carbs: this.editedItem.carbs,
        // protein: this.editedItem.protein,
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            
            console.error("Error updating document: ", error);
        });
      


        
        // product.name = this.editedItem.name,
        // product.description = this.editedItem.description,
        // product.calories = this.editedItem.calories,
        // product.fat = this.editedItem.fat,
        // product.carbs = this.editedItem.carbs,
        // product.protein= this.editedItem.protein
        product.name = this.editedItem.name,
        product.description = this.editedItem.description,
        product.currency = this.editedItem.currency,
        product.quantity = this.editedItem.quantity,
        product.price = this.editedItem.price
        product.images = this.editedItem.images

        if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem);
        } else {
        // db.collection("desserts2")
        //   .add(product)
        //   .then(() => {
        //     console.log("added to db");
        //   });
        // this.products.push(this.editedItem)
      }

        
        
        

      

     
      this.close();
    },

    save() {
      const product = {}
      // const itemID = this.products[this.editedIndex].id;

      //   db.collection("desserts2").doc(itemID).update({
      //   name: this.editedItem.name,
      //   calories: this.editedItem.calories,
      //   fat: this.editedItem.fat,
      //   carbs: this.editedItem.carbs,
      //   protein: this.editedItem.protein,
      //   })
      //   .then(() => {
      //       console.log("Document successfully updated!");
      //   })
      //   .catch((error) => {
            
      //       console.error("Error updating document: ", error);
      //   });
      


        
        product.name = this.editedItem.name,
        product.description = this.editedItem.description,
        product.currency = this.editedItem.currency,
        product.quantity = this.editedItem.quantity,
        product.price = this.editedItem.price
        product.images = this.editedItem.images
        // product.calories = this.editedItem.calories,
        // product.fat = this.editedItem.fat,
        // product.carbs = this.editedItem.carbs,
        // product.protein= this.editedItem.protein

        if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem);
        } else {
        db.collection("products")
          .add(product)
          .then(() => {
            console.log("added to db");
          });
        this.products.push(this.editedItem)
      }

        
        
        

      

     
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  font-size: 20px;
  position: absolute;
  top: -3px;
  right: -15px;
}
.img-wrapp span.delete-img {
  cursor: pointer;
}

</style>
