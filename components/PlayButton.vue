<template>
    <div 
        :class="[`size-${size}`]"
        class="text-primary cursor-pointer text-start play-button w-fit"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
    >
        <font-awesome-icon
            :icon="['fas', 'circle-play']"
            :class="{
                hovered
            }"
            class="bg-white play-icon transition-all rounded-circle"
        />
    </div>
</template>

<script>
    export default {
        name: 'PlayButton',

        props: {
            size: {
                type: String,
                default: 'md'
            }
        },

        data () {
            return {
                hovered: false
            }
        }
    }
</script>

<style lang="scss" scoped>
.play-button {
    &.size-xs {
        font-size: 2rem;
    }

    &.size-sm {
        font-size: 4rem;
    }

    &.size-md {
        font-size: 6rem;
    }

    .play-icon {
        &.hovered {
            filter: brightness(0.75);
            transform: scale(1.35);
            text-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
        }
    }
}
</style>