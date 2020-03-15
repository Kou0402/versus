<template>
  <main class="thread">
    <ThreadCard></ThreadCard>
    <PostCard side="left"></PostCard>
    <PostCard side="right"></PostCard>
    <PostCard side="left"></PostCard>
    <PostCard side="right"></PostCard>
    <PostCard side="left"></PostCard>
    <PostCard side="right"></PostCard>
    <PostForm></PostForm>
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
  }
}
</script>
