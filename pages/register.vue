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

		<v-sheet class="rounded-lg center pt-4 px-6 pb-10" elevation="4" v-if="step_info != 4">
			<StepperStep1 v-if="step_info == 1" @NextStep2="step_info = 2" />
			<StepperStep2 v-if="step_info == 2" @NextStep3="step_info = 3" />
			<StepperStep3 @Finished="dialog = true" v-if="step_info == 3" @NextStep4="step_info = 4" />
		</v-sheet>

		<v-dialog v-model="dialog" max-width="400">
			<v-card class="pt-10 pb-4 px-4">
				<v-card-text class="text-center font-title">
					<div class="d-block mb-2">
						<img src="@/assets/check_icon.png" alt="" />
					</div>
					<div>Submission Successful</div>
					<div>
						Thank you for registering on our platform. Your details have been successfully received.
						Authorization Team shall review and update you at the earliest. You can check the
						application status by Login.
					</div>
				</v-card-text>

				<v-card-actions>
					<div class="mx-auto">
						<!-- Need to add stepper reducer to reduce to step 1 -->
						<v-btn outlined color="design" class="mb-4"> Login </v-btn>
					</div>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
		step_info: 1,
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
