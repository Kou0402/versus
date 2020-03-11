<template>
  <article
    :class="{ 'left-side': isLeftSide, 'right-side': isRightSide }"
    class="post-card"
  >
    <section class="post-info">
      <div class="post-user-name">{{ postUserName }}</div>
      <div class="posted-date">{{ postedDate }}</div>
    </section>
    <section class="post-content">
      <p>{{ postContent }}</p>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    postUserName: {
      type: String,
      default: 'Vue太郎'
    },
    postedDate: {
      type: String,
      default: '2020-02-24 21:00'
    },
    postContent: {
      type: String,
      default: '公式の日本語ドキュメントがReactより充実していて困らない。'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  background-color: $main-color5;
  border-radius: 25px 25px 25px 25px;
  max-width: 70%;
  > .post-info {
    display: flex;
    > .post-user-name {
      font-size: 12px;
      color: $main-color2;
    }
    > .posted-date {
      font-size: 11px;
      color: $main-color3;
    }
  }
  > .post-content {
    font-size: 14px;
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
