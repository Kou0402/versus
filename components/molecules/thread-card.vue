<template>
  <nuxt-link
    :to="{ name: 'thread-id', params: { id: threadId } }"
    class="thread-card"
  >
    <div class="card-container">
      <div class="wrapper">
        <p>{{ theme1 }}</p>
      </div>
      <div class="wrapper center">
        <img class="icon" src="~/assets/images/vs.svg" />
      </div>
      <div class="wrapper">
        <p>{{ theme2 }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    threadId: {
      type: String,
      required: true
    },
    theme1: {
      type: String,
      required: true
    },
    theme2: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.thread-card {
  font-size: 16px;
  @media screen and (min-width: 960px) {
  }
  .card-container {
    display: flex;
    justify-content: space-around;
    border: solid $main-color4 1px;
    height: 100px;
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
      word-wrap: break-word;
      text-align: center;
      p {
        // 親が Flex の場合の折り返し対応
        min-width: 0;
      }
      &.center {
        width: 20%;
      }
    }
    .icon {
      vertical-align: middle;
      height: 35px;
      width: 35px;
    }
  }
}
</style>
