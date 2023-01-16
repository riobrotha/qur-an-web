<script setup></script>

<template>
  <div class="grid gap-3 grid-cols-1 md:grid-cols-3 mb-10">
    <div
      class="w-full text-right p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 animate-pulse"
      v-for="n in 12"
    >
      <div class="flex justify-between items-center mb-5">
        <div class="h-4 bg-gray-200 dark:bg-gray-700 w-3/4"></div>
        <div class="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <div class="w-full h-5 mb-5 bg-gray-200 dark:bg-gray-700"></div>
      <div class="w-full h-3 mb-5 bg-gray-200 dark:bg-gray-700"></div>
      <div class="w-full h-3 mb-5 bg-gray-200 dark:bg-gray-700"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
