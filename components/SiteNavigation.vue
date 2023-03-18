<template>
	<v-row
		dense
		class="mx-md-0">
		<v-col cols="6"
			sm="4"
			md="3"
			xl="2"
			class="mb-sm-2 mb-md-0">
			<BackButton class="mr-0 "
				text="/Briefing"
				:realm-icons="['file-document-alert']"
				link-name="/briefing" />
		</v-col>
		<v-col cols="6"
			sm="4"
			md="3"
			xl="2"
			class="mb-sm-2 mb-md-0">
			<BackButton
				text="/Realms"
				:realm-icons="['map-search-outline']"
				link-name="/realms" />
		</v-col>
		<v-col cols="6"
			sm="4"
			md="3"
			xl="2"
			class="mb-sm-2 mb-md-0">
			<BackButton text="/Artifacts"
				:realm-icons="['diamond-stone']"
				link-name="/artifacts" />
		</v-col>
		<v-col cols="6"
			sm="4"
			md="3"
			xl="2">
			<BackButton text="/EXAM"
				:realm-icons="['radar']"
				link-name="/operators" />
		</v-col>
	</v-row>
</template>