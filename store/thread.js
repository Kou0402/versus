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
  async fetchThreads({ commit }) {
    const res = await axios
      .get('http://localhost:5000/threads')
      .catch((error) => console.error(error))
    commit('pushThreads', res.data)
  },

  async publishThread({ commit }, thread) {
    const threadId = await axios
      .post('http://localhost:5000/threads', thread)
      .catch((error) => console.error(error))
    thread.threadId = threadId
    const threads = [thread]
    commit('pushThreads', threads)
  },

  deleteThreads({ commit }) {
    commit('setThreads', [])
  }
}
