<template>
	<div class="white">
		<div class="d-flex justify-space-between align-center py-6 px-10">
			<h5 class="header-text text-h6">Add User</h5>
			<h6 class="subtitle-text text-subtitle">
				( Following user data will be reflected on the screen once filled )
			</h6>
		</div>
		<v-divider color="#D4D5D8"></v-divider>

		<div class="d-flex justify-center align-center flex-column pa-4">
			Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Natus dicta, aspernatur culpa error soluta
			aliquam impedit, animi libero vel architecto perspiciatis, laborum. Cum fuga eum ipsam mollitia minima
			ipsum quidem.
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.header-text {
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	color: #26467e;
}
.subtitle-text {
	font-weight: 400;
	font-size: 16px;
	line-height: 139.52%;
	color: #2c2a2a;
}
</style>
