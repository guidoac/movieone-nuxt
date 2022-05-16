<template>
    <div class="bg-primary w-100 py-5">
        <div class="w-75 mx-auto">
            <h4 class="fw-bold text-white w-50 mx-auto text-center mb-5">
                Subscribe our newsletter for newest movies updates
            </h4>

            <div class="w-75 justify-content-center mx-auto row h6">
                <BaseInput
                    class="px-3 py-2 newsletter-input me-3 col-6"
                    placeholder="Type your email here"
                />

                <BaseButton
                    class="text-primary mb-0 col-3"
                    variant="light"
                >
                    Subscribe
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script>
import BaseInput from '~/components/Base/BaseInput';
import BaseButton from '~/components/Base/BaseButton';

    export default {
        name: 'TheNewsletter',

        components: {
            BaseButton,
            BaseInput,
        }
    }
</script>

<style lang="scss" scoped>
.newsletter-input {
    background-color: rgba(201, 201, 201, 0.363);
}
</style>