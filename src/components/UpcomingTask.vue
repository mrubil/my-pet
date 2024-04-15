<template>
  <div class="card mx-auto rounded-4" style="width: 90%" id="kartica">
    <div class="card-body">
      <div class="row" style="font-size: 13px">
        <div class="card-title col-5 align-self-center">{{ MyTask.naziv }}</div>
        <div class="col-4 align-self-center" style="color: #ff344c">
          {{ MyTask.datum }}
        </div>
        <div class="col-3 align-self-center" style="color: #ff344c">
          {{ MyTask.vrijeme }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["MyTask"],
};
</script>

<style>
#kartica {
  font-weight: 600;
}
</style>
