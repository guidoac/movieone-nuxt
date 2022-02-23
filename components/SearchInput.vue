<template>
    <div>
        <BaseInput
            placeholder="Pesquise um filme aqui"
            class="py-2"
        >
            <template #first-icon>
                <font-awesome-icon :icon="['fas', 'search']" />
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