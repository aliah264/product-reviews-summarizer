<template>
    <div class="flex flex-col items-center gap-4">
      <input v-model="url" class="input input-bordered w-full max-w-md" placeholder="Enter product review URL" />
      <button class="btn btn-primary" @click="handleSubmit">Summarize</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  import { fetchSummary } from '../services/api';
  
  const url = ref('');
  const emit = defineEmits(['summary-generated']);
  
  const handleSubmit = async () => {
    try {
      const summary = await fetchSummary(url.value);
      emit('summary-generated', { summary, url: url.value });
    } catch (error) {
      alert('Error fetching summary.');
    }
  };
  </script>
  