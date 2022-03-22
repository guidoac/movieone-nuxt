import _ from 'lodash';

export const state = () => ({
    current_trending: [],
    random_trending: {}
})

export const mutations = {
    'SET_TRENDING' (state, data) {
        state.current_trending = data;
    },

    'SET_RANDOM_TRENDING' (state, data) {
        state.random_trending = data;
    }
}

export const getters = {
    current_trending_all (state) {
        return state.current_trending;
    },

    random_trending (state) {
        return state.random_trending;
    },

    random_trending_limit: (state, getters) => limit => {
        if (limit) {
            return _.sampleSize(getters.current_trending_all, limit)
        } else {
            return _.sample(getters.current_trending_all);
        }
        
    }
}

export const actions = {
    async fetchTrending ({ commit, state }, params = { mediaType: 'all', time: 'week' }) {
        const res = await this.$axios.$get(`/trending/${params.mediaType}/${params.time}`);
        const chosen = _.sample(res.results);

        commit('SET_TRENDING', res.results);
        commit('SET_RANDOM_TRENDING', chosen);
    }
}