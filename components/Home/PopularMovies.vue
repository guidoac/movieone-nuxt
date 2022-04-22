<template>
    <div>
        <div
            v-if="current_popular.length === numberOfItens"
            class="d-flex flex-column py-5"
        >
            <h5 class="text-white font-weight-semibold mb-5">
                Popular
            </h5>

            <div class="row justify-content-center px-0">
                <no-ssr>
                    <div class="left-banners">
                        <div
                            class="mb-3 position-relative cursor-pointer"
                            @mouseenter="itemHovered = 0"
                            @mouseleave="itemHovered = 0"
                        >
                            <img
                                :src="`${$backdrop_url}${current_popular[0].backdrop_path}`"
                                class="rounded-3xl shadow"
                            />

                            <Transition name="fade">
                                <div
                                    v-show="itemHovered === 0"
                                    class="rounded-3xl shadow-lg position-absolute cover-to-left top-0 z-10 h-100 w-100 p-5"
                                >
                                    <OverlayMediaInfo
                                        :media="current_popular[0]"
                                        type="minified"
                                    />
                                </div>
                            </Transition>
                        </div>

                        <div class="row">
                            <div
                                class="col-6"
                                @mouseenter="itemHovered = 1"
                                @mouseleave="itemHovered = null"
                            >
                                <div class="position-relative">
                                    <img
                                        :src="`${$backdrop_url}${current_popular[1].backdrop_path}`"
                                        class="rounded-3xl shadow"
                                    />

                                    <Transition name="fade">
                                        <div
                                            v-show="itemHovered === 1"
                                            class="rounded-3xl shadow-lg position-absolute cover-to-left top-0 z-10 h-100 w-100 p-4"
                                        >
                                            <OverlayMediaInfo
                                                :media="current_popular[1]"
                                                type="extra-minified"
                                            />
                                        </div>
                                    </Transition>
                                </div>
                            </div>

                            <div
                                class="col-6"
                                @mouseenter="itemHovered = 2"
                                @mouseleave="itemHovered = null"
                            >
                                <div class="position-relative">
                                    <img
                                        :src="`${$backdrop_url}${current_popular[2].backdrop_path}`"
                                        class="rounded-3xl shadow"
                                    />

                                    <Transition name="fade">
                                        <div
                                            v-show="itemHovered === 2"
                                            class="rounded-3xl shadow-lg position-absolute cover-to-left top-0 z-10 h-100 w-100 p-3"
                                        >
                                            <OverlayMediaInfo
                                                :media="current_popular[2]"
                                                type="extra-minified"
                                            />
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="col-4"
                        @mouseenter="itemHovered = 3"
                        @mouseleave="itemHovered = null"
                    >
                        <div class="position-relative">
                            <img
                                :src="`${$backdrop_url}${current_popular[3].poster_path}`"
                                class="rounded-3xl w-100"
                            />

                            <Transition name="fade">
                                <div
                                    v-show="itemHovered === 3"
                                    class="rounded-3xl shadow-lg position-absolute cover-to-up top-0 z-10 h-100 w-100 p-4"
                                >
                                    <OverlayMediaInfo
                                        :media="current_popular[3]"
                                        type="extra-minified"
                                    />
                                </div>
                            </Transition>
                        </div>
                    </div>
                </no-ssr>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import OverlayMediaInfo from '~/components/OverlayMediaInfo'

export default {
    name: 'PopularMovies',

    components: {
        OverlayMediaInfo,
    },

    data() {
        return {
            current_popular: [],
            itemHovered: false,
            numberOfItens: 4
        }
    },

    computed: {
        ...mapGetters({
            random_discover_tv: 'discover/random_discover_tv',
            current_tv_details: 'tv/current_tv_details'
        }),
    },

    async mounted () {
        this.current_popular = await this.getDetails(this.random_discover_tv(this.numberOfItens));
    },
}
</script>

<style lang="scss" scoped>
.media-info {
    z-index: 20;
    left: 5%;
    top: 15%;
}

.left-banners {
    flex: 0 0 53%;
    max-width: 58.33333333%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
