<template>
  <div class="z-dashboard">
    <div class="z-title">WebKeep</div>
    <span class="badge badge-info">React.js</span>
    <span class="badge badge-info">Redux</span>
    <span class="badge badge-info">React-router</span>
    <span class="badge badge-info">Redux-saga</span>
    <span class="badge badge-warning">axios</span>
    <span class="badge badge-warning">Third Parity API</span>
    <span class="badge badge-primary">bootstrap</span>
    <span class="badge badge-primary">DjangoRestFramework</span>
    <span class="badge badge-primary">Celery</span>
    <h5 class="z-subtitle z-intro">
      <strong>WebKeep</strong> is a reserved place to keep your favorite social
      media contents.
    </h5>
    <a href="http://159.203.17.226:82/">Visit the demo</a>
    <p>
      Use <strong> portfolio </strong> : <strong> alextest </strong> to login.
    </p>
    This project is designed to reserve the videos that you like from social
    media platforms including Youtube, Bilibili.
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/7XG7ABhcGTI"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
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
