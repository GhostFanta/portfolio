<template>
  <div class="z-cart">
    <h1 class="z-title">Cart</h1>
    <span class="badge badge-success">Vue.js</span>
    <span class="badge badge-success">Vuex</span>
    <span class="badge badge-success">Vue-Router</span>
    <span class="badge badge-success">VeeValidate</span>
    <span class="badge badge-info">json-server</span>
    <span class="badge badge-dark">Flask</span>
    <span class="badge badge-primary">Docker</span>
    <span class="badge badge-info">Mysql</span>
    <span class="badge badge-success">Nginx</span>
    <h5 class="z-subtitle z-intro">
      Shopping cart is an excellent entry point for practicing shared features
      required by most of the web applications nowadays. This project is based
      on Vue and Flask, served with docker and nginx.
    </h5>
    <a href="https://shop-zc.netlify.com/"
      >Visit the demo(still under development)</a
    >
    <p>
      Use <strong>test@alex.me </strong>and <strong>123456</strong> to access.
    </p>
    <p>
      Use
    </p>
    <br />
    <a href="http://159.203.17.226:81/docs/">Check out the API Guide</a>
    <p>
      You can checkout the source code on
      <a href="https://github.com/GhostFanta/shop.vue.bootstrap">Github</a>
    </p>
    <img
      :srcset="require(`~/assets/images/shop_market.jpg`).srcSet"
      :width="430"
      :height="230"
      class="rounded float-left z-pic-primary"
    />
    <img
      :srcset="require(`~/assets/images/shop_home.jpg`).srcSet"
      :width="340"
      :height="230"
      class="rounded float-right z-pic-secondary"
    />
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.z-cart {
  animation: 0.2s linear 0.3s both fadeInBottom;
}
.z-pic-primary {
  z-index: -1;
  border: 2px solid black;
}

.z-pic-secondary {
  border: 2px solid black;
  position: absolute;
  margin-top: 150px;
  margin-left: -120px;
  z-index: 0;
}
</style>
