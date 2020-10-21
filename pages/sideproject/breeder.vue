<template>
  <div class="z-dashboard">
    <div class="z-title">Breeder</div>
    <span class="badge badge-info">React.js</span>
    <span class="badge badge-info">Redux</span>
    <span class="badge badge-info">React-router</span>
    <span class="badge badge-warning">axios</span>
    <span class="badge badge-warning">Third Parity API</span>
    <span class="badge badge-primary">bootstrap</span>
    <h5 class="z-subtitle z-intro">
      <strong>The Breeder</strong> is a search panel project based on React &
      Redux flow integrated with
      <a href="https://docs.thecatapi.com/">The Cat API</a>.
    </h5>
    <a href="http://159.203.17.226:82/">Visit the demo</a>
    <p>
      You can checkout the source code on
      <a href="https://github.com/GhostFanta/Cats">Github</a>
    </p>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.z-dashboard {
  animation: 0.2s linear 0.3s both fadeInBottom;
}
.list-group-item {
  text-decoration: none;
  color: #7f828b;
  background: transparent;
  width: 300px;
  border: none;
  padding-left: 0;
  padding-right: 0;
}
</style>
