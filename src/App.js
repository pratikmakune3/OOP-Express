const express = require("express");

class App {
  constructor(port) {
    this.port = port;

    return this.createExpressApp();
  }

  createExpressApp() {
    const app = express();
    app.listen(this.port, () => console.log(`Listening on port: ${this.port}`));

    return app;
  }
}

module.exports = App;
