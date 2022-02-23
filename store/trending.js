export const state = () => ({
    current_trending: []
})

export const mutations = {
    'SET_TRENDING' (state, data) {
        state.current_trending = data;
    }
}

export const getters = {
    current_trending_all (state) {
        return state.current_trending;
    }
}

export const actions = {
    async fetchTrending (context, params = { mediaType: 'all', time: 'week' }) {
        const res = await this.$axios.$get(`/trending/${params.mediaType}/${params.time}`);
    }
}