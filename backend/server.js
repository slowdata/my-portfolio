const fastify = require("fastify")({ logger: true });

fastify.register(require("fastify-cors"), {
  origin: true
});

fastify.get("/", async (req, res) => {
  return { hello: "world" };
});

fastify.post("/email", async (req, res) => {
  const { name } = req.body;
  res.send({ message: `É impressionante mas ${name} estás a conseguir!` });
});

const start = async () => {
  try {
    await fastify.listen(8888);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
