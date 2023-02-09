<template>
	<v-container class="center mt-10">
		<span class="text-label text-h6">Mobile No./ Email</span>
		<v-text-field
			outlined
			class="mt-2"
			v-model="payload.user_id"
			:rules="[rules.required, rules.phoneemail]"
			placeholder="Enter your own Mobile No./ Email"
		/>
		<span class="text-label text-h6">Password</span>
		<v-text-field
			outlined
			password
			class="mt-2"
			:rules="[rules.required]"
			v-model="payload.password"
			placeholder="Enter your Password"
			:type="show_password ? 'text' : 'password'"
			@click:append="show_password = !show_password"
			:append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
		/>
		<h5 class="text-center blue--text forgot-text text-subtitle-1 mt-n3">Forgot Password?</h5>
		<div class="center text-center">
			<div class="mx-16">
				<v-btn rounded block color="design" dark x-large class="mt-4 mb-2"> Login </v-btn>
			</div>
			<h5 class="tnc-style mb-4">I agree to T&C and Privacy policy by signing in</h5>
			<h3 class="or-text text-h6">OR</h3>
			<div class="mx-16 mb-6">
				<v-btn rounded block outlined color="design" dark x-large class="mt-4 mb-2" @click="ShowOTP">
					Login using OTP
				</v-btn>
			</div>
			<h4 class="fp-text">
				Don't have an account? <nuxt-link class="forgot-text" to="/register">Register</nuxt-link>
			</h4>
		</div>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		payload: {
			user_id: '',
			password: '',
		},
		props: { ShowOTP: { type: Function, required: true } },
		show_password: false,
		rules: {
			required: (value) => !!value || 'This field is required',
			phoneemail: (input) => {
				if (/^\d+$/.test(input)) {
					return input.length >= 10 || 'Min 10 characters'
				} else {
					return (
						/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input) ||
						'Please enter correct email'
					)
				}
			},
		},
	}),
	methods: {
		ShowOTP() {
			this.$emit('OTPLogin')
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.text-label {
	color: #26467e;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	font-style: normal;
}
.forgot-text {
	z-index: 4;
	cursor: pointer;
	font-weight: 400;
	color: #2c8cfb;
	line-height: 12px;
	font-style: normal;
}
.tnc-style {
	font-weight: 400;
	color: #6a6262;
	line-height: 12px;
}
.or-text {
	font-weight: 400;
	line-height: 15px;
	color: #404040;
}
.fp-text {
	font-weight: 400;
	line-height: 15px;
	color: #767676;
}
</style>
