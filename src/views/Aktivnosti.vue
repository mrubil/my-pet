<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Aktivnosti</h2>
    </div>

    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";

export default {
  name: "Aktivnosti",
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
