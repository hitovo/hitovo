/* eslint-disable object-property-newline,object-curly-newline */
module.exports = {
	mode: 'universal',
	head: {
		htmlAttrs: {
			lang: 'en'
		},
		titleTemplate: 'Coffee to water calculator',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', content: 'Coffee to water calculator' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	srcDir: './app/shared'
};
