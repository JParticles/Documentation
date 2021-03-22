<template>
  <div class="x-icon-wrap">
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
      return require(`@/assets/icons/${this.name}.svg`).default
    },
  },
}
</script>

<style scoped lang="scss">
.x-icon-wrap {
  overflow: hidden;
  display: inline-block;
  width: 1em;
  height: 1em;
  .x-icon {
    display: flex;
    align-items: center;
    ::v-deep svg {
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
