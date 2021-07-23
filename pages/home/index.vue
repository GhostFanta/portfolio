<template>
  <div class="z-home">
    <h1 class="z-title">Hi, I am Alex AI</h1>
    <div class="z-home-content">
      <p class="z-subtitle">A full stack developer</p>
      <p class="z-content">
        <strong>Full-stack software developer</strong> with plenty of experience
        working on SaaS products. Located in Toronto Area. Eager to create
        amazing stuffs.
      </p>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>
<style lang="scss" scoped>
.z-home {
  margin-left: 30px;
}
.z-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 5rem;
  margin: 30px 0 20px 0;
  animation: 0.3s linear 0.3s 1 both fadeInTop;
  @media (max-width: 576px) {
    font-size: 3rem;
  }
}

@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.z-home-content {
  animation: 0.3s linear 0.3s 1 both fadeInRight;
}

.z-subtitle {
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  margin: 30px 0 20px 0;
}
.z-content {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: #8e8e8e;
  line-height: 1.5;
  text-align: justify;
  text-justify: inter-word;
  padding: 10px 5px 10px 5px;
  max-width: 90%;
  word-break: break-all;
}

strong {
  font-weight: bold;
  color: #000;
}
</style>
