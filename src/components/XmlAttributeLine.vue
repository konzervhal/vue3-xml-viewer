<template>
    <span :class="{'d-flex flex-wrap': attributes.length}">
        <XmlAttribute v-for="(attribute, index) in attributes" :key="index" :attribute="attribute" />
    </span>
</template>
<script>
import XmlAttribute from './XmlAttribute.vue'

export default {
    name: 'XmlElement',
    components: {
        XmlAttribute
    },
    props: {
        attributes: Array
    }
}
</script>
