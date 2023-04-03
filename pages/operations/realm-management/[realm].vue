<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-row class="mb-10 mt-10">
			<v-col cols="4"
				sm="5"
				md="2">
				<v-img class="abberation"
					:src="`/images/icons/${currentRealm.slug}.png`"
					alt="a radial icon representing the realm you're editing"></v-img>
			</v-col>
			<v-col cols="12"
				sm="7"
				md="10"
				class="mb-2">
				<div>
					<h2 class="text-h2 text-deep-orange-darken-4 ">CAUTION: CONSEQUENCES</h2>
					<h3 class="text-h3 text-deep-orange-darken-4 mb-10">You are editing the realm: {{ currentRealm.title }}</h3>
					<p class="text-body-1 text-deep-orange-darken-4 mb-15">Changes to the text are permenant. Image ommission is reversible, image deletion is not.</p>
					<div class="d-flex justify-space-between align-center ">
						<p class="text-body-1">Realm last modified: {{ currentRealm.lastUpdated }} ago</p>
					</div>
				</div>
			</v-col>
		</v-row>

		<h4 class="text-h4 mb-3">Realm Details</h4>
		<v-card variant="outlined"
			color="primary-darken-1"
			class="pa-15 text-primary mb-15">
			<v-row>
				<v-col cols="12"
					lg="7">
					<v-text-field variant="outlined"
						class="text-primary mb-5"
						v-model="currentRealm.title"
						counter="30"
						label="Realm Name"
						hint="The name of the realm."/>
					<v-text-field variant="outlined"
						class="text-primary mb-5"
						v-model="currentRealm.slug"
						counter="30"
						label="Realm Slug"
						hint="The URL friendly slug of the realm. Must be all lowercase letters."/>
					<div
						v-for="(icon, index) in currentRealm.iconNames"
						:key="icon+index"
						class="d-flex align-center"
					>
						<v-text-field 
							variant="outlined"
							class="text-primary mb-5"
							v-model="icons[index]"
							counter="30"
							:label="`Icon ${index + 1}`"
							:prepend-icon="`mdi-${icons[index]}`"
							hint="Input mdi friendly icon references. If the icon displays to the right, it is valid."/>
					</div>
					<v-textarea
						class="primary text-primary mb-10"
						variant="filled"
						label="Realm Narrative"
						counter="200"
						auto-grow
						:model-value="currentRealm.narrative"
					></v-textarea>
				</v-col>
				<v-col cols="12"
					lg="5">
					<v-img
						class="abberation mb-8"
						contain
						:src="`/images/icons/${currentRealm.slug}.png`"
						alt="geometric shape"/>
					<v-file-input :multiple="false"
						class="text-primary mb-5"
						color="primary"
						show-size
						label="The realm's sigil"
						prepend-icon="mdi-camera"></v-file-input>

					<BackButton class="mr-2 mb-3"
						variant="outlined"
						text="Undo Edits"
						rounded
						:realm-icons="['undo']"
						@click="startExam"/>
					<BackButton class="mr-2"
						rounded
						:caution="false"
						variant="elevated"
						:text="false ? `Cannot Modify` :`Save Changes`"
						:disabled="false"
						:realm-icons="['floppy']"/>
				</v-col>	
			</v-row>
		</v-card>

		<h4 class="text-h4 mb-3 mt-15">Realm Imagery</h4>
		<v-card variant="outlined"
			:color="submission.hint ? `deep-orange-darken-4` : `primary-darken-1`"
			class="pa-15 text-primary mb-8"
			v-for="(submission, index) in currentRealm.documents"
			:key="submission.filePath+index">
			<v-row>
				<v-col cols="12"
					lg="5">
					<v-img
						class="realmImage noCursor"
						contain
						:src="`/images/${currentRealm.slug}/${submission.filePath}.jpg`"
						alt="geometric shape"/>
				</v-col>	
				<v-col cols="12"
					lg="7">
					<v-card color="primary-darken-3"
						class="mb-5 pa-3">
						<v-chip
							v-if="submission.isPublished"
							class="mr-2"
							color="primary"
							variant="elevated"
						>
							Published
						</v-chip>
						<v-chip
							v-if="submission.hint"
							color="yellow"
							variant="elevated"
							class="mr-2"
						>
							Newly Published
						</v-chip>
						<v-chip
							v-if="submission.hint"
							class="mr-2 "
							color="teal-accent-3"
							variant="elevated"
						>
							Has Hint
						</v-chip>
						<v-chip
							v-if="submission.hint"
							color="deep-orange-darken-4"
							variant="elevated"
							class="mr-2"
						>
							Cannot Be Changed
						</v-chip>
					</v-card>

					<v-file-input :multiple="false"
						class="primary text-primary"
						show-size
						label="Image Upload"
						prepend-icon="mdi-camera"></v-file-input>
					<v-textarea
						prepend-icon="mdi-comment"
						class="primary text-primary"
						variant="filled"
						label="Image Lore"
						counter="120"
						auto-grow
						:model-value="submission.copy"
					></v-textarea>
				</v-col>
				<v-col cols="12"
					lg="6"
					class="d-lg-flex">
					<BackButton class="mr-2"
						variant="outlined"
						text="Undo Edits"
						rounded
						:realm-icons="['undo']"
						@click="startExam"/>
					<BackButton class="mr-2 mb-3"
						rounded
						:caution="submission.hint"
						:variant="submission.hint ? `outlined` : `elevated`"
						:text="submission.hint ? `Cannot Modify` :`Save Changes`"
						:disabled="submission.hint"
						:realm-icons="['floppy']"/>
				</v-col>
			</v-row>
		</v-card>

	</NuxtLayout>
</template>

<script setup>
import { pages } from '../../realms.data'
import { onMounted, ref } from 'vue'
import { useClassifyRealm } from '~/composables/useClassifyRealm'

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

const { classifiedRealms } = useClassifyRealm(pages)

// eslint-disable-next-line no-undef
const route = useRoute()

const currentRealm = ref({})

onMounted(() => {
	currentRealm.value = classifiedRealms.value.find(object => object.slug === route.params.realm)
	currentRealm.value.iconNames.forEach(((icon) => {
		icons.value.push(icon)
	}))
	currentRealm.value.documents.forEach(((document, index) => {
		currentRealm.value.documents[index] = {
			...document,
			isPublished: true,
		}
		images.value.push(document.filePath)
	}))
})

const icons = ref([])
const images = ref([])
</script>

<style scoped>
.noCursor {
	cursor: default;
}
.minHeight {
	min-height: 150px;
}
</style>