<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Nova aktivnost</h2>
    </div>
    Gdje je tekst??
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";

export default {
  name: "NewTask",
  components: {
    Navigacija,
  },
};
</script>

<style>
.ZAglavlje {
  background: white;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 5%;
}
</style>
