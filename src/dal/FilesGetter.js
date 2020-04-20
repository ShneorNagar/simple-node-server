"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var FileReader = /** @class */ (function () {
    function FileReader() {
    }
    FileReader.prototype.readLocalFile = function () {
        var fileContent = fs_1.default.readFileSync(__dirname + "/myFile.txt", "utf8");
        console.log("file content: %s", fileContent);
        return fileContent;
    };
    return FileReader;
}());
exports.FileReader = FileReader;
//# sourceMappingURL=FilesGetter.js.map