<template>
  <div class="content">
    <div class="d-flex flex-row">
      <div class="content-img d-flex">
        <img
          class="content-img"
          src="https://picsum.photos/200"
          alt="thumbnail"
        />
      </div>
      <div class="desp d-flex flex-column v-center">
        <h3>{{ title }}</h3>
        <small>{{ description }}</small>
        <a :href="link" class="btn-navigate disabled">Go to the app</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SmallCard',
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    tags: { type: Array, default: () => {} },
    thumbnail: { type: String, default: '' },
    link: { type: String, default: '' }
  }
}
</script>
<style lang="scss" scoped>
@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}
.content {
  $shadow-color: rgba(2, 137, 255, 0.2);
  font-family: 'Raleway' sans-serif;
  max-width: 35rem;
  max-height: 30rem;
  min-height: 10rem;
  min-width: 15rem;
  border-radius: 2rem;
  border: none;
  -webkit-box-shadow: 10px 10px 42px -10px $shadow-color;
  -moz-box-shadow: 10px 10px 42px -10px $shadow-color;
  box-shadow: 10px 10px 42px -10px $shadow-color;
  z-index: 99;
  background: white;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 25px 0px shade($shadow-color, 20%);
  }

  .desp {
    font-family: 'Raleway', sans-serif;
  }

  .content-img {
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0.3rem;
    img {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
    }
  }
}

.d-flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}
.flex-column {
  flex-direction: column;
}

.h-center {
  justify-content: center;
}
.h-left {
  justify-content: center;
}

.v-center {
  align-items: center;
}

.btn-navigate {
  $btn-width: 25px !default;
  $btn-height: 80px !default;
  $btn-full: $btn-height + $btn-width !default;
  $btn-half: $btn-full/2 !default;
  $bg-color: #eeeeee !default;
  $btn-color: cyan;
  $btn-color-dark: shade($btn-color, 40%);
  color: tint($btn-color);
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  margin-top: 0.5rem;

  &:before {
    border-right: 50px solid transparent;
    border-bottom: $btn-height solid $btn-color-dark;
    transform: translateX(-100%);
  }

  &:hover {
    color: tint($btn-color, 75%);

    &:before {
      transform: translateX(0);
    }
  }
}

.disabled {
  pointer-events: none;
  color: #ccc;
}
</style>
