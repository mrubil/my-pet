<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Uredi zadatak</h2>
    </div>

    <div id="Forma" class="mx-4">
      <form @submit.prevent="submitForm">
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
        <div class="row">
          <div class="col">
            <button @click="urediZadatak" class="button-Spremi" type="button">
              Spremi
            </button>
          </div>
          <div class="col">
            <button @click="obrisiZadatak" class="button-Delete" type="button">
              Obriši
            </button>
          </div>
        </div>
      </form>
    </div>
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";
import store from "@/store";
import { db } from "@/firebase";
export default {
  name: "EditTask",
  components: {
    Navigacija,
  },

  data() {
    return {
      TaskID: null,
      naziv: "",
      vrstaAktivnosti: "",
      datum: "",
      vrijeme: "",
    };
  },
  methods: {
    DohvatiPodatke() {
      this.TaskID = this.$route.params.id;
      db.collection("Tasks")
        .doc(store.currentUser)
        .collection("MyTasks")
        .doc(this.TaskID)
        .get()
        .then((doc) => {
          const data = doc.data();
          this.naziv = data.naziv;
          this.vrstaAktivnosti = data.vrstaAktivnosti;
          this.datum = data.datum;
          this.vrijeme = data.vrijeme;
        })
        .catch((error) => {
          console.error("Error prilikom dohvata", error);
        });
    },
    obrisiZadatak() {
      db.collection("Tasks")
        .doc(store.currentUser)
        .collection("MyTasks")
        .doc(this.TaskID)
        .delete()
        .then((doc) => {
          console.log("Uspješno izbrisan zadatak", doc);
          this.$router.push({ name: "DailyTasks" });
        })
        .catch((error) => {
          console.error("Error prilikom uređivanja!", error);
        });
    },
    urediZadatak() {
      const dateTimeString = `${this.datum} ${this.vrijeme}`; //da bismo mogli koristiti orderBy time kombiniramo datum i vrijeme u timestamp
      const timestamp = new Date(dateTimeString).getTime();
      db.collection("Tasks")
        .doc(store.currentUser)
        .collection("MyTasks")
        .doc(this.TaskID)
        .update({
          naziv: this.naziv,
          vrstaAktivnosti: this.vrstaAktivnosti,
          datum: this.datum,
          vrijeme: this.vrijeme,
          datumVrijeme: timestamp,
        })
        .then((doc) => {
          console.log("Novi podaci su spremljeni", doc);
          this.$router.push({ name: "DailyTasks" });
        })
        .catch((error) => {
          console.error("Error prilikom uređivanja!", error);
        });
    },
    submitForm(event) {
      event.preventDefault();
    },
  },
  mounted() {
    this.DohvatiPodatke();
  },
};
</script>

<style scoped>
.Zaglavlje {
  background: white;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 5%;
}
body {
  background: #ff344c;
}
#Forma {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  font-size: 14px;
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
.button-Spremi {
  background-color: #ff344c;
  color: white;
  margin-bottom: 10%;
  margin-top: 5%;
  border-radius: 20px;
  padding: 10px;
  border: none;
  text-decoration: none;
  width: 90px;
  font-weight: 600;
}
.button-Delete {
  background-color: black;
  color: white;
  margin-bottom: 10%;
  margin-top: 5%;
  border-radius: 20px;
  padding: 10px;
  border: none;
  text-decoration: none;
  width: 90px;
  font-weight: 600;
}
</style>
