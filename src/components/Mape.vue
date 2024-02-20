<template>
  <div class="wrapper">
    <div>
      <router-link to="/Tasks"
        ><img :src="require('@/assets/Zdravlje.png')" width="70vw"
      /></router-link>
    </div>
    <div>
      <router-link to="/Tasks"
        ><img :src="require('@/assets/Prehrana.jpg')" width="70vw"
      /></router-link>
    </div>
    <div>
      <router-link to="/Tasks"
        ><img :src="require('@/assets/Aktivnosti.png')" width="70vw"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mape",
};
</script>

<style>
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
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-auto-rows: 80px;
  grid-auto-flow: dense;
  padding-left: 10%;
  padding-right: 10%;
}
.wrapper > div {
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
