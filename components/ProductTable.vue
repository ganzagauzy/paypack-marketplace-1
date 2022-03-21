<template>
  <div class="header-store accent">
    <v-data-table
      :headers="headers"
      :items="products"
      sort-by="price"
      class="elevation-1 py-5 header-store accent"
    >
      <template v-slot:top>
        <v-toolbar flat class="header-store accent">
          <v-toolbar-title></v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="" dark class="mb-2" v-bind="attrs" v-on="on">
                New Product
              </v-btn>
            </template>
            <v-card>
              <v-app-bar color="#d1dbec" height="50px">
                <v-toolbar-title
                  ><span class="text-h6">{{ formTitle }}</span></v-toolbar-title
                >
              </v-app-bar>
               <v-form ref="form">
              <v-container>
                <v-row >
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Product name"
                      outlined
                      dense
                      required
                      :rules="inputRules"
                    ></v-text-field>
                    <vue-editor 
                      class="pb-1"
                      v-model="editedItem.description"
                      required
                      :rules="inputRules"
                    ></vue-editor>

                    <label for="product_Image">Product Images</label>
                    <input
                      type="file"
                      required
                      @change="uploadImage"
                      class="form-control"
                    />
                    <div class="form-group  img-grid">
                      <div
                        v-for="(image, index) in editedItem.images"
                        :key="index"
                        class="pa-2"
                      >
                        <div class="img-wrapp">
                          <img :src="image" alt="" width="80px" />
                          <span
                            class="delete-img"
                            @click="deleteImage(image, index)"
                            >X</span
                          >
                        </div>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-select
                      :items="['Rwf']"
                      label="Currency*"
                      v-model="editedItem.currency"
                      outlined
                      required
                      :rules="inputRules"
                      dense
                    ></v-select>
                    <v-select
                      :items="['Limited', 'Unlimited']"
                      label="Quantity*"
                      v-model="editedItem.quantity"
                      outlined
                      required
                      :rules="inputRules"
                      dense
                    ></v-select>
                    <v-text-field
                      label="Price*"
                      v-model="editedItem.price"
                      type="number"
                      required
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      label="Size"
                      v-model="editedItem.size"
                      type="number"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      label="Category*"
                      v-model="editedItem.category"
                      outlined
                      required
                      :rules="inputRules"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              </v-form>
              {{error}}

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="" @click="close">
                  <v-icon left> mdi-close </v-icon>Close
                </v-btn>
                <v-btn color="" @click="update">
                  <v-icon left> mdi-pencil </v-icon>Edit
                </v-btn>

                <v-btn color="" @click="save">
                  <v-icon left> mdi-upload </v-icon> Save
                </v-btn>
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

 

    <v-snackbar v-model="snackbar" shaped color="primary"
      dark right top >
      <v-icon>{{ icon }}</v-icon> {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="snackbar2" shaped color="primary"
      dark right top>
      <v-icon>{{ icon }}</v-icon> {{ text2 }}

      <template v-slot:action="{ attrs }">
        <v-btn color="" text v-bind="attrs" @click="snackbar2 = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { doc, deleteDoc } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../plugins/firebase";
import "firebase/compat/storage";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    snackbar: false,
    snackbar2: false,
    text: "",
    error: "",
    text2: "",
    content: "<h1>Some initial content</h1>",
    icon: "mdi-checkbox-marked-circle",
    inputRules: [(v) => v.length >= 3 || "fill all"],
    headers: [
      {
        text: "Product Name",
        align: "start",
        sortable: false,
        value: "name",
      },

      { text: "Images", value: `images.length` },
      { text: "Currency", value: "currency" },
      { text: "Quantity", value: "quantity" },
      { text: "Price", value: "price" },
      { text: "Size", value: "size" },
      { text: "Category", value: "category" },

      { text: "Actions", value: "actions", sortable: false },
    ],
    products: [],
    myproducts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      description: "",
      currency: "",
      quantity: "",
      price: "",
      size: "",
      category: "",
      images: [],
      
    },
    defaultItem: {
      name: "",
      description: "",
      currency: "",
      quantity: "",
      price: "",
      size: "",
      category: "",
      images: [],
    },
    activeItem: null,
    imageSize: '',
  }),

  components: {
    VueEditor,
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
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
    this.$nuxt.$on("my-custom-event", () => {
      this.text = "Document successfully deleted!";
      this.snackbar = true;
    });
  },

  methods: {
    initialize() {
      this.products = [];
      this.myproducts = [];
    },

    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = firebase
          .storage()
          .ref("products/" + doc.id + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            // Handle unsuccessful uploads
            console.log("Failed to Add Image!");
            this.text = "Failed to Add Image!";
            this.snackbar = true;
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.editedItem.images.push(downloadURL);
              // console.log('File available at', downloadURL);
              console.log("File available at", this.editedItem.images);
              console.log("Image successfully Added!");
              this.text = "Image successfully Added!";
              this.snackbar = true;
            });
          }
        );
      }
      // console.log(e.target.files[0]);
    },

    deleteImage(img, index) {
      let image = firebase.storage().refFromURL(img);

      this.editedItem.images.splice(index, 1);
      image
        .delete()
        .then(() => {
          console.log("image deleted");
        })
        .catch((error) => {
          console.log("an error occured");
        });
    },

    async readData() {
      var productsRef = await firebase
        .firestore()
        .collection("products")
        .where("userId", "==", firebase.auth().currentUser.uid);

      productsRef.onSnapshot((snap) => {
        this.products = [];
        snap.forEach((doc) => {
          var product = doc.data();
          product.id = doc.id;
          this.products.push(product);
        });
      });

      // var myproductsRef = await firebase
      //   .firestore()
      //   .collection("published")
      //   .where("userId", "==", firebase.auth().currentUser.uid);

      // myproductsRef.onSnapshot((snap) => {
      //   this.myproducts = [];
      //   snap.forEach((doc) => {
      //     var myproduct = doc.data();
      //     myproduct.id = doc.id;
      //     this.myproducts.push(myproduct);
      //   });
      // });
    },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);

      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      const itemID = this.products[this.editedIndex].id;
      // const itemID2 = this.myproducts[this.editedIndex].id;
      this.products.splice(this.editedIndex, 1);
      this.myproducts.splice(this.editedIndex, 1);

      db.collection("products")
        .doc(itemID)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
          $nuxt.$emit("my-custom-event");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });

      // db.collection("published")
      //   .doc(itemID2)
      //   .delete()
      //   .then(function () {
      //     console.log("Document successfully deleted!");
      //     $nuxt.$emit("my-custom-event");
      //   })
      //   .catch(function (error) {
      //     console.error("Error removing document: ", error);
      //   });

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
      const product = {};
      const itemID = this.products[this.editedIndex].id;
      // const itemID2 = this.myproducts[this.editedIndex].id;

      db.collection("products")
        .doc(itemID)
        .update({
          name: this.editedItem.name,
          description: this.editedItem.description,
          currency: this.editedItem.currency,
          quantity: this.editedItem.quantity,
          price: this.editedItem.price,
          size: this.editedItem.size,
          category: this.editedItem.category,
          images: this.editedItem.images,
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.text = "Document successfully updated!";
          this.snackbar = true;
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });

      //update to its shop name
      // db.collection("published")
      //   .doc(itemID2)
      //   .update({
      //     name: this.editedItem.name,
      //     description: this.editedItem.description,
      //     currency: this.editedItem.currency,
      //     quantity: this.editedItem.quantity,
      //     price: this.editedItem.price,
      //     size: this.editedItem.size,
      //     category: this.editedItem.category,
      //     images: this.editedItem.images,
      //   })
      //   .then(() => {
      //     console.log("Document successfully updated!");
      //     this.text = "Document successfully updated!";
      //     this.snackbar = true;
      //   })
      //   .catch((error) => {
      //     console.error("Error updating document: ", error);
      //   });

      (product.name = this.editedItem.name),
        (product.description = this.editedItem.description),
        (product.currency = this.editedItem.currency),
        (product.quantity = this.editedItem.quantity),
        (product.price = this.editedItem.price);
        (product.size = this.editedItem.size);
      product.category = this.editedItem.category;
      product.images = this.editedItem.images;

      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
      }

      this.close();
    },

    save() {
      if (this.$refs.form.validate()) {

        const product = {};

      (product.name = this.editedItem.name),
        (product.description = this.editedItem.description),
        (product.currency = this.editedItem.currency),
        (product.quantity = this.editedItem.quantity),
        (product.price = this.editedItem.price);
        (product.size = this.editedItem.size);
      product.category = this.editedItem.category;
      product.images = this.editedItem.images;
      product.userId = firebase.auth().currentUser.uid;
      product.shopname = firebase.auth().currentUser.displayName;

      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
        if(firebase.auth().currentUser.emailVerified ) {
          if(this.editedItem.images.length) {
            db.collection("products")
          .add(product)
          .then(() => {
            console.log("added to db");
            this.text = "sucessfully added to db";
            this.snackbar = true;
          });
        this.products.push(this.editedItem);
        // adding to its shop
        db.collection("published")
          .add(product)
          .then(() => {
            console.log("added to db");
            this.text = "sucessfully added to db";
            this.snackbar = true;
          });
          }
          else {
            this.text2 = "Add atleast one image";
            this.snackbar2 = true;
          }
      }
      else {
        this.text2 = "Failed to create product, Verify Your email first";
        this.snackbar2 = true;
      }
        }

      this.close();
      }
      
    },
  },
};
</script>

<style lang="scss" scoped>
.img-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  @media screen and( max-width: 500px ){
  grid-template-columns: repeat(2, 1fr);
  }
  //  @media screen and (max-width: 500px) {
  //       grid-template-columns: repeat(2, 1fr);
  //     }
  //   @media screen and (max-width: 750px) {
  //     grid-template-columns: repeat(3, 1fr);
  //   }
  //   @media screen and (max-width: 1100px) {
  //     grid-template-columns: repeat(4, 1fr);
  //   }
}
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  font-size: 20px;
  position: absolute;
  top: -3px;
  left: 85px;
}
.img-wrapp span.delete-img {
  cursor: pointer;
}
</style>
