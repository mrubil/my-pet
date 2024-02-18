<template>
  <div class="row mx-auto" id="Mapa">
    <div class="col-4 col-sm-4 col-lg-4" id="Zdravlje">
      <img :src="require('@/assets/Zdravlje.png')" width="100vw" />
    </div>

    <div class="col-4 col-sm-4 col-lg-4" id="Prehrana">
      <img :src="require('@/assets/Prehrana.jpg')" width="100vw" />
    </div>

    <div class="col-4 col-sm-4 col-lg-4" id="Prehrana">
      <img :src="require('@/assets/Aktivnosti.png')" width="100vw" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Mape",
};
</script>

<style>
#Mapa {
  padding-left: 5%;
  padding-right: 5%;
  column-gap: auto;
}
#Prehrana {
  background: white;
  border-radius: 10px;
}
#Zdravlje {
  background: white;
  border-radius: 10px;
}
#Aktivnost {
  background: white;
  border-radius: 10px;
}
</style>
