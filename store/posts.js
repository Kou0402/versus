import axios from 'axios'

export const state = () => ({
  posts: []
})

export const getters = {
  posts: (state) => state.posts
}

export const mutations = {
  pushPosts(state, posts) {
    posts.forEach((post) => state.posts.push(post))
  }
}

export const actions = {
  async publishPost({ commit }, post) {
    await axios
      .post('http://localhost:5000/posts', post)
      .catch((error) => console.error(error))
  }
}
