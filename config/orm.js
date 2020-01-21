const connection = require("./connection.js");

let orm = {
    selectAll: function (tableInput) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw error;
            console.log(result);
        });
    },
    insertOne: function (tableInput, colToInsert, valOfCol) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, colToInsert, valOfCol], function (err, result) {
            if (err) throw error;
            console.log(result);
        });
    },
    updateOne: function (tableInput, colToInsert, valOfCol) {
        const queryString = "UPDATE ?? SET ?? = ?";
        connection.query(queryString, [tableInput, colToInsert, valOfCol], function (err, result) {
            if (err) throw error;
            console.log(result);
        });
    }
};

module.exports = orm;