<template>
    <div>
        <MediaBox>
            <MediaCoverPhoto
                :url="media.poster_path"
                class="col-8 mb-2"
            />

            <p class="bg-primary bg-opacity-25 p-2 rounded-2xl border border-primary h8 text-primary text-uppercase">
                {{ $getGenre }}
            </p>

            <div class="row w-100 justify-content-between">
                <div class="col-6">
                    <StarRating
                        :star-size="20"
                        :rating="media.vote_average"
                        :read-only="true"
                        active-color="#fcbc04"
                    />

                    <p class="text-muted mt-2 h8">{{ `${media.vote_count} Reviews` }}</p>
                </div>

                <div class="col-6 text-end">
                    <p class="fw-bold fs-5 text-light mb-0">
                        {{ randomPrice | price }} 
                    </p>

                    <p class="h8 text-decoration-line-through text-muted">
                       {{ randomPrice + 20 | price }} 
                    </p>
                </div>
            </div>
        </MediaBox>
    </div>
</template>

<script>
import MediaBox from '~/components/MediaBox';
import MediaCoverPhoto from '~/components/MediaCoverPhoto';

export default {
    name: 'MediaOffer',

    components: {
        MediaBox,
        MediaCoverPhoto,
    },

    props: {
        media: {
            type: Object,
            required: true
        }
    },

    computed: {
        randomPrice () {
            return Number(this.$utils.random(1, 100, true).toFixed(2));
        }
    },
}
</script>

<style lang="scss" scoped>

</style>