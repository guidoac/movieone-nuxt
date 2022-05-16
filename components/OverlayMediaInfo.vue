<template>
<div>
    <template v-if="type === 'default'">
        <div>
            <div class="d-flex flex-column text-tertiary mb-5">
                <div class="d-flex justify-content-between mb-5 min-w-75">
                    <div class="text-primary">
                        {{ $getGenre }}
                    </div>

                    <div>
                        {{ $getReleaseYear }}
                    </div>

                    <template v-if="$getCountry">
                        <div>
                            {{ $getCountry.english_name }}
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
                <h1 class="font-family-secondary text-cyan-200">
                    {{ media.original_name || media.title }}
                </h1>
                <h6 class="h7">
                    {{ media.overview }}
                </h6>
            </div>

            <div class="h7 d-flex flex-row justify-content-left">
                <BaseButton class="d-flex py-2 px-4 align-items-center me-3">
                    Watch Now

                    <template #second-icon>
                        <font-awesome-icon
                            :icon="['far', 'play-circle']"
                            class="ms-3 h5 mb-0"
                        />
                    </template>
                </BaseButton>

                <BaseButton
                    variant="outline-tertiary"
                    class="d-flex py-2 px-4 align-items-center"
                >
                    Add to Watchlist
                </BaseButton>
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
                    <span class="me-2 fw-bold">
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

                 <RatingWidget :rating="media.vote_average" />
            </div>

            <PlayButton class="mt-2" />
        </div>
    </template>

    <template v-else-if="type === 'extra-minified'">
        <div class="d-flex flex-column justify-content-around">
            <div class="text-tertiary mb-2">
                <h5 class="font-family-secondary text-shadow-lg">
                    {{ media.original_name || media.title }}
                </h5>
                
                <div class="h7">
                    <span class="me-2 fw-bold">
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
            </div>

            <div class="d-flex flex-row align-items-center justify-content-between w-75">
                <RatingWidget
                    :size="4"
                    :rating="media.vote_average"
                />

                <PlayButton size="xs" />
            </div>
        </div>
    </template>
</div>
</template>

<script>
import BaseButton from '~/components/Base/BaseButton';
import PlayButton from '~/components/PlayButton';
import RatingWidget from '~/components/RatingWidget';

export default {
    name: 'OverlayMediaInfo',

    components: {
        BaseButton,
        PlayButton,
        RatingWidget,
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
