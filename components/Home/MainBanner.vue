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
.cover-to-left {
    top: 0;
    left: 0;
    background: linear-gradient(90deg, rgba(22,22,22,1) 0%, rgba(22,22,22,0.9023984593837535) 15%, rgba(0,0,0,0) 75%);
}

.cover-to-down {
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(22,22,22,1) 0%, rgba(22,22,22,0.9023984593837535) 15%, rgba(0,0,0,0) 75%);
}

</style>