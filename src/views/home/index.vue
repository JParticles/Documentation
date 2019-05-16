<template>
  <section class="home-root">
    <div class="bg" ref="bg"></div>
    <div class="content">
      <div class="title">JParticles</div>
      <div class="description">
        {{ homeData.description }}
        <x-link class="see-more" :to="generatePath('/examples/intro')">
          {{ homeData.seeMore }}
        </x-link>
      </div>
      <div class="btn-box">
        <x-link
          class="btn btn-success"
          :to="generatePath('/examples/quick_start')"
        >
          <span class="text">{{ homeData.quickStart }}</span>
        </x-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { generateLangPath } from '@/utils/path'

export default {
  name: 'Home',
  computed: {
    ...mapState(['language', 'isSmallScreen']),
    homeData() {
      return this.language.home
    },
  },
  watch: {
    isSmallScreen() {
      this.createEffect()
    },
  },
  methods: {
    generatePath(path) {
      return generateLangPath(path)
    },
    createEffect() {
      const settings = this.isSmallScreen
        ? {
            proximity: 50,
            num: 0.25,
            maxSpeed: 0.7,
          }
        : {
            proximity: 100,
          }
      new JParticles.Particles(
        this.$refs.bg,
        Object.assign(
          {
            opacity: 0.3,
            eventElem: document,
            range: 3000,
            parallax: true,
            parallaxStrength: 1,
            parallaxLayer: [1, 3, 5, 7],
          },
          settings
        )
      )
    },
  },
  mounted() {
    this.createEffect()
  },
}
</script>

<style scoped lang="scss">
.home-root {
  @include absolute-full(fixed);
  .bg {
    @include absolute-full();
  }
  .content {
    color: $green;
    text-align: center;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .title {
    font-size: rem(80);
    font-weight: 900;
  }
  .description {
    margin: rem(20) 0 rem(50);
    padding: 0 rem(50);
    font-size: rem(20);
  }
  .see-more {
    display: inline-block;
    line-height: 1.2;
    color: $green;
    border-bottom: 1px solid $green;
    font-size: 65%;
    transform: translateY(rem(-2));
    &:hover {
      color: $green-hover;
      border-bottom-color: $green-hover;
    }
  }
  .btn-box {
    .btn {
      $btn-height: rem(50);
      height: $btn-height;
      padding: 0 rem(20);
      border-color: $green;
      border-radius: rem(4);
      box-shadow: none;
      background-color: transparent;
      font-size: rem(18);
      color: $green;
      position: relative;
      overflow: hidden;
      &:after {
        content: '';
        background-color: $green;
        position: absolute;
        top: 50%;
        bottom: 50%;
        left: rem(-10);
        right: rem(-10);
        transition: 0.4s ease-out;
        transform: rotate(45deg);
      }
      .text {
        line-height: $btn-height;
        position: relative;
        z-index: 3;
      }
      &:hover {
        color: #fff;
        &:after {
          top: -100%;
          bottom: -100%;
        }
      }
    }
  }
}
</style>
