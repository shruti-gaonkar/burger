const orm = require("../config/orm");

module.exports = function () {
    orm.selectAll("burgers");

    orm.insertOne("burgers", "burger_name", "Hamburger");

    orm.updateOne("burgers", "burger_name", "Veggieee Grill Burger", "id", 1);
};