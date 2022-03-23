<template>
<div>
    <template v-if="type === 'default'">
        <div>
            <div class="d-flex flex-column text-tertiary mb-5">
                <div class="d-flex justify-content-between mb-5 min-w-75">
                    <div class="text-primary">
                        {{ extractGenres(media) }}
                    </div>

                    <div>
                        {{ extractReleaseYear(media) }}
                    </div>

                    <template v-if="extractCountry(media)">
                        <div>
                            {{ extractCountry(media).english_name }}
                        </div>
                    </template>
                    
                    <template v-else>
                        <div>
                            {{ media.media_type | capitalize }}
                        </div>
                    </template>

                    <div>
                        {{ media.vote_average }}
                    </div>
                </div>
                <h1 class="font-family-secondary">
                    {{ media.original_name || media.title }}
                </h1>
                <h6 class="h7">
                    {{ media.overview }}
                </h6>
            </div>

            <div class="h7 d-flex flex-row justify-content-left">
                <BaseButton
                    label="Watch Now"
                    class="d-flex py-2 px-4 align-items-center mr-3"
                >
                    <template #second-icon>
                        <font-awesome-icon
                            :icon="['far', 'play-circle']"
                            class="ml-3 h5 mb-0"
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
    </template>

    <template v-else-if="type === 'minified'">
        <div>
            <h2 class="font-family-secondary text-tertiary">
                {{ media.original_name || media.title }}
            </h2>
        </div>
    </template>
</div>
</template>

<script>
import BaseButton from '~/components/Base/BaseButton';

export default {
    name: 'MediaInfo',

    components: {
        BaseButton
    },

    props: {
        media: {
            type: Object,
            required: true
        },

        type: {
            type: String,
            required: false,
            default: 'default'
        }
    }
}
</script>

<style scoped></style>
