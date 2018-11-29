<template>
  <div class="filters">
    <div class="row">
      <div class="mt-2 col-5">
        <label for="choose_your_team" class="d-flex justify-content-start">Choose your team</label>
      </div>
      <div class="col-7">
        <select class="form-control d-flex justify-content-start" id="choose_your_team">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>

    <div class="row mt-4">
      <div class="form-check col">
        <div>
          <input class="form-check-input" type="checkbox" id="upcoming_matches" value="upcoming_matches">
          <label class="form-check-label" for="upcoming_matches">Upcoming matches</label>
      </div>
        </div>
       <div class="form-check col">
          <div class="float-right">
          <input class="form-check-input" type="checkbox" id="finished" value="finished">
          <label class="form-check-label" for="finished">Finished matches</label>
      </div>
       </div>
     
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>



</style>