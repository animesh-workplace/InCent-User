<template>
	<table>
		<tr class="text-center">
			<td class="text-right">
				<h3 class="company-title mb-3">PAN No. <sup class="red--text">*</sup></h3>
			</td>
			<td>
				<v-text-field outlined placeholder="Enter the Company PAN no." />
			</td>
			<td>
				<v-btn outlined rounded color="blue" class="px-6 mb-6">Upload</v-btn>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">TAN No.</h3>
			</td>
			<td>
				<v-text-field
					outlined
					class="mt-2"
					persistent-hint
					placeholder="Enter Company TAN no."
					hint="TAN : Tax Deduction Account Number of the company"
				/>
			</td>
			<td>
				<v-btn outlined rounded color="blue" class="px-6 mb-6">Upload</v-btn>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">CIN No.</h3>
			</td>
			<td>
				<v-text-field outlined class="mt-2" placeholder="Enter the CIN no." />
			</td>
			<td>
				<v-btn outlined rounded color="blue" class="px-6 mb-6">Upload</v-btn>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">GST No.</h3>
			</td>
			<td>
				<v-text-field outlined class="mt-2" placeholder="Enter the Company GST no." />
			</td>
			<td>
				<v-btn outlined rounded color="blue" class="px-6 mb-6">Upload</v-btn>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-1">Cancelled Cheque</h3>
				<h3 class="company-subtitle">( Only PDF file format is allowed )</h3>
			</td>
			<td>
				<v-btn outlined rounded color="blue" class="px-6 mb-6">Upload</v-btn>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-1">Company Registration Certificate</h3>
				<h3 class="company-subtitle">( Only PDF file format is allowed )</h3>
			</td>
			<td>
				<v-btn outlined rounded color="blue" class="px-6 mb-6">Upload</v-btn>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-1">Management Authorization</h3>
				<h3 class="company-subtitle">( Only PDF file format is allowed )</h3>
			</td>
			<td>
				<div class="d-flex">
					<v-btn outlined rounded color="blue" class="px-6 mb-6">Upload</v-btn>
					<div class="ml-4">
						<span class="download-sample blue--text mr-1">Download Sample</span>
						<v-icon color="blue" small>mdi-tray-arrow-down</v-icon>
					</div>
				</div>
			</td>
		</tr>
	</table>
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
	border-spacing: 25px 10px;
}
td {
	vertical-align: middle;
}
.company-title {
	color: #404040;
	font-weight: 400;
	font-style: normal;
	line-height: 19px;
	font-size: 16px;
}
.company-subtitle {
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #525252;
}
.download-sample {
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #26467e;
}
</style>
