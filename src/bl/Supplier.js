"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FilesGetter_1 = require("../dal/FilesGetter");
var Supplier = /** @class */ (function () {
    function Supplier() {
        this.html = "<!DOCTYPE html>\n<html>\n    <head>\n    </head>\n <body>\n      <h1>{placeHolder}</h1>\n   </body>\n</html>";
    }
    Supplier.prototype.getNamedFile = function () {
        var fileReader = new FilesGetter_1.FileReader();
        var fileContent = fileReader.readLocalFile();
        return this.html.replace("{placeHolder}", fileContent);
    };
    return Supplier;
}());
exports.Supplier = Supplier;
//# sourceMappingURL=Supplier.js.map