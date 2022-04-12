<template>
    <div class="pt-5">
        <MediaList
            :data="moviesOnSale"
            title="Movies on Sale"
        >
            <template #tile>
                <MovieOnSale
                    v-for="(media, index) in moviesOnSale"
                    :key="index"
                    :media="media"
                />
            </template>
        </MediaList>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import MovieOnSale from '~/components/Tiles/MovieOnSale';

export default {
    name: 'MoviesOnSale',

    components: {
        MovieOnSale
    },

    data () {
        return {
            moviesOnSale: [],
            numberOfItens: 10,
        }
    },

    computed: {
        ...mapGetters({
            random_discover_movies: 'discover/random_discover_movie'
        })
    },

    mounted () {
        this.moviesOnSale = this.random_discover_movies(this.numberOfItens);
    }
}
</script>

<style scoped>

</style>