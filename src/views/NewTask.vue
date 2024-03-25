<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600">Nova aktivnost</h2>
    </div>
    <div class="mx-4" id="NoviZadatak">
      <form>
        <div class="form-group">
          <label for="name" style="padding-bottom: 5px">Naziv</label>
          <input type="name" class="form-control" id="name" />
        </div>
        <div class="col-md-4 form-group">
          <label for="inputActivityName" style="padding-bottom: 5px"
            >Vrsta aktivnosti</label
          >
          <select id="inputActivityName" class="form-select">
            <option selected>Odaberi</option>
            <option>Prehrana</option>
            <option>Zdravlje</option>
            <option>Aktivnost</option>
          </select>
        </div>

        <button type="button" class="button-Gotovo">Gotovo</button>
      </form>
    </div>
    <Navigacija />
  </body>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";

export default {
  name: "NewTask",
  components: {
    Navigacija,
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
#NoviZadatak {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  font-size: 14px;
}
.button-Gotovo {
  background-color: #ff344c;
  color: white;
  margin-bottom: 10%;
  margin-top: 5%;
  border-radius: 20px;
  padding: 10px;
  border: none;
  text-decoration: none;
  width: 120px;
  font-weight: 600;
}
.form-select {
  border-radius: 20px;
}
.form-control {
  border-radius: 20px;
}
</style>
