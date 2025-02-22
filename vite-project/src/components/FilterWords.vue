<template>
    <div class="w-full max-w-lg space-y-4">
      <input
        v-model="inputWords"
        class="input input-bordered w-full p-3 rounded-md shadow focus:outline-none focus:ring-primary"
        placeholder="Enter words to highlight (comma-separated)"
        @keyup.enter="applyFilter"
      />
      <button class="btn btn-accent w-full" @click="applyFilter">🔍 Apply Filter</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps<{ summary: string }>();
  const emit = defineEmits<{ 'update-summary': (highlighted: string) => void }>();
  
  const inputWords = ref('');
  
  const applyFilter = () => {
    if (!inputWords.value.trim()) {
      emit('update-summary', props.summary);
      return;
    }
  
    const words = inputWords.value.split(',').map(word => word.trim());
    let highlighted = props.summary;
  
    words.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      highlighted = highlighted.replace(regex, `<span class="bg-yellow-300 text-black font-semibold">$1</span>`);
    });
  
    emit('update-summary', highlighted);
  };
  </script>
  