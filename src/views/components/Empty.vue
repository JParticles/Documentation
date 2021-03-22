<template>
  <div class="no-data-root">
    <div class="no-data-wrapper">
      <x-icon name="empty-box" />
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
  background: rgba(0, 0, 0, 0.01);
  border-radius: 6px;
}

.no-data-wrapper {
  ::v-deep {
    .x-icon-wrap {
      font-size: rem(100);
    }
  }
  .desc {
    margin-top: rem(15);
    font-size: rem(14);
    color: #666;
  }
}
</style>
