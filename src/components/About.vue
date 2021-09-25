<template>
  <div class="about">
    <div class="about__content">
      <div class="about__profile">
        <div
          class="about__profile__image"
          :class="{
            about__profile__imageAnimation: about__profile__imageAnimation,
          }"
        >
          <img src="profile.jpg" alt="profile" />
        </div>
        <p class="about__profile__name">Jaemun Choi | cre4tive97</p>
        <p class="about__profile__motto">Be a programmer, not a coder.</p>
      </div>
      <div class="about__skills">
        <h4 class="about__skills__title">Skills</h4>
        <div class="about__skills__skillset">
          <div
            v-for="(a, i) in skillsetData"
            :key="i"
            class="about__skills__item"
          >
            <span
              class="about__skills__icon"
              :style="{ background: skillsetData[i].color }"
            ></span>
            <p class="about__skills__text">{{ skillsetData[i].name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skillsetData: [
        { name: "HTML5", color: "#FF5F57" },
        { name: "CSS3", color: "#264BDD" },
        { name: "JavaScript", color: "#F1DE50" },
        { name: "Vue.js", color: "#65B485" },
        { name: "Node.js", color: "#92C84A" },
        { name: "Express", color: "#353535" },
        { name: "Sass", color: "#C66595" },
        { name: "Python", color: "#2F6492" },
      ],
      about__profile__imageAnimation: false,
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.about__profile__imageAnimation = true;
    }, 0);
  },
};
</script>

<style>
p {
  margin: 0;
}
.about {
  margin-top: 50px;
  color: white;
  width: 100%;
}
.about__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.about__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about__profile__image {
  width: 70%;
  max-width: 400px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s;
}
.about__profile__image img {
  width: 100%;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}

.about__profile__name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.about__profile__motto {
  font-size: 1rem;
  font-family: "AppleSDGothicNeoH";
  font-weight: 300;
}
.about__skills {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.about__skills__title {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 1rem;
}
.about__skills__skillset {
  display: flex;
  justify-content: center;
  margin: 0 10rem;
  flex-wrap: wrap;
}
.about__skills__item {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 5px;
}
.about__skills__item:hover {
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
.about__skills__icon {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 5px;
  position: relative;
  top: -1px;
}
.about__skills__text {
  font-family: "AppleSDGothicNeoH";
  font-weight: 400;
  font-size: 1rem;
}
.about__profile__imageAnimation {
  opacity: 1;
  transform: translateY(0px);
}
</style>
