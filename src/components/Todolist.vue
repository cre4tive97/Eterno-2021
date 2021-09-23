<template>
  <div class="todolist">
    <h1 class="todolist__header">To-do List</h1>
    <div class="todolist__content">
      <li>
        <div class="todolist__content__checkbox"></div>
        <span class="todolist__content__title"></span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todolist",
  data() {
    return {
      savedTodo: [],
    };
  },
};
</script>

<style>
.todolist {
  margin: 0px 1.5rem;
  margin-top: 3rem;
  color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.todolist__header {
  margin-bottom: 1rem;
}
</style>
