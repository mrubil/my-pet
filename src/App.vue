<template>
  <div id="app">
    <h1>Dobrodošli na <br /></h1>
    <div>
      <img src="src\assets\White_paw_print.png" />
    </div>
    <br />
    <h1>MyPet</h1>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/SignUp">Prijava</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background: #ff344c;
}

nav {
  padding: 30px;
}
</style>
