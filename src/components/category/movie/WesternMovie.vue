<template>
  <Container :msg="msg" />
</template>

<script setup lang="ts">
import Container from "@/components/ContainerComponent.vue";
import { ref } from 'vue';

const msg = ref('分类：欧美电影')
</script>