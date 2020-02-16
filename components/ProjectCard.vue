<template>
  <div>
    <div class="card">
      <img
        :srcset="require(`~/assets/images/${img}.jpg`).srcSet"
        class="img-fluid"
      />
      <div class="card-content d-flex flex-column">
        <div
          class="d-flex flex-column justify-content-center align-items-left p-2"
        >
          <h5>{{ title }}</h5>
          <small>{{ subtitle }}</small>
          <small class="card-text mb-1">
            {{ description }}
          </small>
          <nuxt-link :to="to" class="btn btn-block btn-bottom"
            >View Detail</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    description: { type: String, default: '' },
    img: { type: String, default: '404' },
    repolink: { type: String, default: '' },
    to: { type: String, default: 'home' },
    badges: { type: Array, default: () => [] }
  }
}
</script>
<style lang="scss" scoped>
$card-width: 260px;
$card-height: 310px;
$h-color: #9cc9e3;

.card {
  border: none;
  margin: 10px;
  padding: 10px;
  background: transparent;
  box-shadow: 2px 2px 10px 0px rgba(46, 61, 73, 0.2);
  height: $card-height;
  width: $card-width;
  word-break: break-word;
  .card-title-wrapper {
    display: flex;
  }
  &:hover {
    box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
  }

  .btn {
    border-radius: 0;
  }

  .card-content {
    .btn-bottom {
      margin-bottom: auto;
      margin-top: auto !important;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
