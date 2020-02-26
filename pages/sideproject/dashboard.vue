<template>
  <div class="z-dashboard">
    <div class="z-title">Dashboard</div>
    <span class="badge badge-info">React.js</span>
    <span class="badge badge-info">Redux</span>
    <span class="badge badge-info">React-router</span>
    <span class="badge badge-warning">axios</span>
    <span class="badge badge-warning">firebase</span>
    <span class="badge badge-primary">bootstrap</span>
    <h5 class="z-subtitle z-intro">
      <strong>The dashboard</strong> is a dashboard project which integrates
      multiple sections serving different functionalities including analytics,
      profile management, products management and so on.
    </h5>
    <a href="https://flamboyant-swartz-5bcde4.netlify.com/login"
      >Visit the demo (still under development)</a
    >
    <p>
      Use <strong>test@alex.me </strong>and <strong>123456</strong> to access.
    </p>
    <h4 class="z-intro">List of services</h4>
    <div class="list-group">
      <nuxt-link to="/sideproject/identity_express" class="list-group-item"
        >Identity Express(Oauth Provider)
        <span class="badge badge-info">Express</span>
      </nuxt-link>
    </div>
    <p>
      You can checkout the source code on
      <a href="https://github.com/GhostFanta/dashboard.react.zc">Github</a>
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
