<template>
  <nav class="navbar fixed-bottom navbar-light bg-light rounded-top-4">
    <a class="navbar-brand position-absolute" href="#"></a>
    <div class="container">
      <div class="col">
        <router-link to="/DailyTasks"
          ><img :src="require('@/assets/Tasks.png')" width="40px"
        /></router-link>
      </div>

      <div class="col">
        <router-link to="/Kalendar"
          ><img :src="require('@/assets/Kalendar.png')" width="40px"
        /></router-link>
      </div>

      <div class="col">
        <router-link to="/NewTask"
          ><img :src="require('@/assets/NewTask.png')" width="40px"
        /></router-link>
      </div>

      <div class="col">
        <router-link to="/MyProfile"
          ><img :src="require('@/assets/MojProfil.png')" width="40px"
        /></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigacija",
};
</script>
<style scoped>
.container {
  width: 80%;
}
</style>
