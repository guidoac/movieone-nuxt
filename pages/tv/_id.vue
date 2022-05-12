<template>
    <div class="w-75 mx-auto col">
        <TheBreadcrumb :current-page="media.original_name" />

        <div class="row">
            <div class="w-75">
                <MediaPlayer :media="media" />
            </div>

            <div class="w-25">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TheBreadcrumb from '~/components/TheBreadcrumb';
import MediaPlayer from '~/components/Media/MediaPlayer';

export default {
    name: 'DetailTV',

    components: {
        TheBreadcrumb,
        MediaPlayer
    },

    computed: {
        ...mapGetters({
            media: 'tv/current_tv_details'
        })
    },

    created () {
        this.$store.dispatch('tv/fetchDetails', { id: this.$route.params.id })
    }
}
</script>

<style scoped>

</style>