<template>
  <v-layout>
    <LanguageSelector />
    <Main />
  </v-layout>
</template>

<script>
import Main from '@/components/Main'
import LanguageSelector from '~/components/LanguageSelector.vue'
export default {
  components: {
    LanguageSelector,
    Main
  }
}
</script>

<style lang="scss" scoped></style>
