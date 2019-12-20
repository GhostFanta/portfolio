export const state = () => ({
  sidepanelBackgroundColor: 'black',
  sidepanelBackgroundImage: 'flower'
})

export const mutations = {
  SET_SIDEPANEL_BACKGROUND(state, color) {
    state.sidepanelBackgroundColor = color
  },
  SET_SIDEPANEL_IMAGE(state, image) {
    state.sidepanelBackgroundImage = image
  }
}

export const actions = {
  setSidepanelBackground({ commit }, color) {
    commit('SET_SIDEPANEL_BACKGROUND', color)
  },
  setSidepanelImage({ commit }, image) {
    commit('SET_SIDEPANEL_IMAGE', image)
  }
}
