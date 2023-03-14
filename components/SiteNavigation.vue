<template>
	<v-row
		dense
		class="mx-md-0">
		<v-col cols="12"
			sm="12"
			md="3"
			xl="2"
			class="mb-4 mb-md-0">
			<BackButton class="mr-0 "
				text="/Briefing"
				:realm-icons="['puzzle']"
				link-name="/briefing" />
		</v-col>
		<v-col cols="12"
			sm="12"
			md="3"
			xl="2"
			class="mb-4 mb-md-0">
			<BackButton
				text="/Realms"
				:realm-icons="['map-search-outline']"
				link-name="/realms" />
		</v-col>
		<v-col cols="12"
			sm="12"
			md="3"
			xl="2"
			class="mb-4 mb-md-0">
			<BackButton text="/Artifacts"
				:realm-icons="['diamond-stone']"
				link-name="/artifacts" />
		</v-col>
		<v-col cols="12"
			sm="12"
			md="3"
			xl="2">
			<BackButton text="/OPERATORS"
				:realm-icons="['account']"
				link-name="/operators" />
		</v-col>
	</v-row>
</template>