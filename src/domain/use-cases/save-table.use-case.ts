import fs from 'fs';


interface SaveTableUseCase {

    execute: (option: Options) => boolean;
}

interface Options {
    fileContent: string,
    fileName?: string,
    destination?: string,
}

export class SaveTable implements SaveTableUseCase {

    execute({fileContent, fileName = 'table', destination = 'outputs' }: Options) {

        try {
            fs.mkdirSync(destination, {recursive: true})
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            return true;
        } catch (error) {
            return false
        }
       
    };
}