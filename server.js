require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

// Listener
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
