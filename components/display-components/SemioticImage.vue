<template>
    <div>
        <canvas
        ref="semioticCanvas"
        width="700"
        height="466"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    photo: Object,
})
const semioticCanvas = ref()

onMounted(() => {
    const ctx = semioticCanvas.value.getContext(`2d`)
	const helperImg = new Image()
	helperImg.src = props.photo.imageLink
	ctx.globalCompositeOperation = 'normal'
	helperImg.onload = () => {
		const overlay = new Image()
		overlay.src = `/images/semiotics/${props.photo.semioticValue}.png`
		overlay.onload = () => {
			ctx.globalCompositeOperation = props.photo.renderMode
			ctx.drawImage(overlay, props.photo.overlayX, props.photo.overlayY, 100, 100);
		}
		ctx.drawImage(helperImg, 0, 0, 700, 466)
        const dataURL = ctx.toDataURL()
	}
})
</script>

<style lang="scss" scoped>

</style>