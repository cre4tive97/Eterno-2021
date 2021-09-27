<template>
  <div class="sidebar">
    <div class="sidebar__greeting">
      <h2>Good morning</h2>
    </div>
    <div class="sidebar__weather">
      <div class="sidebar__weather__group">
        <p class="sidebar__weather__city">Seoul</p>
        <h2 class="sidebar__weather__currentTemperature">26.5℃</h2>
      </div>
      <div class="sidebar__weather__week">
        <div class="sidebar__weather__days">
          <i style="color:#F8B914" class="fas fa-sun"></i>
          <span class="slidebar__weather__days__currentTemperature">26.5℃</span>
        </div>
        <div class="sidebar__weather__days">
          <i style="color:#F8B914" class="fas fa-sun"></i>
          <span class="slidebar__weather__days__currentTemperature">26.5℃</span>
        </div>
        <div class="sidebar__weather__days">
          <i style="color:#F8B914" class="fas fa-sun"></i>
          <span class="slidebar__weather__days__currentTemperature">26.5℃</span>
        </div>
        <div class="sidebar__weather__days">
          <i style="color:#F8B914" class="fas fa-sun"></i>
          <span class="slidebar__weather__days__currentTemperature">26.5℃</span>
        </div>
        <div class="sidebar__weather__days">
          <i style="color:#F8B914" class="fas fa-sun"></i>
          <span class="slidebar__weather__days__currentTemperature">26.5℃</span>
        </div>
      </div>
    </div>
    <div class="sidebar__recommend">
      <div class="sidebar__recommend__text">
        <p>새로운 할 일 등록은 어때요?</p>
      </div>
      <div class="sidebar__recommend__app" @click="$emit('openWindow')">
        <img :src="apps[5].image" />
        <span>{{ apps[5].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      greetingData: [
        "Good Morning",
        "Good Afternoon",
        "Good Evening",
        "Good Night",
      ],
    };
  },
  props: {
    apps: Array,
    i: Number,
  },
};
</script>

<style>
.sidebar h2 {
  margin: 0;
}
.sidebar {
  position: absolute;
  left: 0.5rem;
  bottom: 3.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: white;
  width: 200px;
  z-index: 5;
  backdrop-filter: blur(16px);
}
.sidebar__greeting {
  margin-bottom: 0.5rem;
}
.sidebar__weather__city {
  font-size: 0.7rem;
  position: relative;
  top: 4px;
}
.sidebar__weather__group {
  margin-bottom: 1rem;
}
.sidebar__weather {
  background: linear-gradient(170deg, #2087b7, #76b7d8);
  padding: 0.5rem;
  padding-top: 0;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}
.sidebar__weather__week {
  display: flex;
  justify-content: space-between;
}
.sidebar__weather__days {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
}
.slidebar__weather__days__currentTemperature {
  font-size: 0.5rem;
}
.sidebar__recommend {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 0.5rem 1rem;
}
.sidebar__recommend__app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
}
.sidebar__recommend__app:hover {
  cursor: pointer;
}
.sidebar__recommend__app img {
  width: 50px;
  height: 50px;
}
.sidebar__recommend__app span {
  font-size: 0.7rem;
}
</style>
