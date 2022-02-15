<template>
  <div>
    <div>
      <v-card flat>
        <v-toolbar
          color="dark"

          extended
          flat
        >
          Product&mdash;{{$route.params.id}}
        </v-toolbar>

        <v-card
          class="mx-auto"
          max-width="900"
          height="50px"
          style="margin-top: -64px;"
        >
          <v-toolbar flat>
            <v-toolbar-title class="grey--text">
              Product
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color=""
                dark
                v-bind="attrs"
                v-on="on"
                icon
              >
              <v-icon>mdi-eye</v-icon>

              </v-btn>
            </template>
            <span>Preview</span>
          </v-tooltip>
            <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color=""
                dark
                v-bind="attrs"
                v-on="on"
              icon>
              <v-icon>mdi-share-variant</v-icon>

              </v-btn>
            </template>
            <span>Copy Link</span>
          </v-tooltip>

            <!-- <v-btn icon>
              <v-icon>mdi-eye</v-icon>
            </v-btn>

            <v-btn icon>

            </v-btn> -->

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>

          <v-card-text style="height: 200px;"></v-card-text>
        </v-card>
      </v-card>
    </div>



    <div class="pt-10 py-5">

      <v-card>

        <v-tabs >
          <v-tab>
            <v-icon left>
              mdi-account
            </v-icon>
            Option 1
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-lock
            </v-icon>
            Option 2
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-access-point
            </v-icon>
            Option 3
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-access-point
            </v-icon>
            Option 4
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-access-point
            </v-icon>
            Option 5
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-access-point
            </v-icon>
            Option 6
          </v-tab>

          <v-tab-item class="py-5">
            <v-row>
              <v-col
              cols="12"
              sm="6"
              md="7">
                <v-card
                color="red">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam odit illo! Porro optio excepturi voluptatibus ipsam consequuntur cum dolore voluptatum doloribus? Ipsum earum voluptatem, fugit voluptatibus molestiae esse officiis voluptate commodi velit, autem totam. Delectus laborum cum voluptatem amet!

                </v-card>
              </v-col>
              <v-col
              cols="12"
              sm="6"
              md="5">
                <v-card>
                  hiii
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item class="py-5">
            <v-row>
              <v-col
              cols="12"
              sm="6"
              md="7">
                <v-card
                color="red">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam odit illo! Porro optio excepturi voluptatibus ipsam consequuntur cum dolore voluptatum doloribus? Ipsum earum voluptatem, fugit voluptatibus molestiae esse officiis voluptate commodi velit, autem totam. Delectus laborum cum voluptatem amet!

                </v-card>
              </v-col>
              <v-col
              cols="12"
              sm="6"
              md="5">
                <v-card>
                  hiii
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item class="py-5">
            <v-row>
              <v-col
              cols="12"
              sm="6"
              md="7">
                <v-card
                color="red">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam odit illo! Porro optio excepturi voluptatibus ipsam consequuntur cum dolore voluptatum doloribus? Ipsum earum voluptatem, fugit voluptatibus molestiae esse officiis voluptate commodi velit, autem totam. Delectus laborum cum voluptatem amet!

                </v-card>
              </v-col>
              <v-col
              cols="12"
              sm="6"
              md="5">
                <v-card>
                  hiii
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item class="py-5">
            <v-row>
              <v-col
              cols="12"
              sm="6"
              md="7">
                <v-card
                color="red">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam odit illo! Porro optio excepturi voluptatibus ipsam consequuntur cum dolore voluptatum doloribus? Ipsum earum voluptatem, fugit voluptatibus molestiae esse officiis voluptate commodi velit, autem totam. Delectus laborum cum voluptatem amet!

                </v-card>
              </v-col>
              <v-col
              cols="12"
              sm="6"
              md="5">
                <v-card>
                  hiii
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item class="py-5">
            <v-row>
              <v-col
              cols="12"
              sm="6"
              md="7">
                <v-card
                color="red">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam odit illo! Porro optio excepturi voluptatibus ipsam consequuntur cum dolore voluptatum doloribus? Ipsum earum voluptatem, fugit voluptatibus molestiae esse officiis voluptate commodi velit, autem totam. Delectus laborum cum voluptatem amet!

                </v-card>
              </v-col>
              <v-col
              cols="12"
              sm="6"
              md="5">
                <v-card>
                  hiii
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item class="py-5">
            <v-row>
              <v-col
              cols="12"
              sm="6"
              md="7">
                <v-card
                color="red">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam odit illo! Porro optio excepturi voluptatibus ipsam consequuntur cum dolore voluptatum doloribus? Ipsum earum voluptatem, fugit voluptatibus molestiae esse officiis voluptate commodi velit, autem totam. Delectus laborum cum voluptatem amet!

                </v-card>
              </v-col>
              <v-col
              cols="12"
              sm="6"
              md="5">
                <v-card>
                  hiii
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>




        </v-tabs>
      </v-card>
    </div>



  </div>
</template>

<script>
  export default {
    data: () => ({
      currentItem: 'tab-Orders',
      items: [
        'Orders', 'Inventory', 'Customise Product', 'Delivery','After Purchase',
      ],
      more: [
        'News', 'Maps', 'Books', 'Flights', 'Apps',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }),

    methods: {
      addItem (item) {
        const removed = this.items.splice(0, 1)
        this.items.push(
          ...this.more.splice(this.more.indexOf(item), 1),
        )
        this.more.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      },
    },
  }
</script>

<style scoped>

.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 3.9em;
  z-index: 2;
}

</style>















  // export default {
  //   data: () => ({
  //     isLoading: false,
  //     items: [],
  //     model: null,
  //     search: null,
  //     tab: null,
  //   }),

  //   watch: {
  //     model (val) {
  //       if (val != null) this.tab = 0
  //       else this.tab = null
  //     },
  //     search (val) {
  //       // Items have already been loaded
  //       if (this.items.length > 0) return

  //       this.isLoading = true

  //       // Lazily load input items
  //       fetch('https://api.coingecko.com/api/v3/coins/list')
  //         .then(res => res.clone().json())
  //         .then(res => {
  //           this.items = res
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         })
  //         .finally(() => (this.isLoading = false))
  //     },
  //   },
  // }
