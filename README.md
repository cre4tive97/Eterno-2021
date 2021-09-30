## 🧷 Features

- [x] Consist of Vue3, Vuex@next, vue-router
- [x] MacOS BigSur Style UI
- [x] Variable apps
- [ ] Responsive design

## 📱 Apps Features

- [x] Safari
- [x] Contact
- [x] Todolist using LocalStorage
- [x] About me
- [ ] System Information
- [ ] Terminal (will be modified ASAP)
- [x] Sidebar weather with OpenWeather API
- [ ] Instagram CRUD with node.js / Express

## 🧾 Features Description

#### Sidebar weather app

- Openweathermap API를 사용해서 구현했습니다.
  웹사이트에 처음 방문하게되면, 현재 사용자의 위/경도를 요청합니다.
  해당 위치정보는 로컬스토리지에 저장됩니다.
  Sidebar.vue 컴포넌트가 마운트되면 store.js 에서 로컬스토리지에 저장된 데이터를 이용해 ajax GET요청을 합니다.

## ⛏ Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
