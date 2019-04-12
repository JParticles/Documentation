<template>
  <div class="site-header-normal site-container-width">
    <div class="logo">
      <x-link :to="rootRoute">JParticles</x-link>
    </div>
    <div class="right">
      <div class="nav-box">
        <nav class="nav" ref="nav">
          <x-link v-for="(nav, i) in navBars" :key="i" :to="nav.href">
            {{ nav.name }}
          </x-link>
        </nav>
        <div class="slider" ref="slider"></div>
      </div>
      <div class="divider"></div>
      <Language />
    </div>
  </div>
</template>

<script>
import Language from './language'
import { mapState } from 'vuex'

export default {
  name: 'SiteHeaderNormal',
  components: { Language },
  data() {
    return {}
  },
  computed: mapState(['rootRoute', 'navBars']),
  watch: {
    $route() {
      this.$nextTick(() => {
        this.setSliderPosition()
      })
    },
  },
  methods: {
    setSliderPosition() {
      const $active = this.$refs.nav.querySelector('.router-link-exact-active')
      const $slider = this.$refs.slider
      const width = getComputedStyle($active).width
      console.log(width)
      $slider.style.width = width
    },
  },
}
</script>

<style scoped lang="scss">
.site-header-normal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: rem(90);
  border-bottom: 1px solid $gray-border;
  box-shadow: 0 rem(1) rem(2) 0 $shadow-color;
  position: relative;
  z-index: 9;
  a {
    &:hover {
      color: $green;
    }
  }
  .logo {
    a {
      font-size: rem(26);
      font-weight: 300;
      color: $green;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .nav-box {
      position: relative;
      .slider {
        height: rem(2);
        background-color: $green;
        position: absolute;
        top: 100%;
        transition: 0.4s ease-out;
      }
    }
    .nav {
      display: flex;
      > a {
        font-size: rem(16);
        padding: rem(6) rem(12);
        transition: 0.4s ease-out;
        &.router-link-exact-active {
          color: $green;
        }
      }
    }
    .divider {
      width: 0;
      height: rem(14);
      margin: 0 rem(24) 0 rem(12);
      border-left: 1px dotted $gray;
    }
  }
}
</style>
