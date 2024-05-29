<template>
    <span>
        <canvas
        class="d-none"
        ref="semioticCanvas"
        width="700"
        height="466"
        />
        <v-img contain
        :src="imageLink"
        class="realmImage"
        lazy-src="/images/mocks/placeholder-wide.jpg"
        aspect-ratio="1.5"
        />
    </span>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    photo: Object,
})
const semioticCanvas = ref()
const imageLink = ref('')

onMounted(() => {
    const ctx = semioticCanvas.value.getContext(`2d`)
	const helperImg = new Image()
	helperImg.src = props.photo.imageLink
	ctx.globalCompositeOperation = 'normal'
    helperImg.setAttribute('crossorigin', 'anonymous')
	helperImg.onload = () => {
        ctx.drawImage(helperImg, 0, 0, 700, 466)
        const overlay = new Image()
		overlay.src = `/images/semiotics/${props.photo.semioticValue}.png`
        ctx.globalCompositeOperation = props.photo.renderMode
        overlay.setAttribute('crossorigin', 'anonymous')
		overlay.onload = () => {
			ctx.drawImage(overlay, props.photo.overlayX, props.photo.overlayY, 100, 100);
            const dataURL = semioticCanvas.value.toDataURL('image/webp')
            imageLink.value = dataURL;
		}
	}
})
</script>

<style lang="scss" scoped>

</style>