<template>
  <div class="z-container">
    <Header />
    <div class="z-container-wrapper">
      <transition name="fade">
        <slot class="z-container-content" />
      </transition>
    </div>
    <div class="square-small" />
    <div class="square-large" />
    <div class="copyright">
      <small>copyright &copy; Alex.AI 2019</small>
    </div>
  </div>
</template>
<script>
import Header from './Header'
export default {
  name: 'Container',
  components: {
    Header
  }
}
</script>
<style lang="scss">
.z-container {
  width: 100%;
}
.z-container-wrapper {
  flex: none;
  height: 80%;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 56rem;
  justify-content: center;
  align-items: center;
}

.square-large {
  opacity: 0;
  position: absolute;
  bottom: 50px;
  right: 40%;
  width: 250px;
  height: 250px;
  border: 40px solid #000;
  animation: rotate 40s linear infinite, fadeInElement 1s linear forwards;
  animation-delay: 1.5s;
  z-index: -1;
}

.square-small {
  opacity: 0;
  position: absolute;
  bottom: 20px;
  top: 40%;
  width: 100px;
  height: 100px;
  border: 10px solid #000;
  animation: rotate 10s linear infinite, fadeInElement 1s linear forwards;
  animation-delay: 1s;
  z-index: -1;
}

.copyright {
  position: absolute;
  bottom: 25px;
  font-size: large;
}

@keyframes fadeInElement {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
}

@keyframes rotate {
  0% {
    opacity: 0;
    transform: rotate(45deg);
  }
  100% {
    opacity: 0.2;
    transform: rotate(405deg);
  }
}
</style>
