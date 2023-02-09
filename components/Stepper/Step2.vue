<template>
	<div>
		<div class="d-flex justify-left align-center pb-6 pt-2 px-5">
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

		<div class="d-flex justify-center align-center flex-column min-height">
			<img src="@/assets/new_user_bg.png" alt="Users" width="200" class="mb-4" />
			<div class="text-center">
				<h5 class="user-text">No Users added yet</h5>
				<h5 class="user-subtitle-text mb-10">Start by adding your first user</h5>
				<v-btn outlined rounded color="design" @click="dialog1 = true">
					<v-icon class="mr-2">mdi-plus</v-icon>Add new user
				</v-btn>
			</div>
		</div>

		<v-dialog v-model="dialog1" max-width="900">
			<FormAddUser @UserSaved="FormSaved" />
		</v-dialog>

		<v-dialog v-model="dialog2" max-width="400">
			<v-card class="pt-10 pb-4 px-4">
				<v-card-text class="text-center font-title">
					<div class="d-block mb-2">
						<img src="@/assets/check_icon.png" alt="" />
					</div>
					<div>
						User <span class="design--text">Vedant Parte</span> was Saved in your Company Profile.
					</div>
				</v-card-text>

				<v-card-actions>
					<div class="mx-auto">
						<!-- Need to add stepper reducer to reduce to step 1 -->
						<v-btn outlined rounded color="blue" class="mb-4">
							<v-icon small class="mr-2">mdi-plus</v-icon>Add new user
						</v-btn>
					</div>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<div class="mt-6 text-center">
			<v-btn outlined color="design" class="px-7">Back</v-btn>
			<div class="ml-4 d-inline">
				<v-btn dark color="design" class="text-center px-6" @click="NextButton">
					Next<v-icon>mdi-chevron-right</v-icon>
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		dialog1: false,
		dialog2: false,
	}),
	components: {},
	methods: {
		FormSaved() {
			this.dialog1 = false
			this.dialog2 = true
		},
		NextButton() {
			this.$emit('NextStep3')
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
.min-height {
	min-height: 50vh;
}
.user-text {
	font-size: 18px;
	font-weight: 500;
	color: #2c2a2a;
	line-height: 22px;
	font-style: normal;
}
.user-subtitle-text {
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #767676;
}
.font-title {
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	color: #2c2a2a;
}
</style>
