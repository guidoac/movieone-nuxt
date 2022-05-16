<template>
    <div class="bg-transparent py-3 text-white d-flex flex-row h7">
        <NuxtLink :to="{ name: 'index' }">
            Home
        </NuxtLink>
        
        &nbsp;
        /
        &nbsp;

        <NuxtLink
            v-for="(route, index) in paths[$route.name]"
            :key="`path-${index}`"
            :to="route.route"
        >
            {{ route.label }}
        </NuxtLink>
        
        &nbsp; 
        /
        
        <span class="text-muted">
            &nbsp; {{ currentPage }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'TheBreadcrumb',

        props: {
            currentPage: {
                type: String,
                required: true
            }
        },

        data () {
            return {
                paths: {
                    'tv-id': [
                        { label: 'TV Series', route: { name: 'tv-id' } }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>