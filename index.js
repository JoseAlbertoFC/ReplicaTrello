const server = require("./src/app");
const { conn } = require("./src/db");

conn.sync({ force : true }).then(() => {
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT}!!! We are Back Bitches!!!!!!!`);
    
  });
});

