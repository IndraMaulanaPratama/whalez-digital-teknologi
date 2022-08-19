const AuthController = require("./AuthController");
const MovieController = require("./MovieController");

const appController = {
    auth: AuthController,
    movie: MovieController,
}

module.exports = appController