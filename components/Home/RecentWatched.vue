<template>
    <div>
        <MediaList
            :data="recentWatchedMovies"
            title="Recent Watched"
        >
            <template #tile>
                <MediaWatching
                    v-for="(media, index) in recentWatchedMovies"
                    :key="index"
                    :media="media"
                />
            </template>
        </MediaList>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import MediaList from '~/components/MediaList';
import MediaWatching from '~/components/Tiles/MediaWatching';

export default {
    name: 'RecentWatched',

    components: {
        MediaList,
        MediaWatching,
    },

    data () {
        return {
            recentWatchedMovies: [],
            numberOfItens: 10,
        }
    },

    computed: {
        ...mapGetters({
            random_discover_all: 'discover/random_discover_all'
        })
    },

    mounted () {
        this.recentWatchedMovies = this.random_discover_all(this.numberOfItens);
    }
}
</script>

<style lang="scss">

</style>