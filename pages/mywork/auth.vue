<template>
  <div class="z-auth">
    <h1 class="z-title">Auth</h1>
    <h5 class="z-subtitle z-intro">
      <p>
        <strong>Auth</strong> is an
        <strong>internal microservice</strong> providing authentication support
        to frontend requests, and it also provide RESTful endpoints to support
        customer success representatives handing user profile information.
      </p>
      <p class="z-body">
        For this project, I designed and implemented schema, RESTful endpoints
        and UI for managing customer success representatives. Besides, I
        implemented celery tasks for clearing out inactive temporary users and
        social media connection notification emails. I also improved the
        authentication decorator in each microservice so they can handle
        response from auth service better...
      </p>
      <img
        :srcset="require(`~/assets/images/oauthlogo.jpg`).srcSet"
        :width="270"
        :height="270"
        class="rounded float-left z-pic-primary"
      />
      <img
        :srcset="require(`~/assets/images/oauthflow.jpg`).srcSet"
        :width="340"
        :height="230"
        class="rounded float-right z-pic-secondary"
      />
    </h5>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.z-auth {
  animation: 0.2s linear 0.3s both fadeInBottom;
}

.z-body {
  color: #000;
}

strong {
  color: #000;
}

.z-pic-primary {
  z-index: -1;
}

.z-pic-secondary {
  position: absolute;
  margin-top: 220px;
  margin-left: -50px;
  z-index: 0;
}
</style>
