<template>
  <div class="about">
    <div class="about__content">
      <div class="about__profile">
        <div class="about__profile__image">
          <img src="profile.jpg" alt="profile" />
        </div>
        <p class="about__profile__name">Jaemun Choi | cre4tive97</p>
        <p class="about__profile__motto">Be a programmer, not a coder</p>
      </div>
      <div class="about__skills">
        <h4>Skills</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
p {
  margin: 0;
}
.about {
  margin-top: 50px;
  color: white;
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
</style>
