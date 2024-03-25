<template>
  <body>
    <div class="Zaglavlje">
      <h2 style="font-weight: 600; font-size: large; padding: 5px">
        Recite nam nešto o svojem ljubimcu
      </h2>
    </div>
    <div class="Podaci">
      <form>
        <div class="form-group">
          <label for="name" style="padding-bottom: 5px">Naziv</label>
          <input type="name" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="name" style="padding-bottom: 5px">Vrsta</label>
          <input type="name" class="form-control" id="name" />
        </div>

        <div class="col-md-4 form-group">
          <label for="inputActivityName" style="padding-bottom: 5px"
            >Spol</label
          >
          <select id="inputActivityName" class="form-select">
            <option selected>Odaberi</option>
            <option>M</option>
            <option>Ž</option>
          </select>
        </div>
        <div class="form-group" style="padding-top: 15px">
          <label for="name" style="padding-bottom: 5px">Dob</label>
          <input type="name" class="form-control" id="name" />
        </div>
        <div class="Slika">
          Učitaj profilnu sliku
          <div class="Upload">
            <img class="square" :src="require('@/assets/Camera.png')" />
          </div>
        </div>
        <button type="button" class="button-done">Spremi</button>
      </form>
    </div>
  </body>
</template>

<script>
export default {
  name: "Registracija",
  components: {},
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
body {
  background: #ff344c;
}
.Podaci {
  padding: 30px;
  color: white;
}
.button-done {
  background-color: black;
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
.Upload {
  padding: 10px;
  margin-top: 10px;
  background: white;
}
</style>
