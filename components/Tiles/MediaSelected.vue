<template>
    <div
        @mouseover="itemHovered = true"
        @mouseleave="itemHovered = false"
    >
        <NuxtLink
            class="pt-2 cursor-pointer"
            :to="$mediaPage"
        >
            <template v-if="itemHovered">
                <div class="p-3 bg-white rounded-3xl transition-all">
                    <no-ssr>
                        <img
                            class="rounded-3xl"
                            :src="`${$backdrop_url}${media.poster_path}`"
                        />
                    </no-ssr>

                    <div class="mt-4 w-100">
                        <div class="d-flex flex-row w-100 justify-content-between mb-2">
                            <h6 class="text-black font-weight-bold mr-2 h7">
                                {{ media.title || media.original_name }}
                            </h6>

                            <h6 class="text-black text-right font-weight-bold w-50">
                                {{ randomPrice | price }}
                            </h6>
                        </div>

                        <h6 class="text-primary font-weight-bold">
                            {{ $getGenre }}
                        </h6>

                        <div class="d-flex flex-row text-dark">
                            {{ $getReleaseYear }}
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
        </NuxtLink>

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