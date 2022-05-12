<template>
    <div class="d-flex flex-row align-items-center">
        <font-awesome-icon
            :icon="['fas', 'eye']"
            class="mr-2"
        />
        {{ `${count}k viewers` }}
    </div>
</template>

<script>
    export default {
        name: 'CountViews',

        computed: {
            count() {
                return this.$utils.random(100, 600);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>