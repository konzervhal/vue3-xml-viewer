<template>
    <span>
        <span class="attribute-value">{{ value }}</span>
    </span>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        value: String
    }
})
</script>
