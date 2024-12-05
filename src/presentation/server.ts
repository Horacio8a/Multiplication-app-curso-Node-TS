
import { CreateTable } from "../domain/use-cases/create-table.use-cases"
import { SaveTable } from "../domain/use-cases/save-table.use-case";

interface RunOptions {
    base: number,
    limit: number, 
    showTable: boolean,
    fileName: string,
    destination: string
}


export class ServerApp {

    static run({base, limit, showTable, fileName, destination}: RunOptions) {
        console.log('Server corriendo...');
        
        const table = new CreateTable().execute({base, limit});

        const wasCreated = new SaveTable().execute({fileContent:table, fileName, destination});
        
        if(showTable) console.log(table);
        
        (wasCreated) 
            ? console.log('Tabla creada')
            : console.log('No se creo la tabla');
    }
}