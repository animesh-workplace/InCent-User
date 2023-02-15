<template>
	<div>
		<v-navigation-drawer clipped fixed app class="elevation-4" color="design" :mini-variant="!visible">
			<div class="d-flex justify-end" :class="visible ? '' : 'justify-center'">
				<v-btn icon right color="white" @click="HideNav">
					<v-icon v-if="visible">mdi-chevron-double-left</v-icon>
					<v-icon v-else>mdi-chevron-double-right</v-icon>
				</v-btn>
			</div>

			<v-list>
				<v-list-item
					exact
					router
					:key="i"
					:to="item.to"
					class="white--text"
					v-for="(item, i) in items"
					:class="selected_tab == item.title ? 'white' : ''"
				>
					<v-list-item-action>
						<img
							width="26"
							:alt="`Icon-${item.icon}`"
							:src="
								require(`../../assets/SideBar/${
									selected_tab == item.title ? item.icon_active : item.icon
								}`)
							"
						/>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title
							v-text="item.title"
							:class="selected_tab == item.title ? 'design--text' : 'white--text'"
						/>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-btn icon right color="design" class="is-fixed">
			<v-icon>mdi-chevron-double-right</v-icon>
		</v-btn>
	</div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
	data: () => ({
		visible: true,
		items: [
			{
				to: '/',
				title: 'Dashboard',
				icon: 'dashboard_icon.png',
				icon_active: 'dashboard_icon.png',
			},
			{
				to: '/',
				title: 'Add Master Channels',
				icon: 'add_masterchannel_icon.png',
				icon_active: 'add_masterchannel_icon.png',
			},
			{
				to: '/program',
				icon: 'add_program_icon.png',
				title: 'Add Program Inventory',
				icon_active: 'add_program_active_icon.png',
			},
			{
				to: '/',
				title: 'Add Auctions',
				icon: 'add_auction_icon.png',
				icon_active: 'add_auction_icon.png',
			},
			{
				to: '/',
				title: 'Bid on Auctions',
				icon: 'bid_auction_icon.png',
				icon_active: 'bid_auction_icon.png',
			},
			{
				to: '/sales',
				icon: 'sales_icon.png',
				title: 'Buy Program Inventory',
				icon_active: 'sales_active_icon.png',
			},
		],
	}),
	computed: {
		...mapFields(['selected_tab']),
	},
	methods: {
		HideNav() {
			this.visible = !this.visible
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.is-fixed {
	z-index: 2;
	margin-top: 4rem;
}
</style>
