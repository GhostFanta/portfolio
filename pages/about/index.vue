<template>
  <div class="z-about container">
    <h1 class="z-title">About</h1>
    <h3 class="z-secondary-title">Professions</h3>
    <p class="z-body">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
      doloribus eos eveniet fugiat laborum laudantium minus nemo neque odit quod
      sunt suscipit? Aliquid assumenda eos est ipsa magni nisi sit!
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
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 60%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Intermediate
          </div>
        </div>
      </div>
      <div class="col-4">
        <span class="z-skill-name">Express: </span>
        <div class="progress">
          <div
            class="progress-bar bg-warning"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Beginner
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
  fetch({ store }) {
    store.dispatch('SET_SIDEPANEL_BACKGROUND', '#161815')
    store.dispatch('SET_SIDEPANEL_IMAGE', 'rocket')
  },
  components: {
    Footer
  }
}
</script>
<style lang="scss" scoped>
.z-bar {
}

.z-about {
  animation: 0.2s linear 0.3s both fadeInBottom;
}

.z-subtitle-professions {
  margin: 30px 0;
}

.z-subtitle-personal {
  margin: 30px 0;
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
