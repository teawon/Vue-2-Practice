<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class App extends Vue {}
</script>

<style>
/* 전역 스타일 직접 정의 */
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-primary: #add8e6;
}

[data-theme="dark"] {
  --color-background: #121212;
  --color-text: #ffffff;
  --color-primary: #185b71;
}
</style>
