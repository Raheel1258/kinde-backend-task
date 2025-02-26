require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const organizationRoutes = require("./routes/organization");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/organizations", organizationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
