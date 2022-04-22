<template>
    <div class="gradient-x-secondary ">
        <div class="py-2 row w-100 justify-content-center align-items-center header-container">
            <TheLogo class="ml-4 py-4" />

            <SearchInput class="col-3 ml-4 input-wrapper" />

            <div class="col-3 ml-3">
                <div class="row justify-content-between">
                    <div
                        v-for="(navItem, key) in navLinks"
                        :key="`nav-item-${key}`"
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

            <div class="col-1 ml-5 mr-4">
                <NuxtLink
                    class="row align-items-center"
                    :to="{ path: '/watchlist' }"
                >
                    <font-awesome-icon :icon="['fas', 'heart']" />

                    <span class="ml-2 h7 mb-0 font-weight-bold">
                        Watchlist
                    </span>
                </NuxtLink>
            </div>

            <div class="row h7">
                <BaseButton
                   class="px-4 py-2 rounded-xl"
                   variant="outline-tertiary"
                >
                    Sign in
                </BaseButton>

                <BaseButton class="px-4 py-2 ml-3 rounded-xl h7">
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
                    title: 'Live',
                    url: '/live'
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