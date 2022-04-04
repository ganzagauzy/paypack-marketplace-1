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

                    <!-- <label for="product_Image">Product Images</label>
                    <input
                      type="file"
                      required
                      @change="saveImage"
                      class="form-control"
                    />
                    <div class="form-group  img-grid">
                      <div
                        v-for="(image, index) in editedItem.images"
                        :key="index"
                        class="pa-2"
                      >
                        <div class="img-wrapp">
                          <img v-if="image" :src="image" alt="" width="80px" />
                          <p v-else>Failed to add image, please remove it and add it again</p>
                          {{imgerror}}
                          {{imgerror2}}
                          <span
                            class="delete-img"
                            @click="dropImage(image, index)"
                            >X</span
                          >
                        </div>
                      </div>
                    </div> -->

                    <div class="form-group col-lg-12">
                      
                      <div class="d-flex">
                        <input type="file" accept="image/*" @change="saveImage($event)" class="cursor-pointer">
                      </div>
                    </div>
                    <div class="col-lg-12 mb-4" v-if="images && images.length>0">
                      <ul class="attached-photos p-30 bg-gray d-table list-unstyled lis ul d-flex flex-wrap">
                        <li class="attached-photo mt-sm-30 d-flex mr-2  " v-for="image in images" :key="image.id">
                          <img :src="image.image" alt="image"
                               style="height: 80px;min-width: 60px;"
                               class="mr-1 mb-2">
                          <span style="cursor: pointer;"
                                @click="removeImage(image.id)"><i class="fa fa-times text-danger"></i></span>
                        </li>
                      </ul>
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
                    <!-- <v-select
                      :items="['Limited', 'Unlimited']"
                      label="Quantity*"
                      v-model="editedItem.quantity"
                      outlined
                      required
                      :rules="inputRules"
                      dense
                    ></v-select> -->
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
                <v-btn color="" @click="update" :loading="loading">
                  <v-icon left> mdi-pencil </v-icon>Edit
                </v-btn>

                <v-btn color="" @click="save" :loading="loading1">
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
import axios from 'axios'
import { VueEditor } from "vue2-editor";
import { doc, deleteDoc } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../plugins/firebase";
import "firebase/compat/storage";

export default {
  data: () => ({
    image: null,
    images: [],
    is_submitting: false,
    dialog: false,
    dialogDelete: false,
    snackbar: false,
    snackbar2: false,
    text: "",
    error: "",
    imgerror: "",
    imgerror2: "",
    imgeprogress: "",
    text2: "",
    content: "<h1>Some initial content</h1>",
    icon: "mdi-checkbox-marked-circle",
    inputRules: [(v) => v.length >= 3 || "fill all"],
    loading: false,
    loading1: false,
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
    stores: [],
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
    

   

    saveImage(e) {
        const image = e.target.files[0];
        this.image_name = image.name;
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
          e.target.result;
          this.images.push({image: e.target.result, id: Date.now(), old: false, data: image})
        }
      },
      removeImage(imageID) {
        const index = this.images.findIndex(data => data.id === imageID);
        this.images.splice(index, 1);
        this.editedItem.images.splice(index, 1);
      },

      initialize() {
      this.products = [];
      this.myproducts = [];
    },

    // saveImage(e) {
    //   var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/guazy/auto/upload`";
    //   var CLOUDINARY_UPLOAD_PRESET = "tk04yktc";

    //   var file = e.target.files[0];
    //   var fd = new FormData();
    //   fd.append('file', file);
    //   fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    //   axios({
    //     url: CLOUDINARY_URL,
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       "X-Requested-With": "XMLHttpRequest",
    //     },
    //     data: fd
    //   }).then((res) => {
    //     console.log(res);
    //   }).catch(error => {
    //     console.log(error);
    //   })
    // },
    // dropImage(img, index) {},

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


      var storesRef = await firebase
        .firestore()
        .collection("stores")
        .where("userId", "==", firebase.auth().currentUser.uid);

      storesRef.onSnapshot((snap) => {
        this.stores = [];
        snap.forEach((doc) => {
          var store = doc.data();
          store.id = doc.id;
          console.log("Store id is",store.id);
          this.stores.push(store);
          console.log(this.stores[0].id);
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
      if (item.images.length > 0) {
          const imagesUrls = item.images.map(i => {
            return {
              id: i,
              image: i,
              old: true
            }
          })
          this.images = [...imagesUrls]
          this.editedItem.images = [...imagesUrls]
        }
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

    async update() {
      this.loading = true
      const product = {};
      const itemID = this.products[this.editedIndex].id;
      // const itemID2 = this.myproducts[this.editedIndex].id;

      let uploadedImage = []
        const imagesLen = this.images.length
        let imageArray = this.images
        this.is_submitting = true
        if (imagesLen) {
          let i;
          for (i = 0; i < imagesLen; i++) {
            if (!imageArray[i].old) {
              this.uploading = true
              var url = `https://api.cloudinary.com/v1_1/guazy/upload`;
              var fd = new FormData();
              fd.append("upload_preset", 'tk04yktc');
              fd.append("tags", "browser_upload");
              fd.append("file", imageArray[i].image);
              const configs = {
                headers: {"X-Requested-With": "XMLHttpRequest"},
              };
              await axios.post(url, fd, configs).then(data => {
                uploadedImage.push(`${data.data.secure_url}`)
                this.editedItem.images.push(`${data.data.secure_url}`);
                this.uploading = false
              }).catch(e => {
               this.is_submitting = false
                this.uploading = false
                alert("Please check your internet")
              })
            } else {
              await uploadedImage.push(imageArray[i].image)
            }
          }
        } else {
          this.is_submitting = false
          alert("Please Upload at least one image")
        }




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
          timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
          this.loading = false
          if(this.loading == false) {
            console.log("Document successfully updated!");
            this.text = "Document successfully updated!";
            this.snackbar = true;
          }
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

    async save() {
      if (this.$refs.form.validate()) {
        this.loading1 = true

        const product = {};
        console.log(this.stores);

      (product.name = this.editedItem.name),
        (product.description = this.editedItem.description),
        (product.currency = this.editedItem.currency),
        (product.quantity = this.editedItem.quantity),
        (product.price = this.editedItem.price);
        (product.size = this.editedItem.size);
      product.category = this.editedItem.category;
      product.images = this.editedItem.images;
      product.userId = firebase.auth().currentUser.uid;
      product.storeId = this.stores[0].id;
      product.shopname = firebase.auth().currentUser.displayName;
      product.timestamp = firebase.firestore.FieldValue.serverTimestamp();

       let uploadedImage = []
        const imagesLen = this.images.length
        let imageArray = this.images
        this.is_submitting = true
        if (imagesLen) {
          let i;
          for (i = 0; i < imagesLen; i++) {
            if (!imageArray[i].old) {
              this.uploading = true
              var url = `https://api.cloudinary.com/v1_1/guazy/upload`;
              var fd = new FormData();
              fd.append("upload_preset", 'tk04yktc');
              fd.append("tags", "browser_upload");
              fd.append("file", imageArray[i].image);
              const configs = {
                headers: {"X-Requested-With": "XMLHttpRequest"},
              };
              await axios.post(url, fd, configs).then(data => {
                uploadedImage.push(`${data.data.secure_url}`)
                this.editedItem.images.push(`${data.data.secure_url}`);
                this.uploading = false
              }).catch(e => {
               this.is_submitting = false
                this.uploading = false
                alert("Please check your internet")
              })
            } else {
              await uploadedImage.push(imageArray[i].image)
            }
          }
        } else {
          this.is_submitting = false
          alert("Please Upload at least one image")
        }



      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
        if(firebase.auth().currentUser.emailVerified ) {
          if(this.editedItem.images.length) {
            db.collection("products")
          .add(product)
          .then(() => {
            console.log("added to db");
            this.loading1 = false
            if(this.loading1 == false) {
               this.text = "sucessfully added to db";
              this.snackbar = true;
            }
  
          });
        this.products.push(this.editedItem);
        // adding to its shop
        // db.collection("published")
        //   .add(product)
        //   .then(() => {
        //     console.log("added to db");
        //     this.text = "sucessfully added to db";
        //     this.snackbar = true;
        //   });
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
.ul {
  list-style: none;
  display: flex;
  
}
</style>
