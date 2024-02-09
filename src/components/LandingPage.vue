<template>
  <div class="LandingPage">
    <h1>Dobrodošli na</h1>
    <br />
    <img :src="require('@/assets/White_paw_print.png')" width="30%" />

    <h1><br />MyPet</h1>
    <br />
    <button class="button-prijava" @click="$router.push('Login')">
      Prijava
    </button>
    <br />
    <button class="button-registracija" @click="$router.push('SignUp')">
      Registracija
    </button>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.button-prijava {
  background-color: white;
  color: black;
  margin-top: 5%;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 10px;
  border: none;
  text-decoration: none;
  width: 200px;
}
.button-registracija {
  background-color: black;
  color: white;
  margin-bottom: 10%;
  border-radius: 20px;
  padding: 10px;
  border: none;
  text-decoration: none;
  width: 200px;
}
</style>
