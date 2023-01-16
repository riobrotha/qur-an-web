<script setup>
import { useRoute } from "vue-router";

import { onClickOutside } from "@vueuse/core";

import NavigationSurat from "@/components/NavigationSurat.vue";

import axios from "axios";
import { ref, onMounted } from "vue";

const route = useRoute();
const nomorSurat = route.params.id;

const btnDropdown = ref(null);
const ayatCard = ref(null);

onMounted(() => {
  const listBtnDropdown = btnDropdown.value;
  listBtnDropdown.forEach((item, index) => {
    const ignoreBtnDropdown = listBtnDropdown.filter(
      (item2, index2) => index != index2
    );
    onClickOutside(
      item,
      () => {
        const arrShowMenu = isShowMenu.value;
        const findTrueValIndex = arrShowMenu.findIndex((item) => item == true);
        if (findTrueValIndex != -1) {
          //showMenu(findTrueValIndex);
          isShowMenu.value[findTrueValIndex] =
            !isShowMenu.value[findTrueValIndex];
        }
        return;
      },
      { ignore: ignoreBtnDropdown }
    );
  });

  toAyat();
});

const { data } = await axios.get("surat/" + nomorSurat);

const detailSurat = ref(data);

const nomorSuratSebelum = detailSurat.value.surat_sebelumnya.nomor;
const namaSuratSebelum = detailSurat.value.surat_sebelumnya.nama_latin;
const namaSuratSekarang = detailSurat.value.nama_latin;
const nomorSuratSetelah = detailSurat.value.surat_selanjutnya.nomor;
const namaSuratSetelah = detailSurat.value.surat_selanjutnya.nama_latin;

const isShowMenu = ref([]);

if (detailSurat) {
  const ayatData = detailSurat.value.ayat;
  ayatData.forEach(() => {
    isShowMenu.value.push(false);
  });
}

const showMenu = (index) => {
  const arrShowMenu = isShowMenu.value;
  const findTrueValIndex = arrShowMenu.findIndex((item) => item == true);

  if (findTrueValIndex >= 0) {
    if (index != findTrueValIndex) {
      isShowMenu.value[findTrueValIndex] = !isShowMenu.value[findTrueValIndex];
    }
  }

  isShowMenu.value[index] = !isShowMenu.value[index];
};

//to Scroll ayat
function toAyat() {
  const ayatSurat = route.query.ayat;

  if (ayatSurat) {
    const el = ayatCard.value[ayatSurat - 1];
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

function markAsRead(index) {
  const markSurat = {
    surat: nomorSurat,
    ayat: index + 1,
  };
  localStorage.setItem("markAsRead", JSON.stringify(markSurat));
}
</script>

<template>
  <div class="container px-3 md:px-0">
    <div
      class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-5"
    >
      <h5
        class="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-3"
      >
        {{ detailSurat.nomor }}. {{ detailSurat.nama_latin }}
      </h5>
      <p class="text-md font-semibold text-gray-900 dark:text-white">
        {{ detailSurat.tempat_turun.toUpperCase() }} 🔵
        {{ detailSurat.jumlah_ayat }} ayat 🔵
        {{ detailSurat.arti }}
      </p>
    </div>
    <div
      class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-5 last:mb-28"
      v-for="(ayat, index) in detailSurat.ayat"
      ref="ayatCard"
      :key="index"
    >
      <div
        class="flex relative justify-end mb-7 border-b-[0.5px] border-gray-500 pb-4"
      >
        <button
          class="bg-transparent dark:text-white flex justify-start text-gray-900"
          :class="`button-${index}`"
          type="button"
          ref="btnDropdown"
          @click="showMenu(index)"
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
        </button>
        <Transition name="show">
          <div
            class="dark:bg-gray-900 bg-gray-50 w-[180px] rounded-md py-4 absolute top-7 shadow-md origin-top-right"
            v-if="isShowMenu[index]"
          >
            <ul class="" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Copy To Clipboard</a
                >
              </li>
              <li>
                <a
                  @click.prevent="markAsRead(index)"
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Tandai</a
                >
              </li>
            </ul>
          </div>
        </Transition>
      </div>

      <div class="flex mb-3 mt-3 justify-between gap-3 flex-nowrap">
        <p class="text-base dark:text-gray-300 text-gray-500 text-left">
          {{ ayat.surah }}:{{ ayat.nomor }}
        </p>
        <div class="arab">
          {{ ayat.ar }}
        </div>
      </div>

      <p class="dark:text-gray-300 text-gray-500 text-right mb-3" dir="rtl">
        {{ ayat.tr }}
      </p>

      <p class="dark:text-white text-gray-900">Artinya : {{ ayat.idn }}</p>
    </div>
  </div>
  <NavigationSurat
    :nomor-before="nomorSuratSebelum"
    :nama-surat-before="namaSuratSebelum"
    :nama-surat-now="namaSuratSekarang"
    :nomor-after="nomorSuratSetelah"
    :nama-surat-after="namaSuratSetelah"
  />
</template>

<style>
.show-enter-from {
  opacity: 0;
  transform: scale(0);
}

.show-enter-to {
  opacity: 1;
  transform: scale(1);
}

.show-enter-active,
.show-leave-active {
  transition: all 0.2s ease-in-out;
}

.show-leave-from {
  opacity: 1;
  transform: scale(1);
}

.show-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
