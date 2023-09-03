<template>
    <div>
        <div class="element-content">
            {{ content }}
        </div>
    </div>
</template>
<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        node: Text
    },
    setup(props) {
        const content = computed(() => props.node.textContent)

        return {
            content
        }
    }
})
</script>
