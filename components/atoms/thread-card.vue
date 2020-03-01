<template>
  <nuxt-link to="/" class="thread-card">
    <div class="card">
      <div class="card-content">
        <div class="level is-mobile">
          <div class="level-item">Vue</div>
          <img class="level-item vs" src="~/assets/images/vs.svg" />
          <div class="level-item">React</div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

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
