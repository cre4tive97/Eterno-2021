<template>
  <div class="project">
    <div class="project__apps">
      <a
        class="project__app"
        href="https://github.com/cre4tive97/Cocha"
        target="_blank"
      >
        <img
          class="project__app__img"
          src="../images/cocha.png"
          alt="Cocha"
        />
        <span>Cocha</span>
      </a>
      <a
        class="project__app"
        href="https://github.com/cre4tive97/posuto"
        target="_blank"
      >
        <img
          class="project__app__img"
          src="../images/posuto.png"
          alt="Posuto"
        />
        <span>Posuto</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style>
.project {
  margin-top: 1rem;
  height: 85%;
  color: white;
  display: flex;
  justify-content: center;
}
.project__apps {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
}

.project__app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 12px;
}
.project__app:hover {
  cursor: pointer;
}
.project__app__img {
  width: 70px;
  height: 70px;
  margin-bottom: 4px;
}
</style>
