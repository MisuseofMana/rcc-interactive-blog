export const state = () => ({
    currentDir: undefined
  })
  
  export const mutations = {
    changeDir(state, payload) {
      state.currentDir = payload;
    }
  }