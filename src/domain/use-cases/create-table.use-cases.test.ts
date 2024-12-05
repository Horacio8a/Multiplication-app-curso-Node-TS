import { CreateTable } from './create-table.use-cases';



describe('create-table.use-cases.ts', () => {

    test('Deberia de regresar la tabla con los valores por defecto', () => {

        const createTable = new CreateTable();

        const table = createTable.execute({base: 2});

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2')
        expect(table).toContain('2 x 10 = 20')

    });

    test('Deberia de regresar la tabla con los valores establecidos', () => {

        const createTable = new CreateTable();

        const table = createTable.execute({base: 5, limit: 20});

        expect(table).toContain('5 x 1 = 5')
        expect(table).toContain('5 x 10 = 50')
        expect(table).toContain('5 x 20 = 100')

    })
})
