import {SaveTable} from './save-table.use-case';
import fs from 'fs';

describe('seva-table.use-case.ts', () => {

    afterAll(() => {
        fs.rmSync('outputs', {recursive: true} )
        fs.rmSync('custom-outputs', {recursive: true})
    })

    test('deberia de guardar y crear el archivo y guardarlo con los valores por defecto', () => {
       
        const filePath = './outputs/table.txt'
        const options = {
            fileContent: 'test content'
        };

        const result = new SaveTable().execute(options);
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        expect(result).toBeTruthy();
        expect(fileExists).toBeTruthy();
        expect(fileContent).toBe(options.fileContent);

    });

    test('deberia de guardar y crear el archivo y guardarlo con los valores personalizados', () => {
       
        const options = {
            fileContent: 'custom content',
            fileName: 'custom-table-name ',
            destination: 'custom-outputs/file-destination',
        }

        const filePath = `${options.destination}/${options.fileName}.txt`

        const result = new SaveTable().execute(options);
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        expect(result).toBeTruthy();
        expect(fileExists).toBeTruthy();
        expect(fileContent).toBe(options.fileContent);

    });

    test('deberia de regresar false sino se puede crear el directorio', () => {
       
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw new Error('Este es un mensaje personalizado de error');
        })
        const result = new SaveTable().execute({fileContent: 'Hola'});

        expect(result).toBeFalsy()

        mkdirSpy.mockRestore();
    })


    test('deberia de regresar false sino se puede grabar la información en el archivo el directorio', () => {
       
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
            throw new Error('Este es un mensaje personalizado de error');
        })
        const result = new SaveTable().execute({fileContent: 'Hola'});

        expect(result).toBeFalsy()

        writeFileSpy.mockRestore();
    })


    
})