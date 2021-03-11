<template>
  <div class="z-feeling-lucky">
    <h1 class="z-title">Feeling Lucky</h1>
    <h4 class="z-subtitle">
      Some gadgetries that might get your point...
    </h4>
    <div class="d-flex">
      <small-card
        :title="metagen.title"
        :description="metagen.description"
        :tags="metagen.tags"
        :link="metagen.link"
      />
    </div>
  </div>
</template>
<script>
import SmallCard from '~/components/SmallCard.vue'
export default {
  name: 'FeelingLucky',
  components: {
    SmallCard
  },
  data() {
    return {
      metagen: {
        title: 'MetaGen',
        description: 'A handy tool for retrieving video meta from given url',
        tags: ['meta'],
        link: 'http://159.203.17.226/'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.z-feeling-lucky {
  animation: 0.2s linear 0.3s both fadeInBottom;
}
</style>
