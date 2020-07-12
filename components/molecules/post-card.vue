<template>
  <article
    :class="{ 'left-side': isLeftSide, 'right-side': isRightSide }"
    class="post-card"
  >
    <section class="post-info">
      <div class="post-user-name">{{ postUserName }}</div>
      <div class="created-at">{{ createdAt }}</div>
    </section>
    <section class="post-content">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="$sanitize(formatedPostContent)"></p>
    </section>
  </article>
</template>

<script>
import Vue from 'vue'
import sanitizeHTML from 'sanitize-html'

Vue.prototype.$sanitize = sanitizeHTML

export default {
  props: {
    postUserName: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    },
    postContent: {
      type: String,
      default: ''
    },
    side: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    isLeftSide() {
      return this.side === 'left'
    },
    isRightSide() {
      return this.side === 'right'
    },
    formatedPostContent() {
      return this.postContent.replace(/\n/g, '<br />')
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  background-color: $main-color5;
  border-radius: 18px 18px 18px 18px;
  padding: 6px 14px;
  max-width: 70%;
  > .post-info {
    display: flex;
    > .post-user-name {
      line-height: 16px;
      font-size: 12px;
      color: $main-color2;
    }
    > .created-at {
      margin: 0 6px;
      font-size: 11px;
      color: $main-color3;
    }
  }
  > .post-content {
    font-size: 14px;
    width: auto;
  }
}
.left-side {
}
.right-side {
  margin-left: auto;
  > .post-info {
    flex-direction: row-reverse;
  }
}
</style>
