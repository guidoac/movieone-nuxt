<template>
    <div
        v-if="media.last_episode_to_air"
        class="position-relative"
    >
        <img
            :src="`${$backdrop_url}${media.last_episode_to_air.still_path}`"
            class="rounded-3xl "
        />

        <div class="position-absolute bottom-0 col-12 pb-2">
            <b-progress
                v-bind="playerProgressConfig"
                class="bg-tertiary"
            >
                <b-progress-bar :value="watchTime" />
            </b-progress>

            <div class="row justify-content-between text-white px-4 pt-2 h5">
                <div />

                <div class="player-controls row justify-content-between col-3">
                    <font-awesome-icon
                        :icon="['fas', 'backward']"
                        class="cursor-pointer control"
                    />

                    <font-awesome-icon
                        :icon="['fas', 'play']"
                        class="cursor-pointer control"
                    />

                    <font-awesome-icon
                        :icon="['fas', 'forward']"
                        class="cursor-pointer control"
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
/**
 * DISCLAIMER: Demo player only, not functional
 */
    export default {
        name: 'MediaPlayer',

        props: {
            media: {
                required: true,
                type: Object,
            },
        },

        data () {
            return {
                playerProgressConfig: {
                    max: 200,
                    height: '.15rem',
                    variant: 'primary'
                }
            }
        },

        computed: {
            watchTime () {
                return this.$utils.random(1, 200);
            },
        }
    }
</script>

<style lang="scss" scoped>
.control {
    transition: all .3s ease;

    &:hover {
        color: #be5915;
    }
}
</style>