export default {
  locales: [
    { code: 'en', iso: 'en-US', file: 'en.json', flag: 'us' },
    { code: 'hy', iso: 'hy-AM', file: 'hy.json', flag: 'am' }
  ],
  strategy: 'prefix_except_default',
  langDir: '~/assets/lang/translations',
  defaultLocale: 'hy',
  vueI18n: {
    fallbackLocale: 'en'
  }
}
