<template>
  <div>준비중...</div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      weatherCity: ["Seoul", "Tokyo", "London"],
    };
  },
  methods: {
    weatherBtnClicked(e) {
      e.target.classList.add("btnClicked");
    },
  },
};
</script>

<style></style>
