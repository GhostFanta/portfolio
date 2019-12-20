<template>
  <div class="z-about">
    <h1 class="z-title">About</h1>
    <h4>Hi, I am Alex Ai. A full stack developer.</h4>
    <h3 class="z-title">Professions</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
      doloribus eos eveniet fugiat laborum laudantium minus nemo neque odit quod
      sunt suscipit? Aliquid assumenda eos est ipsa magni nisi sit!
    </p>
    <h3 class="z-title">Personal</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
      aliquid atque dignissimos exercitationem expedita possimus suscipit
      temporibus totam vitae voluptates?
    </p>
  </div>
</template>
<script>
export default {
  fetch({ store }) {
    store.dispatch('SET_SIDEPANEL_BACKGROUND', '#161815')
    store.dispatch('SET_SIDEPANEL_IMAGE', 'rocket')
  }
}
</script>
<style lang="scss" scoped>
.z-about {
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
