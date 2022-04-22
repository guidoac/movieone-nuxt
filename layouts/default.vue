<template>
    <div class="bg-black">
        <TheHeader />
        <Nuxt />
        <TheFooter class="mt-5"/>
    </div>
</template>
<script>
import TheHeader from '~/components/Header/TheHeader'
import TheFooter from '~/components/Footer/TheFooter'

export default {
    components: {
        TheHeader,
        TheFooter,
    }
}
</script>