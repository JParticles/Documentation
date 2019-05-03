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
    <nav class="nav" :class="{ show }" ref="nav">
      <x-link
        v-for="(nav, i) in navBars"
        :key="i"
        :to="nav.href"
        :class="{ 'router-link-exact-active': highlightNav(nav) }"
      >
        {{ nav.name }}
      </x-link>
      <div class="divider"></div>
      <x-link v-for="menu in menus" :key="menu.name" :to="menu.href">
        {{ menu.name }}
        <i class="site-icon-required" v-if="showRequiredIcon(menu)">
          {{ language.examples.required }}
        </i>
      </x-link>
    </nav>
  </div>
</template>

<script>
import Language from './language'
import { mapState } from 'vuex'
import { LS } from '@/fixtures/storage_keys'

const quickStartPath = '/examples/quick_start'
const examplesPath = '/examples'

function readQuickStart() {
  return !!localStorage.getItem(LS.READ_QUICK_START)
}

export default {
  name: 'SiteHeaderMobile',
  components: { Language },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapState(['menus', 'navBars', 'language']),
    isExamplesPath() {
      return this.$route.path.indexOf(examplesPath) !== -1
    },
    read() {
      return readQuickStart()
    },
  },
  watch: {
    $route() {
      this.show = false
    },
  },
  methods: {
    highlightNav(nav) {
      return this.isExamplesPath && nav.href.indexOf(examplesPath) !== -1
    },
    showRequiredIcon(menu) {
      return !this.read && menu.href.indexOf(quickStartPath) !== -1
    },
    removeDocEvent() {
      document.removeEventListener('click', this.handler)
    },
    addDocEvent() {
      this.handler = e => {
        if (
          !this.$refs.menuToggle.contains(e.target) &&
          !this.$refs.nav.contains(e.target)
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
  .nav {
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
    > a {
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
    .divider {
      height: 1px;
      margin: rem(6) $site-side-space-mobile;
      background-color: #dedede;
    }
  }
}
</style>
