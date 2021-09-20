<template>
  <div
    id="main"
    class="default-intro"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="greeting">
      <div class="greeting__box" v-for="(a, i) in greetingText" :key="i">
        <transition name="greetingAnimation">
          <h1 v-show="greetingCount == i" class="greeting__text">
            {{ greetingText[i] }}
          </h1>
        </transition>
      </div>
      <transition name="textAnimation">
        <p
          @click="$router.push('/login')"
          v-if="defaultTextCount == 1"
          class="default-intro__text"
        >
          Touch here to Login
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
import background from "../images/background.jpg";
export default {
  name: "Intro",
  data() {
    return {
      greetingText: ["Hello", "こんにちは", "안녕하세요"],
      greetingCount: 3,
      background: background,
      defaultTextCount: 0,
      routeAnimation: "",
    };
  },

  mounted() {
    this.greetingCount = 0;
    setInterval(() => {
      if (this.greetingCount == 0) {
        this.greetingCount = 1;
      } else if (this.greetingCount == 1) {
        this.greetingCount = 2;
      } else {
        this.greetingCount = 0;
      }
    }, 4000);
    this.defaultTextCount = 1;
  },
  watch: {
    $route(to) {
      if (to.path === "/") {
        this.routeAnimation = "wow";
      } else {
        this.routeAnimation = "wow";
      }
    },
  },
};
</script>

<style>
.default-intro {
  height: 100vh;
  font-family: SDGothicNeoM;
  background-size: cover;
}
.default-intro__text:hover {
  cursor: pointer;
}

.default-intro__text {
  color: white;
  position: absolute;
  bottom: 12rem;
  font-size: 1.5rem;
  text-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
}

.greeting {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.greeting__text {
  margin: 0;
  font-size: 5rem;
  color: white;
  text-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
}
.greeting__box {
  position: absolute;
  width: 100%;
  text-align: center;
}

.greetingAnimation-enter-from {
  opacity: 0;
}
.greetingAnimation-enter-active {
  transition: opacity 2s 2s;
}
.greetingAnimation-enter-to {
  opacity: 1;
}
.greetingAnimation-leave-from {
  opacity: 1;
}
.greetingAnimation-leave-active {
  transition: opacity 2s;
}
.greetingAnimation-leave-to {
  opacity: 0;
}
.textAnimation-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.textAnimation-enter-active {
  transition: all 3s 4s;
}
.textAnimation-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
</style>
