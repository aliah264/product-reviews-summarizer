<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" v-if="isOpen">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full space-y-4">
        <h2 class="text-xl font-bold">{{ title }}</h2>
        <p class="text-base-content" v-html="message"></p>
        <button class="btn btn-secondary w-full" @click="$emit('close')">Close</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps<{ isOpen: boolean; title: string; message: string }>();
  </script>
  