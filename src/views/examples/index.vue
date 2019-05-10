<template>
  <section class="examples-root site-container-width">
    <side class="side-menu-wrapper" v-if="!isSmallScreen">
      <Menu />
    </side>
    <main class="main-content">
      <router-view />
    </main>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Menu from '@/views/@common/menu'

export default {
  name: 'Examples',
  components: { Menu },
  computed: {
    ...mapState(['isSmallScreen']),
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.examples-root {
  min-height: 100%;
  padding-top: rem(60);
  padding-bottom: rem(60);
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
        background-color: #f7f7f7;
        color: $green;
        border-color: $green;
      }
    }
  }
}
.main-content {
  padding-left: rem(240 + 60);
}
</style>
