<template>
  <body>
    <div class="ZaglavljeProfila">
      <div class="Odjava">
        <img :src="require('@/assets/exit.png')" width="20vw" />
      </div>
      <div class="SlikaProfila">
        <img
          class="rounded-circle object-fit-cover"
          :src="require('@/assets/profilna.jpg')"
          height="70vw"
          width="70vw"
        />
      </div>
      <div class="Ime">Juice</div>
      <div class="Info">Informacije o ljubimcu</div>
    </div>
    <div class="Tijelo">
      <p class="N" style="text-align: left">Nadolazeće aktivnosti</p>
      <UpcomingTask />
    </div>
    <Navigacija />
  </body>
</template>
<script>
import UpcomingTask from "@/components/UpcomingTask.vue";
import Navigacija from "@/components/Navigacija.vue";

export default {
  name: "MyProfile",

  components: {
    UpcomingTask,
    Navigacija,
  },
};
</script>

<style>
.body {
  background: #ff344c;
}
.ZaglavljeProfila {
  background: white;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 5%;
}
.Odjava {
  text-align: right;
}
.SlikaProfila {
  padding: 10px;
}

.Ime {
  padding: 10px;
}
.Informacije {
  padding: 10px;
}
p.N {
  padding-left: 5%;
  color: white;
}
</style>
