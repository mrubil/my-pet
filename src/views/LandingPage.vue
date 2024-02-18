<template>
  <div class="LandingPage" style="padding-top: 10%">
    <h1 style="font-weight: 600">Dobrodošli na</h1>
    <br />
    <img :src="require('@/assets/White_paw_print.png')" width="200vw" />

    <h1><br /><b>MyPet</b></h1>
    <br />
    <button class="button-prijava" @click="$router.push('Login')">
      Prijava
    </button>
    <br />
    <button class="button-registracija" @click="$router.push('SignUp')">
      Registracija
    </button>
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
  width: 180px;
  font-weight: 600;
}
.button-registracija {
  background-color: black;
  color: white;
  margin-bottom: 10%;
  border-radius: 20px;
  padding: 10px;
  border: none;
  text-decoration: none;
  width: 180px;
  font-weight: 600;
}
</style>
