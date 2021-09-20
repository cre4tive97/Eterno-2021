<template>
  <div
    id="main"
    class="default-intro"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="intro-login">
      <div class="intro-login__imgbox">
        <img src="profile.jpg" alt="profile" />
      </div>
      <h1 class="intro-login__username">Harry Borrison</h1>
      <button @click="$router.push('/Home')" class="intro-login__button">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import background from "../images/background.jpg";
export default {
  name: "Login",
  data() {
    return {
      background: background,
    };
  },
};
</script>

<style>
.intro-login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.intro-login__imgbox img {
  border-radius: 50%;
  width: 200px;
}
.intro-login__username {
  margin: 0;
  margin-top: 8px;
  font-size: 1.5rem;
  text-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
  color: white;
}
.intro-login__button {
  margin-top: 10px;
  padding: 8px 16px;
  border-style: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.5s;
}
.intro-login__button:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.5);
}
</style>
