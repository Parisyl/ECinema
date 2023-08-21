<template>
  <Container :msg="msg" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Container from "@/components/ContainerComponent.vue";

const msg = ref('分类：电影')

</script>