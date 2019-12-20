<template>
  <div class="z-side-project">
    <h1 class="z-title">Side Project</h1>
    <h4 class="z-subtitle">
      I believe practice makes perfect. Crafting side projects is an effecitive
      way to advance my skills.
    </h4>
    <div class="row">
      <ProjectCard
        class="col-5 mb-5 mr-2"
        :title="cart.title"
        :subtitle="cart.subtitle"
        :description="cart.description"
        :img="cart.img"
        :to="cart.to"
      />
      <ProjectCard
        class="col-5 mb-5 mr-2"
        :title="dashboard.title"
        :subtitle="dashboard.subtitle"
        :description="dashboard.description"
        :img="dashboard.img"
        :to="dashboard.to"
      />
    </div>
  </div>
</template>
<script>
import ProjectCard from '../../components/ProjectCard'
export default {
  data() {
    return {
      cart: {
        title: 'The Cart',
        subtitle: 'Shopping cart ',
        description: '',
        repolink: '',
        img: 'cart',
        to: ''
      },
      dashboard: {
        title: 'The Dashboard',
        subtitle: 'OAuth Service provider with customer info management.',
        description: '',
        repolink: '',
        img: 'dashboard',
        to: ''
      }
    }
  },
  components: {
    ProjectCard
  }
}
</script>
<style lang="scss" scoped>
.z-side-project {
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
