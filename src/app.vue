<template>
  <div id="app" :class="appClass">
    <template v-if="!isNotFoundRoute">
      <Header />
      <div class="site-container">
        <router-view />
      </div>
      <Footer />
    </template>
    <router-view v-else />
  </div>
</template>

<script>
import Header from '@/views/components/Header'
import Footer from '@/views/components/Footer'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      stickyFooter: true,
    }
  },
  watch: {
    $route() {
      this.setUniqueClassForRoot()
    },
  },
  computed: {
    ...mapState(['isSmallScreen']),
    appClass() {
      return {
        'site-sticky-footer': this.stickyFooter,
        'site-small-screen': this.isSmallScreen,
      }
    },
    isNotFoundRoute() {
      return this.$route.name === 404
    },
    isHomePage() {
      return ['index', 'langIndex'].includes(this.$route.name)
    },
  },
  methods: {
    /**
     * 根据路由唯一性，设置根级元素样式类名
     */
    setUniqueClassForRoot() {
      const prefix = 'site-html__'
      const classList = document.documentElement.classList
      const pageRemainingClass = []
      let className

      if (this.isHomePage) {
        className = 'index'
      } else {
        className = this.$route.path
          .substring(1)
          .replace(/\/$/, '')
          .replace(/\//g, '-')
      }

      classList.forEach(item => {
        if (item.indexOf(prefix) > -1) {
          pageRemainingClass.push(item)
        }
      })

      if (this.isNotFoundRoute) {
        classList.add(`${prefix}404`)
      }

      classList.remove(...pageRemainingClass)
      classList.add(`${prefix}${className}`)
    },
  },
}
</script>

<style scoped lang="scss"></style>
