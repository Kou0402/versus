import axios from 'axios'
import dayjs from 'dayjs'

export const state = () => ({
  posts: []
})

export const getters = {
  posts: (state) => state.posts
}

export const mutations = {
  pushPosts(state, posts) {
    posts.forEach((post) => state.posts.push(post))
  },

  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async fetchPosts({ commit }, threadId) {
    const params = {
      threadId
    }
    const res = await axios
      .get('https://api.versus-web.net/posts', { params })
      .catch((error) => console.error(error))

    res.data.forEach((post) => {
      const createdAt = post.createdDate + ' ' + post.createdTime
      post.createdAt = Date.parse(createdAt.replace(/-/g, '/'))
    })
    res.data.sort(function(a, b) {
      return a.createdAt > b.createdAt ? 1 : -1
    })

    res.data.forEach((post) => {
      post.createdAt = dayjs(post.createdAt).format('YYYY/MM/DD HH:mm:ss')
    })

    commit('pushPosts', res.data)
  },

  async publishPost({ commit }, post) {
    await axios
      .post('https://api.versus-web.net/posts', post)
      .catch((error) => console.error(error))
    const posts = [post]
    commit('pushPosts', posts)
  },

  deletePosts({ commit }) {
    commit('setPosts', [])
  }
}
