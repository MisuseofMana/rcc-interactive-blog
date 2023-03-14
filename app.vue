<template>
	<div class="background">
		<NuxtPage/>
	</div>
</template>

<style>
.background {
 background-color: #101010
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.1s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: .1;
  filter: blur(.8rem);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: .1;
  filter: blur(.8rem);
}
</style>