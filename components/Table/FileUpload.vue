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
				<v-btn outlined rounded color="design" class="px-6 mb-6">Upload</v-btn>
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
				<v-btn outlined rounded color="design" class="px-6 mb-6">Upload</v-btn>
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
				<v-btn outlined rounded color="design" class="px-6 mb-6">Upload</v-btn>
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
				<v-btn outlined rounded color="design" class="px-6 mb-6">Upload</v-btn>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">Cancelled Cheque</h3>
				<h3 class="company-title mb-3">( Only PDF file format is allowed )</h3>
			</td>
			<td>
				<v-btn outlined rounded color="design" class="px-6 mb-6">Upload</v-btn>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">Company Registration Certificate</h3>
				<h3 class="company-title mb-3">( Only PDF file format is allowed )</h3>
			</td>
			<td>
				<v-btn outlined rounded color="design" class="px-6 mb-6">Upload</v-btn>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">Management Authorization</h3>
				<h3 class="company-title mb-3">( Only PDF file format is allowed )</h3>
			</td>
			<td>
				<v-btn outlined rounded color="design" class="px-6 mb-6">Upload</v-btn>
				Download Sample <v-icon>mdi-tray-arrow-down</v-icon>
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
</style>
