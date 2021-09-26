<template>
  <div class="instagram__content">
    <div class="instagram__content__profile">
      <div
        class="instagram__content__profile__image"
        :style="{ backgroundImage: `url(${instagramData[i].profileImage})` }"
      ></div>
      <div class="instagram__content__profile__username">
        {{ instagramData[i].name }}
      </div>
    </div>
    <div class="instagram__content__post">
      <div
        class="instagram__content__post__image"
        :style="{ backgroundImage: `url(${instagramData[i].postImage})` }"
      ></div>
      <div class="instagram__content__post__btnGroup">
        <i v-show="instagramData[i].liked == false" class="far fa-heart"></i>
        <i v-show="instagramData[i].liked == true" class="fas fa-heart"></i>
        <i class="far fa-comment-dots"></i>
      </div>
      <div class="instagram__content__post__text">
        <div class="instagram__content__post__username">
          {{ instagramData[i].name }}
        </div>
        <div class="instagram__content__post__content">
          <p>{{ instagramData[i].content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstagramPost",
  props: {
    instagramData: Array,
    i: Number,
  },
};
</script>

<style>
.instagram__content {
  color: white;
  width: 100%;
  margin-bottom: 2rem;
}
.instagram__content__profile {
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.instagram__content__profile__image {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.instagram__content__post__image {
  width: 100%;
  height: 300px;
  background-size: cover;
  margin-bottom: 0.3rem;
}
.instagram__content__post__btnGroup {
  margin: 0 1.5rem;
  font-size: 1.25rem;
  margin-bottom: 8px;
}
.instagram__content__post__btnGroup i {
  margin-right: 1rem;
}
.instagram__content__post__text {
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
}
</style>
