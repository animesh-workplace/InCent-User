<template>
	<div class="white">
		<div class="d-flex justify-space-between align-center py-6 px-10">
			<h5 class="header-text text-h6">Add User</h5>
			<h6 class="subtitle-text text-subtitle">
				( Following user data will be reflected on the screen once filled )
			</h6>
		</div>
		<v-divider color="#D4D5D8"></v-divider>

		<div class="pa-4">
			<TableUser />

			<div class="text-center my-8">
				<v-btn outlined color="design" class="mb-4" @click="SaveUser">Save user</v-btn>
				<h6 class="small-text">You can view the above user’s details after saving the changes</h6>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({}),
	components: {},
	methods: {
		SaveUser() {
			this.$emit('UserSaved')
		},
	},
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
	font-size: 12px;
	line-height: 15px;
	color: #404040;
}
.small-text {
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #404040;
}
</style>
