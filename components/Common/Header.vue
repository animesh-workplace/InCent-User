<template>
	<v-app-bar clipped-left fixed app color="white" :height="login ? 90 : undefined">
		<img src="@/assets/logo.png" alt="Logo" :height="login ? '80px' : '60px'" />
		<v-spacer v-if="!login" />
		<v-btn outlined rounded color="design" class="px-6" v-if="!login">Login</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	data: () => ({}),
	props: { login: { default: false, type: Boolean } },
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
