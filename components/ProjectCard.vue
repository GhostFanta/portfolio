<template>
  <div class="z-project-card card">
    <img
      :srcset="require(`~/assets/images/${img}.jpg`).srcSet"
      class="z-project-card-img"
    />
    <div class="card-body">
      <h6>{{ title }}</h6>
      <div class="mb-2">
        <span
          v-for="item in badges"
          :class="{
            'badge-success': item.type === 'success',
            'badge-info': item.type === 'info'
          }"
          class="badge"
          >{{ item.title }}</span
        >
      </div>
      <small class="card-subtitle mb-3 text-muted">{{ subtitle }}</small>
      <br />
      <a v-if="repolink" href="">{{ repolink }}</a>
      <small class="card-text">
        {{ description }}
      </small>
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
    to: { type: String, default: 'home' },
    badges: { type: Array, default: () => [] }
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
  max-width: 430px;
  max-height: 200px;
}

.card-link {
  font-size: small;
}
</style>
