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
import { getWidth, getStyle } from '@/utils/dom'

export default {
  name: 'SiteHeaderNormal',
  components: { Language },
  data() {
    return {
      activeElem: null,
    }
  },
  computed: mapState(['rootRoute', 'navBars']),
  watch: {
    $route() {
      this.$nextTick(() => {
        this.init()
      })
    },
  },
  methods: {
    init() {
      this.activeElem = this.$refs.nav.querySelector(
        '.router-link-exact-active'
      )
      this.setSliderPosition(this.activeElem)
    },
    removeResizeEvent() {
      window.removeEventListener('resize', this.resizeHandler)
    },
    addResizeEvent() {
      this.resizeHandler = () => {
        this.setSliderPosition(this.activeElem)
      }
      window.addEventListener('resize', this.resizeHandler)
    },
    removeSlidingEvent() {
      if (this.$refs.nav) {
        this.$refs.nav.removeEventListener('mouseover', this.mouseoverHandler)
        this.$refs.nav.removeEventListener('mouseout', this.mouseoutHandler)
      }
    },
    addSlidingEvent() {
      this.mouseoverHandler = e => {
        this.setSliderPosition(e.target)
      }
      this.mouseoutHandler = () => {
        this.setSliderPosition(this.activeElem)
      }
      this.$refs.nav.addEventListener('mouseover', this.mouseoverHandler)
      this.$refs.nav.addEventListener('mouseout', this.mouseoutHandler)
    },
    setActiveNav($activeElem) {
      const $preElem = this.$refs.nav.querySelector('.router-link-exact-active')
      $preElem.classList.remove('router-link-exact-active')
      $activeElem.classList.add('router-link-exact-active')
    },
    setSliderPosition($activeElem) {
      if ($activeElem) {
        this.setActiveNav($activeElem)
        const $slider = this.$refs.slider
        const offsetLeft = $activeElem.offsetLeft
        const pl = getStyle($activeElem, 'paddingLeft')
        $slider.style.width = `${getWidth($activeElem)}px`
        $slider.style.transform = `translateX(${offsetLeft + pl}px)`
      }
    },
  },
  mounted() {
    this.addSlidingEvent()
    this.addResizeEvent()
  },
  destroyed() {
    this.removeSlidingEvent()
    this.removeResizeEvent()
  },
}
</script>

<style scoped lang="scss">
.site-header-normal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: rem(100);
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
        height: rem(3);
        background-color: $green;
        position: absolute;
        top: 98%;
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
