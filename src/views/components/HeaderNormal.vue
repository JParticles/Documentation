<template>
  <div class="site-header-normal">
    <div class="site-container-width">
      <div class="logo">
        <x-link :to="rootRoute">JParticles</x-link>
      </div>
      <div class="right">
        <div class="nav-box" ref="navBox">
          <Nav />
          <div class="slider" ref="slider"></div>
        </div>
        <div class="divider"></div>
        <Language />
      </div>
    </div>
  </div>
</template>

<script>
import Language from './Language'
import Nav from './Nav'
import { mapState } from 'vuex'
import { getWidth, getStyle } from '@/utils/dom'
import throttle from '@/utils/throttle'

export default {
  name: 'SiteHeaderNormal',
  components: { Language, Nav },
  computed: mapState(['rootRoute']),
  watch: {
    $route() {
      this.$nextTick(() => {
        this.init()
      })
    },
  },
  methods: {
    init() {
      this.$nav = this.$refs.navBox.querySelector('.nav-root')
      if (/\/download/i.test(this.$route.redirectedFrom)) {
        this.$activeElem = this.$nav.querySelector('[data-name="/examples"]')
      } else {
        this.$activeElem = this.$nav.querySelector('.router-link-exact-active')
      }
      this.setSliderPosition(this.$activeElem)
    },
    removeResizeEvent() {
      this.resizeHandler.cancel()
      window.removeEventListener('resize', this.resizeHandler)
    },
    addResizeEvent() {
      this.resizeHandler = throttle(() => {
        this.setSliderPosition(this.$activeElem)
      }, 300)
      window.addEventListener('resize', this.resizeHandler)
    },
    removeSlidingEvent() {
      this.$nav.removeEventListener('mouseover', this.mouseoverHandler)
      this.$nav.removeEventListener('mouseout', this.mouseoutHandler)
    },
    addSlidingEvent() {
      this.mouseoverHandler = e => {
        this.setSliderPosition(e.target)
      }
      this.mouseoutHandler = () => {
        this.setSliderPosition(this.$activeElem)
      }
      this.$nav.addEventListener('mouseover', this.mouseoverHandler)
      this.$nav.addEventListener('mouseout', this.mouseoutHandler)
    },
    setActiveNav($activeElem) {
      const $elems = this.$nav.querySelectorAll('.router-link-exact-active')
      Array.prototype.forEach.call($elems, $elem => {
        $elem.classList.remove('router-link-exact-active')
      })
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
    this.$nextTick(() => {
      this.init()
      this.addSlidingEvent()
      this.addResizeEvent()
    })
  },
  destroyed() {
    this.removeSlidingEvent()
    this.removeResizeEvent()
  },
}
</script>

<style scoped lang="scss">
.site-header-normal {
  border-bottom: 1px solid $gray-border;
  box-shadow: 0 rem(1) rem(2) 0 $shadow-color;
}
.site-container-width {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $site-header-height;
  font-size: rem(14);
  .logo {
    a {
      font-size: rem(26);
      font-weight: 900;
      color: $green;
    }
  }
  .right {
    display: flex;
    align-items: center;
    ::v-deep {
      .nav-root {
        display: flex;
        > a {
          padding: rem(6) rem(12);
          transition: 0.4s ease-out;
          &.router-link-exact-active {
            color: $green;
          }
        }
      }
    }
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
    .divider {
      width: 0;
      height: rem(14);
      margin: 0 rem(24) 0 rem(12);
      border-left: 1px dotted $gray;
    }
  }
}
</style>
