<script setup>
import Search from "@/components/Search.vue";
import SuratList from "@/components/surat/SuratList.vue";
import GoToMark from "@/components/GoToMark.vue";
</script>

<template>
  <GoToMark />
  <Search placeholder="Cari Surat" />
  <SuratList />
</template>
