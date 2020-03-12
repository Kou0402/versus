<template>
  <main>
    <div class="columns is-mobile">
      <div class="column is-10 is-offset-1 has-text-centered">
        <h2 class="has-text-centered">二つのテーマを決めよう！</h2>
        <div class="field">
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>
        <img class="field vs" src="~/assets/images/vs.svg" />
        <div class="field">
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>
        <h2 class="has-text-centered">
          あなたの立ち位置から意見を書き込もう！
        </h2>
        <div class="">
          <button class="button is-flex">Vue</button>
          <button class="button is-flex">React</button>
        </div>
        <textarea class="textarea"></textarea>
        <button class="button">スレッドを作成する</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.vs {
  width: 30px;
  height: 30px;
  margin-top: 5px;
}
</style>
