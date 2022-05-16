<template>
    <img
        class="rounded-3xl"
        :src="`${$poster_url}${url}`"
    />
</template>

<script>
    export default {
        name: 'MediaCoverPhoto',

        props: {
            url: {
                type: String,
                required: true
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>