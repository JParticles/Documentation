<template>
  <div class="no-data-root">
    <div class="no-data-wrapper">
      <x-icon name="empty-search" />
      <div class="desc">{{ language.noData }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Empty',
  computed: {
    ...mapState(['language']),
  },
}
</script>

<style scoped lang="scss">
.no-data-root {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.no-data-wrapper {
  ::v-deep {
    .x-icon-root {
      font-size: rem(100);
    }
  }
  .desc {
    margin-top: rem(5);
    font-size: rem(14);
  }
}
</style>
