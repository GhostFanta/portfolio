<template>
  <div>
    <div class="card">
      <img
        :srcset="require(`~/assets/images/${img}.jpg`).srcSet"
        class="img-fluid rounded"
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
$card-height: 300px;
$h-color: #9cc9e3;
$shadow-color: rgba(2, 137, 255, 0.2);
@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}
.card {
  border: none;
  margin: 5px;
  border-radius: 1rem;
  padding: 10px;
  background: white;
  -webkit-box-shadow: 10px 10px 42px -10px $shadow-color;
  -moz-box-shadow: 10px 10px 42px -10px $shadow-color;
  box-shadow: 10px 10px 42px -10px $shadow-color;
  height: $card-height;
  width: $card-width;
  word-break: break-word;
  transition: box-shadow 0.3s ease-in-out;
  .card-title-wrapper {
    display: flex;
  }
  &:hover {
    box-shadow: 5px 5px 25px 0px shade($shadow-color, 20%);
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

.rounded {
  border-radius: 5rem;
}
</style>
