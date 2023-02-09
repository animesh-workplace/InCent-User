<template>
	<div>
		<div class="d-flex justify-left align-center pb-6 pt-2">
			<img src="@/assets/building_icon.png" alt="Building" height="42" class="mr-5" />
			<div>
				<h5 class="header-text text-h6">Company Details</h5>
				<h6 class="subtitle-text text-subtitle">
					Adding your company’s details is a mandatory step in registering your company
				</h6>
			</div>
		</div>
		<v-divider color="#D4D5D8"></v-divider>

		<FormCompanyDetail />

		<div class="mt-6 text-center">
			<v-btn outlined color="design">Back</v-btn>
			<div class="ml-4 d-inline">
				<v-btn dark color="design">Next <v-icon class="pl-2 pr-0">mdi-chevron-right</v-icon></v-btn>
			</div>
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

<style></style>
