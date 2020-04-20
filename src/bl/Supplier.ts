import {FileReader} from "../dal/FilesGetter"

export class Supplier {

    html = "<!DOCTYPE html>\n<html>\n    <head>\n    </head>\n <body>\n      <h1>{placeHolder}</h1>\n   </body>\n</html>";

    getNamedFile() {
        let fileReader = new FileReader();
        let fileContent = fileReader.readLocalFile();

        return this.html.replace("{placeHolder}", fileContent);
    }
}
