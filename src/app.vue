<template>
  <div id="app" :class="activePageClass">
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
      activePageClass: this.getPageClass(),
    }
  },
  watch: {
    $route() {
      this.getPageClass()
    },
  },
  methods: {
    getPageClass() {
      const prefix = 'site-root'
      let className = this.$route.path.replace(/\//g, '-')
      if (className === '-') {
        className = 'index'
      }
      this.activePageClass = `${prefix}${className}`
      return this.activePageClass
    },
  },
}
</script>

<style scoped lang="scss"></style>
