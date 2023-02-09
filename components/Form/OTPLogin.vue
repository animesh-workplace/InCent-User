<template>
	<v-container class="center mt-10">
		<span class="text-label text-h6">Login using OTP</span>
		<v-text-field class="mt-2" v-model="payload.otp" placeholder="Enter OTP" />
		<h5 class="text-center messages mt-n2 mb-6">Enter 4 digit OTP recieved at *******463</h5>
		<h3 class="or-text text-subtitle-1 text-center">Resend OTP</h3>
		<div class="mx-16">
			<v-btn rounded block color="design" dark x-large class="mt-6 mb-2"> Verify </v-btn>
		</div>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		payload: { otp: '' },
	}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.text-label {
	font-weight: 400;
	color: #26467e;
	line-height: 19px;
	font-style: normal;
}
.messages {
	color: #767676;
	font-weight: 400;
	line-height: 12px;
	font-style: normal;
}
.or-text {
	font-weight: 400;
	color: #483e3e;
	line-height: 15px;
	font-style: normal;
}
</style>
