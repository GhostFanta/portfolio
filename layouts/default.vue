<template>
  <div class="z-layout">
    <div v-if="$mq !== 'sm'" class="row">
      <SidePanel class="z-side-panel col-4" />
      <Container class="col-8 z-container">
        <nuxt />
      </Container>
    </div>
    <div v-else>
      <Container class="z-container">
        <nuxt />
      </Container>
    </div>
  </div>
</template>

<script>
import Container from '../components/Container'
import SidePanel from '../components/SidePanel'
export default {
  components: {
    Container,
    SidePanel
  }
}
</script>

<style lang="scss" scoped>
html {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.z-layout {
  min-height: 100%;
  height: 100vh;
}

.row {
  min-height: 40rem;
  height: 100%;
}

.z-side-panel {
  margin: -5px 20px -10px 0;
  min-height: 100%;
}
</style>
