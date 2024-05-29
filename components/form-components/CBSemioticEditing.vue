<template>
    <v-card variant="outlined" class="mb-12 pa-10">
      <v-card-text>
		<div>	
			<h2 class="text-body-2">Semiotic?</h2>
			<v-radio-group v-model="selectedSemiotic" inline density="compact" @update:model-value="drawPhotoToCanvas">
				<v-radio v-for="semiotic in semioticsList" class="mr-1" :key="semiotic.title" :label="semiotic.title" :value="semiotic.value"/>
			</v-radio-group>
		</div>

		<div>	
			<h2 class="text-body-2">Mode?</h2>
			<v-radio-group v-model="selectedMode" inline density="compact" @update:model-value="drawPhotoToCanvas">
				<v-radio v-for="mode in renderModes" :key="mode.value" :label="mode.title" :value="mode.value"/>
			</v-radio-group>
		</div>

		<div class="d-flex">
			<canvas
			class="flex-grow-1"
			style="max-width: 700px; max-height: 466px;"
			ref="semioticCanvas"
			width="700"
			height="466"
			/>

			<div>
			<div class="ml-10 mb-10">
				<div>
					<ArrowButton
					class="ml-9 mb-2"
					arrow-direction="up"
					:distance="-1"
					@move-by="(n) => moveSemiotic(['vert', n])"
					/>
					<div class="mb-2 d-flex">
						<ArrowButton
						class="mr-2"
						arrow-direction="left"
						:distance="-1"
						@move-by="(n) => moveSemiotic(['hori', n])"
						/>
						<ArrowButton
						arrow-direction="right"
						:distance="1"
						@move-by="(n) => moveSemiotic(['hori', n])"
						/>
					</div>
					
					<ArrowButton
					class="ml-9"
					arrow-direction="down"
					:distance="1"
					@move-by="(n) => moveSemiotic(['vert', n])"
					/>
				</div>
			</div>
			
			<div class="ml-10">
				<div>
					<ArrowButton
					class="ml-9 mb-2"
					arrow-direction="up"
					:distance="-20"
					@move-by="(n) => moveSemiotic(['vert', n])"
					/>
					<div class="mb-2">
						<ArrowButton
						class="mr-2"
						arrow-direction="left"
						:distance="-20"
						@move-by="(n) => moveSemiotic(['hori', n])"
						/>
						<ArrowButton
						arrow-direction="right"
						:distance="20"
						@move-by="(n) => moveSemiotic(['hori', n])"
						/>
					</div>
					
					<ArrowButton
					class="ml-9"
					arrow-direction="down"
					:distance="20"
					@move-by="(n) => moveSemiotic(['vert', n])"
					/>
				</div>
			</div>
			</div>
		</div>
	</v-card-text>

      <v-card-actions>
        <v-row no-gutters>
          <v-spacer/>
          <v-col cols="12" lg="5">
            <BackButton
            rounded
            color="primary-darken-2"
            variant="outlined"
            :realm-icons="['floppy']"
            text="Save"
            @click="saveSemiotic()"
            />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFirestore } from 'vuefire'
import { doc, updateDoc } from "firebase/firestore"

const emit = defineEmits([`save-success`])

const props = defineProps({
	photoData: Object
})

const semioticCanvas = ref()

// semiotics
const overlayX = ref(0)
const overlayY = ref(0)
const selectedSemiotic = ref('')
const selectedMode = ref('normal')
const semioticsList = ref([
	{ title: 'Star', value: 'star' },
	{ title: 'Pound', value: 'pound' },
	{ title: 'Zero', value: '0' },
	{ title: 'One', value: '1' },
	{ title: 'Two', value: '2' },
	{ title: 'Three', value: '3' },
	{ title: 'Four', value: '4' },
	{ title: 'Five', value: '5' },
	{ title: 'Six', value: '6' },
	{ title: 'Seven', value: '7' },
	{ title: 'Eight', value: '8' },
	{ title: 'Nine', value: '9' },
])

const renderModes = ref([
	{ title: 'Normal', value: 'normal' },
	{ title: 'Lighter', value: 'lighter' },
	{ title: 'Multiply', value: 'multiply' },
	{ title: 'Screen', value: 'screen' },
	{ title: 'Overlay', value: 'overlay' },
	{ title: 'Darken', value: 'darken' },
	{ title: 'Lighten', value: 'lighten' },
	{ title: 'Color Dodge', value: 'color-dodge' },
	{ title: 'Color Burn', value: 'color-burn' },
	{ title: 'Hard Light', value: 'hard-light' },
	{ title: 'Soft Light', value: 'soft-light' },
	{ title: 'Difference', value: 'difference' },
	{ title: 'Exclusion', value: 'exclusion' },
	{ title: 'Hue', value: 'hue' },
	{ title: 'Saturation', value: 'saturation' },
	{ title: 'Color', value: 'color' },
	{ title: 'Luminosity', value: 'luminosity' }
])

const dialog = ref(false)

const drawPhotoToCanvas = () => {
	const ctx = semioticCanvas.value.getContext(`2d`)
	const helperImg = new Image()
	console.log(helperImg)
	helperImg.crossOrigin = ""
	ctx.globalCompositeOperation = 'normal'
	helperImg.onload = () => {
		// const overlay = new Image()
		// overlay.src = `/images/semiotics/${selectedSemiotic.value}.png`
		// overlay.onload = () => {
		// 	ctx.globalCompositeOperation = selectedMode.value
		// 	ctx.drawImage(overlay, overlayX.value, overlayY.value, 100, 100);
		// }
		// ctx.drawImage(helperImg, 0, 0, 700, 466)
	}
	helperImg.src = props.photoData.value.imageLink
}

onMounted(() => {
	if (props.photoData.value?.overlayY) {
		overlayY.value = props.photoData.value?.overlayY
	}
	if(props.photoData.value?.overlayX) {
		overlayX.value = props.photoData.value?.overlayX
	}
	if(props.photoData.value?.renderMode) {
		selectedMode.value = props.photoData.value?.renderMode
	}
	if(props.photoData.value?.semioticValue) {
		selectedSemiotic.value = props.photoData.value?.semioticValue
	}
	drawPhotoToCanvas()
})

const db = useFirestore()

const moveSemiotic = ([dir, n]) => {
	dir === 'vert' ? overlayY.value += n : overlayX.value += n
	drawPhotoToCanvas()
}

const saveSemiotic = async () => {
	const { realmId, id } = props.photoData.value
	const photoPointer = doc(db, `realms`, realmId, `photographs`, id)
	await updateDoc(photoPointer, {
		overlayY: overlayY.value,
		overlayX: overlayX.value,
		semioticValue: selectedSemiotic.value,
		renderMode: selectedMode.value,
		
	}).then(() => {
		emit('save-success')
	})
}
</script>

<style lang="scss" scoped>

</style>