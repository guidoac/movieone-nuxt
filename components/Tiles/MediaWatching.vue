<template>
    <div class="px-3">
        <div class="bg-secondary rounded-3xl d-flex flex-row">
            <img
                class="rounded-l-3xl"
                :src="`${$backdrop_url}${media.poster_path}`"
            />
            
            <div class="d-flex flex-column justify-content-between p-2 w-100">
                <div class="bg-contrast-secondary border border-primary h8 rounded-xl py-1 px-2 genre-box">
                    <p class="mb-0 text-primary">
                        {{ extractGenres(media) }}
                    </p>
                </div>
                <p class="text-white h8 font-weight-bold mb-0">
                    {{ media.title }}
                </p>
                <b-progress
                    v-bind="progressBarConfig"
                    class="bg-tertiary"
                >
                    <b-progress-bar :value="watchTime" />
                </b-progress>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MediaWatching',

        props: {
            media: {
                type: Object,
                required: true
            }
        },

        data () {
            return {
                progressBarConfig: {
                    max: 200,
                    height: '.1rem',
                    variant: 'primary'
                }
            }
        },

        computed: {
            watchTime () {
                return this.$utils.random(1, 200)
            }
        }
    }
</script>

<style lang="scss" scoped>
img {
    width: 35%;
}

.genre-box {
    white-space: nowrap;
    width: min-content;
}
</style>