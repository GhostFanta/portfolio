<template>
  <div class="z-portfolio container">
    <h1 class="z-title">Portfolio</h1>
    <span class="badge badge-success">Nuxt.js</span>
    <span class="badge badge-primary">Bootstrap</span>
    <h5 class="z-subtitle z-intro">
      I believe building portfolio website is one of the best approach to get
      access to some new technologies and sell yourself.
      <p class="z-body mt-3">
        After consideration I choose Nuxt.js to implement this site since it
        generates SEO-friendly code and libraries can be easily applied as
        plugins.
      </p>
    </h5>
    <p>
      You may want to take a look at the
      <a href="https://github.com/GhostFanta/portfolio">source code</a> if you
      got interest on this project.
    </p>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.z-portfolio {
  animation: 0.2s linear 0.3s both fadeInBottom;

  a {
    text-decoration: none;
  }

  .z-body {
    color: #000;
  }
}
</style>
