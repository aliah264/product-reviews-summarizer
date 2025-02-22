<template>
  <div class="min-h-screen bg-background dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
    <!-- Header -->
    <header class="w-full p-5 bg-white dark:bg-gray-800 shadow-soft rounded-b-smooth backdrop-blur-lg flex justify-between items-center">
      <h1 class="text-2xl font-bold">🔎 Review Summarizer</h1>
      <button class="btn btn-sm btn-primary rounded-full" @click="toggleTheme">🌓 Toggle Theme</button>
    </header>

    <!-- Main -->
    <main class="max-w-5xl mx-auto p-6 flex flex-col gap-10">
      <UrlInput @summary-generated="handleSummary" />
      <FilterWords v-if="summary" :summary="summary" @update-summary="updateHighlightedSummary" />
      <SummaryDisplay v-if="highlightedSummary" :summary="highlightedSummary" :url="url" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UrlInput from './components/UrlInput.vue';
import SummaryDisplay from './components/SummaryDisplay.vue';
import FilterWords from './components/FilterWords.vue';

const summary = ref('');
const url = ref('');
const highlightedSummary = ref('');

const handleSummary = ({ summary: s, url: u }) => {
  summary.value = s;
  url.value = u;
  highlightedSummary.value = s;
};

const updateHighlightedSummary = (highlighted) => {
  highlightedSummary.value = highlighted;
};

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
};

onMounted(() => {
  const theme = localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (theme === 'dark') document.documentElement.classList.add('dark');
});
</script>

