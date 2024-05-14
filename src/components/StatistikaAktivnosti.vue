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
  name: "StatistikaAktivnosti",
  components: {
    Doughnut,
  },
  data() {
    return {
      data: {
        labels: ["Aktivnosti"],
        datasets: [
          {
            backgroundColor: ["#ff344c", "#c2c3c4"],
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
        .where("vrstaAktivnosti", "==", "Aktivnost")
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
              labels: ["Aktivnosti"],
              datasets: [
                {
                  data: [0, 1],
                },
              ],
            };
            this.data = newData;
          } else {
            const newData = {
              labels: ["Aktivnosti"],
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
