<template>
    <span>
        <span v-if="closing" class="bracket">/</span>
        <span @click="onClick" class="element-name">{{ name }}</span>
    </span>
</template>
<script>

export default {
    props: {
        name: String,
        closing: Boolean
    },
    setup(props, { emit }) {
        const onClick = () => {
            emit('click')
        }

        return {
            onClick
        }
    },
    emits: ['click']
}
</script>
