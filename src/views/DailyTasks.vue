<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Današnje aktivnosti</h2>
    </div>
    <div style="color: white">{{ formatirani_datum }}</div>
    <div id="Zadaci">
      <DnevniZadatak
        v-for="dailyTask in dailyTasks"
        :key="dailyTask.id"
        :dailyTask="dailyTask"
      />
    </div>
    <div v-if="dailyTasks.length === 0">
      <router-link :to="'/NewTask'" id="plus"
        ><img :src="require('@/assets/AddTaskWhite.png')" width="50vw"
      /></router-link>

      <p style="color: white"><br />Dodaj Aktivnost..</p>
    </div>

    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";
import DnevniZadatak from "@/components/DnevniZadatak.vue";
import moment from "moment";
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "DailyTasks",
  components: {
    Navigacija,
    DnevniZadatak,
  },
  data() {
    return {
      dailyTasks: [],
      danasnji_datum: new Date(),
    };
  },
  mounted() {
    this.getDailyTasks();
  },
  computed: {
    formatirani_datum() {
      return this.danasnji_datum.toLocaleDateString();
    },
  },
  methods: {
    getDailyTasks() {
      const datum = new Date();
      const danasnji_datum = moment(datum).format("YYYY-MM-DD");
      //console.log(danasnji_datum);
      db.collection("Tasks")
        .doc(store.currentUser)
        .collection("MyTasks")
        .where("datum", "==", danasnji_datum)
        .orderBy("datumVrijeme", "asc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.dailyTasks.push({
              id: doc.id,
              naziv: doc.data().naziv,
              vrijeme: doc.data().vrijeme,
            });
          });
        })
        .catch((error) => {
          console.error("Greška prilikom dohvata podataka", error);
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
#Zadaci {
  margin-bottom: 80px;
}
#plus {
  text-decoration: none;
  color: white;
}
</style>
