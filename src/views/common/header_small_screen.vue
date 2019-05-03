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
      <x-link v-for="(nav, i) in navBars" :key="i" :to="nav.href">
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

export default {
  name: 'SiteHeaderMobile',
  components: { Language },
  data() {
    return {
      show: false,
      required: false,
      quickStartPath: '/examples/quick_start',
    }
  },
  computed: mapState(['menus', 'navBars', 'language']),
  watch: {
    $route() {
      this.show = false
    },
  },
  methods: {
    showRequiredIcon(menu) {
      return menu.href.indexOf(this.quickStartPath) != -1
      // return this.required && menu.href.indexOf(quickStartPath) != -1
    },
    removeDocEvent() {
      document.removeEventListener('click', this.handler)
    },
    addDocEvent() {
      this.handler = e => {
        if (!this.$refs.menuToggle.contains(e.target)) {
          this.show = this.$refs.nav.contains(e.target)
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
        font-size: rem(16);
        margin-right: rem(4);
        path {
          fill: currentColor;
        }
      }
    }
    .right {
      ::v-deep .languages-root {
        .language span {
          font-size: rem(12);
        }
      }
    }
  }
  .nav {
    $nav-width: rem(260);
    width: $nav-width;
    padding: rem(10) 0;
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
      line-height: rem(36);
      font-size: rem(14);
      transition: 0.4s ease-out;
      &:hover,
      &.router-link-exact-active {
        color: $green;
      }
    }
    .divider {
      height: 1px;
      margin: rem(8) $site-side-space-mobile;
      background-color: #dedede;
    }
    ::v-deep {
      .site-icon-required {
        padding: 4px 8px;
      }
    }
  }
}
</style>
