<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-6 bg-base-100 p-4">
    <h1 class="text-3xl font-bold">🚀 Product Reviews Summarizer</h1>
    <UrlInput @summaryGenerated="handleSummary" />
    <SummaryDisplay v-if="summary" :summary="summary" :url="url" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UrlInput from './components/UrlInput.vue';
import SummaryDisplay from './components/SummaryDisplay.vue';

const summary = ref('');
const url = ref('');

const handleSummary = ({ summary: s, url: u }: { summary: string; url: string }) => {
  summary.value = s;
  url.value = u;
};
</script>
