<template>
  <div class="card mx-auto rounded-4" style="width: 90%">
    <div class="card-body">
      <div class="container">
        <div class="row">
          <div class="card-title col">Naziv aktivnosti</div>
          <div class="col" style="color: #ff344c">Time</div>
          <div class="col" style="color: #ff344c">Date</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpcomingTask",
};
</script>

<style>
.container {
  font-weight: 600;
}
</style>
