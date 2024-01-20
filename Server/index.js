const server = require("./src/server");
const data = require("./src/utils/data");
const PORT = 3001;



  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
