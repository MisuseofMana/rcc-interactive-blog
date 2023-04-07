<template>
	<v-row dense class="my-12">
		<v-col cols="6"
			sm="6"
			md="3"
			xl="2"
			:class="alignRight ? `offset-xl-4` : ``">
			<BackButton
				text="/Briefing"
				:realm-icons="['file-document-alert']"
				link-name="/briefing" />
		</v-col>
		<v-col cols="6"
			sm="6"
			md="3"
			xl="2">
			<BackButton
				text="/Realms"
				:realm-icons="['map-search-outline']"
				link-name="/realms" />
		</v-col>
		<v-col cols="6"
			sm="6"
			md="3"
			xl="2">
			<BackButton text="/Artifacts"
				:realm-icons="['diamond-stone']"
				link-name="/artifacts" />
		</v-col>
		<v-col cols="6"
			sm="6"
			md="3"
			xl="2">
			<BackButton text="/EXAM"
				:realm-icons="['radar']"
				:disabled="lockedFromExam"
				link-name="/operator-exam" />
		</v-col>
	</v-row>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
	alignRight: Boolean
})

const lockedFromExam = computed(() => {
	return localStorage.remainingAttempts <= 0
})

</script>