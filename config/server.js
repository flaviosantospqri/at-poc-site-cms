module.exports = ({ env }) => ({
  host: env("HOST", "at-poc-site-cms-production.up.railway.app"),
  port: env.int("PORT", 80),
  url: "https://at-poc-site-cms-production.up.railway.app",
  admin: {
    url: "https://at-poc-site-cms-production.up.railway.app/admin",
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
