<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Prehrana</h2>
    </div>
    <div id="Tijelo">
      <p id="Naslov">Nadolazeće aktivnosti</p>
      <Tasks
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        route="Prehrana"
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

export default {
  name: "Prehrana",
  components: {
    Navigacija,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.getMyTasks();
  },
  methods: {
    getMyTasks() {
      db.collection("Tasks")
        .doc(store.currentUser)
        .collection("MyTasks")
        .where("vrstaAktivnosti", "==", "Prehrana")
        .orderBy("datumVrijeme")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.tasks.push({
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
