<template>
  <section class="home-root">
    <div class="bg" ref="bg"></div>
    <div class="content">
      <div class="title">JParticles</div>
      <div class="description">
        {{ homeData.description }}
        <x-link class="readmore" to="/examples/intro">
          {{ homeData.seeMore }}
        </x-link>
      </div>
      <div class="quick-start">
        <x-link class="btn btn-success pr" to="/examples/quick_start">
          <span class="pa">{{ homeData.quickStart }}</span>
        </x-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['language', 'isSmallScreen']),
    homeData() {
      return this.language.home
    },
  },
  methods: {
    createEffect() {
      const settings = this.isSmallScreen
        ? {
            proximity: 50,
            num: 0.25,
            maxSpeed: 0.7,
          }
        : { proximity: 100 }
      new JParticles.particle(
        this.$refs.bg,
        Object.assign(
          {
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
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
