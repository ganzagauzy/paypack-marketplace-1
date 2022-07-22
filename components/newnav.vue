<template>
<v-app>
  <div>
      <v-card class="fixed">

      
      <div class="sub-nav">
          <div class="right">
              <a href=""><span><v-icon color="primary">mdi-account</v-icon></span> <span class="call">+250788888888</span></a>
            </div>
          <div class="right">
              <nuxt-link class="login-btn" to="/auth/login"><span class="login-btn">sign in</span></nuxt-link>
          </div>
          <div class="right">
              <nuxt-link class="register-btn" to="/auth/register">Register</nuxt-link>
          </div>
      </div>
      <hr>
      <div class="main-nav">
          <div class="logo"><nuxt-link class="nuxt-logo" to=""><span class="logo-title">Paypack</span> <br>Market Place</nuxt-link></div>
          <div class="nav-link">
              <div @click="Clickhome" class="text-link">
              <nuxt-link   class="nav-item  " id="home" to="/">Home <div class="underline"></div> <span></span> </nuxt-link>
              </div>
              <div @click="Clickstores" class="text-link">
              <nuxt-link   class="nav-item " id="stores" to="/stores" >Stores <div class="underline"></div> <span></span> </nuxt-link>
              </div>
          </div>
          <div class="search-main">
                <div class="text-center">
                    <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color=""
                        class="menu-btn"
                        text
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        All Categories <span><v-icon>mdi-menu-down</v-icon></span>
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
                <div class="search_wrap search_wrap_1">
                    <div class="search_box">
                        <input type="text" class="input" placeholder="search...">
                        <div class="btn btn_common">
                            <!-- <i class="fas fa-search"></i> -->
                            <v-icon class="fas">mdi-magnify</v-icon>
                        </div>
                    </div>
                </div>
          </div>
          <div class="cart">
              <p class="cart-rigth"> <v-icon>mdi-heart-outline</v-icon><span class="cart-number">0</span> <span class="cart-text">wishlist</span></p>
              <p class="cart-rigth"> <v-icon>mdi-weight-lifter</v-icon><span class="cart-number">0</span> <span class="cart-text">Compare</span></p>
              <p class="cart-rigth"> <v-icon>mdi-cart-outline</v-icon><span class="cart-number">0</span> <span class="cart-text">Cart</span></p>
              
          </div>
      </div>
    </v-card>
  </div>
  </v-app>
</template>

<script>
export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      isActive1: false,
      isActive2: false,
    }),
    head: {
        link: [
        
        // {
        //     rel: "stylesheet",
        //     href: "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css",
        // },
        ],
        script: [
        {
            src: '/js/active.js'
        }
        ],
    },
   
    methods: {
        Clickhome() {
            console.log("clicked");
            this.isActive1 = true
            this.isActive2 = false
        },
        Clickstores() {
            this.isActive1 = false
            this.isActive2 = true
        }
    },

}
</script>

<style lang="scss" scoped>
.fixed {
    position: fixed;
    width: 100%;
    z-index: 10000000000000000;
}
.sub-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
}
.sub-nav div:nth-child(1) {
    margin-right: 50px;
}
.call {
    color: #da9412;
}
.right {
    margin-right: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
}
a {
    text-decoration: none;
}
.login-btn {
    color: #153A5B;
}
.right {
    color: #fff;
}
.register-btn {
    color: #fff;
    background: #da9412;
    padding: 5px 10px;
    border-radius: 5px;
}
.main-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.nuxt-logo {
    color: #153A5B;
}
.logo-title {
    margin-left: 20px;
} 
.nav-link {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.nav-item {
    color: #153A5B;
    margin-left: 20px;
}
.main-nav .nav-link .text-link a.nuxt-link-exact-active   {
    border-bottom: 2px solid #da9412;
    border-block-start-color:  #da9412;
    color: #da9412;
    height: 10px;
    width: 10px;
    // width: 30px;
    // height: 2px;
    // border-radius: 5px;
    // background: #da9412;
    // position: absolute;
    // top: 1;
    // left: 15px;
}

// .text-link {
//     margin-top: 15px;
// }
// .nav-item.active1 {
//     position: relative;
//     color: #da9412;
// }
// .nav-item.active1 .underline{
//     width: 30px;
//     height: 2px;
//     border-radius: 5px;
//     background: #da9412;
//     position: absolute;
//     top: 25px;
//     left: 15px;

// }
// .nav-item.active2 {
//     color: #da9412;
//     position: relative;
// }
// .nav-item.active2 .underline{
//     width: 30px;
//     height: 2px;
//     border-radius: 5px;
//     background: #da9412;
//     position: absolute;
//     top: 25px;
//     left: 15px;

// }

// a.nuxt-link-active {
//   font-weight: bold;
// }
/* exact link will show the primary color for only the exact matching link */
// a.nuxt-link-exact-active {
//   color: #00c58e;
// }


// a,
// a:visited {
//   text-decoration: none;
//   color: inherit;
// }


// a.active {
//     color: #da9412;
// }






.menu-btn {
    border: 1px solid #E5E5E5;
    border-right: none;
    border-radius: 0;
    color: #153A5B;
    text-transform: unset !important;
    background: #E5E5E5;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}


//search

.search-main {
    display: flex;
}
.search_wrap{
	width: 300px;
}

.search_wrap .search_box{
	position: relative;
	width: 300px;
	height: 36px;
}
.input{
	border: 1px solid #E5E5E5;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
	outline: none;
	color: #153A5B;
}

.search_wrap .search_box .input{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 10px 20px;
	font-size: 18px;
}

.search_wrap .search_box .btn{
	position: absolute;
	top: 0;
	right: 0;
	width: 50px;
	height: 100%;
	background: #E5E5E5;
    color: #153A5B;
	cursor: pointer;
}

// .search_wrap .search_box .btn:hover{
// 	background: #708bd2;	
// }

.search_wrap .search_box .btn.btn_common .fas{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	color: #153A5B;
	font-size: 20px;
}

.search_wrap.search_wrap_1 .search_box .btn{
	right: 0;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
}

.search_wrap.search_wrap_1 .search_box .input{
	padding-right: 80px;
}
.cart {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

//cart

.cart-rigth {
    margin-top: 5px;
    margin-right: 35px;
    display: flex;
}
.cart-text {
    font-size: 12px;
    margin-top: 15px;
    color: #153A5B;
}
.cart-number {
    font-size: 10px;
    background: #153A5B;
    color: #fff;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10;
    margin-left: 30px;
    
}
//newsletter

</style>