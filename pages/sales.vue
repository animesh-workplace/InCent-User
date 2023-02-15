<template>
	<div class="px-15"></div>
</template>

<script>
export default {
	data: () => ({
		xyz: true,
	}),
	layout: 'admin',
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {
			this.$store.dispatch('UpdateSideBar', 'Buy Program Inventory')
		})
	},
}
</script>

<style></style>
