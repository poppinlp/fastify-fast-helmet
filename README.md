# fastify-fast-helmet

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Important security headers for Fastify

## Why?

You may know [fastify-helmet](https://github.com/fastify/fastify-helmet) as a helmet plugin for fastify. So why i made this plugin?

This plugin uses a set of helmet plugins for fastify instead of the helmet middlewares. You may find the reason in [benchmark result](./benchmarks/benchmark.txt) and wish you like it. :)

## Plugins

`fastify-fast-helmet` is a collection of 12 smaller middleware functions that set HTTP headers.

| Module | Option | Description | Default? |
|---|---|---|---|
| [fastify-csp](https://github.com/poppinlp/fastify-csp) | `contentSecurityPolicy` | for setting Content Security Policy | |
| [fastify-expect-ct](https://github.com/poppinlp/fastify-expect-ct) | `expectCt` | for handling Certificate Transparency | |
| [fastify-dns-prefetch-control](https://github.com/poppinlp/fastify-dns-prefetch-control) | `dnsPrefetchControl` | controls browser DNS prefetching | ✓ |
| [fastify-frame-guard](https://github.com/poppinlp/fastify-frame-guard) | `frameguard` | to prevent clickjacking | ✓ |
| [fastify-hide-powered-by](https://github.com/poppinlp/fastify-hide-powered-by) | `hidePoweredBy` | to remove the X-Powered-By header | ✓ |
| [fastify-hpkp](https://github.com/poppinlp/fastify-hpkp) | `hpkp` | for HTTP Public Key Pinning | |
| [fastify-hsts](https://github.com/poppinlp/fastify-hsts) | `hsts` | for HTTP Strict Transport Security | ✓ |
| [fastify-ie-no-open](https://github.com/poppinlp/fastify-ie-no-open) | `ieNoOpen` | sets X-Download-Options for IE8+ | ✓ |
| [fastify-no-cache](https://github.com/poppinlp/fastify-no-cache) | `noCache` | to disable client-side caching | |
| [fastify-no-sniff](https://github.com/poppinlp/fastify-no-sniff) | `noSniff` | to keep clients from sniffing the MIME type | ✓ |
| [fastify-referrer-policy](https://github.com/poppinlp/fastify-referrer-policy) | `referrerPolicy` | to hide the Referer header | |
| [fastify-xss-filter](https://github.com/poppinlp/fastify-xss-filter) | `xssFilter` | adds some small XSS protections | ✓ |

## Difference

The sub plugins use test cases from helmet middleware and their actions are almost same as helmet middlewares but [a little difference in fastify-csp](https://github.com/poppinlp/fastify-csp#difference).

## Install

Via npm:

```shell
npm i fastify-fast-helmet
```

Via yarn:

```shell
yarn add fastify-fast-helmet
```

## Usage

```js
const fastify = require('fastify');
const fastifyHelmet = require('fastify-fast-helmet');

const app = fastify();
app.register(fastifyHelmet, {
  // Your options
});

app.listen(3000, err => {
  if (err) throw err;
});
```

## Changelog

- 0.3.0:
  - Init version

[ci-img]: https://img.shields.io/travis/poppinlp/fastify-fast-helmet.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/fastify-fast-helmet
[cov-img]: https://img.shields.io/coveralls/poppinlp/fastify-fast-helmet.svg?style=flat-square
[cov-url]: https://coveralls.io/github/poppinlp/fastify-fast-helmet?branch=master
[lint-img]: https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square
[lint-url]: https://github.com/poppinlp/eslint-config-handsome
[dep-img]: https://img.shields.io/david/poppinlp/fastify-fast-helmet.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/fastify-fast-helmet
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/fastify-fast-helmet.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/fastify-fast-helmet#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/fastify-fast-helmet.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/fastify-fast-helmet.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/fastify-fast-helmet.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/fastify-fast-helmet
