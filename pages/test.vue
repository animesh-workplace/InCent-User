<template>
	<div class="px-15">
		<v-file-input :hide-input="xyz" prepend-icon="" ref="file">
			<template v-slot:append-outer>
				<v-btn v-if="xyz" outlined rounded color="blue" class="px-6 mb-6" @click="ClickOn">Upload</v-btn>
			</template>
			<template v-slot:selection="{ text }">
				<div>selected state {text}</div>
			</template>
		</v-file-input>
	</div>
</template>

<script>
export default {
	data: () => ({
		xyz: true,
	}),
	layout: 'admin',
	components: {},
	methods: {
		ClickOn() {
			console.log('Clickedddddd')
			this.$refs.file.$el.querySelector('input').click()
			this.xyz = false
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.$store.dispatch('UpdateSideBar', 'Add Program Inventory')
		})
	},
}
</script>

<style></style>
