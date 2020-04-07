<template>
  <main class="about">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Enjoy comparison communication!</h1>
          <h2 class="subtitle">
            <span class="line-group"
              >Versus（バーサス）はエンジニアのための</span
            >
            <span class="line-group">比較コミュニケーションサービスです。</span>
          </h2>
        </div>
      </div>
    </section>
    <section class="message-area">
      <p>
        Versusは「比較」を通して、エンジニアリングを楽しむ一つの手段となることを目的としています。
        根拠のない誹謗中傷、差別的発言は禁止しています。
        様々な意見を尊重し、楽しく利用しましょう。
      </p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.about {
  .hero {
    background-image: url('~@/assets/images/fire.svg');
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
    background-color: rgba(255, 255, 255, 0.9);
    background-blend-mode: lighten;

    .hero-body {
      .title {
        font-size: 20px;
      }

      .subtitle {
        margin-top: 35px;
        font-size: 14px;
      }
    }
  }
  .message-area {
    padding: 0 5%;
    margin-top: 40px;
    font-size: 0.9rem;
  }
}
</style>
