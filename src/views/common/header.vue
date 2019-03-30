<template>
  <div class="site-header">
    <SmallScreen v-if="isSmallScreen" />
    <NormalScreen />
  </div>
</template>

<script>
import NormalScreen from './header_normal_screen'
import SmallScreen from './header_small_screen'
import { isMobile } from '@/utils/detect'

export default {
  name: 'SiteHeader',
  components: { NormalScreen, SmallScreen },
  data() {
    return {
      isSmallScreen: false,
    }
  },
  methods: {
    addResizeEvent() {
      this.resizeHandler = () => {
        this.isSmallScreen = isMobile()
      }
      window.addEventListener('resize', this.resizeHandler)
    },
    removeResizeEvent() {
      window.removeEventListener('resize', this.resizeHandler)
    },
  },
  mounted() {
    this.addResizeEvent()
  },
  destroyed() {
    this.removeResizeEvent()
  },
}
</script>

<style scoped lang="scss">
$header-shadow: #e8e8e8;

.site-header {
  height: $site-header-height;
  padding: 0 $site-side-space;
  line-height: rem(94);
  border-bottom: 1px solid $gray-border;
  box-shadow: 0 rem(1) rem(2) 0 $header-shadow;
  position: relative;
  z-index: 9;
  a {
    &:hover {
      color: $green;
    }
  }
  .switch-language {
    display: inline-block;
    margin: 0 0 0 rem(8);
    padding-left: rem(16);
    line-height: 1;
    border-left: rem(1) dotted $gray;
    top: rem(-3);
    cursor: pointer;
    *::selection {
      background: none;
    }
    &:hover {
      > .list {
        display: block;
      }
    }
    .display {
      > * {
        vertical-align: middle;
      }
      img {
        width: rem(18);
        margin-left: rem(10);
      }
      span {
        font-size: rem(14);
      }
    }
    > .list {
      display: none;
      min-width: rem(116);
      margin-bottom: 0;
      border: rem(1) solid $gray-border;
      border-radius: rem(10);
      background-color: #fff;
      position: absolute;
      top: rem(-13);
      left: rem(-2);
      right: rem(-12);
      box-shadow: 0 rem(2) rem(8) 0 $header-shadow;
      animation: 0.3s fadeIn;
      overflow: hidden;
      li {
        padding: rem(12);
        text-align: right;
        border-bottom: rem(1) solid $gray-border;
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          background-color: $lightgray-bg-hover;
        }
      }
    }
  }
  .large-screen {
    .logo {
      height: rem(94);
      a {
        font-size: rem(26);
        font-weight: 100;
        color: $green;
      }
    }
    .nav {
      > a {
        padding: rem(6) rem(8);
        font-size: rem(14);
        transition: 0.4s ease-out;
        &.active {
          color: $green;
        }
      }
      .slide-block {
        width: rem(28);
        height: rem(2);
        background-color: $green;
        top: rem(62);
        transition: 0.4s ease-out;
      }
    }
  }
  .small-screen {
    .mobile-menu {
      cursor: pointer;
      .icon {
        font-size: rem(14);
        margin-right: rem(4);
      }
    }
    .switch-language {
      top: rem(21);
      border-left: none;
      .display {
        img {
          margin-left: rem(8);
        }
      }
      > .list {
        min-width: rem(110);
        left: auto;
        right: 0;
        li {
          padding: rem(10);
        }
      }
    }
    .nav {
      $nav-width: 220px;
      width: $nav-width;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 rem(2) rem(3) 0 $header-shadow;
      transition: 0.4s ease-out;
      position: fixed;
      z-index: 999;
      left: 0;
      top: rem($header-height-mobile);
      bottom: 0;
      overflow: auto;
      transform: translate(-$nav-width - 6, 0);
      &.show {
        transform: translate(0, 0);
      }
      > a {
        display: block;
        padding: 0 rem(20);
        line-height: rem(36);
        font-size: rem(14);
        transition: 0.4s ease-out;
        &.active {
          color: $green;
        }
      }
      .divider {
        height: 1px;
        margin: 0 rem(20);
        background-color: #dedede;
      }
    }
  }
}
</style>
