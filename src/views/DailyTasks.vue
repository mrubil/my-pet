<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Današnje aktivnosti</h2>
    </div>
    <div id="Zadaci"></div>
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";

export default {
  name: "DailyTasks",
  components: {
    Navigacija,
  },
  data() {
    return {};
  },
  methods: {},
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
</style>
