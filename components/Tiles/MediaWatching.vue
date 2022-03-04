<template>
    <div class="px-3">
        <div class="bg-secondary rounded-3xl row">
            <div class="">
                <img
                    class="rounded-l-3xl"
                    :src="`${$backdrop_url}${media.poster_path}`"
                />
            </div>
            
            <div class="d-flex flex-column justify-content-start">
                <div class="bg-contrast-secondary text-primary border border-primary">

                </div>
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
        }
    }
</script>

<style lang="scss" scoped>
img {
    width: 35%;
}
</style>