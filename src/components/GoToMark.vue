<template>
  <div class="container mb-4 px-3 md:px-0">
    <button
      @click="goTo()"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-lg flex items-center justify-center gap-2"
    >
      Pergi Ke Tanda Baca
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        class="h-5 w-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = () => {
  const getMark = localStorage.getItem("markAsRead");
  if (getMark !== "") {
    let convToJsonMark = JSON.parse(getMark);
    router.push({
      name: "surat",
      params: { id: convToJsonMark.surat },
      query: { ayat: convToJsonMark.ayat },
    });
  }
};
</script>
