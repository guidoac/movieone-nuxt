export const state = () => ({
    countries: []
})

export const mutations = {
    'SET_COUNTRIES' (state, data) {
        state.countries = data;
    }
}

export const getters = {
    countries_all: (state) => {
        return state.countries;
    },

    country_by_id: (state) => (id) => {
        if (state.countries && id) {
            const chosen = state.countries.find(country => country.iso_3166_1 === id);
    
            return chosen;
        } else {
            return null;
        }
    }
}

export const actions = {
    async fetchCountries ({ commit }) {
        const res = await this.$axios.$get('/configuration/countries');

        commit('SET_COUNTRIES', res);
    }
}