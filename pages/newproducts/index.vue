<template>
<div>

  <v-row justify="end">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mt-4"
          color="dark"
          dark
          v-bind="attrs"
          v-on="on"
        >
          New Product
        </v-btn>
      </template>

    </v-dialog>
  </v-row>

   <v-card
    class="mx-auto py-5 mt-16"
    max-width="344"
    color="#d1dbec"
  >
    <!-- <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img> -->

    <v-card-title class="ml-16 pl-16">
      <v-icon class="center">mdi-plus</v-icon>

    </v-card-title>

    <v-card-subtitle class="ml-16">
      Create Product Here
    </v-card-subtitle>

    <v-card-actions>


      <!--   -->

      <!-- <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn> -->

      <v-row justify="center">
    <v-dialog
      v-model="dialog"

      persistent
      max-width="400px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mt-4"
          color="dark"
          dark
          v-bind="attrs"
          v-on="on"
        >
          New Product
        </v-btn>
      </template>
      <v-card>
        <v-card-title
        color="#d1dbec">
          <span class="text">New Product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col

              >
                <v-text-field

                  label=" Product name*"
                  v-model="product.name"
                  required
                ></v-text-field>
              </v-col>
              {{product.name}}
              <!-- <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label=""
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col> -->


              <v-col cols="12">
                <v-textarea
                  clearable
                  clear-icon="mdi-close-circle"
                  label="Description*"
                  v-model="product.description"
                  type="text"
                  required
                ></v-textarea>
                {{product.description}}
              </v-col>
                 <v-col
                cols="12"

              >
                <v-select
                  :items="['Rwf', 'SSD']"
                  label="Currency*"
                  v-model="product.currency"
                  required
                ></v-select>
              </v-col>
              {{product.currency}}

              <v-col
                cols="12"

              >
                <v-autocomplete
                  :items="['Limited', 'Unlimited', ]"
                  label="Quantity"
                  v-model="product.quantity"
                  multiple
                ></v-autocomplete>
              </v-col>
              {{product.quantity}}
               <v-col

              >
                <v-text-field
                  label="Price*"
                  v-model="product.price"
                  type="number"


                  required
                ></v-text-field>
              </v-col>
              {{product.price}}

              <v-col cols="12">
                <p class="text-center">Upload Pictures (Images)</p>

                 <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">

                  <vue-upload-multiple-image
                    @upload-success="uploadImageSuccess"
                    @before-remove="beforeRemove"
                    @edit-image="editImage"
                    :data-images="images"
                    idUpload="myIdUpload"
                    editUpload="myIdEdit"
                    primary-text="Default"
                    :max-image=20
                    browse-text="Browse picture(s)"
                    drag-text="Drag pictures"
                    mark-is-primary-text="Set as default"
                    popup-text="This image will be displayed as default"

                    ></vue-upload-multiple-image>
                </div>
              </v-col>

              <!-- <v-col cols="12">
                <v-file-input
                  label="File input*"
                  filled
                  prepend-icon="mdi-camera"
                  required
                ></v-file-input>
              </v-col> -->
            </v-row>
          </v-container>
          <small class="pt-5 text-center">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="secondary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="dark"
            text
            @click="createProduct, dialog = false"

          >


            Save




          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>


    </v-card-actions>

    <v-expand-transition>
      <!-- <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div> -->
    </v-expand-transition>
  </v-card>


</div>

















</template>

<script>

import VueUploadMultipleImage from 'vue-upload-multiple-image'
import axios from 'axios'



  export default {
    data: () => ({
      images: [],
      dialog: false,
      show: false,
      product: {},
    }),


    components: {
    VueUploadMultipleImage
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },

    createProduct() {
      this.$store.dispatch('createProduct', this.product)
    }
  }





  }
</script>

<style>

h1, h2 {
  font-weight: normal;
  display: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
