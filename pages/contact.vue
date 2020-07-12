<template>
  <main class="contact">
    <div class="title-area">
      <h2 class="title">お問い合わせ</h2>
    </div>
    <div class="message-area">
      <p>本サービスに対する</p>
      <p>ご意見・お問い合わせは</p>
      <p>こちらのアカウントより承っております。</p>
    </div>
    <a
      href="https://twitter.com/Versus0402"
      class="twitter-link"
      target="_blank"
    >
      <img class="contact-icon" src="~/assets/images/twitter.svg" />
    </a>
  </main>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .title-area {
    .title {
      margin: 50px 0;
      font-size: 1.4rem;
    }
  }
  .message-area {
    margin-bottom: 50px;
  }

  .twitter-link {
    .contact-icon {
      width: 60px;
    }
  }
}
</style>
