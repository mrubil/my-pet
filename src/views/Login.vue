<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Prijava</h2>
    </div>
    <div>
      <img :src="require('@/assets/White_paw_print.png')" width="10%" />

      <p style="font-size: small"><br /><b>MyPet</b></p>
    </div>
    <div class="Prijava">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1" style="color: white">Email</label>
          <input
            type="email"
            v-model="username"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" style="color: white"
            >Lozinka</label
          >
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="button" @click="login()" class="button-Prijava">
          Prijava
        </button>
      </form>
    </div>
  </body>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.username);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(function (result) {
          console.log("Uspješna prijava", result);
        })
        .catch(function (e) {
          console.error("Greška", e);
        });
    },
  },
};
</script>

<style>
body {
  background: #ff344c;
}

.Zaglavlje {
  background: white;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 5%;
}
.button-Prijava {
  background-color: black;
  color: white;
  margin-bottom: 10%;
  margin-top: 5%;
  border-radius: 20px;
  padding: 10px;
  border: none;
  text-decoration: none;
  width: 180px;
  font-weight: 600;
}
.Prijava {
  width: 300px;
  margin: 0 auto;
}
.form-control {
  margin-bottom: 5%;
  border-radius: 20px;
}
.form-group {
  text-align: left;
}
</style>
