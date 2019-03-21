<template>
  <div class="x-icon-wrapper">
    <div class="x-icon" v-html="icon"></div>
  </div>
</template>

<script>
export default {
  name: 'x-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icon: this.getIcon(),
    }
  },
  watch: {
    name() {
      this.icon = this.getIcon()
    },
  },
  methods: {
    getIcon() {
      return window.require(`@/svgicons/${this.name}.svg`)
    },
  },
}
</script>

<style scoped lang="scss">
.x-icon-wrapper {
  overflow: hidden;
  display: inline-block;
  width: 1em;
  height: 1em;
  .x-icon {
    display: flex;
    align-items: center;
    >>> svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      *[fill='none'] {
        fill: none;
      }
      *[stroke='none'] {
        stroke: none;
      }
    }
  }
}
</style>

<style lang="scss">
.x-icon-hover {
  &:hover {
    svg {
      *[fill] {
        fill: currentColor;
      }
      *[stroke] {
        stroke: currentColor;
      }
    }
  }
}
</style>
