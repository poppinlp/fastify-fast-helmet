const fp = require('fastify-plugin');

const MODS = {
	contentSecurityPolicy: require('fastify-csp'),
	hpkp: require('fastify-hpkp'),
	hsts: require('fastify-hsts'),
	expectCt: require('fastify-expect-ct'),
	noCache: require('fastify-no-cache'),
	referrerPolicy: require('fastify-referrer-policy'),
	dnsPrefetchControl: require('fastify-dns-prefetch-control'),
	frameguard: require('fastify-frame-guard'),
	hidePoweredBy: require('fastify-hide-powered-by'),
	ieNoOpen: require('fastify-ie-no-open'),
	noSniff: require('fastify-no-sniff'),
	xssFilter: require('fastify-xss-filter')
};
const DEFAULT_REGISTER_MODS = new Set([
	'hsts',
	'dnsPrefetchControl',
	'frameguard',
	'hidePoweredBy',
	'ieNoOpen',
	'noSniff',
	'xssFilter'
]);

const helmet = (app, opts, next) => {
	Object.keys(MODS).forEach(name => {
		const mod = MODS[name];
		const option = opts[name];
		const isDefault = DEFAULT_REGISTER_MODS.has(name);

		if (option === false) return;

		option
			? app.register(mod, option === true ? undefined : option)
			: isDefault && app.register(mod);
	});

	next();
};

module.exports = fp(helmet, {
	fastify: '^1.0.0',
	name: 'fastify-fast-helmet'
});
