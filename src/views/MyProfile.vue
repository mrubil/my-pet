<template>
  <body>
    <div class="ZaglavljeProfila">
      <div class="Odjava">
        <span @click="logout()"
          ><img :src="require('@/assets/exit.png')" width="20vw"
        /></span>
      </div>
      <div class="SlikaProfila">
        <img
          class="rounded-circle object-fit-cover"
          :src="require('@/assets/profilna.jpg')"
          height="70vw"
          width="70vw"
        />
      </div>
      <div class="Ime" style="font-weight: bolder">{{ ime }}</div>
      <div class="mx-auto px-5" id="Informacije">
        <div class="row justify-content-md-center">
          <div class="col-5 col-sm-4 col-lg-5">
            <div class="row justify-content-center">Vrsta</div>
            <div class="row justify-content-center">{{ vrsta }}</div>
          </div>
          <div class="col-2 col-sm-4 col-lg-2">
            <div class="row justify-content-center">Spol</div>
            <div class="row justify-content-center">{{ spol }}</div>
          </div>
          <div class="col-5 col-sm-4 col-lg-5">
            <div class="row justify-content-center">Starost</div>
            <div class="row justify-content-center">{{ dob }}y</div>
          </div>
        </div>
      </div>
    </div>
    <div class="Tijelo">
      <Mape />

      <p class="N" style="text-align: left">Nadolazeće aktivnosti</p>
      <UpcomingTask />
    </div>
    <Navigacija />
  </body>
</template>
<script>
import Mape from "@/components/Mape.vue";
import UpcomingTask from "@/components/UpcomingTask.vue";
import Navigacija from "@/components/Navigacija.vue";
import { firebase } from "@/firebase";
export default {
  name: "MyProfile",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "LandingPage" });
        });
    },
  },
  components: {
    Mape,
    UpcomingTask,
    Navigacija,
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
.SlikaProfila {
  padding: 5px;
}

.Ime {
  padding: 5px;
}
#Informacije {
  padding: 5px;
  margin-right: 1rem;
  font-size: 12px;
  font-weight: bold;
}
p.N {
  padding-left: 5%;
  padding-top: 5px;
  color: white;
  font-size: 14px;
}
</style>
