<template>
  <section class="examples-root site-container-width">
    <div class="container" ref="container">
      <aside class="side-menu-wrapper" ref="sideMenu" v-if="!isSmallScreen">
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
        <Empty v-show="error" />
        <div
          class="gt-container"
          ref="gtContainer"
          v-show="!loading && !error"
        />
      </main>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Menu from '@/views/components/Menu'
import API from '@/services'
import marked from '@/utils/marked'
import Empty from '@/views/components/Empty'
import { scrollTop, offset } from '@/utils/dom'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { WaveLoading } from 'jparticles'
import { startCaseWithoutBlank } from '@/utils/misc'

const components = {}
const docs = {}

const i18nMapper = {
  cn: 'zh-CN',
  en: 'en',
}

export default {
  name: 'Examples',
  components: {
    Menu,
    Empty,
  },
  data() {
    return {
      component: null,
      loading: false,
      error: false,
    }
  },
  computed: {
    ...mapState([
      'isSmallScreen',
      'themeColor',
      'language',
      'routeHasLanguage',
    ]),
  },
  mounted() {
    this.loadFiles()
    this.addSideMenuEvent()
  },
  destroyed() {
    this.removeSideMenuEvent()
  },
  watch: {
    $route() {
      this.$bindEffectHandlebar.clear()
      this.loadFiles()
    },
  },
  methods: {
    addComment() {
      this.$refs.gtContainer.innerHTML = ''

      let id = this.$route.path
      if (this.routeHasLanguage) {
        id = id.replace(/^\/.+?(?=\/)/, '')
      }

      let title = document.title
      if (this.isSmallScreen) {
        title = document
          .querySelector('.site-header-mobile .menu-root .router-link-active')
          .textContent.trim()
      } else {
        title = this.$refs.sideMenu
          .querySelector('.router-link-active')
          .textContent.trim()
      }

      const gitalk = new Gitalk({
        clientID: '9f3916d7bff4d5a6db8f',
        clientSecret: '2110776cc08e198102cc6a92871f76084b56cb5d',
        repo: 'JParticles',
        owner: 'Barrior',
        admin: ['Barrior'],
        id,
        title,
        language: i18nMapper[this.language.languageCode],
        distractionFreeMode: false,
      })

      gitalk.render(this.$refs.gtContainer)
    },
    handleHash() {
      const hash = this.$route.hash.toUpperCase()
      const $position = hash && document.querySelector(hash)
      if ($position) {
        scrollTop(window, offset($position).top - 10)
      }
    },
    addSideMenuEvent() {
      this.handleSideMenu = () => {
        const $container = this.$refs.container
        const $sideMenu = this.$refs.sideMenu
        if ($sideMenu) {
          const action =
            scrollTop(window) > offset($container).top ? 'add' : 'remove'
          $sideMenu.classList[action]('fixed')
        }
      }
      window.addEventListener('scroll', this.handleSideMenu)
      window.addEventListener('resize', this.handleSideMenu)
    },
    removeSideMenuEvent() {
      window.removeEventListener('scroll', this.handleSideMenu)
      window.removeEventListener('resize', this.handleSideMenu)
    },
    loadingDone() {
      if (this.error) return
      this.$nextTick(() => {
        this.handleHash()
        this.addComment()
      })
    },
    createLoading() {
      const $loading = this.$refs.loading
      const loading = (this.waveLoading = new WaveLoading($loading, {
        font: 'normal 900 12px Arial',
        textFormatter: this.language.progressText + '%d%',
        fillColor: this.themeColor,
        duration: 2000,
        resize: false,
      }))

      loading
        .onProgress(progress => {
          if (progress >= 60) {
            loading.setOptions({
              textColor: '#fff',
            })
          }
        })
        .onFinished(() => {
          setTimeout(() => {
            this.loading = false
            this.loadingDone()
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
      const filename = startCaseWithoutBlank(path)
      const component = await import(`./${filename}`)
      components[path] = component.default
      return components[path]
    },
    async loadDoc(docPath) {
      if (docs[docPath]) {
        return docs[docPath]
      }

      const { ok, data } = await API.getDocs(docPath)
      if (ok) {
        docs[docPath] = marked(data)
        return docs[docPath]
      }

      throw Error('File loading error.')
    },
    async loadFiles() {
      const { doc } = this.$route.params
      const lang = this.language.languageCode
      const docPath = `/i18n/${lang}/pages/examples/${doc}.md`

      // 保证 error 为 false，除非后面设置为 true
      this.error = false

      // 当异步 component 传入同个组件和不同数据时，组件并不会被渲染
      // 所以先触发一次更新，让异步 component 消失
      this.loading = true

      // 如果都加载过了就使用已有文件
      if (components[doc] && docs[docPath]) {
        this.$nextTick(() => {
          this.component = components[doc]
          this.content = docs[docPath]

          // 让异步 component 组件出现
          this.loading = false
          this.loadingDone()
        })
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

  ::v-deep {
    [class~='instance'] {
      margin-bottom: rem(20);
      position: relative;
      overflow: hidden;
      *::selection {
        background: none;
      }
      &:not(:first-child) {
        margin-top: rem(30);
      }
      &:hover {
        .handlebar {
          display: block;
          animation: slideInLeft 0.4s cubic-bezier(0.11, 0.34, 0.38, 1.24);
        }
      }
      .demo {
        height: rem(440);
        border: 1px solid $gray-border;
      }
      .handlebar {
        display: none;
        position: absolute;
        z-index: 9;
        left: rem(20);
        top: rem(20);
        .btn {
          padding: rem(8) rem(12);
          line-height: 1;
          &:not(:last-child) {
            margin-right: rem(10);
          }
        }
      }
    }
    .instance-handlebar {
      padding: rem(20) 0;
      .btn {
        padding: rem(8) rem(12);
        &:not(:last-child) {
          margin-right: rem(10);
        }
      }
    }
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
      &.router-link-active {
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

.gt-container {
  margin-top: rem(30);
}
</style>

<style lang="scss">
.site-small-screen {
  .examples-root {
    padding: 0;
    .main-content {
      padding-left: 0;
    }
  }
  .site-table-scroll {
    overflow: auto;
    table {
      white-space: nowrap;
    }
  }
}
</style>
