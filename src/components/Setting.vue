<template>
  <div class="setting">
    <ul class="setting__ul">
      <li class="setting__list">
        <h3>Weather</h3>
        <div class="weather-btn">
          <button
            v-for="(a, i) in weatherCity"
            :key="i"
            @click="weatherBtnClicked"
          >
            {{ a }}
          </button>
        </div>
      </li>
      <li class="setting__list">
        <h3>Night-mode</h3>
      </li>
      <li class="setting__list">
        <h3>24H-Watch</h3>
      </li>
    </ul>
  </div>
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

<style>
.setting {
  width: 100%;
}
.setting__ul {
  list-style: none;
  color: rgb(209, 209, 209);
  padding: 0 40px;
}
.setting__list {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.setting__list h3 {
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
}

.weather-btn button {
  margin: 0px 1rem;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  transition: all 0.5s;
}
.weather-btn button:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
}
.btnClicked {
  background: rgba(255, 255, 255, 0.3);
}
</style>
