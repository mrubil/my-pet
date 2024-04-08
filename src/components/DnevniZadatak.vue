<template>
  <div class="card mx-auto rounded-4" style="width: 90%">
    <div class="card-body">
      <div class="container">
        <div class="row" style="font-size: 13px">
          <div class="card-title col-5 align-self-center">
            Odlazak veterinaru
          </div>
          <div class="col-4 align-self-center" style="color: #ff344c">
            15:00
          </div>
          <div class="col-3 align-self-center" style="color: #ff344c">
            <input
              class="form-check-input"
              type="radio"
              name="radioNoLabel"
              id="radioNoLabel1"
              value=""
              aria-label="..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DnevniZadatak",
};
</script>

<style>
.container {
  font-weight: 600;
}
</style>
