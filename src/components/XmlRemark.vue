<template>
    <div>
        <div class="remark-content">
            &lt;!--
            <pre class="inline no-margin-padding">{{ content }}</pre> --&gt;
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'

export default {
    props: {
        remark: Comment
    },
    setup(props) {
        const content = computed(() => props.remark.textContent)

        return {
            content
        }
    }
}
</script>
