<template>
  <nav class="navbar header" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img class="logo" src="~/assets/images/fire.svg" />
        Versus
      </nuxt-link>
      <a
        v-click-outside="hide"
        :class="{ 'is-active': isOpen }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        role="button"
        class="navbar-burger burger"
        @click="isOpen = !isOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      :class="{ 'is-active': isOpen }"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">
          ホーム
        </nuxt-link>
        <nuxt-link to="thread-create" class="navbar-item">
          スレッド作成
        </nuxt-link>
        <nuxt-link to="about" class="navbar-item">
          Versusについて
        </nuxt-link>
        <nuxt-link to="contact" class="navbar-item">
          お問い合わせ
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    hide() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: solid $main-color1 2px;
  .navbar-brand {
    .navbar-item {
      .logo {
        width: 28px;
        height: 28px;
      }
    }
  }
  .navbar-menu.is-active {
    position: absolute;
    width: 100%;
  }
}
</style>
