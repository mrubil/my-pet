<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Zdravlje</h2>
    </div>
    <div id="Tijelo">
      <p id="Naslov">Nadolazeće aktivnosti</p>
      <div v-if="upcomingTasks.length === 0">
        <router-link :to="'/NewTask'" id="plus"
          ><img :src="require('@/assets/AddTaskWhite.png')" width="50vw"
        /></router-link>
        <p style="color: white"><br />Dodaj Aktivnost..</p>
      </div>
      <Tasks
        v-for="task in upcomingTasks"
        :key="task.id"
        :task="task"
        route="Zdravlje"
      />
      <p id="Naslov" style="margin-top: 10px">Prošle aktivnosti</p>
      <Tasks
        v-for="task in pastTasks"
        :key="task.id"
        :task="task"
        route="Zdravlje"
      />
    </div>
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";
import Tasks from "@/components/Tasks.vue";
import store from "@/store";
import { db } from "@/firebase";
import moment from "moment";

export default {
  name: "Zdravlje",
  components: {
    Navigacija,
    Tasks,
  },
  data() {
    return {
      upcomingTasks: [],
      pastTasks: [],
      danas: new Date(),
    };
  },
  mounted() {
    this.getUpcomingTasks();
    this.getPastTasks();
  },
  methods: {
    getUpcomingTasks() {
      const noviFormatDatuma = moment(this.danas).format("YYYY-MM-DD");
      db.collection("Tasks")
        .doc(store.currentUser)
        .collection("MyTasks")

        .where("datum", ">=", noviFormatDatuma)
        .where("vrstaAktivnosti", "==", "Zdravlje")
        .orderBy("datumVrijeme")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.upcomingTasks.push({
              id: doc.id,
              naziv: doc.data().naziv,
              datum: doc.data().datum,
              vrijeme: doc.data().vrijeme,
            });
          });
        })
        .catch((error) => {
          console.error("Error prilikom dohvata", error);
        });
    },
    getPastTasks() {
      const noviFormatDatuma = moment(this.danas).format("YYYY-MM-DD");
      db.collection("Tasks")
        .doc(store.currentUser)
        .collection("MyTasks")
        .where("datum", "<", noviFormatDatuma)
        .where("vrstaAktivnosti", "==", "Zdravlje")
        .orderBy("datumVrijeme")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.pastTasks.push({
              id: doc.id,
              naziv: doc.data().naziv,
              datum: doc.data().datum,
              vrijeme: doc.data().vrijeme,
            });
          });
        })
        .catch((error) => {
          console.error("Error prilikom dohvata", error);
        });
    },
  },
};
</script>

<style>
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
#Naslov {
  font-size: 14px;
  color: white;
  text-align: left;
  padding-left: 20px;
  font-weight: 600;
}
</style>
