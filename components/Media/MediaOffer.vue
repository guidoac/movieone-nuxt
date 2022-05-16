<template>
    <div>
        <MediaBox>
            <MediaCoverPhoto :url="media.poster_path" />
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
            MediaCoverPhoto
        },

        props: {
            media: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>