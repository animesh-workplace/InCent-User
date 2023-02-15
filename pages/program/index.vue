<template>
	<v-sheet class="px-15">
		<div class="text-left my-6">
			<h1 class="font-weight-medium design--text">Program Inventory</h1>
			<h3 class="caption">This page is used by Authorized Seller for setting up Program Inventories</h3>
		</div>
		<div>
			<v-tabs v-model="tab">
				<v-tab :value="1" class="black--text text-capitalize">My Inventory (0)</v-tab>
				<!-- <v-tab value="two">Item Two</v-tab> -->
				<!-- <v-tab value="three">Item Three</v-tab> -->
			</v-tabs>
		</div>
		<div class="pa-4">
			<div class="text-center my-8">
				<img src="@/assets/inventory_none.png" alt="No Program Inventory" class="mb-6" />
				<h4 class="header-text">No Program Inventory</h4>
				<h6 class="subtitle-text">Start by listing your first Program Inventory for sale</h6>
				<v-btn outlined rounded color="blue" class="my-4 text-capitalize" to="/program/add">
					<v-icon small>mdi-plus</v-icon>Add Program Inventory
				</v-btn>
			</div>
		</div>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({
		tab: 1,
	}),
	layout: 'admin',
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {
			this.$store.dispatch('UpdateSideBar', 'Add Program Inventory')
		})
	},
}
</script>

<style scoped>
.text-capitalize {
	letter-spacing: normal;
}
.header-text {
	font-size: 16px;
	font-weight: 500;
	color: #404040;
	line-height: 19px;
	font-style: normal;
}
.subtitle-text {
	font-size: 12px;
	font-weight: 400;
	color: #707070;
	line-height: 15px;
	font-style: normal;
}
</style>
