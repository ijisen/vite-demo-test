<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import HelloWorld from './components/HelloWorld.vue'

  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  import { ElConfigProvider } from 'element-plus'

  import { ref } from 'vue'

  const value = ref('');
  const locale = ref(zhCn);
</script>

<template>
  <el-config-provider :locale="locale">
    <h1>
      <p class="color-primary">color-primary</p>
      <el-button type="primary">primary</el-button>
    </h1>
    <div>
      <el-date-picker
          v-model="value"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
      >
      </el-date-picker>
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </el-config-provider>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
