<template>
	<v-row dense
		class="mb-10">
		<v-col cols="6"
			sm="6"
			md="4"
			xl="2"
			:class="alignRight ? `offset-xl-4` : ``">
			<BackButton
				text="/Intro"
				:realm-icons="['file-document-alert']"
				link-name="/intro" />
		</v-col>
		<v-col cols="6"
			sm="6"
			md="4"
			xl="2">
			<BackButton
				text="/Realms"
				:realm-icons="['map-search-outline']"
				link-name="/realms" />
		</v-col>
		<v-col cols="6"
			sm="6"
			md="4"
			xl="2">
			<BackButton text="/OPERATOR EXAM"
				:realm-icons="['radar']"
				:disabled="lockedFromExam"
				link-name="/operator-exam" />
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'

defineProps({
	alignRight: Boolean
})

onBeforeMount(() => {
	if(localStorage.savedDay === undefined){
		localStorage.savedDay = new Date().setHours(0,0,0,0)
		localStorage.remainingAttempts = 5
	}

	if( localStorage.savedDay < new Date().setHours(0,0,0,0) ) {
		localStorage.savedDay = new Date().setHours(0,0,0,0)
		localStorage.remainingAttempts = 5
	}
})

const lockedFromExam = computed(() => {
	return localStorage.remainingAttempts <= 0
})

</script>