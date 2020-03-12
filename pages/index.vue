<template>
  <main>
    <Hero></Hero>
    <ThreadCard></ThreadCard>
    <ThreadCard></ThreadCard>
    <ThreadCard></ThreadCard>
    <ThreadCard></ThreadCard>
    <ThreadCard></ThreadCard>
  </main>
</template>

<script>
import Hero from '~/components/organisms/hero.vue'
import ThreadCard from '~/components/molecules/thread-card.vue'
export default {
  components: {
    Hero,
    ThreadCard
  }
}
</script>
