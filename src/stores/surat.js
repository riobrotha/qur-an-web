import { computed, ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useSuratStore = defineStore("surat", () => {
  const surat = ref([]);
  const isSuratList = computed(() => surat.value.length > 0);
  const getSuratList = computed(() => surat.value);
  let suratList = [];

  const onSearch = (query) => {
    if (query !== "") {
      const searchSurat = suratList.filter((item) => {
        const namaLatin = item.nama_latin;
        let rgxp = new RegExp(query, "i");
        return namaLatin.match(rgxp);
      });

      surat.value = searchSurat;
    } else {
      surat.value = suratList;
    }
  };

  const fetchSurat = async () => {
    try {
      const { data } = await axios.get("surat");
      surat.value = data;
      suratList = data;
    } catch (e) {
      console.error(e);
    }
  };

  return { surat, isSuratList, fetchSurat, onSearch, getSuratList, suratList };
});
