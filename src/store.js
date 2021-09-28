import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      weatherData: [],
      randomIndex: 0,
      recommendApp: [],
      currentHour: 0,
      currentPosition: [],
    };
  },
  mutations: {
    setRandomIndex(state) {
      const randomNum = Math.floor(Math.random() * 8);
      state.randomIndex = randomNum;
    },
    setCurrentWeather(state, data) {
      if (state.currentHour >= 0 && state.currentHour <= 3) {
        state.weatherData = data;
      }
    },
    setCurrentPosition(state) {
      navigator.geolocation.getCurrentPosition((position) => {
        state.currentPosition = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        console.log(state.currentPosition);
        localStorage.setItem(
          "CurrentPosition",
          JSON.stringify(state.currentPosition)
        );
      });
    },
  },
  actions: {
    getCurrentWeather(context) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${
            JSON.parse(localStorage.getItem("CurrentPosition"))[0]
          }&lon=${
            JSON.parse(localStorage.getItem("CurrentPosition"))[1]
          }&exclude=minutely,daily&units=metric&appid=a985ee3f6bd72d99e16a6e0a1c0363c0`
        )
        .then((a) => {
          console.log(a.data);
          context.commit("setCurrentWeather", a.data.list);
        })
        .catch(() => {
          console.log(context.state.currentPosition[0]);
        });
    },
  },
});

export default store;
