<template>
  <div class="min-h-screen bg-background dark:bg-darkBackground text-textPrimary dark:text-textSecondary">
    <!-- Header -->
    <header class="w-full p-4 bg-primary text-white flex justify-between items-center shadow-md">
      <h1 class="text-2xl font-semibold">🚀 Product Reviews Summarizer</h1>
      <button class="btn btn-outline btn-sm" @click="toggleTheme">🌙 Toggle Theme</button>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center p-6 space-y-10 max-w-5xl mx-auto">
      <UrlInput @summary-generated="handleSummary" />
      <FilterWords v-if="summary" :summary="summary" :url="url" />
      <SummaryDisplay v-if="summary" :summary="highlightedSummary" :url="url" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import UrlInput from './components/UrlInput.vue';
import SummaryDisplay from './components/SummaryDisplay.vue';
import FilterWords from './components/FilterWords.vue';

const summary = ref('');
const url = ref('');
const highlightedSummary = ref('');

const handleSummary = (event: { summary: string; url: string }) => {
  const { summary: s, url: u } = event;
  summary.value = s;
  url.value = u;
  highlightedSummary.value = s;
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
