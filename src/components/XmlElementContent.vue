<template>
    <div>
        <div class="element-content">
            {{ content }}
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'

export default {
    props: {
        node: Text
    },
    setup(props) {
        const content = computed(() => props.node.textContent)

        return {
            content
        }
    }
}
</script>
