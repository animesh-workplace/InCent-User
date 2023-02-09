<template>
	<div>
		<div class="d-flex justify-left align-center pb-6 pt-2 px-5">
			<img src="@/assets/arrow_icon.png" alt="Arrow" height="25" class="mr-5" />
			<div>
				<h5 class="header-text text-h6">Submit for approval</h5>
				<h6 class="subtitle-text text-subtitle">
					Your company’s account will be created after approval from the Authorization Team.
				</h6>
			</div>
		</div>
		<v-divider color="#D4D5D8"></v-divider>

		<TableCompanyList />
		<TableUserList />

		<div class="mt-6 text-center">
			<v-btn outlined color="design" class="px-7">Edit</v-btn>
			<div class="ml-4 d-inline">
				<v-btn dark color="design" class="text-center px-6" @click="Submit"> Submit </v-btn>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({}),
	components: {},
	methods: {
		Submit() {
			this.$emit('Finished')
			this.$emit('NextStep4')
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.header-text {
	font-weight: 500;
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
