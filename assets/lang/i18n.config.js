export default {
  locales: [
    { code: 'en', iso: 'en-US', file: 'en.json', flag: 'us' },
    { code: 'hy', iso: 'hy-AM', file: 'hy.json', flag: 'am' },
    { code: 'ar', iso: 'ar-SA', file: 'ar.json', flag: 'sa' },
    { code: 'el', iso: 'el-GR', file: 'el.json', flag: 'gr' },
    { code: 'ka', iso: 'ka-GE', file: 'ge.json', flag: 'ge' },
    { code: 'uk', iso: 'uk-UA', file: 'ua.json', flag: 'ua' },
    { code: 'zh', iso: 'zh-CN', file: 'zh.json', flag: 'cn' }
  ],
  strategy: 'prefix_except_default',
  langDir: '~/assets/lang/translations',
  defaultLocale: 'hy',
  vueI18n: {
    fallbackLocale: 'en'
  }
}
