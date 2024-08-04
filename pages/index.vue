<template>
  <v-layout>
    <div>
      <div>
        <button @click="setLocale('en')">en</button>
        <button @click="setLocale('fr')">fr</button>
        <p>{{ $t('welcome') }}</p>
      </div>
    </div>
    <Main />
  </v-layout>
</template>

<script setup>
import { useSetI18nParams } from '@nuxtjs/i18n/dist/runtime/composables'
import Main from '@/components/Main'
const { locale, setLocale } = useSetI18nParams()
export default {
  components: {
    Main
  }
}
</script>

<style lang="scss" scoped></style>
