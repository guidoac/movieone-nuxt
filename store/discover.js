export const state = () => ({
    current_discover: []
})

export const mutations = {
    'SET_DISCOVER' (state, data) {
        state.current_discover = data;
    },
}

export const getters = {
    current_discover_all (state) {
        return state.current_discover;
    },

    current_discover_limit: (state) => (limit) => {
        return state.current_discover.slice(0, limit);
    },
}

export const actions = {
    async fetchDiscover ({ commit, state }) {
        const params = {
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            page: 1,
            with_watch_monetization_types: 'flatrate'
        };

        const res = await this.$axios.$get('/discover/movie', { params });

        commit('SET_DISCOVER', res.results);
    }
}