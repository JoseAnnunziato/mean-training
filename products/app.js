module.exports = function(app) {
    var model = require("./models/model.server")();
    require("./services/product.service.server.js")(app, model);
    require("./services/lesson.service.server.js")(app, model);
    // console.log(service);
}