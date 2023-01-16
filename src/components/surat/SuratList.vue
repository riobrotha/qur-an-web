<script setup>
import SuratContent from "./SuratContent.vue";
import SuratContentLoad from "./SuratContentLoad.vue";
</script>

<template>
  <div class="container px-3 md:px-0">
    <Suspense>
      <template #default>
        <SuratContent />
      </template>
      <template #fallback>
        <SuratContentLoad />
      </template>
    </Suspense>
  </div>
</template>
