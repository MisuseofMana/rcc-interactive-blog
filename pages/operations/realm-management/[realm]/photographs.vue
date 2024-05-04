<template>
	<div>
		<NuxtLayout name="realm-editing">
			<v-container>
				<h4 class="text-h4 mb-8 mt-15">Realm Photographs</h4>
				<v-row>
					<v-col cols="12"
						lg="6">
						<BackButton class="mr-2 mb-10"
							:text="rearrangeMode ? `Exit Rearrange Mode` : `Enter Rearrange Mode`"
							rounded
							:realm-icons="rearrangeMode ? ['close-circle'] : ['check-circle']"
							:warning="rearrangeMode"
							@click="rearrangeMode = !rearrangeMode"/>
					</v-col>
					<v-col cols="12"
						lg="6"
						v-if="rearrangeMode">
						<BackButton class="mr-2 mb-10"
							text="Save Order Of All Images"
							rounded
							:realm-icons="['floppy']"
							@click="saveAllPositions()"/>
					</v-col>
				</v-row>
				<TransitionGroup name="list"
					tag="div">
					<v-card variant="outlined"
						class="pa-15 mb-8"
						v-for="(photo, idx) in fields"
						:class="photo?.value?.hasSemiotic ? `text-teal-accent-3` : `text-primary`"
						:key="photo?.key">
						<v-row>
							<v-col cols="12"
								v-if="!rearrangeMode">
								<div class="d-flex justify-space-between">
									<CBToggleSwitch
										class="text-primary primary mr-5"
										color="primary"
										:name="`photos[${idx}].hasSemiotic`"
										v-model="photo.value.hasSemiotic"
										label="Image Has Semiotic"
									/>
									<CBToggleSwitch
										class="text-primary mr-5"
										:name="`photos[${idx}].published`"
										v-model="photo.value.published"
										label="Is Published"
									/>
									<CBToggleSwitch
										class="text-primary"
										:name="`photos[${idx}].useAsCoverImage`"
										v-model="photo.value.useAsCoverImage"
										label="Use As Cover Image"
									/>
								</div>
							</v-col>
							<v-col cols="12"
								lg="1"
								class="d-flex align-center flex-column justify-center"
								v-if="rearrangeMode">
								<v-btn
									class="mb-2"
									variant="plain"
									size="x-large"
									:disabled="photo.isFirst"
									:color="photo.isFirst ? 'red' : 'primary'"
									@click="move(idx, 0)"
								>
									<v-icon
										icon="mdi-format-vertical-align-top"
										size="50px"
									>
									</v-icon>
								</v-btn>
								<v-btn
									class="mb-5"
									variant="plain"
									size="x-large"
									:disabled="photo.isFirst"
									:color="photo.isFirst ? 'red' : 'primary'"
									@click="swap(idx, idx-1)"
								>
									<v-icon
										icon="mdi-arrow-up-bold-hexagon-outline"
										size="50px"
									>
									</v-icon>
								</v-btn>
								<p class="mb-5 text-primary">
									{{ `${idx + 1}/${fields.length} ` }}
								</p>
								<v-btn 
									class="mb-2"
									variant="plain"
									size="x-large"
									:disabled="photo.isLast"
									:color="photo.isLast ? 'red' : 'primary'"
									@click="swap(idx, idx+1)"
								>
									<v-icon
										icon="mdi-arrow-down-bold-hexagon-outline"
										size="50px"
									>
									</v-icon>
								</v-btn>
								<v-btn
									variant="plain"
									size="x-large"
									:disabled="photo.isLast"
									:color="photo.isLast ? 'red' : 'primary'"
									@click="move(idx, fields.length-1)"
								>
									<v-icon
										icon="mdi-format-vertical-align-bottom"
										size="50px"
									>
									</v-icon>
								</v-btn>
							</v-col>
							<v-col cols="12"
								lg="6"
								v-show="!rearrangeMode"
							>
								<p class="text-subtitle-1 text-primary mb-2">Submitted by {{ photo.value.submittedBy }}</p>
								<v-card color="primary-darken-3"
									class="mb-5 pa-3">
									<!-- <v-chip
							v-if="determineDirty(idx)"
							class="mr-2"
							color="secondary"
							variant="elevated"
						>
							Unsaved Changes
						</v-chip> -->
									<v-chip
										class="mr-2"
										:color="resetValues[idx]?.published ? `primary` : `red`"
										variant="elevated"
									>
										{{ resetValues[idx]?.published ? `Published` : `Not Published` }}
									</v-chip>
									<v-chip
										v-if="useLastUpdated(photo?.value?.submittedAt).isRecent.value"
										color="yellow"
										variant="elevated"
										class="mr-2"
									>
										Newly Published
									</v-chip>
									<v-chip
										v-if="photo?.value?.hasSemiotic"
										class="mr-2 "
										color="teal-accent-3"
										variant="elevated"
									>
										Has Semiotic
									</v-chip>
								</v-card>

								<!-- <v-file-input :multiple="false"
						class="primary text-primary"
						show-size
						label="Change Image"
						v-model="photo.value.imageFile"
						prepend-icon="mdi-camera"></v-file-input> -->
								<CBTextArea
									class="mb-5"
									:name="`photos[${idx}].lore`"
									label="Image Lore"
									v-model="photo.value.lore"
									counter="200"
									hint="One or two musing sentences about the image."
								/>
								<h5 v-if="photo.value?.order != null"
									class="text-h5 text-paragraph text-primary">Archived as #{{ photo.value?.order >= 0 ? photo.value.order : 'X' }}</h5>
								<h5 v-if="photo.value?.order === null"
									class="text-h5 text-paragraph text-primary">No Order Recorded</h5>

							</v-col>
							<v-col cols="12"
								lg="6">
								<v-img
									class="realmImage noCursor"
									contain
									:src="photo?.value?.imageLink"
									lazy-src="/images/mocks/placeholder-wide.jpg"
									alt="geometric shape"/>
							</v-col>
							<v-col cols="12"
								lg="5"
								class="d-flex flex-column justify-center"
								v-if="rearrangeMode">
								<h5 class="text-h5 text-paragraph mb-5">Archived as #{{ photo.value?.order >= 0 ? photo.value.order : 'X' }}</h5>
								<h4 class="text-h4 text-primary mb-1">Submitted by</h4>
								<p class="text-primary text-paragraph mb-5">{{ photo.value.submittedBy }}</p>
								<h5 class="text-h5 text-primary mb-1">Lore</h5>
						
								<p class="text-primary text-paragraph">{{ photo.value.lore }}</p>
							</v-col>
							<v-col cols="12"
								lg="6"
								class="d-md-flex"
								v-if="!rearrangeMode">
								<BackButton 
									color="primary-darken-2"
									variant="outlined"
									text="Undo Edits"
									rounded
									:realm-icons="['undo']"
									@click="undoPhotoEdits(idx)"/>
								<BackButton class="ml-10 mb-3"
									rounded
									:warning="photo?.value?.hasSemiotic"
									:text="photo?.value?.hasSemiotic ? `Save With Caution` :`Save Changes`"
									:realm-icons="['floppy']"
									@click="submitPhotoEdit(photo.value, idx)"/>
							</v-col>
						</v-row>
					</v-card>
				</TransitionGroup>
				<v-row>
					<v-col cols="12"
						lg="6">
						<BackButton class="mr-2 mb-10"
							:text="rearrangeMode ? `Exit Rearrange Mode` : `Enter Rearrange Mode`"
							rounded
							:realm-icons="rearrangeMode ? ['close-circle'] : ['check-circle']"
							:warning="rearrangeMode"
							@click="rearrangeMode = !rearrangeMode"/>
					</v-col>
					<v-col cols="12"
						lg="6"
						v-if="rearrangeMode">
						<BackButton class="mr-2 mb-10"
							text="Save Order Of All Images"
							rounded
							:realm-icons="['floppy']"
							@click="saveAllPositions()"/>
					</v-col>
				</v-row>
				<v-snackbar
					v-model="successfulUpload"
					timer
					timeout="1500"
				>
					<p class="text-primary text-body-2">
						Upload Succeeded
					</p>

					<template v-slot:actions>
						<v-btn
							color="primary"
							variant="text"
							@click="successfulUpload = false"
						>
							Close
						</v-btn>
					</template>
				</v-snackbar>
			</v-container>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useForm, useFieldArray } from 'vee-validate'
import { useRealmPhotos } from '~/composables/firebase/useRealmData'
import { doc, updateDoc, writeBatch } from "firebase/firestore"
import { useFirestore } from 'vuefire'

// eslint-disable-next-line no-undef
const route = useRoute()
// eslint-disable-next-line no-undef
const router = useRouter()

const db = useFirestore()
const rearrangeMode = ref(false)
const resetValues = ref([])

const successfulUpload = ref(false)


// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

const { resetForm } = useForm()

onMounted(() => {
	useRealmPhotos(route.params.realm).then(({realmPhotosData}) => {
		realmPhotosData.value.forEach((entry) => {
			resetValues.value.push(entry)
		})
		resetValues.value = realmPhotosData.value
		resetForm({ values: { photos: resetValues.value }})
	})
})

const { fields, update, swap, move } = useFieldArray(`photos`)

const undoPhotoEdits = (idx) => {
	update(idx, resetValues.value[idx])
}

const submitPhotoEdit = async (values, idx) => {
	const { realmId, id, lore, hasSemiotic, useAsCoverImage, published } = values
	const photoPointer = doc(db, `realms`, realmId, `photographs`, id)
	await updateDoc(photoPointer, {
		lore,
		useAsCoverImage,
		published,
		hasSemiotic: hasSemiotic ? hasSemiotic : false,
		order: idx,
	}).then(() => {
		resetValues.value[idx] = values
		successfulUpload.value = true
	})
}

const saveAllPositions = async () => {
	const batch = writeBatch(db)
	fields.value.forEach((upload, idx) => {
		const photoPointer = doc(db, `realms`, upload.value.realmId, `photographs`, upload.value.id)
		if (upload.key !== idx || upload?.value?.order === null) {
			batch.update(photoPointer, {
				order: idx
			})
		}
	})
	await batch.commit().then(() => {
		rearrangeMode.value = false
	})
	router.go()
}
</script>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>