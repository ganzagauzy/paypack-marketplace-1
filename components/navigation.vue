<template>
  <div>
    <header class="header shadow" id="header">
      <nav class="nav container">
        <nuxt-link to="/" class="text--primary nav_logo title font-weight-bold">
          Paypack MarketPlace
        </nuxt-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-family: var(--body-font) !important;
}
.nav_logo {
  color: var(--title-color);
  font-weight: 600;
}
span {
  display: flex;
  justify-content: center;
}
.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #da9412;
  text-align: center;
}
.background {
  background: #da9412;
}
a {
  text-decoration: none;
  color: #111;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  max-width: 100px;
  padding-left: 50%;
}
.btn span {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  background: #111;
}
.btn span:hover {
  border: none;
}
</style>