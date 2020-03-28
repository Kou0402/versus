<template>
  <main class="thread">
    <ThreadCard
      :thread-id="thread.threadId"
      :theme1="thread.theme1"
      :theme2="thread.theme2"
    ></ThreadCard>
    <section class="content-area">
      <PostCard
        v-for="post in posts"
        :key="post.postId"
        :post-user-name="post.createdUserName"
        :created-at="post.createdAt"
        :post-content="post.content"
        :side="post.side"
      ></PostCard>
    </section>
    <PostForm
      :theme1="thread.theme1"
      :theme2="thread.theme2"
      :thread-id="thread.threadId"
    >
    </PostForm>
  </main>
</template>

<script>
import ThreadCard from '~/components/molecules/thread-card.vue'
import PostCard from '~/components/molecules/post-card.vue'
import PostForm from '~/components/molecules/post-form.vue'

export default {
  components: {
    ThreadCard,
    PostCard,
    PostForm
  },
  data() {
    return {
      thread: {
        threadId: '',
        theme1: '',
        theme2: ''
      },
      posts: []
    }
  },
  async created() {
    await this.$store.dispatch('threads/fetchThread', this.$route.params.id)
    const threads = this.$store.getters['threads/threads']
    this.thread = threads[0]

    await this.$store.dispatch('posts/fetchPosts', threads[0].threadId)
    this.posts = this.$store.getters['posts/posts']
  }
}
</script>

<style lang="scss" scoped>
.thread {
  margin: 15px 0 0 0;
  .content-area {
    margin: 15px 0 0 0;
    padding-bottom: 14vh;
    .post-card {
      margin-bottom: 12px;
    }
    .post-card.left-side {
      margin-left: 12px;
    }
    .post-card.right-side {
      margin-right: 12px;
    }
  }
}
</style>
