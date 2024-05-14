<template>
  <Doughnut :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

import { Doughnut } from "vue-chartjs";
import store from "@/store";
import { db } from "@/firebase";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "Statistika",
  components: {
    Doughnut,
  },
  data() {
    return {
      data: {
        labels: ["Zdravlje"],
        datasets: [
          {
            backgroundColor: ["#ff344c", "#2b9bf7"],
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let checkedCount = 0;
      let uncheckedCount = 0;

      db.collection("Tasks")
        .doc(store.currentUser)
        .collection("MyTasks")
        .where("vrstaAktivnosti", "==", "Zdravlje")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.checked) {
              checkedCount++;
            } else {
              uncheckedCount++;
            }
          });
          if (checkedCount === 0 && uncheckedCount === 0) {
            const newData = {
              labels: ["Zdravlje"],
              datasets: [
                {
                  data: [0, 1],
                },
              ],
            };
            this.data = newData;
          } else {
            const newData = {
              labels: ["Zdravlje"],
              datasets: [
                {
                  data: [checkedCount, uncheckedCount],
                },
              ],
            };
            this.data = newData;
          }
        })
        .catch((error) => {
          console.error("Error prilikom dohvata", error);
        });
    },
  },
};
</script>
