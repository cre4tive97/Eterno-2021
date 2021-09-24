<template>
  <div class="todolist">
    <h1 class="todolist__header">할 일 목록</h1>
    <div class="todolist__content">
      <li
        class="todolist__content__list"
        v-for="(a, i) in savedTodolist"
        :key="i"
      >
        <div class="todolist__content__group">
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
        </div>
        <span class="todolist__content__date"
          >게시일 : {{ savedTodolist[i].date }}</span
        >
      </li>
    </div>
    <button @click="createTodolistState = true" class="todolist__create">
      <i class="fas fa-plus-circle"></i>
    </button>
    <button class="todolist__delete"><i class="far fa-trash-alt"></i></button>
    <form class="todolist__create__form" v-show="createTodolistState == true">
      <span class="todolist__create__header">새로운 할 일</span>
      <input
        class="todolist__create__input"
        type="text"
        placeholder="ex) Go to gym"
        @input="getCreateTodolistInputValue"
      />
      <div class="todolist__create__btnGroup">
        <button class="todolist__create__submit" @click="createTodolistSubmit">
          Submit
        </button>
        <button
          class="todolist__create__cancel"
          @click="
            $event.preventDefault();
            createTodolistState = false;
          "
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Todolist",
  data() {
    return {
      savedTodolist: [],
      createTodolistState: false,
      createTodolistInputValue: "",
    };
  },
  methods: {
    checkTodolist(i) {
      if (this.savedTodolist[i].checked == false) {
        this.savedTodolist[i].checked = true;
      } else {
        this.savedTodolist[i].checked = false;
      }
    },
    getCreateTodolistInputValue(e) {
      this.createTodolistInputValue = e.target.value;
    },
    createTodolistSubmit(e) {
      e.preventDefault();
      let date = new Date();
      let newTodolist = {
        title: this.createTodolistInputValue,
        date: `${date.getMonth()}/${date.getDate()}`,
        checked: false,
        color: "white",
      };
      this.savedTodolist.push(newTodolist);
      this.createTodolistState = false;
      e.target.parentNode.parentNode.childNodes[1].value = "";
      localStorage.setItem("todolist", JSON.stringify(this.savedTodolist));
    },
  },
  mounted() {
    this.savedTodolist.push(...JSON.parse(localStorage.getItem("todolist")));
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
  font-weight: 700;
}
.todolist__content__list {
  margin: 0px 1.5rem;
  display: flex;
  justify-content: space-between;
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
.todolist__content__group {
  display: flex;
  margin-bottom: 1rem;
}
.todolist__create {
  position: fixed;
  bottom: 20%;
  font-size: 1.5rem;
  background: transparent;
  border-style: none;
  margin-left: 1rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s;
}
.todolist__delete {
  position: fixed;
  bottom: 20%;
  right: 20%;
  margin-right: 1rem;
  font-size: 1.5rem;
  background: transparent;
  border-style: none;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s;
}
.todolist__create:hover,
.todolist__delete:hover {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
}
.todolist__create__form {
  width: 30%;
  height: 130px;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  background: #2e343a;
  position: fixed;
  bottom: 20%;
  left: 25%;
  display: flex;
  flex-direction: column;
}
.todolist__create__closeBtn:hover {
  background: #9c3131;
  cursor: pointer;
}
.todolist__create__header {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.todolist__create__input {
  background: transparent;
  border-style: none;
  color: white;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.todolist__create__input:focus {
  outline: none;
}
.todolist__create__submit,
.todolist__create__cancel {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  width: 30%;
  margin: auto;
  padding: 4px 0;
  transition: all 0.3s;
}
.todolist__create__submit:hover,
.todolist__create__cancel:hover {
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.todolist__create__btnGroup {
  display: flex;
  justify-content: space-between;
}
</style>
