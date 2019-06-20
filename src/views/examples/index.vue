<template>
  <section class="examples-root site-container-width">
    <div class="container">
      <aside class="side-menu-wrapper" v-if="!isSmallScreen">
        <Menu />
      </aside>
      <main class="main-content">
        <component
          :is="component"
          v-if="component && !loading && !error"
          :content="content"
          class="markdown-content"
        />
        <div class="loading-wrapper" v-show="loading && !error">
          <div class="loading-inner" ref="loading"></div>
        </div>
        <NoData v-show="error" />
      </main>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Menu from '@/views/@common/menu'
import API from '@/services'
import marked from '@/utils/marked'
import NoData from '@/views/@common/no_data'

const components = {}
const docs = {}

export default {
  name: 'Examples',
  components: {
    Menu,
    NoData,
  },
  data() {
    return {
      component: null,
      loading: false,
      error: false,
    }
  },
  computed: {
    ...mapState(['isSmallScreen', 'themeColor', 'language']),
  },
  mounted() {
    this.loadFiles()
  },
  watch: {
    $route() {
      this.loadFiles()
    },
  },
  methods: {
    createLoading() {
      this.loading = true
      const $loading = this.$refs.loading
      const loading = (this.waveLoading = new JParticles.WaveLoading($loading, {
        font: 'normal 900 12px Arial',
        smallFont: 'normal 900 12px Arial',
        smallFontOffsetTop: 0,
        fillColor: this.themeColor,
        duration: 2000,
        resize: false,
      }))

      loading
        .onProgress(progress => {
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
        .onFinished(() => {
          setTimeout(() => {
            this.loading = false
          }, 50)
        })
    },
    removeLoading() {
      this.waveLoading.done()
    },
    async loadComponent(path) {
      if (components[path]) {
        return components[path]
      }
      const component = await import(`./${path}`)
      components[path] = component.default
      return components[path]
    },
    async loadDoc(docPath) {
      if (docs[docPath]) {
        return docs[docPath]
      }
      const { ok, data } = await API.$instance.get(docPath)
      if (ok) {
        docs[docPath] = marked(data)
        return docs[docPath]
      }
    },
    async loadFiles() {
      const { doc } = this.$route.params
      const lang = this.language.languageCode
      const docPath = `/languages/${lang}/pages/examples/${doc}.md`

      this.error = false

      // 如果都加载过了就使用已有文件
      if (components[doc] && docs[docPath]) {
        this.component = components[doc]
        this.content = docs[docPath]
        this.loading = false
        return
      }

      this.createLoading()

      try {
        const [component, content] = await Promise.all([
          this.loadComponent(doc),
          this.loadDoc(docPath),
        ])
        this.component = component
        this.content = content
      } catch (e) {
        this.error = true
      }

      this.removeLoading()
    },
  },
}
</script>

<style scoped lang="scss">
.examples-root {
  height: 100%;
  padding-top: rem(60);
  padding-bottom: rem(60);
  .container,
  .main-content {
    height: 100%;
  }
}

.side-menu-wrapper {
  width: rem(240);
  float: left;
  &.fixed {
    padding: rem(20) 0;
    position: fixed;
    top: 0;
    bottom: 0;
    overflow: auto;
  }
  ::v-deep .menu-root {
    a {
      display: block;
      width: 100%;
      height: rem(30);
      margin-bottom: rem(10);
      line-height: rem(30);
      padding-left: rem(20);
      border-left: rem(5) solid transparent;
      font-size: rem(14);
      &:hover,
      &.router-link-exact-active {
        background-color: $site-light-gray-x1;
        color: $site-color-primary;
        border-color: $site-color-primary;
      }
    }
  }
}

.main-content {
  padding-left: rem(240 + 60);
}

.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .loading-inner {
    width: 100px;
    height: 100px;
    border: 1px solid $site-light-gray;
    border-radius: 50%;
  }
}
</style>
