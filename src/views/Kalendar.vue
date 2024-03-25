<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Kalendar</h2>
    </div>
    <div class="lijeva_strelica">
      <span @click="previousDate">
        <img :src="require('@/assets/left_arrow.png')" width="20vw" />
      </span>
    </div>
    <div style="color: white">{{ formatirani_datum }}</div>

    <div class="desna_strelica">
      <span @click="previousDate">
        <img :src="require('@/assets/right_arrow.png')" width="20vw" />
      </span>
    </div>

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
  data() {
    return {
      danasnji_datum: new Date(),
    };
  },

  computed: {
    formatirani_datum() {
      return this.danasnji_datum.toLocaleDateString();
    },
  },
  methods: {
    async previousDate() {
      const jucer = new Date(this.danasnji_datum); //promijeni naziv u trenutni
      jucer.setDate(jucer.getDate() - 1);
      this.danasnji_datum = jucer;
    },
    async nextDate() {
      const sutra = new Date(this.danasnji_datum); //promijeni naziv u trenutni
      sutra.setDate(sutra.getDate() + 1);
      this.danasnji_datum = sutra;
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
.lijeva_strelica {
  cursor: pointer;
}
.desna_strelica {
  cursor: pointer;
}
</style>
