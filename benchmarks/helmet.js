const fastify = require('fastify');
const helmet = require('fastify-helmet');
const { host, port, path, rsp } = require('./config');

fastify()
	.register(helmet)
	.get(path, (request, reply) => {
		reply.send(rsp);
	})
	.listen(port, host);
