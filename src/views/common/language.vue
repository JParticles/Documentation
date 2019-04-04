<template>
  <figure class="languages-root">
    <div class="current">
      <div class="language">
        <span>{{ language.languageName }}</span>
        <img :src="language.languageFlag" alt="flag" />
      </div>
    </div>
    <ul class="languages">
      <li
        class="language"
        v-for="language in languageList"
        :key="language.languageName"
      >
        <span>{{ language.languageName }}</span>
        <img :src="language.languageFlag" alt="flag" />
      </li>
    </ul>
  </figure>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Languages',
  data() {
    return {
      languageList: [],
    }
  },
  computed: {
    ...mapState(['languages', 'language']),
  },
  methods: {
    switchLanguage() {
      const langCode = 'cn'
      this.$store.commit('switchLanguage', langCode)
    },
    setLanguageList() {
      const currentLang = this.language
      const languages = []
      for (const key in this.languages) {
        const lang = this.languages[key]
        if (lang.languageCode !== currentLang.languageCode) {
          languages.push(lang)
        }
      }
      languages.unshift(this.language)
      this.languageList = languages
    },
  },
  mounted() {
    this.setLanguageList()
  },
}
</script>

<style scoped lang="scss">
.languages-root {
}
</style>
