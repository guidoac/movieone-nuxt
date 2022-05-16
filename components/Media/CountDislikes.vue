<template>
    <div class="d-flex flex-row align-items-center">
        <font-awesome-icon
            :icon="['fas', 'thumbs-down']"
            class="me-2"
        />
        {{ `${count} dislikes` }}
    </div>
</template>

<script>
    export default {
        name: 'CountDislikes',

        computed: {
            count() {
                return this.$utils.random(0, 100);
            }
        },
    }
</script>

<style lang="scss" scoped>
