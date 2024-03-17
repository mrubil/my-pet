<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Kalendar</h2>
    </div>

    <img
      :src="require('@/assets/left_arrow.png')"
      width="20vw"
      onclick="previousDate()"
    />

    <span id="danas">{{ todaysDate() }}</span>

    <img :src="require('@/assets/right_arrow.png')" width="20vw" />
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";

export default {
  name: "Kalendar",
  components: {
    Navigacija,
  },

  methods: {
    todaysDate() {
      let today = new Date().toLocaleDateString();
      return today;
    },
    previousDate() {
      let a = this.todaysDate();
      a = a.setDate(a.getDate() - 1);
    },
    nextDate() {
      let b = this.todaysDate();
      b = b.setDate(b.getDate() + 1);
    },
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
