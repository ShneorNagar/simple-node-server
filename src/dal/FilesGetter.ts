import fs from 'fs'

export class FileReader{

    readLocalFile(){
        let fileContent = fs.readFileSync(__dirname + "/myFile.txt", "utf8");
        console.log("file content: %s", fileContent);
        return fileContent;
    }
}