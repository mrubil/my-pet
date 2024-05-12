<template>
  <body>
    <div class="ZaglavljeProfila">
      <div class="Odjava">
        <span @click="logout()"
          ><img :src="require('@/assets/Logout.png')" width="20vw"
        /></span>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col" id="SlikaProfila">
          <div class="container-slike-profila">
            <img
              class="rounded-circle object-fit-cover"
              :src="myData.url ? myData.url : require('@/assets/profilna.png')"
              height="80vw"
              width="80vw"
            />
            <div class="overlay">
              <router-link to="/EditPhoto"
                ><img :src="require('@/assets/white-camera.png')" width="40vw"
              /></router-link>
            </div>
          </div>
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>

      <div
        class="row justify-content-md-center"
        id="Ime"
        style="font-weight: 600"
      >
        <div class="col col-lg-2 px-0"></div>
        <div class="col-auto px-0">
          {{ myData.ime }}
        </div>
        <div class="col col-lg-2 px-0" style="text-align: left">
          <router-link to="/EditProfile"
            ><img :src="require('@/assets/edit-data-pencil.png')" width="15vw"
          /></router-link>
        </div>
      </div>
      <div class="mx-auto px-5" id="Informacije">
        <div class="row justify-content-md-center">
          <div class="col-5 col-sm-4 col-lg-5">
            <div class="row justify-content-center">Vrsta</div>
            <div class="row justify-content-center">{{ myData.vrsta }}</div>
          </div>
          <div class="col-2 col-sm-4 col-lg-2">
            <div class="row justify-content-center">Spol</div>
            <div class="row justify-content-center">{{ myData.spol }}</div>
          </div>
          <div class="col-5 col-sm-4 col-lg-5">
            <div class="row justify-content-center">Starost</div>
            <div class="row justify-content-center">{{ myData.dob }}y</div>
          </div>
        </div>
      </div>
    </div>
    <div class="Tijelo">
      <Mape />

      <p class="N" style="text-align: left">Napredak</p>
      <div class="px-4" id="Grafovi">
        <div class="row">
          <div class="col-sm-6" style="width: 50%"><Statistika /></div>
          <div class="col-sm-6" style="width: 50%"><Statistika /></div>
        </div>
        <div class="row">
          <div class="col-sm-6" style="width: 50%"><Statistika /></div>
          <div class="col-sm-6" style="width: 50%"><Statistika /></div>
        </div>
      </div>
    </div>
    <Navigacija />
  </body>
</template>

<script>
import Mape from "@/components/Mape.vue";
import UpcomingTask from "@/components/UpcomingTask.vue";
import Navigacija from "@/components/Navigacija.vue";
import Statistika from "@/components/Statistika.vue";
import { firebase } from "@/firebase";
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "MyProfile",
  data() {
    return {
      myData: {},
    };
  },

  mounted() {
    this.getMyData();
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Uspješna odjava!");
          this.$router.push({ name: "LandingPage" });
        });
    },
    getMyData() {
      db.collection("myData")
        .doc(store.currentUser)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.myData = doc.data();
          } else {
            console.log("Ne postoje podaci o korisniku");
          }
        })
        .catch((error) => {
          console.error("Pojavila se greška prilikom dohvata podataka", error);
        });
    },
  },

  components: {
    Mape,
    UpcomingTask,
    Navigacija,
    Statistika,
  },
};
</script>

<style>
body {
  background: #ff344c;
}
.ZaglavljeProfila {
  background: white;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 5%;
}
.Odjava {
  text-align: right;
  cursor: pointer;
}

#Ime {
  padding: 5px;
}
#Informacije {
  padding: 5px;
  margin-right: 1rem;
  font-size: 12px;
  font-weight: 600;
}
p.N {
  padding-left: 20px;
  padding-top: 5px;
  color: white;
  font-size: 14px;
  margin-top: 10px;
  font-weight: 600;
}
.container-slike-profila {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(86, 86, 86, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#SlikaProfila:hover .overlay {
  opacity: 1;
}
#Grafovi {
  background-color: white;
  border-radius: 20px;
  margin-inline: 20px;
  padding: 5px;
  margin-bottom: 80px;
}
</style>
