<template>
  <div id="app">
    <router-view v-if="InicijalizacijaOnAuthStateChange" />
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

export default {
  name: "app",
  data() {
    return {
      store,
      InicijalizacijaOnAuthStateChange: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      const currentRoute = router.currentRoute;

      console.log("Provjera stanja logina");
      if (user) {
        //korisnik je ulogiran.
        console.log("Trenutni prijavljeni korisnik", user.email);
        store.currentUser = user.email;

        if (!currentRoute.meta.needsUser) {
          router.push({ name: "MyProfile" });
        }
      } else {
        //korisnik nije ulogiran
        console.log("Nema korisnika");
        store.currentUser = null;

        if (currentRoute.meta.needsUser) {
          router.push({ name: "Login" });
        }
      }
      this.InicijalizacijaOnAuthStateChange = true;
    });
  },
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
  height: 100vh;
}
</style>
