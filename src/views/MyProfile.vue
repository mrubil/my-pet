<template>
  <body>
    <div class="ZaglavljeProfila">
      <div class="Odjava">Odjava</div>
      <div class="SlikaProfila">Ovdje ide slika profila</div>
      <div class="Ime">Ime ljubimca</div>
      <div class="Info">Informacije o ljubimcu</div>
    </div>
    <div class="TijeloProfila"></div>
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
  </body>
</template>

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
  padding: 5px;
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
</style>
