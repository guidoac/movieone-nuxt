import _ from 'lodash';

export const state = () => ({
    discover_tv: [],
    discover_movie: [],
})

export const mutations = {
    'SET_DISCOVER_TV' (state, data) {
        state.discover_tv = data;
    },

    'SET_DISCOVER_MOVIE' (state, data) {
        state.discover_movie = data;
    },
}

export const getters = {
    discover_all (state) {
        return state.discover_movie.concat(state.discover_tv);
    },

    random_discover_all: (state, getters) => limit => {
        if (limit) {
            return _.sampleSize(getters.discover_all, limit)
        } else {
            return _.sample(getters.discover_all);
        } 
    },

    discover_tv: (state, getters) => {
        return state.discover_tv;
    },

    random_discover_tv: (state, getters) => (limit) => {
        if (limit) {
            return _.sampleSize(getters.discover_tv, limit)
        } else {
            return _.sample(getters.discover_tv);
        }     
    },

    discover_movie: (state, getters) => {
        return state.discover_movie;
    },

    random_discover_movie: (state, getters) => (limit) => {
        if (limit) {
            return _.sampleSize(getters.discover_movie, limit)
        } else {
            return _.sample(getters.discover_movie);
        }     
    },
}

export const actions = {
    async fetchDiscoverMovie ({ commit, state }) {
        const params = {
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            page: _.random(1, 10),
            with_watch_monetization_types: 'flatrate'
        };

        const res = await this.$axios.$get('/discover/movie', { params });

        const final = _.map(res.results, (media) => { 
            return _.extend({}, media, { type: 'movie' });
        });

        commit('SET_DISCOVER_MOVIE', final);
    },

    async fetchDiscoverTV ({ commit, state }) {
        const params = {
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            page: _.random(1, 10),
            with_watch_monetization_types: 'flatrate'
        };

        const res = await this.$axios.$get('/discover/tv', { params });

        const final = _.map(res.results, (media) => { 
            return _.extend({}, media, { type: 'tv' });
        });

        commit('SET_DISCOVER_TV', final);
    }
}