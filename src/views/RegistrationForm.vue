<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600; font-size: large; padding: 5px">
        Recite nam nešto o svojem ljubimcu:
      </h2>
    </div>
    <div class="Podaci">
      <form @submit.prevent="addProfileData">
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

        <div class="col-md-4 form-group">
          <label for="spol" style="padding-bottom: 5px">Spol</label>
          <select v-model="spol" id="spol" class="form-select" required>
            <option>M</option>
            <option>Ž</option>
          </select>
        </div>
        <div class="form-group" style="padding-top: 5px">
          <label for="dob" style="padding-bottom: 5px">Dob</label>
          <input
            v-model="dob"
            type="number"
            class="form-control"
            id="dob"
            required
          />
        </div>
        <div class="Slika" style="margin-top: 5px">
          Učitaj profilnu sliku
          <div style="margin-top: 15px">
            <croppa
              :width="150"
              :height="150"
              :placeholder="'Odaberi sliku'"
              :placeholder-font-size="14"
              :remove-button-color="'black'"
              :remove-button-size="25"
              v-model="Profilna"
              style=""
            >
            </croppa>
          </div>
        </div>
        <button type="submit" class="button-done">Spremi</button>
      </form>
    </div>
  </body>
</template>

<script>
import { db, storage } from "@/firebase";
import store from "@/store";

export default {
  name: "RegistrationForm",
  data: function () {
    return {
      ime: "",
      vrsta: "",
      spol: "",
      dob: "",
      Profilna: null,
    };
  },
  methods: {
    addProfileData() {
      const UserID = store.currentUser;

      this.Profilna.generateBlob((blob) => {
        let imageName = store.currentUser + "/" + "Profilna" + ".png";
        storage
          .ref(imageName)
          .put(blob)
          .then((result) => {
            console.log(result);
            result.ref.getDownloadURL().then((url) => {
              db.collection("myData")
                .doc(UserID)
                .set({
                  id: store.currentUser,
                  ime: this.ime,
                  vrsta: this.vrsta,
                  spol: this.spol,
                  dob: this.dob,
                  url: url,
                })
                .then((doc) => {
                  console.log("Spremljeno", doc);
                  this.$router.push({ name: "MyProfile" });
                })
                .catch((e) => {
                  console.error(e);
                });
            });
          })
          .catch((e) => {
            console.error(e);
          });
      });
    },
  },
  components: {},
};
</script>

<style>
.Zaglavlje {
  background: white;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
body {
  background: #ff344c;
}
.Podaci {
  padding: 30px;
  padding-top: 0%;
  color: white;
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
.Upload {
  padding: 10px;
  margin-top: 10px;
  background: white;
  width: 25vw;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>
