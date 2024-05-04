<template>
  <div class="card mx-auto rounded-4" id="kartica" style="width: 90%">
    <div class="card-body">
      <div class="row" style="font-size: 13px">
        <div class="col-4 align-self-center">
          {{ dailyTask.naziv }}
        </div>
        <div class="col-3 align-self-center" style="color: black">
          {{ dailyTask.vrijeme }}
        </div>
        <div class="col align-self-center" style="color: #ff344c">
          <input
            class="form-check-input"
            type="radio"
            name="radio-2"
            id="radio-2"
            value=""
            aria-label="..."
          />
        </div>
        <div class="col align-self-center">
          <button @click="UrediZadatak" class="gumb">Uredi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dailyTask"],
  methods: {
    UrediZadatak() {
      this.$router.push({
        name: "EditTask",
        params: { id: this.dailyTask.id },
      });
    },
  },
};
</script>

<style>
#kartica {
  font-weight: 600;
  margin-top: 20px;
}
.form-check-input:checked {
  background-color: #ff344c;
  border-color: #ff344c;
}
.form-check-input {
  border-color: #ff344c;
  border-width: 2px;
}
#link {
  color: #ff344c;
  text-decoration: none;
}
.gumb {
  background: none;
  border: none;
}
</style>
