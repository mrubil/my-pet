<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Nova aktivnost</h2>
    </div>
    <div class="mx-4" id="NoviZadatak">
      <form @submit.prevent="dodajZadatak()">
        <div class="form-group">
          <label for="naziv" style="padding-bottom: 5px">Naziv</label>
          <input v-model="naziv" type="name" class="form-control" id="naziv" />
        </div>
        <div class="col-md-4 form-group">
          <label for="vrstaAktivnosti" style="padding-bottom: 5px"
            >Vrsta aktivnosti</label
          >
          <select
            v-model="vrstaAktivnosti"
            id="inputActivityName"
            class="form-select"
            style="font-size: small"
          >
            <option selected>Odaberi</option>
            <option>Prehrana</option>
            <option>Zdravlje</option>
            <option>Aktivnost</option>
          </select>
        </div>
        <div class="form-group">
          <label for="datum" style="padding-bottom: 5px">Datum</label>
          <input v-model="datum" type="date" class="form-control" id="datum" />
        </div>
        <div class="form-group">
          <label for="vrijeme" style="padding-bottom: 5px">Vrijeme</label>
          <input v-model="vrijeme" type="time" class="form-control" />
        </div>
        <button type="submit" class="button-Gotovo">Gotovo</button>
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
  name: "NewTask",
  components: {
    Navigacija,
  },
  data() {
    return {
      naziv: "",
      vrstaAktivnosti: "",
      datum: "",
      vrijeme: "",
    };
  },
  methods: {
    dodajZadatak() {
      const UserID = store.currentUser;

      db.collection("Tasks")
        .doc(UserID)
        .collection("MyTasks")
        .add({
          id: store.currentUser,
          naziv: this.naziv,
          vrstaAktivnosti: this.vrstaAktivnosti,
          datum: this.datum,
          vrijeme: this.vrijeme,
        })
        .then((doc) => {
          console.log("Dodavanje zadatka...", doc);
          this.$router.push({ name: "MyProfile" });
        })
        .catch((e) => {
          console.error("Zadatak neuspješno dodan", e);
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
#NoviZadatak {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  font-size: 14px;
}
.button-Gotovo {
  background-color: #ff344c;
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
.form-select {
  border-radius: 20px;
}
.form-control {
  border-radius: 20px;
  font-size: small;
}
.form-group {
  text-align: left;
  margin-bottom: 10%;
  font-weight: 600;
}
</style>
