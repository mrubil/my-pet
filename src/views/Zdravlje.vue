<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Zdravlje</h2>
    </div>
    <div id="Tijelo">
      <p id="Naslov">Nadolazeće aktivnosti</p>
    </div>
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";
import UpcomingTask from "@/components/UpcomingTask.vue";

export default {
  name: "Zdravlje",
  components: {
    Navigacija,
    UpcomingTask,
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
