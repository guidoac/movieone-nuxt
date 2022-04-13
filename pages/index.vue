<template>
    <div>
        <div class="position-relative">
            <MainBanner :data="random_trending"/>
            
            <div class="absolute-container position-absolute w-100">
                <div class="w-75 mx-auto">
                    <div class="meta-info">
                        <OverlayMediaInfo :media="random_trending" />
                    </div>

                    <RecentWatched />
                </div>
            </div>
            
            <div class="w-100 bg-black selected-movies">
                <SelectedMovies class="w-75 mx-auto" />
            </div>

            <div class="w-100 bg-dark">
                <PopularMovies class="w-75 mx-auto" />
            </div>

            <div class="w-100 pt-5 bg-black">
                <MoviesOnSale class="w-75 mx-auto" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import MainBanner from '~/components/Home/MainBanner';
import RecentWatched from '~/components/Home/RecentWatched';
import SelectedMovies from '~/components/Home/SelectedMovies';
import PopularMovies from '~/components/Home/PopularMovies';
import MoviesOnSale from '~/components/Home/MoviesOnSale';
import OverlayMediaInfo from '~/components/OverlayMediaInfo';

export default {
    name: 'IndexPage',

    components: {
        MainBanner,
        RecentWatched,
        SelectedMovies,
        PopularMovies,
        OverlayMediaInfo,
        MoviesOnSale,
    },

    computed: {
        ...mapGetters({
            random_trending: 'trending/random_trending',
        }),
    }
}
</script>

<style lang="scss" scoped>
.absolute-container {
    z-index: 20;
    top: 5%;
}

.meta-info {
    width: 40%;
    margin-bottom: 5rem;
}

.selected-movies {
    min-height: 530px;
    padding-bottom: 2rem;
}
</style>
