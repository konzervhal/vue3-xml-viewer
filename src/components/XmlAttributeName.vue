<template>
    <span>
        <span class="attribute-name">{{ name }}</span>
    </span>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: String
    }
})
</script>
