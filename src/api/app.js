"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Supplier_1 = require("../bl/Supplier");
var express = require('express');
var app = express();
var supplier = new Supplier_1.Supplier();
app.get('/', function (req, res) {
    res.send(supplier.getNamedFile());
});
app.listen(3000, function () { return console.log("server is up!"); });
//# sourceMappingURL=app.js.map