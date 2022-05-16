<template>
    <div
        v-if="media.last_episode_to_air"
        class="position-relative"
    >
        <img
            :src="`${$backdrop_url}${media.last_episode_to_air.still_path}`"
            class="rounded-3xl "
        />

        <div class="position-absolute bottom-0 col-12 pb-2 player-controls-wrapper">
            <MediaWatchProgress :watch-time="watchTime" />

            <div class="d-flex flex-row justify-content-between text-white px-4 pt-2 h5">
                <div />

                <div class="player-controls col-4 text-center">
                    <font-awesome-icon
                        :icon="['fas', 'backward']"
                        class="cursor-pointer control col-3"
                    />

                    <font-awesome-icon
                        :icon="['fas', 'play']"
                        class="cursor-pointer control col-3"
                    />

                    <font-awesome-icon
                        :icon="['fas', 'forward']"
                        class="cursor-pointer control col-3"
                    />
                </div>

                <div>
                    <font-awesome-icon
                        :icon="['fas', 'expand']"
                        class="cursor-pointer control"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MediaWatchProgress from '~/components/MediaWatchProgress';

/**
 * DISCLAIMER: Demo player only, not functional
 */
    export default {
        name: 'MediaPlayer',

        components: {
            MediaWatchProgress
        },

        props: {
            media: {
                required: true,
                type: Object,
            },
        },

        computed: {
            watchTime () {
                return this.$utils.random(1, 100);
            },
        }
    }
</script>

<style lang="scss" scoped>
.player-controls-wrapper {
    background: linear-gradient(0deg, rgba(22, 22, 22, 0.842) 0%, rgba(22, 22, 22, 0.562) 50%, rgba(0, 0, 0, 0.322) 75%);

    .control {
        transition: all .3s ease;

        &:hover {
            color: #be5915;
        }
    }
}
</style>