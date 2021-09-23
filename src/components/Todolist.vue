<template>
  <div class="todolist">
    <h1 class="todolist__header">To-do List</h1>
    <div class="todolist__content">
      <li
        class="todolist__content__list"
        v-for="(a, i) in savedTodolist"
        :key="i"
      >
        <div
          class="todolist__content__checkbox"
          :class="{
            todolist__content__checkbox__checked: savedTodolist[i].checked,
          }"
          @click="checkTodolist(i)"
        ></div>
        <span class="todolist__content__title">{{
          savedTodolist[i].title
        }}</span>
      </li>
    </div>

    <button class="todolist__create">
      <i class="fas fa-plus-circle"></i>
    </button>
    <button class="todolist__delete"><i class="far fa-trash-alt"></i></button>
  </div>
</template>

<script>
export default {
  name: "Todolist",
  data() {
    return {
      savedTodolist: [{ title: "asdfasdf", date: "11/22", checked: false }],
    };
  },
  methods: {
    checkTodolist(i) {
      if (this.savedTodolist[i].checked == false) {
        this.savedTodolist[i].checked = true;
      } else {
        this.savedTodolist[i].checked = false;
        console.log(this.savedTodolist[i].checked);
      }
    },
  },
};
</script>

<style>
li {
  list-style: none;
}
.todolist {
  margin-top: 3rem;
  color: white;
  box-sizing: border-box;
  width: 100%;
  height: 80%;
}

.todolist__header {
  margin: 0px 1.5rem;
  margin-bottom: 1rem;
}
.todolist__content__list {
  margin: 0px 1.5rem;
  display: flex;
  align-items: center;
}

.todolist__content__checkbox {
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin-right: 1rem;
  transition: all 0.5s;
}
.todolist__content__checkbox:hover {
  cursor: pointer;
}
.todolist__content__checkbox__checked {
  background: white;
}
</style>
