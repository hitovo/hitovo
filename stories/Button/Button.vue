<template>
	<button type="button" class="h-button" :class="classes">
		<slot />
	</button>
</template>

<script>
	export default {
		name: 'HButton',
		props: {
			size: {
				type: String,
				default: 'medium',
				validator(value) {
					return ['small', 'medium', 'large'].includes(value);
				}
			}
		},
		computed: {
			classes() {
				return {
					[`h-button--${this.size}`]: true
				};
			}
		}
	};
</script>

<style>
	.h-button {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-weight: bold;
	}

	.h-button--small {
		font-size: 12px;
		padding: 10px 16px;
	}

	.h-button--medium {
		font-size: 14px;
		padding: 11px 20px;
	}

	.h-button--large {
		font-size: 16px;
		padding: 12px 24px;
	}
</style>
