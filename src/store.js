import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      weatherData: [],
      randomIndex: 0,
      recommendApp: [],
      weatherHours: [0, 5, 10, 15, 20],
      currentPosition: [],
    };
  },
  mutations: {
    setRandomIndex(state) {
      const randomNum = Math.floor(Math.random() * 8);
      state.randomIndex = randomNum;
    },
    setWeatherData(state, data) {
      state.weatherData = data;
      console.log(state.weatherData);
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
          context.commit("setCurrentWeather", a.data);
        })
        .catch(() => {
          console.log(context.state.currentPosition[0]);
        });
    },
  },
});

export default store;
