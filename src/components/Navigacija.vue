<template>
  <nav class="navbar fixed-bottom navbar-light bg-light rounded-top-4">
    <a class="navbar-brand position-absolute" href="#"></a>
    <div class="mx-auto">
      <router-link to="/Tasks.vue"
        ><img :src="require('@/assets/Tasks.png')" width="5%"
      /></router-link>

      <router-link to="/Kalendar.vue"
        ><img :src="require('@/assets/Kalendar.png')" width="5%"
      /></router-link>
      <router-link to="/NewTask.vue"
        ><img :src="require('@/assets/NewTask.png')" width="5%"
      /></router-link>
      <router-link to="/MyProfile.vue"
        ><img :src="require('@/assets/MojProfil.png')" width="5%"
      /></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigacija",
};
</script>
