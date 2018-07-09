import test from 'ava';
import fastify from 'fastify';
import plugin from '../src/index';

test.beforeEach(t => {
	const app = fastify();

	app.get('/', (request, reply) => {
		reply.send('hello world');
	});

	t.context.app = app;
});

const mock = async (t, opts) => {
	const rsp = await t.context.app
		.register(plugin, opts)
		.inject({
			method: 'get',
			url: '/',
			headers: {
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3485.0 Safari/537.36'
			}
		});

	return rsp.headers;
};

test('check default headers', async t => {
	const headers = await mock(t);

	t.is(headers['strict-transport-security'], 'max-age=15552000; includeSubDomains');
	t.is(headers['x-dns-prefetch-control'], 'off');
	t.is(headers['x-frame-options'], 'SAMEORIGIN');
	t.is(headers['x-download-options'], 'noopen');
	t.is(headers['x-content-type-options'], 'nosniff');
	t.is(headers['x-xss-protection'], '1; mode=block');
});

test('can disable plugin by false option', async t => {
	const headers = await mock(t, {
		hsts: false
	});

	t.is(headers['strict-transport-security'], undefined);
	t.is(headers['x-dns-prefetch-control'], 'off');
	t.is(headers['x-frame-options'], 'SAMEORIGIN');
	t.is(headers['x-download-options'], 'noopen');
	t.is(headers['x-content-type-options'], 'nosniff');
	t.is(headers['x-xss-protection'], '1; mode=block');
});

test('can enable plugin by true option', async t => {
	const headers = await mock(t, {
		referrerPolicy: true
	});

	t.is(headers['referrer-policy'], 'no-referrer');
	t.is(headers['strict-transport-security'], 'max-age=15552000; includeSubDomains');
	t.is(headers['x-dns-prefetch-control'], 'off');
	t.is(headers['x-frame-options'], 'SAMEORIGIN');
	t.is(headers['x-download-options'], 'noopen');
	t.is(headers['x-content-type-options'], 'nosniff');
	t.is(headers['x-xss-protection'], '1; mode=block');
});

test('can set option to plugin', async t => {
	const headers = await mock(t, {
		referrerPolicy: {
			policy: 'same-origin'
		}
	});

	t.is(headers['referrer-policy'], 'same-origin');
	t.is(headers['strict-transport-security'], 'max-age=15552000; includeSubDomains');
	t.is(headers['x-dns-prefetch-control'], 'off');
	t.is(headers['x-frame-options'], 'SAMEORIGIN');
	t.is(headers['x-download-options'], 'noopen');
	t.is(headers['x-content-type-options'], 'nosniff');
	t.is(headers['x-xss-protection'], '1; mode=block');
});
