<template>
	<table>
		<tr class="text-center">
			<td class="text-right">
				<h3 class="company-title">Registered Company Name <sup class="red--text">*</sup></h3>
			</td>
			<td>
				<v-text-field
					outlined
					class="mt-2"
					persistent-hint
					placeholder="Enter the company name"
					hint="Company Name as Registered on Official Documents"
				/>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">Website URL</h3>
			</td>
			<td>
				<v-text-field outlined class="mt-2" placeholder="For e.g  www.PNG.com" />
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">Your Name</h3>
			</td>
			<td>
				<v-text-field outlined class="mt-2" placeholder="Enter Your Name" />
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">Your Email ID</h3>
			</td>
			<td>
				<v-text-field
					outlined
					class="mt-2"
					persistent-hint
					placeholder="Enter Your Email ID"
					hint="The above Email ID will be treated as company’s admin ID and will be used for registration process"
				/>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">Your Mobile No.</h3>
			</td>
			<td>
				<v-text-field
					outlined
					class="mt-2"
					persistent-hint
					placeholder="Enter Your Mobile No."
					hint="The above mobile no. will be treated as company’s admin no. and will be used for registration process"
				/>
			</td>
		</tr>
		<tr>
			<td class="text-right">
				<h3 class="company-title mb-3">Billing Address</h3>
			</td>
			<td>
				<v-text-field
					outlined
					class="mt-2"
					persistent-hint
					placeholder="Enter the Company billing address"
					hint="Will be used for all offline communications and billing purposes"
				/>
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
	border-spacing: 20px 5px;
}
td {
	vertical-align: middle;
}
.company-title {
	color: #404040;
	font-weight: 400;
	font-style: normal;
	line-height: 19px;
	font-size: 15px;
}
.company-subtitle {
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #525252;
}
</style>
