<template>
    <div
        class="pt-2"
        @mouseover="itemHovered = true"
        @mouseleave="itemHovered = false"
    >
        <template v-if="itemHovered">
            <div class="p-3 bg-white rounded-3xl transition-all">
                <no-ssr>
                    <img
                        class="rounded-3xl"
                        :src="`${$backdrop_url}${media.poster_path}`"
                    />
                </no-ssr>
                <div class="z-5 mt-4 w-100">
                    <div class="d-flex flex-row w-100 justify-content-between">
                        <h7 class="text-black font-weight-bold">
                            {{ media.title || media.original_name }}
                        </h7>
                        <h5 class="text-black font-weight-bold">
                            {{ randomPrice | price }}
                        </h5>
                    </div>
                    <h6 class="text-primary font-weight-bold">
                        {{ extractGenres(media) }}
                    </h6>
                    <div class="d-flex flex-row text-tertiary">
                        {{ extractReleaseYear(media) }}
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="px-4">
                <no-ssr>
                    <img
                        class="rounded-3xl"
                        :src="`${$backdrop_url}${media.poster_path}`"
                    />
                </no-ssr>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        name: 'MediaSelected',

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

.genre-box {
    white-space: nowrap;
    width: min-content;
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
</style>