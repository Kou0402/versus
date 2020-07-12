<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          比較コミュニケーションサイト
        </h1>
        <h2 class="subtitle">
          <span class="line-group">二つのテーマを持ち寄って</span>
          <span class="line-group">意見をぶつけ合おう！</span>
        </h2>
        <nuxt-link class="button is-primary" to="thread-create">
          スレッドを作成する
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url('~@/assets/images/fire.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.9);
  background-blend-mode: lighten;

  .title {
    font-size: 20px;
  }

  .subtitle {
    font-size: 18px;
  }
}
</style>
