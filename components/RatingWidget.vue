<template>
    <div
        :style="style"
        class="rounded-pill rating-wrapper d-flex flex-row align-items-center pr-3"
    >
        <div class="rounded-circle star-wrapper text-dark px-2 py-1 me-1">
            <font-awesome-icon :icon="['fas', 'star']" />
        </div>

        <span class="h7">
            {{ rating }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'RatingWidget',

        props: {
            rating: {
                type: Number,
                required: true
            },

            size: {
                type: Number,
                required: false,
                default: 5
            }
        },

        computed: {
            style () {
                return {
                    'width': `${this.size}rem`
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.rating-wrapper {
    background-color: rgba(61, 61, 6, 0.747);
    color: rgb(204, 204, 0);
    height: fit-content;
    .star-wrapper {
        background-color: rgb(204, 204, 0);
    }
}
</style>