<template>
    <span>
        <XmlAttributeName :name="name" class="margin-left-sm" />
        <span class="no-margin-padding assignment">=</span>
        <span class="no-margin-padding quote">"</span>
        <XmlAttributeValue :value="value" class="no-margin-padding" />
        <span class="no-margin-padding quote">"</span>
    </span>
</template>
<script>
import XmlAttributeName from './XmlAttributeName.vue'
import XmlAttributeValue from './XmlAttributeValue.vue'

import { computed } from 'vue'

export default {
    name: 'XmlElement',
    components: {
        XmlAttributeName,
        XmlAttributeValue
    },
    props: {
        attribute: Attr
    },
    setup(props) {
        const name = computed(() => props.attribute.name)
        const value = computed(() => props.attribute.value)

        return {
            name,
            value
        }
    }
}
</script>
