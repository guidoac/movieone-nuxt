<template>
    <b-button 
        :variant="variant"
    >
        {{ label }}
    </b-button>
</template>

<script>
    export default {
        name: 'BaseButton',

        props: {
            label: {
                type: String,
                required: true
            },

            variant: {
                type: String,
                required: false,
                default: 'primary'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>