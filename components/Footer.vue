<template>
  <div class="z-footer">
    <br />
    <nuxt-link to="/contact"><small>Get in touch with me :)</small></nuxt-link>
    <ul class="z-connection">
      <li>
        <a href="https://github.com/GhostFanta">
          <span>
            <svg-icon
              name="github"
              width="32px"
              height="32px"
              color="black"
            />Github</span
          ></a
        >
      </li>
      <li>
        <a href="https://ca.linkedin.com/in/zichu-ai-184554121"
          ><span>
            <svg-icon
              name="linkedin"
              width="32px"
              height="32px"
              color="black"
            ></svg-icon>
            Linkedin</span
          ></a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
br {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 10px solid rgba(0, 0, 0, 0.1);
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

.z-footer {
  animation: 0.3s linear 0.3s both fadeInBottom;
  animation-delay: 0.2s;
}

.z-footer small {
  color: #408bb5;
}

.z-connection {
  display: flex;
}

.z-connection a {
  margin: 0 20px 0 20px;
}

.z-connection a:first-child {
  margin: 0 20px 0 0;
}

a {
  text-decoration: none;
  color: #8e8e8e;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px 0 0;
  }
}
</style>
