<template>
	<div>
		<div class="d-flex justify-space-between">
			<table>
				<tr class="text-center">
					<td class="text-right">
						<h3 class="company-title mb-3">Name <sup class="red--text">*</sup></h3>
					</td>
					<td>
						<v-text-field outlined class="mt-2" placeholder="Enter the User Name" />
					</td>
				</tr>
				<tr>
					<td class="text-right">
						<h3 class="company-title mb-3">Designation <sup class="red--text">*</sup></h3>
					</td>
					<td>
						<v-text-field outlined class="mt-2" placeholder="Enter the User Designation" />
					</td>
				</tr>
			</table>

			<table>
				<tr>
					<td class="text-right">
						<h3 class="company-title mb-3">Mobile no. <sup class="red--text">*</sup></h3>
					</td>
					<td>
						<v-text-field outlined class="mt-2" placeholder="Enter User Mobile No." />
					</td>
				</tr>
				<tr>
					<td class="text-right">
						<h3 class="company-title mb-3">Email ID <sup class="red--text">*</sup></h3>
					</td>
					<td>
						<v-text-field outlined class="mt-2" placeholder="Enter User Email ID" />
					</td>
				</tr>
			</table>
		</div>
		<table>
			<tr>
				<td class="text-right fixed-width">
					<h3 class="company-title mb-3">Profile</h3>
					<h6 class="company-subtitle mb-3">
						(You may select one or more roles for the same user on the platform)
					</h6>
				</td>
				<td>
					<div class="d-flex align-center">
						<div class="d-flex align-end mr-3">
							<v-checkbox
								label="Seller"
								color="grey darken-4"
								value="red"
								hide-details
								class="mr-2"
							/>
							<v-icon small class="mb-1">mdi-information-outline</v-icon>
						</div>
						<div class="d-flex align-end mr-3">
							<v-checkbox
								label="Buyer"
								color="grey darken-4"
								value="red"
								hide-details
								class="mr-2"
							/>
							<v-icon small class="mb-1">mdi-information-outline</v-icon>
						</div>
						<div class="d-flex align-end mr-3">
							<v-checkbox
								label="Billing"
								color="grey darken-4"
								value="red"
								hide-details
								class="mr-2"
							/>
							<v-icon small class="mb-1">mdi-information-outline</v-icon>
						</div>
						<div class="d-flex align-end mr-3">
							<v-checkbox
								label="Viewer"
								color="grey darken-4"
								value="red"
								hide-details
								class="mr-2"
							/>
							<v-icon small class="mb-1">mdi-information-outline</v-icon>
						</div>
					</div>
				</td>
			</tr>
		</table>
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
table {
	border-spacing: 20px 5px;
	width: 100%;
}
td {
	vertical-align: middle;
}
.company-title {
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
}
.company-subtitle {
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #525252;
}
.fixed-width {
	width: 100px;
}
</style>
