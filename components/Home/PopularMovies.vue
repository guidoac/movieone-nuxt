<template>
    <div class="d-flex flex-column py-5">
        <h5 class="text-white font-weight-semibold mb-5">
            Popular
        </h5>
        <div
            v-if="current_popular.length"
            class="col-12 row px-0"
        >
            <no-ssr>
                <div class="col-8">
                    <div class="mb-3 position-relative">
                        <img
                            class="rounded-3xl shadow"
                            :src="`${$backdrop_url}${current_popular[0].backdrop_path}`"
                        />
                        
                        <MediaInfo
                            :media="current_popular[0]"
                            class="position-absolute media-info bg-overlay p-3 rounded-3xl shadow-lg"
                            type="minified"
                        />
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <img
                                class="rounded-3xl shadow"
                                :src="`${$backdrop_url}${current_popular[1].backdrop_path}`"
                            />
                        </div>

                        <div class="col-6">
                            <img
                                class="rounded-3xl shadow"
                                :src="`${$backdrop_url}${current_popular[2].backdrop_path}`"
                            />
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <img
                        class="rounded-3xl w-100"
                        :src="`${$backdrop_url}${current_popular[3].poster_path}`"
                    />
                </div>
            </no-ssr>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import MediaInfo from '~/components/MediaInfo';

export default {
    name: 'PopularMovies',

    components: {
        MediaInfo
    },

    data () {
        return {
            current_popular: []
        }
    },

    computed: {
        ...mapGetters({
            discover_limit: 'discover/discover_limit'
        }),
    },

    beforeMount () {
        this.current_popular = this.discover_limit(4);
    }
}
</script>

<style lang="scss" scoped>
.media-info {
    z-index: 20;
    left: 5%;
    top: 15%;
}
</style>