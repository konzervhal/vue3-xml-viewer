<template>
    <div>
        <div class="cdata-content">
            <span>&lt;![CDATA[</span>
            <pre class="inline no-margin-padding">{{ content }}</pre><span>]]&gt;</span>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'

export default {
    props: {
        cdataSection: Text
    },
    setup(props) {
        const content = computed(() => props.cdataSection.textContent)

        return {
            content
        }
    }
}
</script>
