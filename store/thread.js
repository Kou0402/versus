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
    const res = await axios.get('http://localhost:5000/threads')
    commit('pushThreads', res.data)
  },
  deleteThreads({ commit }) {
    commit('setThreads', [])
  }
}
