<template>
  <footer class="site-footer">
    <div class="com-width">
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
          {{ supportAuthor }}
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
      supportAuthor: window.globalConfig.language.footer,
    }
  },
}
</script>

<style scoped lang="scss">
.site-footer {
  display: flex;
  align-items: center;
  height: $site-footer-height;
  border-top: 1px solid $gray-border;
  .com-width {
    width: 100%;
    display: flex;
    justify-content: center;
    > div {
      display: flex;
      & + div {
        margin-left: rem(4);
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
