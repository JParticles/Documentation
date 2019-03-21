<template>
  <a v-bind="$props" :href="to" :target="targetValue" v-if="isOuterLink">
    <slot />
  </a>
  <router-link v-bind="$props" v-else>
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'x-link',
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
  },
  computed: {
    targetValue() {
      return this.target || '_blank'
    },
    isOuterLink() {
      return typeof this.to === 'string' && /^https?/.test(this.to)
    },
  },
}
</script>
