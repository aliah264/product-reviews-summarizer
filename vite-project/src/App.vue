<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-6 bg-base-100 p-4">
    <div class="flex justify-end w-full max-w-2xl">
      <button class="btn btn-sm" @click="toggleTheme">
        🌙 Toggle Dark/Light Mode
      </button>
    </div>
    <h1 class="text-3xl font-bold">🚀 Product Reviews Summarizer</h1>
    <UrlInput @summary-generated="handleSummary" />
    <SummaryDisplay v-if="summary" :summary="summary" :url="url" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UrlInput from './components/UrlInput.vue';
import SummaryDisplay from './components/SummaryDisplay.vue';

const summary = ref('');
const url = ref('');

const handleSummary = (payload: { summary: string; url: string }) => {
  summary.value = payload.summary;
  url.value = payload.url;
};

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (savedTheme === 'dark') document.documentElement.classList.add('dark');
});
</script>
