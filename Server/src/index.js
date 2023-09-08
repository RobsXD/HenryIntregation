const http = require("http");
const PORT = 3001;

const data = require("./utils/data"); // Aca esta la configuracion del server
const { conn } = require("./DB_connection"); // Aca se encuentra la configuracion de la Base de datos

app.listen(PORT, async () => {
  await conn.sync({ force: true });
});
