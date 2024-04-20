<template>
  <body>
    <div id="Zaglavlje">
      <h2 style="font-weight: 600; font-size: large; padding: 5px">
        Uredi profil
      </h2>
    </div>
    <div id="Tijelo">Forma za edit</div>
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";

export default {
  name: "EditProfile",
  components: {
    Navigacija,
  },
};
</script>

<style>
body {
  background: #ff344c;
}
#Zaglavlje {
  background: white;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 5%;
}
</style>
