import axios from 'axios'

export const state = () => ({
  threads: []
})

export const getters = {
  threads: (state) => state.threads
}

export const mutations = {
  pushThreads(state, threads) {
    threads.forEach((thread) => state.threads.push(thread))
  },

  setThreads(state, threads) {
    state.threads = threads
  }
}

export const actions = {
  async fetchThreads({ commit }, threadId) {
    threadId = threadId || ''
    const res = await axios
      .get('https://api.versus-web.net/threads/' + threadId)
      .catch((error) => console.error(error))
    commit('pushThreads', res.data)
  },

  async publishThread({ commit }, thread) {
    await axios
      .post('https://api.versus-web.net/threads', thread)
      .catch((error) => console.error(error))
    const threads = [thread]
    commit('pushThreads', threads)
  },

  deleteThreads({ commit }) {
    commit('setThreads', [])
  }
}
