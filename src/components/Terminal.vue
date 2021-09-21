<template>
  <div class="terminal">
    <div class="terminal__content">
      <span>Last login: {{ getDate }} on console</span>
      <br />
      <br />
      <span style="color : #055C9D">~</span>
      <br />
      <div v-for="(a, i) in terminalInputData" :key="i">
        <span>{{ a }}</span>
      </div>
      <div class="terminal__form">
        <span style="color : #FA26A0">></span>
        <form>
          <input
            v-model="getTerminalInputValue"
            class="terminal__input"
            type="text"
          />
          <button @click="terminalHandleSubmit" style="display:none"></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  data() {
    return {
      getDate: new Date(),
      getTerminalInputValue: "",
      terminalCommand: [],
      terminalInputData: [],
    };
  },
  methods: {
    terminalHandleSubmit(e) {
      e.preventDefault();
      if (this.terminalCommand.includes(this.getTerminalInputValue) == true) {
        this.terminalInputData.push(this.getTerminalInputValue);
        e.target.value = "";
      } else {
        this.terminalInputData.push(this.getTerminalInputValue);
        console.log(this.terminalInputData);
      }
    },
  },
};
</script>

<style>
.terminal {
  font-family: "SFMonoRegular";
}
.terminal__content {
  padding: 0px 14px;
  margin-top: 15px;
  color: white;
  font-size: 0.8rem;
  font-weight: 800;
}
.terminal__form {
  display: flex;
  align-items: center;
}
.terminal__input {
  margin-left: 15px;
  background: transparent;
  border-style: none;
  color: white;
  font-family: "SFMonoRegular";
  font-weight: 800;
  width: 70%;
  max-width: 800px;
  font-size: 0.8rem;
}
.terminal__input:focus {
  outline: none;
}
</style>
