<template>
  <body>
    <div id="Zaglavlje">
      <h2 style="font-weight: 600; font-size: large; padding: 5px">
        Uredi profil
      </h2>
    </div>
    <div id="Tijelo">
      <form @submit.prevent="urediProfil">
        <div class="form-group">
          <label for="ime" style="padding-bottom: 5px">Ime ljubimca</label>
          <input
            v-model="ime"
            type="text"
            class="form-control"
            id="ime"
            required
          />
        </div>
        <div class="form-group">
          <label for="vrsta" style="padding-bottom: 5px">Vrsta</label>
          <input
            v-model="vrsta"
            type="text"
            class="form-control"
            id="vrsta"
            required
          />
        </div>

        <div class="col-md-4 form-group" style="margin-bottom: 15px">
          <label for="spol" style="padding-bottom: 5px">Spol</label>
          <select v-model="spol" id="spol" class="form-select" required>
            <option>M</option>
            <option>Ž</option>
          </select>
        </div>
        <div class="form-group">
          <label for="dob" style="padding-bottom: 5px">Dob</label>
          <input
            v-model="dob"
            type="number"
            class="form-control"
            id="dob"
            required
          />
        </div>
        <button type="submit" class="button-done">Spremi</button>
      </form>
    </div>
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "EditProfile",
  components: {
    Navigacija,
  },
  data() {
    return {
      ime: "",
      vrsta: "",
      spol: "",
      dob: "",
    };
  },
  mounted() {
    this.dohvatiPodatke();
  },
  methods: {
    dohvatiPodatke() {
      db.collection("myData")
        .doc(store.currentUser)
        .get()
        .then((doc) => {
          const data = doc.data();
          this.ime = data.ime;
          this.vrsta = data.vrsta;
          this.spol = data.spol;
          this.dob = data.dob;
          this.stariURL = data.url;
        })
        .catch((error) => {
          console.error("Error prilikom dohvata!", error);
        });
    },
    urediProfil() {
      db.collection("myData")
        .doc(store.currentUser)
        .update({
          ime: this.ime,
          vrsta: this.vrsta,
          spol: this.spol,
          dob: this.dob,
        })
        .then((doc) => {
          console.log("Novi podaci su spremljeni", doc);
          this.$router.push({ name: "MyProfile" });
        })
        .catch((error) => {
          console.error("Error prilikom učitavanja profila!", error);
        });
    },
  },
};
</script>

<style>
body {
  background: #ff344c;
}
#Zaglavlje {
  background: white;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.form-select {
  border-radius: 20px;
}
.form-control {
  border-radius: 20px;
  margin-bottom: 15px;
}
.form-group {
  text-align: left;
  margin-bottom: 0%;
}
#Tijelo {
  padding: 30px;
  color: white;
}
.Upload {
  padding: 10px;
  margin-top: 10px;
  background: white;
  width: 25vw;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
}
.button-done {
  background-color: black;
  color: white;
  margin-bottom: 10%;
  margin-top: 5%;
  border-radius: 20px;
  padding: 10px;
  border: none;
  text-decoration: none;
  width: 120px;
  font-weight: 600;
}
</style>
