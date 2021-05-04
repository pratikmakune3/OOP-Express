const App = require("./App");
const getRoutes = require("./Router");

const app = new App(3001);

getRoutes(app);
