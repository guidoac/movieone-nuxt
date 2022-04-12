<template>
    <div class="rounded-pill rating-wrapper d-flex flex-row align-items-center">
        <div class="rounded-circle star-wrapper text-dark px-2 py-1 mr-2">
            <font-awesome-icon :icon="['fas', 'star']" />
        </div>

        {{ rating }}
    </div>
</template>

<script>
    export default {
        name: 'RatingWidget',

        props: {
            rating: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.rating-wrapper {
    width: 5rem;
    background-color: rgba(61, 61, 6, 0.747);
    color: rgb(204, 204, 0);
    .star-wrapper {
        background-color: rgb(204, 204, 0);
    }
}
</style>