<template>
    <div class="gradient-x-secondary ">
        <div class="py-2 row w-100 justify-content-center align-items-center header-container">
            <TheLogo class=" py-4 col-2" />

            <SearchInput class="col-3 input-wrapper" />

            <div class="col-3">
                <div class="row justify-content-between">
                    <div
                        v-for="(navItem, key) in navLinks"
                        :key="`nav-item-${key}`"
                        class="col-2"
                    >
                        <NuxtLink
                            class="h7"
                            :to="navItem.url"
                        >
                            {{ navItem.title }}
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="col-1">
                <NuxtLink
                    class="d-flex flex-row align-items-center"
                    :to="{ path: '/watchlist' }"
                >
                    <font-awesome-icon :icon="['fas', 'heart']" />

                    <span class="ms-2 h7 mb-0 fw-bold">
                        Watchlist
                    </span>
                </NuxtLink>
            </div>

            <div class="col-3 d-flex flex-row justify-content-around h7">
                <BaseButton class="px-4 py-2 rounded-xl col-4 bg-outline-tertiary" variant="outline-tertiary">
                    Sign in
                </BaseButton>

                <BaseButton class="px-4 py-2 rounded-xl h7 col-4">
                Register
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script>
import TheLogo from '~/components/TheLogo';
import SearchInput from '~/components/SearchInput';
import BaseButton from '~/components/Base/BaseButton';

export default {
    name: 'TheHeader',

    components: {
        TheLogo,
        BaseButton,
        SearchInput
    },

    data () {
        return {
            navLinks: [
                {
                    title: 'Home',
                    url: '/'
                },
                {
                    title: 'Movies',
                    url: '/movies'
                },
                {
                    title: 'Series',
                    url: '/series'
                }, 
                {
                    title: 'Kids',
                    url: '/kids'     
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.input-wrapper {
    height: min-content;
}

@media (min-width: 1200px) {
  .header-container {
    width: 75%;
    margin: auto 0;
  }
}
</style>