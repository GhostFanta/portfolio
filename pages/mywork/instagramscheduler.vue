<template>
  <div class="z-instagram-scheduler container">
    <h1 class="z-title">Instagram Scheduler</h1>
    <h5 class="z-subtitle z-intro">
      <p>
        Instagram has been a growing platform where brands are looking for
        opportunities for market expansion. The objective of
        <strong>Instagram Scheduler</strong>
        is to help those brands schedule and publish feed posts strategically in
        order to attract more potential customers to their sites.
      </p>
      <p class="z-body">
        For this project, I implement detailed <b>error handling</b> module to
        provent the client from doing wrong operation. Besides, I adjusted some
        shared front-end components so the look <b>consistent</b> across
        different places on the platform.
      </p>
      <img
        :srcset="require(`~/assets/images/scheduler.jpg`).srcSet"
        :width="350"
        :height="350"
        class="rounded float-left z-pic-primary"
      />
      <img
        :srcset="require(`~/assets/images/scheduler_2.jpg`).srcSet"
        :width="350"
        :height="250"
        class="rounded float-right z-pic-secondary"
      />
    </h5>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.z-instagram-scheduler {
  animation: 0.2s linear 0.3s both fadeInBottom;
}
strong {
  color: #000;
}
.z-body {
  color: #000;
}

.z-pic-primary {
  z-index: -1;
}

.z-pic-secondary {
  position: absolute;
  margin-top: 150px;
  margin-left: -40px;
  z-index: 0;
}
</style>
