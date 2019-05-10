<template>
  <footer class="site-footer">
    <div class="container">
      <div>
        Copyright © 2016-{{ currentYear }} Barrior &lt;
        <a href="mailto:Barrior@qq.com">Barrior@qq.com</a>
        &gt;&nbsp;
      </div>
      <div>
        Released under the&nbsp;
        <a
          href="http://www.opensource.org/licenses/mit-license.php"
          target="_blank"
        >
          MIT
        </a>
        &nbsp;License.
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
    }
  },
  computed: {
    footerInfo() {
      return this.$store.state.language.footer
    },
  },
}
</script>

<style scoped lang="scss">
.site-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: rem(20);
  border-top: 1px solid $gray-border;
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
