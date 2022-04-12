<template>
    <div>
        <MediaList
            :data="selectedMovies"
            title="Selected Movies"
            subtitle="Movies that you added to the watch later library"
        >
            <template #tile>
                <MediaSelected
                    v-for="(media, index) in selectedMovies"
                    :key="index"
                    :media="media"
                />
            </template>
        </MediaList>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import MediaSelected from '~/components/Tiles/MediaSelected';
 
export default {
    name: 'SelectedMovies',
    
    components: {
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