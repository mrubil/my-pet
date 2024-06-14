<template>
  <div class="card mx-auto rounded-4" style="width: 90%" id="kartica">
    <div class="card-body">
      <div class="row justify-content-center" style="font-size: 13px">
        <div class="col-4 align-self-center">{{ task.naziv }}</div>
        <div class="col-4 align-self-center" style="color: black">
          {{ task.datum }}
        </div>
        <div class="col-2 align-self-center px-0" style="color: black">
          {{ task.vrijeme }}
        </div>
        <div class="col-2 align-self-center px-0">
          <button @click="UrediZadatak" class="gumb">Uredi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    UrediZadatak() {
      this.$router.push({
        name: "EditTask",
        params: { id: this.task.id },
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
.gumb {
  background: none;
  border: none;
}
</style>
