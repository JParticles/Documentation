<template>
  <div class="site-header-mobile">
    <header class="beam">
      <div class="left" @click="onToggleMenu" ref="menuToggle">
        <x-icon name="menu" />
        <span>{{ language.header.smallScreen.menu }}</span>
      </div>
      <div class="right">
        <Language />
      </div>
    </header>
    <aside class="nav-wrapper" :class="{ show }" ref="navWrapper">
      <Nav />
      <div class="divider"></div>
      <Menu />
    </aside>
  </div>
</template>

<script>
import Language from './Language'
import Nav from './Nav'
import Menu from './Menu'
import { mapState } from 'vuex'

export default {
  name: 'SiteHeaderSmall',
  components: { Language, Nav, Menu },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapState(['language']),
  },
  watch: {
    $route() {
      this.show = false
    },
  },
  methods: {
    removeDocEvent() {
      document.removeEventListener('click', this.handler)
    },
    addDocEvent() {
      this.handler = e => {
        if (
          !this.$refs.menuToggle.contains(e.target) &&
          !this.$refs.navWrapper.contains(e.target)
        ) {
          this.show = false
        }
      }
      document.addEventListener('click', this.handler)
    },
    onToggleMenu() {
      this.show = !this.show
    },
  },
  mounted() {
    this.addDocEvent()
  },
  destroyed() {
    this.removeDocEvent()
  },
}
</script>

<style scoped lang="scss">
.site-header-mobile {
  .beam {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $site-header-height-mobile;
    padding: 0 $site-side-space-mobile;
    border-bottom: 1px solid $gray-border;
    box-shadow: 0 rem(1) rem(2) 0 $shadow-color;
    background-color: #fff;
    @include absolute-full(fixed);
    z-index: 999;
    .left {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: $green;
      }
      ::v-deep .x-icon-root {
        font-size: rem(14);
        margin-right: rem(4);
        path {
          fill: currentColor;
        }
      }
    }
  }
  .nav-wrapper {
    $nav-width: rem(260);
    width: $nav-width;
    padding: rem(12) 0;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 rem(2) rem(3) 0 $shadow-color;
    transition: 0.4s ease-out;
    position: fixed;
    z-index: 999;
    left: 0;
    top: $site-header-height-mobile;
    bottom: 0;
    overflow: auto;
    transform: translateX(-100%);
    &.show {
      transform: translateX(0);
    }
    ::v-deep {
      a {
        display: block;
        padding: 0 $site-side-space-mobile;
        line-height: rem(30);
        font-size: rem(12);
        transition: 0.4s ease-out;
        &:hover,
        &.router-link-exact-active {
          color: $green;
        }
      }
    }
    .divider {
      height: 1px;
      margin: rem(6) $site-side-space-mobile;
      background-color: #dedede;
    }
  }
}
</style>
