<template>
  <div class="z-side-project">
    <h1 class="z-title">Side Project</h1>
    <h4 class="z-subtitle">
      I believe practice makes perfect. Crafting side projects is an effecitive
      way to advance my skills.
    </h4>
    <div class="row">
      <ProjectCard
        :title="cart.title"
        :subtitle="cart.subtitle"
        :description="cart.description"
        :img="cart.img"
        :to="cart.to"
        class="col-md-5 col-lg-5 mb-2 mr-2"
      />
      <ProjectCard
        v-if="dashboard.show"
        :title="dashboard.title"
        :subtitle="dashboard.subtitle"
        :description="dashboard.description"
        :img="dashboard.img"
        :to="dashboard.to"
        class="col-md-5 col-lg-5 mb-2 mr-2"
      />
      <ProjectCard
        :title="portfolio.title"
        :subtitle="portfolio.subtitle"
        :description="portfolio.description"
        :img="portfolio.img"
        :to="portfolio.to"
        class="col-md-5 col-lg-5 mb-2 mr-2"
      />
    </div>
  </div>
</template>
<script>
import ProjectCard from '../../components/ProjectCard'
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      cart: {
        title: 'The Cart',
        subtitle:
          'Shopping cart demo site, which is a good topic to practice web app crafting.',
        description: '',
        repolink: '',
        img: 'cart',
        to: '/sideproject/cart',
        show: true
      },
      dashboard: {
        title: 'The Dashboard',
        subtitle: 'Dashboard demo site, which is a good topic to practice',
        description: '',
        repolink: '',
        img: 'dashboard',
        to: '/sideproject/dashboard',
        show: false
      },
      portfolio: {
        title: 'The Portfolio',
        subtitle: 'This very website that highlights my professions.',
        description: '',
        repolink: '',
        img: 'dashboard',
        to: '/sideproject/portfolio',
        show: true
      }
    }
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
