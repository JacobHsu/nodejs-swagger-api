const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const port = 3000;

var postRouter = require("./routes/posts");

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
  
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },
  },
  apis: ["routes/*.js"], // files containing annotations as above
};

const specs = swaggerJsdoc(options);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/posts", postRouter);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { customCssUrl: CSS_URL })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
