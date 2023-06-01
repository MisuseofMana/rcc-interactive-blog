// eslint-disable-next-line no-undef, no-unused-vars
export default defineNuxtRouteMiddleware(async (to, from) => {
	// eslint-disable-next-line no-undef
	const user = await getCurrentUser()
	// redirect the user to the login page
	if (!user) {
		// eslint-disable-next-line no-undef
		return navigateTo({
			path: `/brainwash`,
		})
	}
})