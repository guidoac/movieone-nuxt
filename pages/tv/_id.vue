<template>
    <div class="w-75 mx-auto col">
        <TheBreadcrumb :current-page="media.original_name" />

        <div class="row">
            <div class="w-75 text-white">
                <MediaPlayer
                    :media="media"
                    class="mb-5"
                />

                <div class="d-flex flex-row justify-content-between pb-3">
                    <div class="d-flex flex-row align-items-center">
                        <h5 class="font-weight-bold mr-2 mb-0">
                            {{ media.original_name }}
                        </h5>

                        <span class="text-tertiary opacity-75 h7">
                            ({{ $getReleaseYear }})
                        </span>
                    </div>
                    <a href=":javascript">
                        <font-awesome-icon
                            :icon="['fas', 'ellipsis']"
                            class="cursor-pointer"
                        />
                    </a>
                </div>

                <div class="d-flex flex-row justify-content-between h7">
                    <div class="d-flex flex-row">
                        <span class="mr-4">{{ `${media.number_of_seasons} Seasons` }}</span>
                        <span>Published on {{ media.first_air_date | date }}</span>
                    </div>

                    <div class="d-flex flex-row impressions justify-content-between">
                        <CountViews />
                        <CountLikes />
                        <CountDislikes />
                    </div>
                </div>

                <div class="mt-4 h7">
                    {{ media.overview }}
                </div>
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
import CountViews from '~/components/Media/CountViews';
import CountLikes from '~/components/Media/CountLikes';
import CountDislikes from '~/components/Media/CountDislikes';

export default {
    name: 'DetailTV',

    components: {
        TheBreadcrumb,
        MediaPlayer,
        CountViews,
        CountLikes,
        CountDislikes,
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

<style lang="scss" scoped>
.impressions {
    width: 40%;
}
</style>