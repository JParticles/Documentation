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
        @click="switchLanguage(language)"
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
    switchLanguage(language) {
      if (language.languageCode !== this.language.languageCode) {
        this.$store.commit('switchLanguage', language.languageCode)
        this.setLanguageList()
      }
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
  margin: 0;
  position: relative;
  user-select: none;
  cursor: pointer;
  &:hover {
    .languages {
      display: block;
    }
  }
  .language {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    white-space: nowrap;
    img {
      width: rem(18);
      margin-left: rem(10);
    }
    span {
      font-size: rem(16);
    }
  }
  .languages {
    display: none;
    margin-bottom: 0;
    padding-left: 0;
    border: 1px solid $gray-border;
    border-radius: rem(10);
    background-color: #fff;
    position: absolute;
    top: rem(-13);
    right: rem(-13);
    box-shadow: 0 rem(2) rem(8) 0 $shadow-color;
    animation: 0.3s fadeIn;
    overflow: hidden;
    .language {
      min-width: rem(120);
      padding: rem(12);
      &:not(:last-of-type) {
        border-bottom: 1px solid $gray-border;
      }
      &:hover {
        background-color: $lightgray-bg-hover;
      }
    }
  }
}
</style>
