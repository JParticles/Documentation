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
import Header from '@/views/common/header'
import Footer from '@/views/common/footer'

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
    appClass() {
      return {
        'site-sticky-footer': this.stickyFooter,
      }
    },
  },
  methods: {
    setBodyClass() {
      const prefix = 'site-body'
      const classList = document.body.classList
      const unwantedClass = []

      let className = this.$route.path.replace(/\//g, '-')
      if (className === '-') {
        className = '-index'
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
