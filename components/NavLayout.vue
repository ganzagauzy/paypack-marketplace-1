<template>
  <div>
      <div>
          <header class="header" id="header">
              <nav class="nav container">
                  <a  class="nav_logo title">PayPack Market Place</a>

                  <div class="nav_menu" id="nav_menu">
                      <ul class="nav_list">
                          <li class="nav_item">
                              <NuxtLink to="/" class="nav_link">
                                  <v-icon class="nav_icon">mdi-home</v-icon>
                                  <span class="nav_name">Home</span>
                              </NuxtLink>
                          </li>

                          <li class="nav_item">
                              <NuxtLink to="/inspire" class="nav_link active_link">
                                  <v-icon class="nav_icon">mdi-information</v-icon>
                                  <span class="nav_name">About</span>
                              </NuxtLink>
                          </li>

                          
                         
                          <li class="nav_item">
                              <NuxtLink to="/stores"  class="nav_link">
                                  <v-icon class="nav_icon">mdi-store</v-icon>
                                  <span class="nav_name">Stores</span>
                              </NuxtLink>
                          </li>
                      </ul>
                  </div>
                  
                  
                  <div class="right">
                      
                      <v-btn outlined nuxt
                        to="/auth/signin" >Signin</v-btn>
                  </div>
              </nav>
          </header>
      </div>
  </div>
</template>

<script>
export default {

    methods: {
        scrollHeader() {
            const header = document.querySelector('#header')
            if(this.scrollY>=200) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header')
            window.addEventListener('scroll', this.scrollHeader)
        },
       
        
    },

}
</script>

<style lang="scss" scoped>

//baseee 
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
    scroll-behavior: smooth;
}
body {
    margin: var(--header-height) 0 0 0;
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
}
ul {
    list-style: none;
}
a {
    text-decoration: none;
}

//layout 
.container {
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;
}
//header
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #d1dbec;
    z-index: var(--z-fixed);
    transition: .4s;
}
.title {
    font-size: 30px;
    
}
// nav 
.nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav_logo {
    color: var(--title-color);
    font-weight: 600;
}

//media queries

@media screen and(max-width:767px) {
    .nav_menu {
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #d1dbec;
        box-shadow: 0 -1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
        width: 100%;
        height: 4rem;
        
        display: grid;
        align-content: center;
        border-radius: 1.25rem 1.25rem 0 0;
        transition: .4s;

    }
}

.nav_list,
.nav_link {
    display: flex;
}
.nav_link {
    flex-direction: column;
    align-items: center;
    row-gap: .25rem;
    color: var(--title-color);
    font-weight: 600;

}
.nav_list {
    justify-content: space-around;
}
.nav_name {
    font-size: var(--tiny-font-size);
}
.nav_icon {
    font-size: 1.5rem;
}
//active link  
.active_link {
    position: relative;
    color: var(--first-color);
    transition: .3s;
}
// minimal
.active_link::before {
    content: '';
    position: absolute;
    bottom: -.5rem;
    width: 4px;
    height: 4px;
    background: var(--first-color);
    border-radius: 50%;
    
}
// background header 
.scroll-header {
    box-shadow: 0 1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
}

// media queries 2 
// minimal list
@media screen and(max-width:575px) {
    .right {
        padding-right: 30px;
    }
}
// medium 
@media screen and(min-width:576px) {
    .nav_list {
        justify-content: center;
        column-gap: 3rem;
    }
    .right {
        padding-right: 30px;
    }
 
}
// large 
@media screen and(min-width:767px) {
    body {
        margin: 0;
    }
    .section {
        padding: 7rem 0 2rem;
    }
    .nav {
        height: calc(var(--header-height) + 1.5rem);
    }
    .nav_icon {
        display: none;
    }
    .nav_name {
        font-size: var(--normal-font-size);
        display: block;
    }
    .nav_link:hover {
        color: var(--first-color);

    }

    // .active_link::before {
    //     content: '';
    //     position: absolute;
    //     bottom: -.75rem;
    //     width: 4px;
    //     height: 4px;
    //     background: var(--first-color);
    //     border-radius: 50%;
    // }
    .active_link::before {
        bottom: -.75rem;
    }
}

// larger device 
@media screen and(min-width:1024px) {
    .container {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>