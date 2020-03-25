<template>
  <nuxt-link
    :to="{ name: 'thread-id', params: { id: threadId } }"
    class="thread-card"
  >
    <div class="card">
      <div class="card-content">
        <div class="columns is-mobile has-text-centered is-vcentered">
          <div class="column is-5">{{ theme1 }}</div>
          <div class="column is-2">
            <img class="vs" src="~/assets/images/vs.svg" />
          </div>
          <div class="column is-5">{{ theme2 }}</div>
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
    border: solid $main-color4 1px;
    .card-content {
      .vs {
        width: 70px;
      }
    }
  }
}
</style>
