<template>
  <main class="thread">
    <ThreadCard
      :thread-id="thread.threadId"
      :theme1="thread.theme1"
      :theme2="thread.theme2"
    ></ThreadCard>
    <PostCard
      v-for="post in posts"
      :key="post.postId"
      :post-user-name="post.createdUserName"
      :created-at="post.createAt"
      :post-content="post.content"
      :side="post.side"
    ></PostCard>
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
