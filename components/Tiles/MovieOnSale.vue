<template>
    <div class="cursor-pointer p-3 rounded-3xl transition-all tile">
        <div class="img-wrapper position-relative">
            <no-ssr>
                <img
                    class="rounded-3xl"
                    :src="`${$backdrop_url}${media.poster_path}`"
                />
            </no-ssr>

        </div>

        <div class="d-flex flex-column justify-content-between meta-info-wrapper">
            <div class="mt-4 w-100">
                <div class="d-flex flex-row justify-content-between">
                    <h6 class="text-white fw-bold me-2 h7">
                        {{ media.title || media.original_name }}
                    </h6>
                </div>

                <div class="d-flex flex-row text-tertiary justify-content-between h7">
                    <p class="fw-bold">
                        {{ $getGenre }}
                    </p>

                    <p class="">
                        {{ $getReleaseYear }}
                    </p>
                </div>
            </div>

            <div class="d-flex flex-row justify-content-between align-items-center">
                <RatingWidget
                    class="w-50"
                    :rating="media.vote_average"
                />

                <div class="w-50 text-end">
                    <p class="text-tertiary text-decoration-line-through text-end fw-bold h8 mb-0">
                        {{ randomPrice | price }}
                    </p>
                    <p class="text-white text-end fw-bold h7 mb-0">
                        {{ randomPrice | price }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import RatingWidget from '~/components/RatingWidget';

    export default {
        name: 'MediaSelected',

        components: {
            RatingWidget
        },

        props: {
            media: {
                type: Object,
                required: true
            }
        },

        data () {
            return {
                itemHovered: false
            }
        },

        computed: {
            ...mapGetters({
                current_tv_details: 'tv/current_tv_details'
            }),
            
            randomWatchedEpisode () {
                const randomSeason = this.$utils.random(1, this.current_tv_details.number_of_seasons);
                const randomEpisode = this.$utils.random(1, this.current_tv_details.number_of_episodes);

                return `Season ${randomSeason} Episode ${randomEpisode}`;
            },

            randomPrice () {
                return this.$utils.random(1, 100);
            }
        },

        mounted () {
            if (this.media.type === 'tv') {
                this.$store.dispatch('tv/fetchDetails', { id: this.media.id })
            }
        }
    }
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    transition: all .3s ease;
}

.tile {
    transition: all .3s ease;

    &:hover {
        background: #202020 !important;

        & img {
            transform: scale(1.1)
        }
    }
}

.meta-info-wrapper {
    height: 150px;
}
</style>