<template>
  <div class="project">
    <div class="project__apps">
      <img class="project__cocha" src="../images/cocha.png" alt="Cocha" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style>
.project {
  display: flex;
  height: 80%;
  margin: 0px 12px;
  flex-wrap: wrap;
}
.project__apps {
  width: 100%;
}
.project__cocha {
  width: 80px;
  height: 80px;
}
</style>
