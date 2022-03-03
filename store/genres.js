export const state = () => ({
    genres: []
})

export const mutations = {
    'SET_GENRES' (state, data) {
        state.genres = data;
    }
}

export const getters = {
    genres_all: (state) => {
        return state.genres;
    },

    genre_by_id: (state) => (id) => {
        if (state.genres && id) {
            const chosen = state.genres.find(genre => genre.id === id);
    
            return chosen;
        } else {
            return null;
        }
    }
}

export const actions = {
    async fetchGenres ({ commit }) {
        const res = await this.$axios.$get('/genre/movie/list');

        commit('SET_GENRES', res.genres);
    }
}