<template>
  <Container :msg="msg" />
</template>

<script setup lang="ts">
import Container from "@/components/ContainerComponent.vue";
import { ref } from 'vue';

const msg = ref('恐怖')
</script>