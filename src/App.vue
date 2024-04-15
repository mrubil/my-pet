<template>
  <div id="app">
    <router-view />
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
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      const currentRoute = router.currentRoute;

      console.log("Provjera stanja logina");
      if (user) {
        //korisnik je ulogiran.
        console.log(user.email);
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
