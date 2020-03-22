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
  async fetchPosts({ commit }, threadId) {
    const params = {
      threadId
    }
    const res = await axios
      .get('http://localhost:5000/posts', params)
      .catch((error) => console.error(error))

    res.data.forEach((post) => {
      const createdAt = post.createdDate + ' ' + post.createdTime
      post.createdAt = Date.parse(createdAt)
    })
    res.data.sort(function(a, b) {
      return a.createdAt > b.createdAt ? 1 : -1
    })

    commit('pushPosts', res.data)
  },

  async publishPost({ commit }, post) {
    await axios
      .post('http://localhost:5000/posts', post)
      .catch((error) => console.error(error))
    const posts = [post]
    commit('pushPosts', posts)
  }
}
