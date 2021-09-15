<template>
    <a :href="linkName" target="_blank" class="text-decoration-none">
        <v-btn color="primary darken-4 pa-5">
            <div class="text-body-1 primary--text mr-2">
                {{ text }}
            </div>
        </v-btn>
    </a>
</template>

<script>
export default {
    props: [
        'text',
        'linkName',
    ]
}
</script>

<style lang="scss" scoped>

</style>