<template>
  <div class="instagram">
    <header class="instagram__header">
      <nav class="instagram__nav">
        <img class="instagram__nav__logo" src="../images/instagram-logo.png" />
        <ul class="instagram__nav__menu">
          <li><i class="far fa-plus-square"></i></li>
          <li><i class="far fa-heart"></i></li>
          <li><i class="far fa-comment"></i></li>
        </ul>
      </nav>
    </header>
    <div class="instagram__content">
      <div class="instagram__content__profile">
        <div class="instagram__content__profile__image"></div>
        <div class="instagram__content__profile__username"></div>
      </div>
      <div class="instagram__content__post">
        <div class="instagram__content__post__image"></div>
        <div class="instagram__content__post__text">
          <div class="instagram__content__post__username"></div>
          <div class="instagram__content__post__content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instagram",
  data() {
    return {
      instagramData: [],
    };
  },
};
</script>

<style>
.instagram {
  margin-top: 50px;
  width: 100%;
}
.instagram__header {
  position: sticky;
  width: 100%;
}
.instagram__nav {
  display: flex;
  margin: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
}
.instagram__nav__logo {
  width: 7rem;
  height: 100%;
}
.instagram__nav__menu {
  display: flex;
  color: white;
  font-size: 1.5rem;
  margin: 0;
}
.instagram__nav__menu li {
  margin-left: 1.5rem;
}
</style>
