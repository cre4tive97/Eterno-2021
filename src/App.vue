<template>
  <transition-group :name="fadeOut">
    <router-view></router-view>
  </transition-group>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fadeOut: "",
    };
  },
  watch: {
    $route(to) {
      if (to.path === "/login") {
        this.fadeOut = "fadeout1";
      } else if (to.path === "/home") {
        this.fadeOut = "fadeout2";
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "SDGothicNeoM";
  src: url(./fonts/AppleSDGothicNeoM.ttf) format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "SDGothicNeoT";
  src: url(./fonts/AppleSDGothicNeoT.ttf) format("woff");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: SDGothicNeoM, SDCothicNeoT;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  margin: 0;
}
h1 {
  margin: 0;
}

.fadeout1-leave-from {
  opacity: 1;
}
.fadeout1-leave-active {
  transition: opacity 1s;
}
.fadeout1-leave-to {
  opacity: 0;
}
</style>
