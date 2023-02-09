<template>
	<v-sheet class="margin-high pb-10">
		<div class="text-center mb-6">
			<h3 class="register-text">Setup your company’s inventory management/buying system in 3 steps</h3>
			<div class="mx-16">
				<v-stepper alt-labels elevation="0" class="mx-64">
					<v-stepper-header>
						<v-stepper-step step="" icon="mdi-menu-up-outline">
							<h6 class="stepper-text">Company Details</h6>
						</v-stepper-step>
						<v-divider color="red" class="mt-10"></v-divider>
						<v-stepper-step step=""><h6 class="stepper-text">Add Users</h6></v-stepper-step>
						<v-divider></v-divider>
						<v-stepper-step step=""><h6 class="stepper-text">Submit for Approval</h6></v-stepper-step>
					</v-stepper-header>
				</v-stepper>
			</div>
		</div>

		<v-sheet class="rounded-lg center pt-4 px-6 pb-10" elevation="4">
			<StepperStep1 />
			<!-- <StepperStep2 /> -->
		</v-sheet>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({
		other_items: [
			{ title: 'TAN No.', subtitle: 'tan_no', link: 'tan_document', file_name: 'Company-tan.pdf' },
			{ title: 'PAN No.', subtitle: 'pan_no', link: 'pan_document', file_name: 'Company-pan.pdf' },
			{ title: 'CIN No.', subtitle: 'cin_no', link: 'cin_document', file_name: 'Company-cin.pdf' },
			{ title: 'GST No.', subtitle: 'gst_no', link: 'gst_document', file_name: 'Company-gst.pdf' },
		],
	}),
	layout: 'register',
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.margin-high {
	margin-top: 80px;
	margin-bottom: 80px;
}
.register-text {
	font-size: 18px;
	font-weight: 400;
	color: #26467e;
	line-height: 22px;
}
.stepper-text {
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #2c2a2a;
}
.header-text {
	font-weight: 500;
	color: #26467e;
}
.subtitle-text {
	font-weight: 400;
	color: #2c2a2a;
	line-height: 139.52%;
}
.mx-64 {
	margin-right: 16rem;
	margin-left: 16rem;
}
</style>
