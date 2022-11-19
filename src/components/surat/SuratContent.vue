<script setup>
import { ref, onMounted, computed } from "vue";
import { useSuratStore } from "@/stores/surat";

const suratStore = useSuratStore();

const suratList = computed(() => suratStore.getSuratList);
const isSuratList = computed(() => suratStore.isSuratList);

onMounted(() => {
  suratStore.fetchSurat();
});
</script>

<template>
  <template v-if="isSuratList">
    <div
      class="w-full text-right p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      v-for="(item, index) in suratList"
      :key="index"
    >
      <div class="flex justify-between">
        <h5
          class="text-2xl text-left font-semibold text-gray-900 dark:text-white"
        >
          {{ item.nomor }}. {{ item.nama_latin }}
        </h5>
        <svg
          class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      </div>

      <a href="#">
        <h5
          class="mb-2 text-3xl text-right font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ item.nama }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {{ item.tempat_turun.toUpperCase() }} 🔵 {{ item.arti }}
      </p>
      <a
        href="#"
        class="inline-flex items-center text-blue-600 hover:underline"
      >
        Baca
        <svg
          class="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
          ></path>
          <path
            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
          ></path>
        </svg>
      </a>
    </div>
  </template>
</template>

<style lang="scss" scoped></style>
