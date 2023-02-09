<template>
	<div>
		<div class="d-flex justify-left align-center pb-6 pt-2">
			<img src="@/assets/user_icon.png" alt="Users" height="42" class="mr-5" />
			<div>
				<h5 class="header-text text-h6">Add Users</h5>
				<h6 class="subtitle-text text-subtitle">
					Define Users as Buyers, Sellers, Billers & Viewers to manage your company account on this
					website
				</h6>
			</div>
		</div>
		<v-divider color="#D4D5D8"></v-divider>

		<div class="d-flex justify-center align-center flex-column">
			<img src="@/assets/new_user_bg.png" alt="Users" width="300" />
			<div class="text-center">
				<h5 class="header-text text-h6">No Users Added yet</h5>
				<h5 class="header-text text-h6">Start by Adding your first User</h5>
				<v-btn outlined rounded color="design" @click="dialog = true"
					><v-icon class="mr-2">mdi-plus</v-icon>Add new user</v-btn
				>
			</div>
		</div>

		<v-dialog v-model="dialog" max-width="1200"">
			<FormAddUser />
		</v-dialog>
	</div>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
	}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
