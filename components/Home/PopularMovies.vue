<template>
    <div class="d-flex flex-column py-5">
        <h5 class="text-white font-weight-semibold mb-5">
            Popular
        </h5>
        <div class="col-12 row px-0">
            <no-ssr>
                <div class="col-8">
                    <div class="mb-3">
                        <img
                            class="rounded-3xl shadow"
                            :src="`${$backdrop_url}${random_trending_limit().backdrop_path}`"
                        />
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <img
                                class="rounded-3xl shadow"
                                :src="`${$backdrop_url}${random_trending_limit().backdrop_path}`"
                            />
                        </div>

                        <div class="col-6">
                            <img
                                class="rounded-3xl shadow"
                                :src="`${$backdrop_url}${random_trending_limit().backdrop_path}`"
                            />
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <img
                        class="rounded-3xl w-100"
                        :src="`${$backdrop_url}${random_trending_limit().poster_path}`"
                    />
                </div>
            </no-ssr>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PopularMovies',

    computed: {
        ...mapGetters({
            random_trending_limit: 'trending/random_trending_limit'
        }),
    }
}
</script>

<style scoped>

</style>