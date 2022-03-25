import { mapGetters } from 'vuex';

import _ from 'lodash';

export default {
    computed: {
        ...mapGetters({
            genre_by_id: 'genres/genre_by_id',
            country_by_id: 'countries/country_by_id',
            current_tv_details: 'tv/current_tv_details'
        })
    },

    methods: {

        /**
         * Extract full genre object from media object with genres_ids
         * 
         * @param {*} media 
         * @returns {string}
         */
        getGenre (media) {
            if (media && media.genre_ids?.length > 0) {
                let result = {}

                media.genre_ids.forEach(genre => {
                    if (this.genre_by_id(genre)) {
                        result = this.genre_by_id(genre)
                    }
                });

                return result.name;
            } else {
                return ''
            }
        },

        /**
         * Extract release year from media object with relase_date
         * 
         * @param {*} media 
         * @returns {string}
         */
        getReleaseYear (media) {
            const date = new Date(media.first_air_date || media.release_date)

            return date.getFullYear();
        },

        /**
         * Extract country object from media object with origin_country
         * 
         * @param {} media 
         * @returns {object}
         */
        getCountry (media) {
            if (media && media.origin_country) {
                return this.country_by_id(media.origin_country[0])
            } else {
                return '';
            }
        },

        async getDetails (initial) {
            if (_.isArray(initial)) {
                const result = _.forEach(initial, async media => {
                    const res = await this.$store.dispatch('tv/fetchDetails', { id: media.id });
                    
                    return res;
                });

                return result;
            } else {
                await this.$store.dispatch('tv/fetchDetails', { id: initial.id });
                    
                return this.current_tv_details;
            }
        }
    }
}