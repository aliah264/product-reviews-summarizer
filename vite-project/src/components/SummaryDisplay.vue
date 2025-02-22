<template>
    <div class="card bg-base-200 shadow-lg p-6 w-full max-w-2xl rounded-2xl space-y-4">
      <h2 class="text-2xl font-semibold text-gray-800">📄 Summary</h2>
      <p class="whitespace-pre-wrap text-lg leading-relaxed text-gray-700">{{ summary }}</p>
  
      <div class="flex justify-between mt-6">
        <button class="btn btn-secondary btn-lg" @click="copyToClipboard">
          📋 Copy Summary
        </button>
        <a :href="url" target="_blank" class="link text-blue-500 underline">
          🔗 View Original Reviews
        </a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps<{ summary: string; url: string }>();
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.summary);
    alert('✅ Summary copied to clipboard!');
  };
  </script>
  