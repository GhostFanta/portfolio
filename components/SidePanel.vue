<template>
  <div :style="{ backgroundColor: color }" class="z-side-panel">
    <img
      :srcset="require(`~/assets/images/${image}.jpg`).srcSet"
      class="z-side-panel-img"
    />
  </div>
</template>
<script>
export default {
  computed: {
    color() {
      return this.$store.sidepanelBackgroundColor || '#171916'
    },
    image() {
      return this.$store.sidepanelBackgroundImage || 'flower'
    }
  }
}
</script>
<style lang="scss" scoped>
.z-side-panel {
  max-width: 30%;
  width: 100%;
  min-height: 50rem;
}
.z-side-panel-img {
  width: 100%;
  max-width: 500px;
  max-height: 100vh;
  margin: auto;
}
</style>
