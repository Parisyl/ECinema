<template>
  <Container :line="line" />
</template>

<script setup lang="ts">
import Container from "@/components/ContainerComponent.vue";
import { ref } from 'vue';
const line = ref(false);
</script>