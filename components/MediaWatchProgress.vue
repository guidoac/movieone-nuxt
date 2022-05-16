<template>
    <div class="bg-tertiary progress">
        <div
            :style="{ 'width': `${watchTime}%` }"
            class="progress-bar"
        />
    </div>
</template>

<script>
    export default {
        name: 'MediaWatchProgress',

        props: {
            watchTime: {
                type: Number || String,
                required: false,
                default: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
.progress {
    @apply bg-primary;

    height: .15rem;
}
</style>