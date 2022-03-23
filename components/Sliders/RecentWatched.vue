<template>
    <div>
        <div
            v-if="recentWatchedMovies.length"
            class="d-flex flex-column"
        >
            <h6 class="text-white mb-2">
                Recent Watched
            </h6>
            <VueSlickCarousel
                v-bind="carouselConfig"
                class="watching-list mt-2 position-relative"
            >
                <MediaWatching
                    v-for="(media, index) in recentWatchedMovies"
                    :key="index"
                    :media="media"
                />

                <template #customPaging>
                    <div class="bg-tertiary p-1 rounded-circle mx-2 opacity-50" />
                </template>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import VueSlickCarousel from 'vue-slick-carousel';
import MediaWatching from '~/components/Tiles/MediaWatching';

export default {
    name: 'RecentWatched',

    components: {
        MediaWatching,
        VueSlickCarousel
    },

    data () {
        return {
            recentWatchedMovies: [],
            
            carouselConfig: {
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 3,
                dots: true,
                arrows: false,
                dotsClass: 'd-flex position-absolute right-0 upper-dots'
            }
        }
    },

    computed: {
        ...mapGetters({
            random_discover_all: 'discover/random_discover_all'
        })
    },

    mounted () {
        this.recentWatchedMovies = this.random_discover_all(10);
    }
}
</script>

<style lang="scss">
.upper-dots {
    top: -2rem;
    right: 2rem;
    cursor: pointer;

    .slick-active {
        div {
            background: white;
            opacity: 100%;
        }
    }
}

</style>