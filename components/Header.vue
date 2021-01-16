<template>
  <div class="z-header">
    <nav class="z-nav row">
      <li>
        <nuxt-link class="z-nav-item" to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link class="z-nav-item" to="/about">About</nuxt-link>
      </li>
      <!--      <li>-->
      <!--        <nuxt-link class="z-nav-item" to="/mywork">My Work</nuxt-link>-->
      <!--      </li>-->
      <li>
        <nuxt-link class="z-nav-item" to="/sideproject">Side Project</nuxt-link>
      </li>
      <li>
        <nuxt-link class="z-nav-item" to="/contact">Contact</nuxt-link>
      </li>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
@import '../assets/scss/constants';
.z-header {
  display: flex;
  flex: none;
  width: 100%;
  min-height: 13px;
  max-height: 50px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 30px 0 60px 0;
  box-sizing: border-box;
  animation: appear 0.5s linear forwards;
  z-index: 5;
  .z-nav {
    ul {
      display: flex;
    }

    & > ul > li {
      opacity: 0;
      list-style: none;
      margin: 0 10px;
      @media (max-width: 576px) {
        a {
          font-size: 15px;
        }
      }
    }

    &:nth-child(0) {
      animation-delay: 0.5s;
    }
    &:nth-child(1) {
      animation-delay: 1s;
    }
    &:nth-child(2) {
      animation-delay: 1.5s;
    }
    &:nth-child(3) {
      animation-delay: 2s;
    }
    &:nth-child(4) {
      animation-delay: 2.5s;
    }
  }
  .z-nav-item {
    font-family: 'Raleway', sans-serif;
    color: $default;
    font-size: 1.3rem;
    margin: 0 16px;
    text-decoration: none;
  }

  .z-nav-item:hover {
    color: $dark-default;
  }

  .z-nav-item--active {
    color: $dark-default;
  }

  .row {
    list-style: none;
  }
}

@keyframes appear {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
