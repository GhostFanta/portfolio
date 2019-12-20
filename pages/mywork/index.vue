<template>
  <div class="z-my-work">
    <h1 class="z-title">My Work</h1>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.z-my-work {
  animation: 0.2s linear 0.3s both fadeInBottom;
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
