export const state = () => ({
  currentMusic: '',
})

export const mutations = {
  CHANGE_MUSIC(state, payload) {
    state.currentMusic = payload
  }
}