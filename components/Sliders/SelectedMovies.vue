<template>
    <div>
        <div
            v-if="selectedMovies.length"
            class="d-flex flex-column pb-5"
        >
            <h5 class="text-white mb-2">
                Selected Movies
            </h5>

            <div class="d-flex flex-row justify-content-between">
                <h6 class="text-tertiary mt-2">
                    Movies that you added to the watch later library
                </h6>

                <NuxtLink to="">
                    view more
                    <font-awesome-icon :icon="['fas', 'circle-arrow-right']" />
                </NuxtLink>
            </div>

            <VueSlickCarousel
                v-bind="carouselConfig"
                class="watching-list mt-2 position-relative"
            >
                <MediaSelected
                    v-for="(media, index) in selectedMovies"
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
                selectedMovies: [],
                numberOfItens: 10,
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
                random_discover_all: 'discover/random_discover_all'
            })
        },

        mounted () {
            this.selectedMovies = this.random_discover_all(this.numberOfItens);
        }
    }
</script>

<style lang="scss" scoped>

</style>