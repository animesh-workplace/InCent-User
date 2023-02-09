<template>
	<v-app>
		<CommonHeader />
		<div class="py-8 px-16">
			<Nuxt />
		</div>
		<CommonFooter />
	</v-app>
</template>

<script>
// import * as login from '@/utils/api/LoginAPI'

export default {
	data: () => ({
		drawer: true,
	}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {
			// if (login.default.isUserLoggedIn()) {
			// 	this.$router.push('/admin')
			// }
		})
	},
}
</script>

<style></style>
