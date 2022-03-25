export const state = () => ({
    genres_movie: [],
    genres_tv: [],
})

export const mutations = {
    'SET_GENRES_MOVIE' (state, data) {
        state.genres_movie = data;
    },

    'SET_GENRES_TV' (state, data) {
        state.genres_tv = data;
    }
}

export const getters = {
    genres_all: (state) => {
        return state.genres_movie.concat(state.genres_tv);
    },

    genre_by_id: (state, getters) => (id) => {
        if (getters.genres_all && id) {
            const chosen = getters.genres_all.find(genre => genre.id === id);
    
            return chosen;
        } else {
            return null;
        }
    }
}

export const actions = {
    async fetchGenres ({ commit }) {
        const genresMovie = await this.$axios.$get('/genre/movie/list');
        const genresTV = await this.$axios.$get('/genre/tv/list');

        commit('SET_GENRES_MOVIE', genresMovie.genres);
        commit('SET_GENRES_TV', genresTV.genres);
    }
}