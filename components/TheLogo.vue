<template>
    <div>
        <img
            :src="logoPath"
            width="200"
        />
    </div>
</template>

<script>
    export default {
        name: 'TheLogo',
        
        data () {
            return {
                logoPath: require('~/assets/img/movieone.png')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>