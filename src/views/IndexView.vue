<template>
  <div class="common-layout">
    <div class="container" style="margin:auto 40px; display: flex; flex-direction: column;">
      <HeaderComponent style="margin-top: 30px;"></HeaderComponent>
      <router-view/>
    </div>
  </div>
</template>


<script lang="ts" setup>
import HeaderComponent from "../components/HeaderComponent.vue";

</script>

<style scoped>
.common-layout {
  background-color: rgb(42, 42, 42);
}

</style>
