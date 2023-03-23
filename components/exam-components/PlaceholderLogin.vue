<template>
	<v-container>
		<v-row no-gutters
			dense>
			<v-col cols="12"
				class="text-center text-primary text-h3">
				<p>ACCESS GRANTED</p>
			
			
			</v-col>
		
		</v-row>
		<v-row>
			<v-spacer/>
			<v-col cols="12"
				md="6"
				lg="4">
				<v-form>
					<v-text-field
						v-model="firstname"
						:rules="nameRules"
						:counter="10"
						label="First name"
						required
					></v-text-field>

					<v-text-field
						v-model="lastname"
						:rules="nameRules"
						:counter="10"
						label="Last name"
						required
					></v-text-field>

					<v-text-field
						v-model="email"
						:rules="emailRules"
						label="E-mail"
						required
					></v-text-field>
			
				</v-form>
			</v-col>
			<v-spacer/>
			<v-col cols="12"
				md="6"
				lg="4">
				<v-form v-model="valid">
					<v-text-field
						v-model="firstname"
						:rules="nameRules"
						:counter="10"
						label="First name"
						required
					></v-text-field>

					<v-text-field
						v-model="lastname"
						:rules="nameRules"
						:counter="10"
						label="Last name"
						required
					></v-text-field>

					<v-text-field
						v-model="email"
						:rules="emailRules"
						label="E-mail"
						required
					></v-text-field>
			
				</v-form>
			</v-col>
			<v-spacer/>
		</v-row>
	</v-container>
</template>

<script setup>
	
</script>