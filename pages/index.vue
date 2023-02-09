<template>
	<v-sheet class="margin-high mx-auto rounded-lg center" elevation="4">
		<v-row>
			<v-col align-self="center">
				<img src="@/assets/hero.png" alt="Hero" />
			</v-col>
			<v-col class="pa-4 border-col">
				<FormDefaultLogin @OTPLogin="ShowOTP" v-if="!show_otp" />
				<FormOTPLogin v-else />
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({
		show_otp: false,
	}),
	layout: 'login',
	components: {},
	methods: {
		ShowOTP() {
			this.show_otp = !this.show_otp
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.margin-high {
	margin-top: 100px;
}
.center {
	width: 70%;
	margin: auto;
	padding: 10px;
}
.border-col {
	border-left: 2px solid #c4c4c4;
}
</style>
