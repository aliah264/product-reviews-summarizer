<template>
  <div class="bg-card dark:bg-darkCard rounded-smooth p-6 shadow-soft space-y-6">
    <h2 class="text-xl font-bold">📄 Generated Summary</h2>
    <p class="whitespace-pre-wrap leading-relaxed text-lg" v-html="summary"></p>
    <div class="flex justify-between items-center">
      <button class="btn btn-outline btn-secondary rounded-full" @click="copyToClipboard">📋 Copy</button>
      <a :href="url" target="_blank" class="btn btn-primary rounded-full">🔗 View Reviews</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { useToast } from 'vue-toastification';

const props = defineProps<{ summary: string; url: string }>();
const toast = useToast();

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.summary.replace(/<[^>]+>/g, ''));
  toast.success('✅ Summary copied to clipboard!');
};
</script>
