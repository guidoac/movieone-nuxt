<template>
    <div class="position-relative">
        <no-ssr>
            <img
                :src="`${$backdrop_url}${data.backdrop_path}`"
                class="w-100"
            />
        </no-ssr>

        <div class="position-absolute w-100 h-100 cover-to-left" />
        <div class="position-absolute w-100 h-100 cover-to-down" />
    </div>
</template>

<script>
export default {
    name: 'MainBanner',

    props: {
        data: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>

</style>