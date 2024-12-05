import { CreateTable } from '../domain/use-cases/create-table.use-cases';
import { SaveTable } from '../domain/use-cases/save-table.use-case';
import {ServerApp} from './server'


describe('server.ts', () => {

    test('Deberia ser una instancia de ServerApp', () => {

        const serverApp = new ServerApp();
    

        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function')

    });

    test('Deberia ejecutar ServerApp.run() con los valores', () => {

        const options = {
            base: 1, 
            limit: 20, 
            showTable: false, 
            fileName: 'custom-name', 
            destination: 'custom-dir'
        }

       const logMock = jest.fn();
       const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
       const saveMock = jest.fn().mockReturnValue(true);

       console.log = logMock
       CreateTable.prototype.execute = createMock;
       SaveTable.prototype.execute = saveMock;

        ServerApp.run(options);

       expect(logMock).toHaveBeenCalledWith('Server corriendo...');
       expect(createMock).toHaveBeenCalledWith({base: options.base, limit: options.limit});
       expect(saveMock).toHaveBeenCalledWith({fileContent:'1 x 2 = 2', fileName: options.fileName, destination: options.destination  });
       expect(logMock).toHaveBeenCalledWith('Tabla creada');


    });
})