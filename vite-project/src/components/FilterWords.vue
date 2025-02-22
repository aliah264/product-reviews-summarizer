<template>
    <div class="w-full bg-card dark:bg-darkCard p-4 rounded-smooth shadow-soft flex flex-col gap-4">
      <label class="text-sm font-semibold">Filter and Highlight Words</label>
      <div class="flex gap-2">
        <input
          v-model="inputWords"
          class="flex-1 p-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-secondary"
          placeholder="e.g., quality, battery, design"
          @keyup.enter="applyFilter"
        />
        <button class="btn btn-secondary rounded-full" @click="applyFilter">Highlight</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps<{ summary: string }>();
  const emit = defineEmits(['update-summary']);
  const inputWords = ref('');
  
  const applyFilter = () => {
    const words = inputWords.value.split(',').map(word => word.trim());
    let highlighted = props.summary;
  
    words.forEach(word => {
      if (word) {
        const regex = new RegExp(`(${word})`, 'gi');
        highlighted = highlighted.replace(regex, `<mark class="bg-yellow-300 text-black rounded-sm px-1">$1</mark>`);
      }
    });
  
    emit('update-summary', highlighted);
  };
  </script>
  