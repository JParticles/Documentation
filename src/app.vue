<template>
  <div id="app" :class="appClass">
    <Header />
    <div class="site-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/views/@common/header'
import Footer from '@/views/@common/footer'
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
      this.setBodyClass()
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
  },
  methods: {
    setBodyClass() {
      const prefix = 'site-body'
      const classList = document.body.classList
      const unwantedClass = []
      let className

      if (this.$route.name === 'index') {
        className = '-index'
      } else if (this.$route.name === 'langIndex') {
        className = `-index-${this.$route.params.lang}`
      } else {
        className = this.$route.path.replace(/\//g, '-')
      }

      classList.forEach(item => {
        if (item.indexOf(prefix) > -1) {
          unwantedClass.push(item)
        }
      })

      classList.remove(...unwantedClass)
      classList.add(`${prefix}${className}`)
    },
  },
}
</script>

<style scoped lang="scss"></style>
