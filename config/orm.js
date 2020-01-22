const connection = require("./connection.js");

let orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw error;
            cb(result);
        });
    },
    insertOne: function (tableInput, colToInsert, valOfCol, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, colToInsert, valOfCol], function (err, result) {
            if (err) throw error;
            cb(result);
        });
    },
    updateOne: function (tableInput, colToUpdate, valOfCol, condition, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?";
        connection.query(queryString, [tableInput, colToUpdate, valOfCol, condition], function (err, result) {
            if (err) throw error;
            cb(result);
        });
    }
};

module.exports = orm;