const http = require('http');

const express = require('express'),
	compression = require('compression'),
	helmet = require('helmet'),
	{ Nuxt, Builder } = require('nuxt');

const config = require('./config'),
	nuxtConfig = require('../nuxt.config');

(async () => {
	// Set nuxt config dev
	nuxtConfig.dev = config.isDevelopment;

	let app = express(),
		nuxt = new Nuxt(nuxtConfig);

	// If development, run Nuxt builder
	if (nuxtConfig.dev) {
		await new Builder(nuxt).build();
	}

	// Enable security headers
	app.use(helmet());

	// Enable gzip compression
	app.use(compression());

	// API route for ratios
	app.get('/api/v1/ratios/:slug?', ({ params }, response) => {
		let ratios = [{
			label: 'V60',
			slug: 'v60',
			value: [3, 50]
		}, {
			label: 'Chemex',
			slug: 'chemex',
			value: [1, 17]
		}, {
			label: 'Aeropress',
			slug: 'aeropress',
			value: [1, 6]
		}, {
			label: 'French Press',
			slug: 'french-press',
			value: [1, 12]
		}, {
			label: 'Moka Pot',
			slug: 'moka-pot',
			value: [1, 10]
		}];
		response.json({
			data: params.slug ? ratios.find((ratio) => ratio.slug === params.slug) || null : ratios
		});
	});

	// Use Nuxt middleware
	app.use(nuxt.render);

	// Create HTTP web server
	http.createServer(app).listen(config.port, (error) => {
		if (error) {
			console.log('Error while starting the HTTP server', error);
			process.exit(1);
		} else {
			console.log(`HTTP server running on port ${config.port}`);
		}
	});
})();
