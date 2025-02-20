<template>
    <div class="flex flex-col items-center gap-4 w-full max-w-lg">
      <input
        v-model="url"
        class="input input-bordered w-full"
        placeholder="Enter product review URL"
        @keyup.enter="handleSubmit"
      />
      <button class="btn btn-primary w-full" @click="handleSubmit" :disabled="loading">
        {{ loading ? 'Summarizing...' : 'Summarize' }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  import { fetchSummary } from '../services/api';
  
  const url = ref('');
  const loading = ref(false);
  const emit = defineEmits<{ 'summary-generated': (payload: { summary: string; url: string }) => void }>();

  const handleSubmit = async () => {
    if (!url.value) {
      alert('Please enter a valid URL.');
      return;
    }
  
    loading.value = true;
    try {
      const summary = await fetchSummary(url.value);
      emit('summary-generated', { summary, url: url.value });
        } catch (error) {
      alert('Error fetching summary. Please try again.');
    } finally {
      loading.value = false;
    }
  };
  </script>
  