<template>
    <div>
        <div
            v-if="data.length"
            class="d-flex flex-column"
        >
            <h6 class="text-white mb-2">
                {{ title }}
            </h6>
            <VueSlickCarousel
                v-bind="carouselConfig"
                class="watching-list mt-2 position-relative"
            >
                <slot name="tile" />
                <template #customPaging>
                    <div class="bg-tertiary p-1 rounded-circle mx-2 opacity-50" />
                </template>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'MediaLIst',

    components: {
        VueSlickCarousel,
    },

    props: {
        data: {
            type: Array,
            required: true
        },

        title: {
            type: String,
            required: true
        }
    },

    data () {
        return {
            carouselConfig: {
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 3,
                dots: true,
                arrows: false,
                dotsClass: 'd-flex position-absolute right-0 upper-dots'
            }
        }
    },
}
</script>

<style lang="scss">
.upper-dots {
    top: -2rem;
    right: 2rem;
    cursor: pointer;

    .slick-active {
        div {
            background: white;
            opacity: 100%;
        }
    }
}

</style>