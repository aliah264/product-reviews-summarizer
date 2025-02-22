<template>
  <div class="w-full flex gap-4 items-center">
    <input
      v-model="url"
      class="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:ring-primary"
      placeholder="Paste product review URL..."
      @keyup.enter="handleSubmit"
    />
    <button class="btn btn-primary rounded-full px-6 py-3" @click="handleSubmit" :disabled="loading">
      {{ loading ? 'Loading...' : 'Generate' }}
    </button>
    <loading-overlay :active="loading" :can-cancel="false" loader="dots" color="#4f46e5" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { fetchSummary } from '../services/api';
import LoadingOverlay from 'vue3-loading-overlay';

const url = ref('');
const loading = ref(false);
const emit = defineEmits(['summary-generated']);

const handleSubmit = async () => {
  if (!url.value.trim()) return alert('Please enter a valid URL.');
  loading.value = true;
  try {
    const summary = await fetchSummary(url.value);
    emit('summary-generated', { summary, url: url.value });
  } catch {
    alert('❌ Error generating summary.');
  } finally {
    loading.value = false;
  }
};
</script>
