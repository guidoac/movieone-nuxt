<template>
    <div class="d-flex flex-row align-items-center">
        <font-awesome-icon
            :icon="['fas', 'thumbs-up']"
            class="mr-2"
        />
        {{ `${count} likes` }}
    </div>
</template>

<script>
    export default {
        name: 'CountLikes',

        computed: {
            count() {
                return this.$utils.random(0, 100);
            }
        },
    }
</script>

<style lang="scss" scoped>
