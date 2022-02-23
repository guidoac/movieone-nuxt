<template>
    <div
        class="d-flex align-items-center rounded-xl"
        :class="{
            'bg-black': theme === 'default'
        }"
    >   
        <div class="mx-3 text-white">
            <slot name="first-icon" />
        </div>

        <input
            class="bg-transparent"
            :type="type"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
        />

        <div class="mx-3">
            <slot name="second-icon" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseInput',

        props: {
            type: {
                required: false,
                default: 'text',
                type: String
            },

            placeholder: {
                required: false,
                default: '',
                type: String
            },

            theme: {
                required: false,
                default: 'default',
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>