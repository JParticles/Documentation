<template>
  <section class="intro-root">
    <div v-html="content" v-if="content"></div>
    <div class="loading-box" v-else>
      <div class="loading-inner" ref="loading"></div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import marked from '@/utils/marked'
import API from '@/services'

export default {
  name: 'Intro',
  data() {
    return {
      content: null,
    }
  },
  computed: {
    ...mapState(['language', 'themeColor']),
  },
  watch: {
    'language.languageCode'() {
      this.loadFile()
    },
  },
  methods: {
    createLoading() {
      const $loading = this.$refs.loading
      const loading = (this.loading = new JParticles.WaveLoading($loading, {
        font: 'normal 900 12px Arial',
        smallFont: 'normal 900 12px Arial',
        smallFontOffsetTop: 0,
        fillColor: this.themeColor,
        duration: 2000,
      }))

      loading.onProgress(progress => {
        if (progress >= 60) {
          loading.setOptions({
            color: '#fff',
          })
        }
        return {
          text: Math.ceil(progress),
          smallText: '%',
        }
      })
      // .onFinished(() => {
      //   setTimeout(() => {}, 50)
      // })
    },
    removeLoading() {
      this.loading.done()
    },
    async loadFile() {
      // const lang = this.language.languageCode
      // const path = `/languages/${lang}/pages/examples/intro.md`
      this.createLoading()
      const { ok, data } = await API.introDoc()
      if (ok) {
        // this.removeLoading()
        this.content = marked(data)
      }
    },
  },
  mounted() {
    this.loadFile()
  },
}
</script>

<style scoped lang="scss"></style>
