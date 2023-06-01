<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row class="mb-15">
				<v-col cols="12"
					class="">
					<h1 class="text-h1 text-center mb-4">Realm Approval</h1>
					<p class="text-body-1 text-center mb-1">There are {{ totalSubmissions }} unapproved submissions.</p>
				</v-col>
			</v-row>
			<v-card variant="outlined"
				color="primary-darken-1"
				class="pa-15 text-primary mb-8"
				v-for="(submission, idx) in fields"
				:key="submission.value.imageId">
				<v-row class="text-primary">
					<v-col cols="12"
						lg="7">
						<div class="d-flex align-center mb-3">
							<h6 class="text-h6 text-primary">{{ submission.value.imageId }}: &nbsp;</h6>
							<h5 class="text-h5 text-primary">Evidence of {{ getRealmNameProperCasing(submission.value.realm) }}</h5>
						</div>
						<v-img class="realmImage mb-5"
							cover
							:src="submission.value.imageLink"
							lazy-src="/images/mocks/placeholder-wide.jpg"
							:alt="submission.value.altText"/>
					</v-col>	
					<v-col cols="12"
						lg="5">
						<CBDropdownSelect
							class="text-primary"
							:errors="errors[`submissions[${idx}].realm`]"
							:items="siteStore.realmNames"
							:hint="null"
							label="Realm Name"
							:name="`submissions[${idx}].realm`"
						/>
						<CBTextField
							class="text-primary"
							label="Image Alt Text"
							:name="`submissions[${idx}].altText`"
							:hint="null"
							:error-messages="errors.altText"
						/>
						<CBTextArea
							:name="`submissions[${idx}].lore`"
							label="Image Lore"
							:errors="errors[`submissions[${idx}].lore`]"
						/>
						<p class="text-body-1 text-primary mb-2">:> Operator ID: {{ submission.value.submittedBy }}</p>
						<p class="text-body-1 text-primary mb-4">:> Submission Date: {{ submission.value.submittedAt }}</p>
						<v-row class="d-flex ">
							<v-col cols="12"
								lg="6">
								<BackButton class="mr-2 mb-3"
									text="Approve"
									:realm-icons="['key']"/>
							</v-col>
							<v-col cols="12"
								lg="6">
								<BackButton class="mr-2 mb-3"
									:caution="true"
									variant="outlined"
									text="Deny"
									:realm-icons="['cancel']"/>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-card>
			<!-- <v-row>
				<v-col cols="12"
					md="4">
					<BackButton class="mr-2 mb-3"
						text="Prev. Page"
						:disabled="currentPage <= 1"
						:realm-icons="['arrow-left']"
					/>
				</v-col>
				<v-spacer/>
				<v-col cols="12"
					md="4">
					<BackButton class="mr-2 mb-3"
						text="Next Page"
						:realm-icons="['arrow-right']"
					/>
				</v-col>
			</v-row> -->
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useFirestore } from 'vuefire'
import { useFieldArray, useForm } from 'vee-validate'
import * as yup from 'yup'
import { getStorage, ref as firebaseRef, getDownloadURL } from "firebase/storage"
import { collection, getDocs, query, limit, getCountFromServer } from "firebase/firestore"
import { useRealmNames } from '~/composables/firebase/useRealmNames'
import { useSiteStore } from '~/store/useSiteStore.js'

useRealmNames()
const siteStore = useSiteStore()

// data
const totalSubmissions = ref(0)
const batchOfSubmissions = ref([])
const storage = getStorage()

// firestore setup
const db = useFirestore()
const getSubmissionCount = await getCountFromServer(
	collection(db, `submissions`)
)
const getSubmissions = await getDocs(
	query(collection(db, `submissions`), limit(10))
)

const getRealmNameProperCasing = (realm) => {
	const targetIndex = siteStore.realmNames.findIndex(name => {
		return name.value === realm
	})
	return siteStore.realmNames[targetIndex].title
}

// set page data
totalSubmissions.value = getSubmissionCount.data().count
getSubmissions.forEach((doc) => {
	const { realm, imageId, altText } = doc.data()
	getDownloadURL(firebaseRef(storage, `${realm}/${imageId}`))
		.then((url) => {
			push({
				...doc.data(),
				imageLink: url
			})
		})
})

const { values, handleSubmit, errors } = useForm({
	// validation schema
	validationSchema: yup.object().shape({
		submissions: yup.array().of(
			yup.object().shape({
				realm: yup.string().required().label(`Realm Name`),
				altText: yup.string().nullable().max(150).label(`Image Alt Text`),
				lore: yup.string().max(120).required().label(`Image Lore`)
			})
		)
	})
})

const { remove, push, fields } = useFieldArray(`submissions`)

</script>

