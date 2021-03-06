<div align="center">

![logo](./public/Eterno.png)

![vue](https://img.shields.io/badge/Vue.js-%5E3.0.0-green)
![vuex](https://img.shields.io/badge/Vuex-%5E4.0.2-brightgreen)

[Demo](https://cre4tive97.github.io/)

</div>

## ๐งท Features

- [x] Consist of Vue3, Vuex@next, vue-router
- [x] MacOS BigSur Style UI
- [x] Variable apps
- [ ] Responsive design

## ๐ฑ Apps Features

- [x] Safari
- [x] Contact
- [x] Todolist using LocalStorage
- [x] About me
- [x] System Information
- [x] Terminal (will be modified ASAP)
- [x] Sidebar weather with OpenWeather API
- [ ] Instagram CRUD with node.js / Express

## ๐งพ Features/WIL Description

#### Sidebar weather app

- Openweathermap API์ Vuex๋ฅผ ์ฌ์ฉํด์ ๊ตฌํํ์ต๋๋ค.
- ์ฌ์ค ์ปดํฌ๋ํธ ๋จ์๋ก ๊ตฌํํด๋ ์ ํ ๋ฌธ์ ๊ฐ ์์ผ๋, vuex๋ฅผ ๊ณต๋ถํ๊ธฐ ์ํด vuex๋ก ๊ณต๋ถํด๋ณด์์ต๋๋ค.
  actions์ ๋น๋๊ธฐ ajax ์์ฒญ, mutations์ actions์ ์ปค๋ฐ, ๋์คํจ์น ์ง์ , API์์ ๋ถ๋ฌ์จ ๋ฐ์ดํฐ๋ฅผ ํจ์จ์ ์ผ๋ก ๋ฐ์ธ๋ฉ ํ๋ ๊ฒ์ ๋ํด ๋ง์ ๊ณ ๋ฏผ์ ํ์ต๋๋ค.
- ์น์ฌ์ดํธ์ ์ต์ด ์ ์์ Geolocation API๋ฅผ ์ด์ฉํด ์ฌ์ฉ์์ ์/๊ฒฝ๋ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ต๋๋ค.
  ์ผ๋ฐ์ ์ผ๋ก ์ฌ์ฉ์์ ์/๊ฒฝ๋๋ ๊ฐ๋ณ์ ์ด์ง ์๊ธฐ ๋๋ฌธ์, ๋ก์ปฌ์คํ ๋ฆฌ์ง์ ์ ์ฅ/๊ด๋ฆฌ ํ์ต๋๋ค.
  Sidebar.vue ์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ๋๋ฉด store.js ์์ ๋ก์ปฌ์คํ ๋ฆฌ์ง์ ์ ์ฅ๋ ๋ฐ์ดํฐ๋ฅผ ์ด์ฉํด ajax GET์์ฒญ์ ํฉ๋๋ค.
  ajax ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ axios๋ฅผ ์ฌ์ฉํ์ต๋๋ค.( JS ๊ธฐ๋ณธ API์ธ fetch API๋ณด๋ค ํธํ์ฑ์ด ์ข์ )

#### Random application recommendation

- ์ฌ์ด๋๋ฐ๊ฐ ์ด๋ฆด ๋๋ง๋ค ๋ฌด์์ ์ธ๋ฑ์ค๋ฅผ ๋ฐ์์ ์ฑ ๋ฐ์ดํฐ์ ๋ฐ์ธ๋ฉํด ์ฌ์ฉ์์๊ฒ ์ถ์ฒํด์ค๋๋ค.

#### Todolist app

- ์๋ฒ์์ ํต์  ์์ด ๋ก์ปฌ ํ๊ฒฝ์์ ๊ตฌํํ๊ธฐ ์ํด ๋ก์ปฌ์คํ ๋ฆฌ์ง๋ฅผ ์ฌ์ฉํ์ต๋๋ค.
- ๋ก์ปฌ์คํ ๋ฆฌ์ง์๋ String ํ์๋ง ์ ์ฅ๋  ์ ์์ด์, ์ฝ๋๋ ์ง์ ๋ถํ๊ณ  ๋ฐ์ดํฐ ๊ด๋ฆฌ๋ฅผ ํ  ์ ์๊ธฐ ๋๋ฌธ์ ์๋ฒ์ ํ์์ฑ์ ๋๊ผ์ง๋ง, ์ ์ ์ฉ๋์ ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๋ ๊ฒฝ์ฐ์๋ ์ฐจ์ฉํ  ์ ์๊ฒ ๋ค๋ ์๊ฐ์ด ๋ค์์ต๋๋ค.
- ๋ก์ปฌ์คํ ๋ฆฌ์ง์ ๋์์ผ๋ก์ ๋ธ๋ผ์ฐ์  ๋ด์ indexedDB ์ ๋ํด์๋ ์๊ฒ ํ์ธํด๋ดค์ต๋๋ค.

## โ Project setup

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
