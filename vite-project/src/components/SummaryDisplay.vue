<template>
    <div class="card bg-base-200 shadow-lg p-6 w-full max-w-2xl rounded-2xl space-y-4">
      <!-- <h2 class="text-2xl font-semibold text-gray-800">📄 Summary</h2> -->
      <div v-html="renderedMarkdown" class="prose lg:prose-lg max-w-none"></div>
  
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
  import { defineProps, computed } from 'vue';
  import MarkdownIt from 'markdown-it';
  
  const props = defineProps<{ summary: string; url: string }>();
  const md = new MarkdownIt({ breaks: true });
  
  const renderedMarkdown = computed(() => md.render(props.summary));
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.summary);
    alert('✅ Summary copied to clipboard!');
  };
  </script>
  
  <style scoped>
  .prose {
    font-size: 1rem;
    line-height: 1.7;
  }
  .prose h2 {
    margin-top: 1.5rem;
    color: #2d3748;
  }
  .prose ul {
    list-style-type: disc;
    margin-left: 1.5rem;
  }
  </style>
  