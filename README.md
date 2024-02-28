# Vue-2-Practice

Vue2 낙서장

### 설치 과정

1. npm install -g @vue/cli // CLI 설치

2. vue create practice // 프로젝트 생성

2.1 Manually select features

2.2 Babel, TS, Linter 선택

2.3 2.x 선택

2.4 Use class-style component syntax (Y)

2.5 Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y)

2.6 ESLint + Prettier

2.7 (_) Lint on save (_) Lint and fix on commit (commit 시 자동 fix)

2.8 ? Where do you prefer placing config for Babel, ESLint, etc.? > In package.json

### 실행 명령어

`yarn serve`

### 이슈

1. eslint + prettier 호환성 문제

2. router 버전 이슈

- `yarn add vue-router@3`

## 정리

### 파일 구조

- `.vue` 확장자 가진 파일로 구성

```
<template>  ...   <template/>  // 컴포넌트의 HTML 마크업을 포함
<script>    ...   </script>    // 컴포넌트의 JavaScript 로직 (데이터, 속성, 메서드, 생명주기 훅 등을 관리)
<style>     ...   </style>
```

- 관련된 마크업, 로직, 스타일을 하나의 파일에서 관리하는 듯 함

### 이벤트 처리를 위한 디렉티브

- `@` 기호를 사용해 이벤트 바인딩 처리
- `@click` , `@keyup.enter` ...
  - ex) `<button @click="addTodo">추가</button>` - addTodo 메소드를 호출
