<template>
  <div class="z-project-card card">
    <img
      class="z-project-card-img"
      :srcset="require(`~/assets/images/${img}.jpg`).srcSet"
    />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
      <a v-if="repolink" href="">{{ repolink }}</a>
      <p class="card-text">
        {{ description }}
      </p>
      <nuxt-link :to="to" class="card-link">View Detail</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    description: { type: String, default: '' },
    img: { type: String, default: '404' },
    repolink: { type: String, default: '' },
    to: { type: String, default: 'home' }
  }
}
</script>
<style lang="scss" scoped>
.z-project-card {
  background: transparent;
}

.z-project-card-img {
  margin: 10px 0 0 0;
  width: 100%;
  height: auto;
  max-width: 480px;
  max-height: 200px;
}
</style>
