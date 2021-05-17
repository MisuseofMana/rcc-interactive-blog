<template>
    <NuxtLink :to="linkName">
        <v-btn color="primary darken-4 pa-5">
            <v-icon class="mr-2" large color="primary">{{ frontIcon }}</v-icon>
                <div class="text-h4 primary--text mr-2">
                    {{ text }}
                </div>
            <v-icon v-for="(items, index) in realmIcons" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
        </v-btn>
    </NuxtLink>
</template>

<script>
    export default {
        name: "BackButton",
        props: [
            'frontIcon',
            'text',
            'realmIcons',
            'linkName',
        ]
    }
</script>

<style lang="scss" scoped>

</style>