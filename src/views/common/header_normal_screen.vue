<template>
  <div class="site-header-normal">
    <div class="logo">
      <x-link :to="rootRoute">JParticles</x-link>
    </div>
    <div class="right">
      <nav class="nav">
        <!--<x-link>{{}}</x-link>-->
      </nav>
      <figure class="languages">
        <div class="current">
          <div class="language-wrapper">
            <span>{{ language.languageName }}</span>
            <img :src="language.languageFlag" alt="flag" />
          </div>
        </div>
        <ul>
          <li
            class="language-wrapper"
            v-for="language in languages"
            :key="language.languageName"
          >
            <span>{{ language.languageName }}</span>
            <img :src="language.languageFlag" alt="flag" />
          </li>
        </ul>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeaderNormal',
  props: {
    rootRoute: { type: String },
    languages: { type: Array },
    language: { type: Object },
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
$header-shadow: #e8e8e8;

.site-header-normal {
}
</style>
