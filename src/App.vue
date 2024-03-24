<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { firebase } from "@/firebase";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    //korisnik je ulogiran.
    console.log(user.email);
  } else {
    //korisnik nije ulogiran
    console.log("Nema korisnika");
  }
});

export default {
  name: "app",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background: #ff344c;
}
</style>
