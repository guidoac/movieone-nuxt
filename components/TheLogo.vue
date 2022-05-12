<template>
    <NuxtLink :to="{ name: 'index' }">
        <img
            :src="logoPath"
            class="logo"
        />
    </NuxtLink>
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
.logo {
    width: 200px;
}
</style>