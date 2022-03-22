<template>
    <div class="px-3 pt-2">
        <div
            role="button"
            class="bg-dark rounded-3xl d-flex flex-row shadow tile"
        >
            <no-ssr>
                <img
                    class="rounded-l-3xl"
                    :src="`${$backdrop_url}${media.poster_path}`"
                />
            </no-ssr>
            
            <div class="d-flex flex-column justify-content-between p-2 w-100">
                <div class="bg-contrast-secondary border border-primary h8 rounded-xl py-1 px-2 genre-box">
                    <p class="mb-0 text-primary">
                        {{ extractGenres(media) }}
                    </p>
                </div>
                <div>
                    <p class="text-white h8 font-weight-bold mb-0">
                        {{ media.title || media.name }}
                    </p>

                    <p
                        v-if="media.type === 'movie'"
                        class="text-tertiary h9 font-weight-bold mb-0"
                    >
                        {{ extractReleaseYear(media) }}
                    </p>

                    <p
                        v-else
                        class="text-tertiary h9 font-weight-bold mb-0"
                    >
                        {{ randomWatchedEpisode }}
                    </p>
                </div>
                <b-progress
                    v-bind="progressBarConfig"
                    class="bg-tertiary"
                >
                    <b-progress-bar :value="watchTime" />
                </b-progress>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        name: 'MediaWatching',

        props: {
            media: {
                type: Object,
                required: true
            }
        },

        data () {
            return {
                progressBarConfig: {
                    max: 200,
                    height: '.15rem',
                    variant: 'primary'
                }
            }
        },

        computed: {
            ...mapGetters({
                current_tv_details: 'tv/current_tv_details'
            }),
            
            watchTime () {
                return this.$utils.random(1, 200);
            },

            randomWatchedEpisode () {
                const randomSeason = this.$utils.random(1, this.current_tv_details.number_of_seasons);
                const randomEpisode = this.$utils.random(1, this.current_tv_details.number_of_episodes);

                return `Season ${randomSeason} Episode ${randomEpisode}`;
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
    width: 35%;
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