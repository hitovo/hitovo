import HButton from './Button.vue';

export default {
	title: 'Button',
	component: HButton,
	argTypes: {
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium', 'large']
			}
		}
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: {
		HButton
	},
	template: '<h-button v-bind="$props">Button</h-button>'
});

export const Small = Template.bind({});
Small.args = {
	size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
	size: 'large'
};
