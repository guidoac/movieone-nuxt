<template>
    <div>
        <BaseInput
            placeholder="Pesquise um filme aqui"
            class="py-2"
            theme="black"
        >
            <template #first-icon>
                <div class="mx-3">
                    <font-awesome-icon :icon="['fas', 'search']" />
                </div>
            </template>
        </BaseInput>
    </div>
</template>

<script>
import BaseInput from '~/components/Base/BaseInput'

export default {
    name: 'SearchInput',

    components: {
        BaseInput
    }
}
</script>

<style lang="scss" scoped>

</style>