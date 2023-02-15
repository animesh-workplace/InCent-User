<template>
	<v-sheet class="px-13">
		<div class="text-left my-6">
			<div class="d-flex ml-n11">
				<v-icon large class="mr-2">mdi-chevron-left</v-icon>
				<h1 class="header-text font-weight-medium design--text d-inline">Add Program Inventory</h1>
			</div>
			<h3 class="subtitle-text caption">
				All the fields are mandatory to fill & cannot be left empty <span class="red--text">*</span>
			</h3>
		</div>
		<div class="mx-10">
			<div class="d-block design px-2 py-1 white--text d-flex mb-8">
				<img src="@/assets/channels_icon.png" alt="Channels" class="mr-3" width="20" />
				<h3 class="sub-header-text">Channel</h3>
			</div>

			<div>
				<v-row class="justify-center mx-2">
					<v-col>
						<label>Channel</label>
						<v-text-field
							outlined
							placeholder="Select Channel"
							append-icon="mdi-chevron-down"
						></v-text-field>
					</v-col>
					<v-col>
						<label>Channel code</label>
						<div class="mt-4">2</div>
					</v-col>
					<v-col>
						<label>Language</label>
						<div class="mt-4">Hindi</div>
					</v-col>
					<v-col>
						<label>Channel Genre</label>
						<div class="mt-4">News</div>
					</v-col>
					<v-col>
						<label>Paid/FTA</label>
						<div class="mt-4">FTA</div>
					</v-col>
					<v-col>
						<label>HD/SD</label>
						<div class="mt-4">HD</div>
					</v-col>
				</v-row>
			</div>

			<div class="d-block design px-2 py-1 white--text d-flex mb-8">
				<img src="@/assets/program_icon.png" alt="Program" class="mr-3" width="20" />
				<h3 class="sub-header-text">Program</h3>
			</div>

			<div>
				<v-row class="justify-center mx-2">
					<v-col>
						<label>Program Name</label>
						<v-text-field outlined placeholder="Enter Program Name"></v-text-field>
					</v-col>
					<v-col>
						<label>Program Category</label>
						<v-text-field outlined append-icon="mdi-chevron-down" placeholder="Select"></v-text-field>
					</v-col>
					<v-col>
						<label>Telecast Start Date</label>
						<div class="mt-4">Hindi</div>
					</v-col>
					<v-col>
						<label>Telecast End Date</label>
						<div class="mt-4">News</div>
					</v-col>
				</v-row>

				<v-row class="justify-center mx-2">
					<v-col>
						<label>Telecast Start Time</label>
						<div class="mt-4">FTA</div>
					</v-col>
					<v-col>
						<label>Telecast End Time</label>
						<div class="mt-4">HD</div>
					</v-col>
					<v-col>
						<label>Duration (in minutes)</label>
						<v-text-field outlined append-icon="mdi-chevron-down" placeholder="Select"></v-text-field>
					</v-col>
					<v-col>
						<label>Original/Repeat</label>
						<v-text-field outlined append-icon="mdi-chevron-down" placeholder="Select"></v-text-field>
					</v-col>
					<v-col>
						<label>Frequency</label>
						<v-text-field outlined append-icon="mdi-chevron-down" placeholder="Select"></v-text-field>
					</v-col>
				</v-row>
			</div>

			<div class="d-block design px-2 py-1 white--text d-flex">
				<img src="@/assets/inventory_icon.png" alt="Inventory" class="mr-3" width="20" />
				<h3 class="sub-header-text">Inventory</h3>
			</div>

			<div class="text-center">
				<v-btn color="design" dark class="text-capitalize" @click="dialog = true"> Add Inventory</v-btn>
			</div>

			<v-dialog v-model="dialog" max-width="400">
				<v-card class="pt-10 pb-4 px-2">
					<v-card-text class="text-center font-title">
						<div class="d-block mb-2">
							<img src="@/assets/check_icon.png" alt="" />
						</div>
						<div class="dialog-header text-subtitle-1 mb-2">Program Inventory added successfully</div>
						<div class="dialog-subtitle">
							Your Program Inventory is successfully added to your Inventory. You can check your
							program listing under My Inventory
						</div>
					</v-card-text>

					<v-card-actions>
						<div class="mx-auto">
							<!-- Need to add stepper reducer to reduce to step 1 -->
							<v-btn outlined rounded color="blue" class="my-4 text-capitalize" to="/program/add">
								<v-icon small class="mr-1">mdi-plus</v-icon>Add Program Inventory
							</v-btn>
						</div>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
		items: ['T1', 'T2', 'T3', 'T4'],
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
.subtitle-text {
	font-size: 12px;
	font-weight: 400;
	color: #767676;
	line-height: 15px;
	font-style: italic;
}
.header-text {
	font-size: 30px;
	font-weight: 500;
	color: #26467e;
	line-height: 36px;
	font-style: normal;
}
.sub-header-text {
	font-size: 16px;
	font-weight: 400;
	color: #ffffff;
	line-height: 19px;
	font-style: normal;
}
.dialog-header {
	font-style: normal;
	font-weight: 600;
	line-height: 17px;
	color: #2c2a2a;
}
.dialog-subtitle {
	font-style: normal;
	font-weight: 400;
	line-height: 12px;
	text-align: center;
	color: #767676;
}
</style>
