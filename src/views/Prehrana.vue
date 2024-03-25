<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Prehrana</h2>
    </div>

    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";

export default {
  name: "Prehrana",
  components: {
    Navigacija,
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
</style>
