<template>
    <div>
        <div
            v-if="data.length"
            class="d-flex flex-column"
        >
            <h5
                v-if="title"
                class="text-white mb-2"
            >
                {{ title }}
            </h5>

            <h6
                v-if="subtitle"
                class="text-tertiary mt-2"
            >
                {{ subtitle }}
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
        },

        subtitle: {
            type: String,
            required: false,
            default: ''
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