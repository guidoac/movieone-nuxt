export const state = () => ({
    current_details: {}
})

export const mutations = {
    'SET_DETAILS' (state, data) {
        state.current_details = data;
    }
}

export const getters = {
    current_movie_details: (state) => {
        return state.current_details;
    },
}

export const actions = {
    async fetchDetails ({ commit }, params) {
        const res = await this.$axios.$get(`/movie/${params.id}`);

        commit('SET_DETAILS', res);

        return res;
    }
}