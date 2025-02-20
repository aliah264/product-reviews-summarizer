<template>
    <div class="card bg-base-200 shadow-md p-4 w-full max-w-2xl">
      <h2 class="text-lg font-bold mb-2">Summary</h2>
      <p class="whitespace-pre-wrap">{{ summary }}</p>
      <div class="flex justify-between mt-4">
        <button class="btn btn-secondary" @click="copyToClipboard">Copy Summary</button>
        <a :href="url" target="_blank" class="link">View Original</a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps<{ summary: string; url: string }>();
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.summary);
    alert('Summary copied to clipboard!');
  };
  </script>
  