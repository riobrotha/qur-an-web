<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  nomorBefore: {
    type: Number,
  },
  namaSuratBefore: {
    type: String,
  },
  namaSuratNow: {
    type: String,
  },
  nomorAfter: {
    type: Number,
  },
  namaSuratAfter: {
    type: String,
  },
});

const toRoute = (path) => {
  if (path == undefined) {
    return;
  }
  router.push({ path: "/surat/" + path });
};
</script>

<template>
  <div
    class="dark:bg-gray-800 bg-gray-50 fixed bottom-0 w-full shadow-2xl shadow-gray-900 dark:shadow-white py-4"
  >
    <div
      class="container flex flex-nowrap items-center justify-between px-4 md:px-3 lg:px-0"
    >
      <p
        class="text-base dark:text-white text-gray-900 inline-flex items-center justify-center gap-1"
        :class="{
          'cursor-pointer': props.namaSuratBefore,
          'cursor-default': !props.namaSuratBefore,
          'opacity-50': !props.namaSuratBefore,
        }"
        @click="toRoute(props.nomorBefore)"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          ></path></svg
        >{{ props.namaSuratBefore ? `Q.S ${props.namaSuratBefore}` : "-" }}
      </p>

      <p
        class="text-base dark:text-white text-gray-900 inline-flex items-center justify-center gap-1 cursor-default"
      >
        Q.S {{ props.namaSuratNow }}
      </p>

      <p
        class="text-base dark:text-white text-gray-900 inline-flex items-center justify-center gap-1"
        :class="{
          'cursor-pointer': props.namaSuratAfter,
          'cursor-default': !props.namaSuratAfter,
          'opacity-50': !props.namaSuratAfter,
        }"
        @click="toRoute(props.nomorAfter)"
      >
        {{ props.namaSuratAfter ? `Q.S ${props.namaSuratAfter}` : "-"
        }}<svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </p>
    </div>
  </div>
</template>
