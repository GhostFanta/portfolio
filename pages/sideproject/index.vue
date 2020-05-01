<template>
  <div class="z-side-project">
    <h1 class="z-title">Side Project</h1>
    <h4 class="z-subtitle">
      I believe practice makes perfect. Crafting side projects is an effecitive
      way to advance my skills.
    </h4>
    <div class="z-side-project-content d-flex">
      <ProjectCard
        v-if="breeder.show"
        :title="breeder.title"
        :subtitle="breeder.subtitle"
        :description="breeder.description"
        :img="breeder.img"
        :to="breeder.to"
        :badges="breeder.badges"
        class="mb-2 mr-2"
      />
      <ProjectCard
        :title="cart.title"
        :subtitle="cart.subtitle"
        :description="cart.description"
        :img="cart.img"
        :to="cart.to"
        :badges="cart.badges"
        class=" mb-2 mr-2"
      />
      <ProjectCard
        :title="portfolio.title"
        :subtitle="portfolio.subtitle"
        :description="portfolio.description"
        :img="portfolio.img"
        :to="portfolio.to"
        :badges="portfolio.badges"
        class="mb-2 mr-2"
      />
      <ProjectCard
        v-if="dashboard.show"
        :title="dashboard.title"
        :subtitle="dashboard.subtitle"
        :description="dashboard.description"
        :img="dashboard.img"
        :to="dashboard.to"
        :badges="dashboard.badges"
        class="mb-2 mr-2"
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
        title: 'Vue the Cart',
        subtitle:
          'Shopping cart demo site based on Flask API and Vue UI. Managed with docker.',
        description: '',
        repolink: '',
        img: 'cart',
        to: '/sideproject/cart',
        badges: [
          {
            title: 'Vue Stack',
            type: 'success'
          }
        ],
        show: true
      },
      dashboard: {
        title: 'Dashboard(Archived)',
        subtitle:
          'React Dashboard demo site, which integrates multiple section serving different proposes.',
        description: '',
        repolink: '',
        img: 'dashboard',
        to: '/sideproject/dashboard',
        badges: [
          {
            title: 'React Stack',
            type: 'info'
          }
        ],
        show: true
      },
      portfolio: {
        title: 'Nuxt the Portfolio',
        subtitle:
          'This very website that highlights my professions. Developed with SEO friendly Nuxt.js.',
        description: '',
        repolink: '',
        img: 'portfolio',
        to: '/sideproject/portfolio',
        badges: [
          {
            title: 'Nuxt',
            type: 'success'
          }
        ],
        show: true
      },
      breeder: {
        title: 'React the Breeder',
        subtitle:
          'A breeder info board build with react and redux integrated with 3rd party API with improvement on redux structure',
        description: '',
        repolink: '',
        img: 'breeder',
        to: '/sideproject/breeder',
        badges: [
          {
            title: 'Nuxt',
            type: 'success'
          }
        ],
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

.z-side-project-content {
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;

  @media (min-width: 576px) {
    padding: 30px;
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
