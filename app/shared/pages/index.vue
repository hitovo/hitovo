<template>
	<div id="app">
		<!-- Create the app here :) -->
		<select v-model="selectedRatio" @change="valueChange('water')">
			<option v-for="ratio in ratios" :key="ratio.label" :value="ratio.label">{{ ratio.label }}</option>
		</select>
		<input v-model="coffeeAmount" type="number" @change="valueChange('water')">
		<input v-model="waterAmount" type="number" @change="valueChange('coffee')">
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ratios: [
					{
						label: 'V60',
						value: [3, 50]
					},
					{
						label: 'Chemex',
						value: [1, 17]
					}
				],
				waterAmount: '0',
				coffeeAmount: '15',
				selectedRatio: 'V60'
			};
		},
		mounted() {
			this.valueChange('water');
		},
		methods: {
			valueChange(toChange) {
				let ratio = this.ratios.find((item) => item.label === this.selectedRatio);

				if (toChange === 'water') {
					this.waterAmount = String(Math.round(Number(this.coffeeAmount) / (ratio.value[0] / ratio.value[1])));
				} else if (toChange === 'coffee') {
					this.coffeeAmount = String(Math.round(Number(this.waterAmount) * (ratio.value[0] / ratio.value[1])));
				}
			}
		}
	};
</script>
