<template>
  <div class="contact">
    <div class="contact__title">
      <h1>Contact me!</h1>
    </div>
    <div class="contact__content">
      <div
        v-for="(a, i) in contactData"
        :key="i"
        class="contact__content__item"
      >
        <i :class="contactData[i].icon"></i>
        <p class="contact__content__text">{{ contactData[i].text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      contactData: [
        { icon: "fab fa-github-square", text: "Github" },
        { icon: "fas fa-cube", text: "Blog" },
        { icon: "fas fa-envelope", text: "Email" },
      ],
    };
  },
};
</script>

<style></style>
