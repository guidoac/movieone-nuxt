import { mapGetters } from 'vuex';
import _ from 'lodash';

export default {
    computed: {
        ...mapGetters({
            genre_by_id: 'genres/genre_by_id',
            country_by_id: 'countries/country_by_id',
            current_tv_details: 'tv/current_tv_details'
        }),

        /**
         * Extract full genre object from media object with genres_ids
         * 
         * @param {*} media 
         * @returns {string}
         */
         $getGenre () {
            if (this.media && this.media.genre_ids?.length > 0) {
                let result = {}

                this.media.genre_ids.forEach(genre => {
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
        $getReleaseYear () {
            const date = new Date(this.media.first_air_date || this.media.release_date)

            return date.getFullYear();
        },

        /**
         * Extract country object from media object with origin_country
         * 
         * @param {} media 
         * @returns {object}
         */
        $getCountry () {
            if (this.media && this.media.origin_country) {
                return this.country_by_id(this.media.origin_country[0])
            } else {
                return '';
            }
        },

        $mediaPage () {
            if (this.media.type === 'tv') {
                return `/tv/${this.media.id}`
            } else {
                return `/movie/${this.media.id}`
            }
        }
    },

    methods: {
        async $getDetails (initial) {
            if (_.isArray(initial)) {
                const result = [];
                
                _.forEach(initial, async media => {
                    const res = await this.$store.dispatch('tv/fetchDetails', { id: media.id });
                    
                    result.push(res);
                });

                return result;
            } else {
                await this.$store.dispatch('tv/fetchDetails', { id: initial.id });
                    
                return this.current_tv_details;
            }
        },
    }
}