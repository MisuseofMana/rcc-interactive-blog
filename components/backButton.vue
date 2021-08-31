<template>
    <NuxtLink :to="linkName" class="text-decoration-none">
        <v-btn color="primary darken-4 pa-5">
            <div v-if="frontIcon">
                <v-icon class="mr-2" large color="primary">{{ frontIcon }}</v-icon>
            </div>
                <div class="text-h4 primary--text mr-2">
                    {{ text }}
                </div>
            <div v-if="realmIcons">
                <v-icon v-for="(items, index) in realmIcons" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
            </div>
        </v-btn>
    </NuxtLink>
</template>

<script>
export default {
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