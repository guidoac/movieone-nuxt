<template>
    <div class="d-flex flex-column">
        <h5 class="text-white mb-2 z-5">
            Selected Movies
        </h5>
        <div class="d-flex flex-row justify-content-between">
            <h6 class="text-tertiary z-5 mt-2">
                Movies that you added to the watch later library
            </h6>
            <NuxtLink
                class="z-5 text-white"
                to=""
            >
                view more
                <font-awesome-icon :icon="['fas', 'circle-arrow-right']" />
            </NuxtLink>
        </div>
        <VueSlickCarousel
            v-bind="carouselConfig"
            class="watching-list mt-2 position-relative"
        >
            <MediaSelected
                v-for="(media, index) in current_discover_limit(10)"
                :key="index"
                :media="media"
            />

            <template #customPaging>
                <div class="bg-tertiary p-1 rounded-circle mx-2 opacity-50" />
            </template>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import { mapGetters } from 'vuex';

import MediaSelected from '~/components/Tiles/MediaSelected';

 
    export default {
        name: 'SelectedMovies',
        
        components: {
            VueSlickCarousel,
            MediaSelected,
        },

        data () {
            return {
                carouselConfig: {
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    arrows: false,
                }
            }
        },

        computed: {
            ...mapGetters({
                current_discover_limit: 'discover/current_discover_limit'
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>