<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: 'DetailMovie',

        created () {
            this.$store.dispatch('movie/fetchDetails', { id: this.$route.params.id })
        }
    }
</script>

<style scoped>

</style>