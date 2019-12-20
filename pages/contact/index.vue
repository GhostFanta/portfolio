<template>
  <div class="z-contact">
    <h1 class="z-title">Contact</h1>
    <h3>Something creative in your mind?</h3>
    <a href="">Let's build it together!</a>
    <a class="z-contact-email" href="mailto: azc.aizichu@gmail.com"
      >Mail me @ azc.aizichu@gmail.com</a
    >
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.z-contact {
  animation: 0.2s linear 0.3s both fadeInBottom;

  a {
    display: block;
  }

  .z-contact-email {
    margin: 20px 0 0 0;
  }
}
@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
