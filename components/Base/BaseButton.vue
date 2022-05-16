<template>
    <button :class="[`btn btn-${variant}`]">   
        <slot name="first-icon" />

        <slot />

        <slot name="second-icon" />
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',

        props: {
            variant: {
                type: String,
                required: false,
                default: 'primary'
            }
        },
    }
</script>

<style lang="scss" scoped>
.btn-outline-tertiary {
    &:hover {
        color: #202020 !important;
    }

    border-color: #ced4da60;
}
</style>