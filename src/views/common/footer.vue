<template>
  <footer class="site-footer">
    <div class="container">
      <div>
        Copyright 2016-{{ currentYear }} Barrior &lt;
        <a href="mailto:Barrior@qq.com">Barrior@qq.com</a>
        &gt;&nbsp;
      </div>
      <div>
        Licensed under the&nbsp;
        <a
          href="http://www.opensource.org/licenses/mit-license.php"
          target="_blank"
        >
          MIT
        </a>
        .
      </div>
      <div>
        <a href="https://github.com/Barrior/JParticles" target="_blank">
          {{ footerInfo.support }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      footerInfo: window.globalConfig.language.footer,
    }
  },
}
</script>

<style scoped lang="scss">
.site-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $site-footer-height;
  border-top: 1px solid $gray-border;
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 rem(20);
    > div {
      display: flex;
      & + div {
        margin-left: rem(4);
      }
    }
    @include screen-xs {
      transform: scale(0.86);
      > div {
        width: 100%;
        justify-content: center;
        margin-left: 0 !important;
      }
    }
  }
  a {
    &:hover {
      color: $green;
      text-decoration: underline;
    }
  }
}
</style>
