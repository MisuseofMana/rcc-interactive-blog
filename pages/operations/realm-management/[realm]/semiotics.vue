<template>
    <div>
        <NuxtLayout name="realm-editing">
            <v-container>
                <h4 class="text-h4 mb-8 mt-15">Semiotics - <span v-for="(number, index) in semioticCode" :key="`seminumber-${index}`">{{number}}</span></h4>
                <CBSemioticEditing
                    v-for="photo in fields"
                    :key="photo.id"
                    :photo-data="photo"
                    @save-success="successfulUpload = true"
                />
                <v-snackbar
					v-model="successfulUpload"
					timer="primary"
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
import { ref, onMounted, computed } from 'vue'
import { useForm, useFieldArray } from 'vee-validate'
import { useRealmSemioticPhotos } from '~/composables/firebase/useRealmData'

// eslint-disable-next-line no-undef
const route = useRoute()

const resetValues = ref([])
const successfulUpload = ref(false)

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

const { resetForm } = useForm()

onMounted(() => {
    useRealmSemioticPhotos(route.params.realm).then(({ semioticsData }) => {
        semioticsData.value.forEach((entry) => {
            resetValues.value.push(entry)
        })
        resetValues.value = semioticsData.value
        resetForm({ values: { photos: resetValues.value } })
    })
})
const { fields } = useFieldArray(`photos`)

const semioticCode = computed(() => {
    return fields.value.map((item) => {
        return item.value.semioticValue ? item.value.semioticValue : 'X'
    })
})

</script>