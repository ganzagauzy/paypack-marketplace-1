<template>
  <div>

    
    <div class="d-flex justify-space-between flex-wrap py-5">
          <div><v-btn text> {{size}} Users</v-btn></div>
          <div><v-btn text>20 Sales</v-btn></div>
          <div>
              <div class="text-center">
                <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color=""
                    text
                    
                    v-bind="attrs"
                    v-on="on"
                    >
                    Filter <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
          </div>
      </div>


    <v-data-table
    :headers="headers"
    :items="users"
    sort-by="calories"
    class="elevation-1 header-store accent"
  >
    <template v-slot:top>
      <v-toolbar
        flat
        class="header-store accent"
      >
        <v-toolbar-title>Users</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        
        <v-dialog v-model="dialogActivate" max-width="400px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to activate thi user?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeActivate">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="activateConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDeactivate" max-width="400px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to deactivate this user?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDeactivate">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deactivateConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn
        small
        color="#d1dbec"
        class="mr-4 margin-bottom"
        @click="activate(item)"
      >
        Activate
      </v-btn>
      <v-btn
        small
        color="#d1dbec"
        class="margin-bottom"
        @click="deactivate(item)"
      >
        Deactivate
      </v-btn>
    </template>
  </v-data-table>
  </div>
</template>


<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

  export default {
    data: () => ({
      dialog: false,
      dialogDeactivate: false,
      dialogActivate: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'username',
        },
        { text: 'Email', value: 'email' },
        { text: 'Telephone', value: 'telephone' },
        { text: 'Actions',align: 'start', value: 'actions', sortable: false },
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      size: '',
      users: [],
      editedIndex: -1,
      editedItem: {
        username: '',
        email: '',
        telephone: '',
      },
     
    }),

    computed: {
      
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDeactivate (val) {
        val || this.closeDeactivate()
      },
      dialogActivate (val) {
        val || this.closeActivate()
      },
    },

    created () {
      this.getusers();
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = []
        this.users = []

      },

      async getusers() {
      
      var usersRef = await firebase.firestore().collection("users");

      

      usersRef.onSnapshot((snap) => {
        this.size = snap.size;
        this.users = [];
        snap.forEach((doc) => {
          var user = doc.data();
          user.id = doc.id;
          this.users.push(user);
        });
      });
    },



      activate (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogActivate = true
      },

      deactivate (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        console.log(item);
        
        this.dialogDeactivate = true
      },

      deactivateConfirm () {
        console.log();
        this.desserts.splice(this.editedIndex, 1)
        this.closeDeactivate()
      },
      activateConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeActivate()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDeactivate () {
        this.dialogDeactivate = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeActivate () {
        this.dialogActivate = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

     
    },
  }
</script>

<style lang="scss" scoped>
.margin-bottom {
  @media screen and (max-width:500px) {
    margin-bottom: 5px;
  }
}
</style>