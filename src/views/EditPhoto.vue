<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Promijeni sliku profila</h2>
    </div>
    <div class="mx-5" id="Tijelo">
      <croppa
        :width="150"
        :height="150"
        :placeholder="'Odaberi sliku'"
        :placeholder-font-size="14"
        :remove-button-color="'black'"
        :remove-button-size="25"
        v-model="profilna"
      >
      </croppa>
      <div class="row mt-4">
        <div class="col">
          <button
            @click="promijeniSlikuProfila"
            class="button-Spremi"
            type="button"
          >
            Spremi
          </button>
        </div>
        <div class="col">
          <button
            @click="$router.push('MyProfile')"
            class="button-Odustani"
            type="button"
          >
            Odustani
          </button>
        </div>
      </div>
    </div>
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";
import { db, storage } from "@/firebase";
import store from "@/store";

export default {
  name: "EditPhoto",
  components: {
    Navigacija,
  },
  data() {
    return {
      profilna: null,
    };
  },
  methods: {
    promijeniSlikuProfila() {
      this.profilna.generateBlob((blob) => {
        let imageName = store.currentUser + "/" + "Profilna" + ".png";
        storage
          .ref(imageName)
          .put(blob)
          .then((result) => {
            console.log(result);
            result.ref.getDownloadURL().then((url) => {
              db.collection("myData")
                .doc(store.currentUser)
                .update({
                  url: url,
                })
                .then((doc) => {
                  console.log("Novi podaci su spremljeni", doc);
                  this.$router.push({ name: "MyProfile" });
                })
                .catch((error) => {
                  console.error("Error prilikom učitavanja profila!", error);
                });
            });
          })
          .catch((e) => {
            console.error(e);
          });
      });
    },
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
.button-Odustani {
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
#Tijelo {
  background-color: white;
  padding: 20px;
  padding-top: 30px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
