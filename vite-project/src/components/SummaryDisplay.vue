<template>
    <div v-if="summary" class="card bg-base-200 p-4 w-full max-w-2xl">
      <h2 class="text-lg font-bold">Summary</h2>
      <p>{{ summary }}</p>
      <button class="btn btn-secondary mt-2" @click="copyToClipboard">Copy to Clipboard</button>
      <a :href="url" target="_blank" class="link mt-2">Original Review</a>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';
  
  const props = defineProps<{ summary: string; url: string }>();
  const copyToClipboard = () => navigator.clipboard.writeText(props.summary);
  </script>
  