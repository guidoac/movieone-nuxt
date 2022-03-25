<template>
<div>
    <template v-if="type === 'default'">
        <div>
            <div class="d-flex flex-column text-tertiary mb-5">
                <div class="d-flex justify-content-between mb-5 min-w-75">
                    <div class="text-primary">
                        {{ getGenre(media) }}
                    </div>

                    <div>
                        {{ getReleaseYear(media) }}
                    </div>

                    <template v-if="getCountry(media)">
                        <div>
                            {{ getCountry(media).english_name }}
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
        <div class="d-flex flex-column justify-content-around">
            <div class="text-tertiary">
                <h2 class="font-family-secondary text-shadow-lg">
                    {{ media.original_name || media.title }}
                </h2>
                
                <div class="h6">
                    <span class="mr-2 font-weight-bold">
                        {{ media.number_of_seasons }}
                        {{
                            media.number_of_seasons > 1
                                ? 'Seasons'
                                : 'Season' 
                        }}
                    </span>

                    <span>
                        {{ media.number_of_episodes }}
                        {{ 
                            media.number_of_episodes > 1 
                                ? 'Episodes'
                                : 'Episode'
                        }}
                    </span>
                </div>

                <h4 class="text-warning font-weight-bold">
                    <font-awesome-icon :icon="['fas', 'star']" />
                    {{ media.vote_average }}
                </h4>
            </div>

            <PlayButton class="mt-4" />
        </div>
    </template>

    <template v-else-if="type === 'extra-minified'">
        <div class="d-flex flex-column justify-content-around">
            <div class="text-tertiary mb-3">
                <h4 class="font-family-secondary text-shadow-lg">
                    {{ media.original_name || media.title }}
                </h4>
                
                <div class="h6">
                    <span class="mr-2 font-weight-bold">
                        {{ media.number_of_seasons }}
                        {{
                            media.number_of_seasons > 1
                                ? 'Seasons'
                                : 'Season' 
                        }}
                    </span>

                    <span>
                        {{ media.number_of_episodes }}
                        {{ 
                            media.number_of_episodes > 1 
                                ? 'Episodes'
                                : 'Episode'
                        }}
                    </span>
                </div>

                <span class="h6 text-warning font-weight-bold">
                    <font-awesome-icon :icon="['fas', 'star']" />
                    {{ media.vote_average }}
                </span>
            </div>

            <PlayButton size="xs" />
        </div>
    </template>
</div>
</template>

<script>
import BaseButton from '~/components/Base/BaseButton';
import PlayButton from '~/components/PlayButton';

export default {
    name: 'OverlayMediaInfo',

    components: {
        BaseButton,
        PlayButton
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
