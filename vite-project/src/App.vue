<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-6 bg-base-100 p-4">
    <h1 class="text-3xl font-bold">🚀 Product Reviews Summarizer</h1>
    <UrlInput @summary-generated="handleSummary" />
    <SummaryDisplay v-if="summary" :summary="summary" :url="url" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UrlInput from './components/UrlInput.vue';
import SummaryDisplay from './components/SummaryDisplay.vue';

const summary = ref('');
const url = ref('');

/**
 * Handles the emitted event from UrlInput.vue.
 * @param payload - Contains the summary and URL.
 */
const handleSummary = (payload: { summary: string; url: string }) => {
  summary.value = payload.summary;
  url.value = payload.url;
};
</script>
