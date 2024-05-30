<template>
    <v-btn
        color="primary-darken-2"
        class="text-primary"
        @click="moveOverlay"
    >
    <v-icon size="x-large">mdi-arrow-{{ iconName }}</v-icon>
    </v-btn>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits([`moveBy`])

const props = defineProps({
    arrowDirection: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
})

const isThick = computed(() => {
    return props.distance >= 10 || props.distance <= -10
})

const iconName = computed(() => {
    return isThick.value ? `${props.arrowDirection}-thick` : props.arrowDirection
})

const moveOverlay = () => {
    emit(`moveBy`, props.distance)
}
</script>