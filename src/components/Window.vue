<template>
  <div class="window">
    <div class="window-box">
      <div class="window-header">
        <div class="window-btn-group">
          <button class="btn btn-red" @click="$emit('closeWindow')"></button>
          <button class="btn btn-yellow"></button>
          <button class="btn btn-green"></button>
        </div>
      </div>
      <Safari v-show="i == 1" />
    </div>
  </div>
</template>

<script>
import Safari from "./Safari.vue";
export default {
  name: "Window",
  data() {
    return {};
  },
  props: {
    i: Number,
  },
  components: {
    Safari,
  },
};
</script>

<style>
.window {
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.window-box {
  max-width: 1000px;
  width: 60%;
  height: 60vh;
  background: #262c32;
  border-radius: 12px;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
}
.window-header {
  width: 100%;
  height: 2.5rem;
  background: transparent;
}
.window-btn-group {
  margin-left: 10px;
}
.btn {
  margin-top: 20px;
  padding: 0;
  border-style: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-left: 8px;
}
.btn-red {
  background: #e04949;
}
.btn-red:hover {
  background: #9c3131;
  cursor: pointer;
}
.btn-yellow {
  background: #f5be50;
}
.btn-green {
  background: #28c640;
}
</style>
