<template>
	<div id="app">
		<template v-if="ratios.length">
			<select v-model="selectedRatio" @change="valueChange('water')">
				<option v-for="ratio in ratios" :key="ratio.label" :value="ratio.label">{{ ratio.label }}</option>
			</select>
			<input v-model="coffeeAmount" type="number" @change="valueChange('water')" />
			<input v-model="waterAmount" type="number" @change="valueChange('coffee')" />
		</template>
		<template v-else>
			<h2>404 No coffee found</h2>
		</template>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ratios: [],
				waterAmount: '0',
				coffeeAmount: '15',
				selectedRatio: 'V60'
			};
		},
		mounted() {
			this.loadRatios().then(() => {
				this.valueChange('water');
			});
		},
		methods: {
			loadRatios() {
				return fetch('/api/v1/ratios')
					.then((response) => response.json())
					.then(({ data: ratios }) => {
						this.ratios = ratios;
					});
			},
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
