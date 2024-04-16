<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Kalendar</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-3" id="lijeva_strelica">
          <span @click="previousDate">
            <img :src="require('@/assets/left_arrow.png')" width="20vw" />
          </span>
        </div>
        <div class="col-6" style="color: white">{{ formatirani_datum }}</div>

        <div class="col-3" id="desna_strelica">
          <span @click="nextDate">
            <img :src="require('@/assets/right_arrow.png')" width="20vw" />
          </span>
        </div>
      </div>
    </div>
    <div class="Zadaci">
      <UpcomingTask
        v-for="task in tasks"
        :key="task.id"
        :MyTask="task"
      ></UpcomingTask>
    </div>
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";
import UpcomingTask from "@/components/UpcomingTask.vue";
import store from "@/store";
import { db } from "@/firebase";
import moment from "moment";

export default {
  name: "Kalendar",
  components: {
    Navigacija,
    UpcomingTask,
  },

  data() {
    return {
      danasnji_datum: new Date(),
      tasks: [],
    };
  },
  mounted() {
    this.getMyTasks();
  },

  computed: {
    formatirani_datum() {
      return this.danasnji_datum.toLocaleDateString();
    },
  },
  methods: {
    getMyTasks() {
      const noviFormatDatuma = moment(this.danasnji_datum).format("YYYY-MM-DD");
      console.log(noviFormatDatuma);
      db.collection("Tasks")
        .doc(store.currentUser)
        .collection("MyTasks")
        .where("datum", "==", noviFormatDatuma)
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

    async previousDate() {
      const jucer = new Date(this.danasnji_datum); //promijeni naziv u trenutni
      jucer.setDate(jucer.getDate() - 1);
      this.danasnji_datum = jucer;
      this.tasks = [];
      this.getMyTasks();
    },
    async nextDate() {
      const sutra = new Date(this.danasnji_datum); //promijeni naziv u trenutni
      sutra.setDate(sutra.getDate() + 1);
      this.danasnji_datum = sutra;
      this.tasks = [];
      this.getMyTasks();
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
#lijeva_strelica {
  cursor: pointer;
}
#desna_strelica {
  cursor: pointer;
}
.container {
  width: 70%;
  font-weight: 400;
}
.Zadaci {
  padding-top: 20px;
}
</style>
