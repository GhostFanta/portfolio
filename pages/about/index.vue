<template>
  <div class="z-about container">
    <h1 class="z-title">About</h1>
    <h3 class="z-secondary-title">Professions</h3>
    <p class="z-body">
      I am a software developer with experiences working on several SaaS
      products including both front-end & bach-end stuffs, especially focused on
      building attractive UI stuffs and secured, easy-to-use RESTful API.
    </p>
    <h3 class="z-secondary-title">Skill Set</h3>
    <h4 class="z-tertiary-title">Framework</h4>
    <div class="row mb-4">
      <div class="col-4">
        <span class="z-skill-name">Vue Stack: </span>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Proficient
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">Flask: </span>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Proficient
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">Django: </span>
        <div class="progress">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 55%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Intermediate
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">React: </span>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Proficient
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">Node.js: </span>
        <div class="progress">
          <div
            class="progress-bar bg-blue"
            role="progressbar"
            style="width: 60%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Intermediate
          </div>
        </div>
      </div>
    </div>
    <h4 class="z-tertiary-title">Tools</h4>
    <div class="row">
      <div class="col-4">
        <span class="z-skill-name">Git: </span>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 90%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Proficient
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">Docker: </span>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 70%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Proficient
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">Celery: </span>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 70%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Proficient
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">Bootstrap: </span>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 80%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Proficient
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">Vim: </span>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 80%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Proficient
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">Mysql/Postgres: </span>
        <div class="progress">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 55%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Intermediate
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">CSS/SCSS: </span>
        <div class="progress">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 55%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Intermediate
          </div>
        </div>
      </div>
    </div>
    <h3 class="z-secondary-title">Personal</h3>
    <p class="z-body">
      When out of work, I prefer hiking &#127939;, enjoying music(Khalil Fong is
      the best!) or spending time with some furry friends &#128057;.
    </p>
    <Footer />
  </div>
</template>
<script>
import Footer from '../../components/Footer'
export default {
  components: {
    Footer
  }
  // fetch({ store }) {
  //   store.dispatch('SET_SIDEPANEL_BACKGROUND', '#161815')
  //   store.dispatch('SET_SIDEPANEL_IMAGE', 'rocket')
  // }
}
</script>
<style lang="scss" scoped>
.z-body {
  font-size: 1rem;
}

.z-about {
  animation: 0.2s linear 0.3s both fadeInBottom;
}

.z-subtitle-professions {
  margin: 10px 0;
}

.z-subtitle-personal {
  margin: 10px 0;
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

.progress-bar {
  transition: width 1s ease;
}
.z-skill-name {
  font-family: 'Montserrat', sans-serif;
}
</style>
