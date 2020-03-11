<template>
  <section class="post-form">
    <div class="form-area">
      <div class="columns is-mobile select-area">
        <div class="column is-5 is-offset-1">
          <button class="button is-small is-fullwidth">Vue.js</button>
        </div>
        <div class="column is-5 input-area">
          <button class="button is-small is-fullwidth">Vue.js</button>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-8 is-offset-1">
          <input class="input is-small" type="text" />
        </div>
        <div class="column is-2">
          <img src="~/assets/images/right-arrow.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.post-form {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 12%;
  background-color: $main-color4;
  > .form-area {
    > .select-area {
      margin-top: 0;
      margin-bottom: 0;
      > .column {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    > .input-area {
      margin-top: 0;
      > .column {
        padding-top: 0;
      }
    }
  }
}
</style>
