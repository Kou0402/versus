<template>
  <main>
    <Hero></Hero>
    <ThreadCard
      v-for="thread in threads"
      :key="thread.threadId"
      :thread-id="thread.threadId"
      :theme1="thread.theme1"
      :theme2="thread.theme2"
    ></ThreadCard>
  </main>
</template>

<script>
import Hero from '~/components/organisms/hero.vue'
import ThreadCard from '~/components/molecules/thread-card.vue'
export default {
  components: {
    Hero,
    ThreadCard
  },
  async fetch({ store }) {
    await store.dispatch('thread/fetchThreads')
  },
  computed: {
    threads() {
      return this.$store.getters['thread/threads']
    }
  },
  beforeDestroy() {
    this.$store.dispatch('thread/deleteThreads')
  }
}
</script>
