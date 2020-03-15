<template>
  <nuxt-link
    :to="{ name: 'thread-id', params: { id: threadId } }"
    class="thread-card"
  >
    <div class="card">
      <div class="card-content">
        <div class="level is-mobile">
          <div class="level-item">{{ theme1 }}</div>
          <img class="level-item vs" src="~/assets/images/vs.svg" />
          <div class="level-item">{{ theme2 }}</div>
        </div>
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
  .card {
    .card-content {
      .level {
        .vs {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>
