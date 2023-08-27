<template>
  <div class="common-layout">
    <el-container style="display: flex; flex-direction: column;">
      <el-header>
        <HeaderComponent />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>



<script lang="ts" setup>
import HeaderComponent from "../components/HeaderComponent.vue";

</script>

<style scoped>
.common-layout {
  min-width: 1670px;
  background-color: rgb(42, 42, 42);
}

.el-header {
  --el-header-padding: 20px 10px;
  height: 70px;
}

.el-container {
  height: 100%;
  width: 100%;
}

.el-main {
  height: 100vh;
}

</style>
