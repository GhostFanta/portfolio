<template>
  <div class="z-contact">
    <h1 class="z-title">Contact</h1>
    <h3 class="z-subtitle">Something creative in your mind?</h3>
    <!-- <h3 class="z-invitation" href="">Let's build it together!</h3> -->
    <!-- <a class="z-contact-email" href="mailto: azc.aizichu@gmail.com"
      >Mail me at azc.aizichu@gmail.com</a
    > -->
    <Footer />
    <script
      type="text/javascript"
      src="//rf.revolvermaps.com/0/0/1.js?i=5xt06zfqta1&amp;s=220&amp;m=0&amp;v=false&amp;r=false&amp;b=000000&amp;n=false&amp;c=ff007e"
      async="async"
    ></script>
  </div>
</template>
<script>
import Footer from '../../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>
<style lang="scss" scoped>
.z-contact {
  animation: 0.2s linear 0.3s both fadeInBottom;

  a {
    display: block;
  }

  .z-contact-email {
    margin: 20px 0 0 0;
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
