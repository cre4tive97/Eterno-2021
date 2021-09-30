![logo](./public/Eterno.png)

![vue](https://img.shields.io/badge/Vue.js-%5E3.0.0-green)
![vuex](https://img.shields.io/badge/Vuex-%5E4.0.2-brightgreen)
![vue-router](https://img.shields.io/badge/Vuex-4-blue)

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

## 🧾 Features/WIL Description

#### Sidebar weather app

- Openweathermap API와 Vuex를 사용해서 구현했습니다.
- 사실 컴포넌트 단위로 구현해도 전혀 문제가 없으나, vuex를 공부하기 위해 vuex로 공부해보았습니다.
  actions의 비동기 ajax 요청, mutations와 actions의 커밋, 디스패치 지점, API에서 불러온 데이터를 효율적으로 바인딩 하는 것에 대해 많은 고민을 했습니다.
- 웹사이트에 처음 방문하게되면, 현재 사용자의 위/경도를 요청합니다.
  일반적으로 사용자의 위/경도는 가변적이지 않기 때문에, 로컬스토리지에 저장/관리 했습니다.
  Sidebar.vue 컴포넌트가 마운트되면 store.js 에서 로컬스토리지에 저장된 데이터를 이용해 ajax GET요청을 합니다.
  ajax 라이브러리는 axios를 사용했습니다.

#### Todolist app

- 서버와의 통신 없이 로컬 환경에서 구현하기 위해 로컬스토리지를 사용했습니다.
- 로컬스토리지에는 String 타입만 저장될 수 있어서, 코드도 지저분하고 데이터 관리를 할 수 없기 때문에 서버의 필요성을 느꼈지만, 적은 용량의 데이터를 저장하는 경우에는 차용할 수 있겠다는 생각이 들었습니다.
- 로컬스토리지의 대안으로서 브라우저 내의 indexedDB 에 대해서도 얕게 확인해봤습니다.

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
