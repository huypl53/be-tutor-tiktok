import express from "express";
import cors from "cors";
import helmet from "helmet";
import noCache from "nocache";

import routers from "apis";
import initializeResources from "resources";
import configs from "configs";

const app = express();

function initializeSecurity() {
  app.use(noCache());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());
}

initializeSecurity();
app.user(routers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

export default app;
