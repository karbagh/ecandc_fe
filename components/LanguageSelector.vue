<template>
  <div class="text-center lang-selector-wrapper">
    <v-menu v-model="open" :close-on-content-click="true">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="lang-selector" v-bind="attrs" v-on="on">
          <img
            :src="
              `https://hatscripts.github.io/circle-flags/flags/${locale.flag}.svg`
            "
            width="24"
            :alt="locale.code"
          />
        </v-btn>
      </template>

      <v-list class="lang-selector-list">
        <v-list-item v-for="(item, index) in locales" :key="index">
          <v-list-item-title>
            <nuxt-link :to="switchLocalePath(item.code)">
              <img
                :src="
                  `https://hatscripts.github.io/circle-flags/flags/${item.flag}.svg`
                "
                width="24"
                :alt="item.code"
              />
            </nuxt-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import i18nConfig from '@/assets/lang/i18n.config'

export default {
  data() {
    return {
      open: false
    }
  },
  computed: {
    locales() {
      return i18nConfig.locales
    },
    locale() {
      return this.locales.filter((item) => item.code === this.$i18n.locale)[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-selector-wrapper {
  position: fixed;
  top: 15px;
  right: 25px;
  z-index: 7;

  .lang-selector {
    background: transparent;
    box-shadow: none;
  }

  .lang-selector-list {
    background: transparent;
    box-shadow: none;
    z-index: 15;
  }
}
</style>
