<template>
  <div>
    <header class="header shadow" id="header">
      <nav class="nav container">
        <nuxt-link to="/" class="text--primary nav_logo title font-weight-bold">
          Paypack MarketPlace
        </nuxt-link>

        <div class="nav_menu" id="nav_menu">
          <ul class="nav_list">
            <li class="nav_item">
              <NuxtLink to="/" class="nav_link">
                <v-icon class="nav_icon">mdi-home</v-icon>
                <span class="nav_name">Home</span>
              </NuxtLink>
            </li>

            <li class="nav_item">
              <NuxtLink to="/about" class="nav_link active_link">
                <v-icon class="nav_icon">mdi-information</v-icon>
                <span class="nav_name">About</span>
              </NuxtLink>
            </li>

            <li class="nav_item">
              <NuxtLink to="/stores" class="nav_link">
                <v-icon class="nav_icon">mdi-store</v-icon>
                <span class="nav_name">Stores</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="right">
          <v-btn to="/auth/login_signup" elevation="0" color="primary">
            Signin
          </v-btn>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    scrollHeader() {
      const header = document.querySelector("#header");
      if (this.scrollY >= 200) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
      window.addEventListener("scroll", this.scrollHeader);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: var(--header-height) 0 0 0;
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}
.title {
  font-family: var(--body-font) !important;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.btn {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  color: #111;
  border: 1px solid #da9412;
  padding: 8px 30px;
  margin: 30px 5px;
  border-radius: 10px;
}
.btn:hover {
  border: none;
  background: #da9412;
}
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #da9412;
}

//layout
.container {
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
  transition: 0.4s;
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
  .container {
    margin: 1rem 1rem;
  }
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
    transition: 0.4s;
  }
}

.nav_list,
.nav_link {
  display: flex;
}
.nav_link {
  flex-direction: column;
  align-items: center;
  row-gap: 0.25rem;
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
  transition: 0.3s;
}
// minimal
.active_link::before {
  content: "";
  position: absolute;
  bottom: -0.5rem;
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
  .active_link::before {
    bottom: -0.75rem;
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