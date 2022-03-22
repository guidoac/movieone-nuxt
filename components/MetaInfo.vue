<template>
    <div>
        <div class="meta-info">
            <div class="d-flex flex-column text-tertiary mb-5">
                <div class="d-flex justify-content-between mb-5 min-w-75">
                    <div class="text-primary">
                        {{ extractGenres(random_trending) }}
                    </div>

                    <div>
                        {{ extractReleaseYear(random_trending) }}
                    </div>

                    <div v-if="extractCountry(random_trending)">
                        {{ extractCountry(random_trending).english_name }}
                    </div>

                    <div v-else>
                        {{ random_trending.media_type | capitalize }}
                    </div>

                    <div>
                        {{ random_trending.vote_average }}
                    </div>
                </div>
                <h1 class="font-family-secondary">
                    {{ random_trending.original_name || random_trending.title }}
                </h1>
                <h6 class="h7">
                    {{ random_trending.overview }}
                </h6>
            </div>
            <div class="h7 d-flex flex-row justify-content-left">
                <BaseButton
                    label="Watch Now"
                    class="d-flex py-2 px-4 align-items-center mr-3"
                >
                    <template #second-icon>
                        <font-awesome-icon
                            class="ml-3 h5 mb-0"
                            :icon="['far', 'play-circle']"
                        />
                    </template>
                </BaseButton>
                <BaseButton
                    variant="outline-tertiary"
                    label="Add to Watchlist"
                    class="d-flex py-2 px-4 align-items-center"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MetaInfo',
}
</script>

<style scoped></style>
