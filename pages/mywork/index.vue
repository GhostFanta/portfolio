<template>
  <div class="z-my-work">
    <h1 class="z-title">My Work</h1>
    <h4 class="z-subtitle">
      Below are some of previous works that I took an active part in.
    </h4>
    <div class="container"></div>
    <div class="row">
      <ProjectCard
        class="col-md-5 col-lg-5 mb-5 mr-2"
        :title="instagram_scheduler.title"
        :subtitle="instagram_scheduler.subtitle"
        :description="instagram_scheduler.description"
        :img="instagram_scheduler.img"
        :to="instagram_scheduler.to"
      />
      <ProjectCard
        class="col-md-5 col-lg-5 mb-5"
        :title="auth.title"
        :subtitle="auth.subtitle"
        :description="auth.description"
        :img="auth.img"
        :to="auth.to"
      />
    </div>
  </div>
</template>
<script>
import ProjectCard from '../../components/ProjectCard'
export default {
  data() {
    return {
      instagram_scheduler: {
        title: 'Instagram Scheduler',
        subtitle: 'Tool to schedule instagram feed posts strategically.',
        description: '',
        img: 'calendar',
        to: 'mywork/instagramscheduler'
      },
      auth: {
        title: 'Auth',
        subtitle: 'OAuth Service provider with customer info management.',
        description: '',
        img: 'oauth',
        to: 'mywork/auth'
      }
    }
  },
  components: {
    ProjectCard
  }
}
</script>
<style lang="scss" scoped>
.z-my-work {
  animation: 0.2s linear 0.3s both fadeInBottom;
}
</style>
