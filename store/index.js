import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
	selected_tab: '',
})

export const getters = {
	getField,
}

export const mutations = {
	UPDATE_SIDEBAR(state, payload) {
		state.selected_tab = payload
	},
	updateField,
}

export const actions = {
	async UpdateSideBar({ commit, dispatch }, payload) {
		await commit('UPDATE_SIDEBAR', payload)
	},
}
