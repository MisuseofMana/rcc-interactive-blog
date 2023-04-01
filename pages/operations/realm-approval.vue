<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					class="">
					<h1 class="text-h1 text-center mb-4">Realm Approval</h1>
					<p class="text-body-1 text-center mb-10">Page {{ currentPage }} of {{pagesTotal}}</p>
				</v-col>
			</v-row>
			<v-card variant="outlined"
				color="primary-darken-1"
				class="pa-15 text-primary mb-8"
				v-for="(submission, index) in submissions"
				:key="submission.lore+index">
				<v-row>
					<v-col cols="12"
						xl="4">
						<v-img class="abberation"
							contain
							:src="submission.imageSrc"
							alt="geometric shape"/>
					</v-col>	
					<v-col cols="12"
						xl="5">
						<h6 class="text-h6 text-primary mb-4">{{ submission.title }}</h6>
						<p class="text-body-1 text-primary">{{ submission.lore }}</p>
					</v-col>
					<v-col cols="12"
						xl="3"
						class="d-flex flex-column align-center justify-center">
						<BackButton class="mr-2 mb-3"
							rounded
							text="Approve"
							:realm-icons="['key']"/>
						<BackButton class="mr-2"
							:caution="true"
							variant="outlined"
							text="Deny"
							rounded
							:realm-icons="['key']"
							@click="startExam"/>
					</v-col>
				</v-row>
			</v-card>
			<v-row>
					<v-col cols="12" md="4">
						<BackButton class="mr-2 mb-3"
							text="Prev. Page"
							:disabled="currentPage <= 1"
							:realm-icons="['arrow-left']"
							/>
					</v-col>
					<v-spacer/>
					<v-col cols="12" md="4">
						<BackButton class="mr-2 mb-3"
							text="Next Page"
							:realm-icons="['arrow-right']"
							/>
					</v-col>
				</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
const submissions = ref([
	{ title: `Lierd`, imageSrc: `/images/mocks/lazyload.jpg`, lore: `A bastion for Operators. The realm is blanketed by wards. Witches dare not set foot beyond the trees.` },
	{ title: `Other`, imageSrc: `/images/mocks/lazyload.jpg`, lore: `A bastion for Operators. The realm is blanketed by wards. Witches dare not set foot beyond the trees.` },
])

const pagesTotal = ref(3)
const currentPage = ref(1)
</script>

