<template>
  <section class="home-root">
    <div class="bg"></div>
    <div class="content">
      <div class="title">JParticles</div>
      <div class="description">
        {description}
        <x-link class="readmore" to="/examples/intro">
          {seeMore}
        </x-link>
      </div>
      <div class="quick-start">
        <x-link
          class="btn btn-success pr"
          to="https://j.com/examples/quick_start"
        >
          <span class="pa">{quickStart}</span>
        </x-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
