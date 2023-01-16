<script setup>
import SuratDetail from "@/components/surat/detail/SuratDetail.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <SuratDetail />
    </template>
    <template #fallback>
      <div class="container px-3 md:px-0">
        <div
          class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 animate-pulse"
        >
          <div class="h-5 w-full bg-gray-200 dark:bg-gray-700 mb-3"></div>
          <div class="h-5 w-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </template>
  </Suspense>
</template>
