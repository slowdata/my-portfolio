const fastify = require("fastify")({ logger: true });

const config = require("./config");

const { PORT, API_KEY } = config;

fastify.register(require("fastify-cors"), {
  origin: true
});

fastify.get("/", async (req, res) => {
  return { hello: PORT };
});

fastify.post("/email", async (req, rep) => {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(API_KEY);

  const { name, email, message } = req.body;

  const msg = {
    to: "slo.motion@gmail.com",
    from: email,
    subject: `Contact from ${name} in my-portfolio`,
    text: message
  };
  sgMail
    .send(msg)
    .then(result => {
      rep.status(200).send({ success: true });
    })
    .catch(err => {
      console.error(err.message);
      rep.status(401).send({ success: false });
    });
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
