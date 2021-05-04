// module.exports = (app) => {
//   app.get("/", (req, res, next) => res.send("Hey there!"));

//   app.get("/user/:username", (req, res, next) => {
//     const { username } = req.params;

//     res.send(`Hey ${username}!!!`);
//   });
// };

class Router {
  constructor(app) {
    app.get("/", (req, res, next) => res.send("Hey there!"));

    app.get("/user/:username", (req, res, next) => {
      const { username } = req.params;

      res.send(`Hey ${username}!!!`);
    });
  }
}

module.exports = Router;
