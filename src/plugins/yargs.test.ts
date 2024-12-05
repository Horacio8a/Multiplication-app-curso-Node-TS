


const runCommand = async(args: string[]) => {

    process.argv = [...process.argv, ...args ];

    const {yarg} = await import('./yargs');
    return yarg;
}


describe('yargs.test', () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;

        jest.resetModules();
    })


    test('deberia de retornar los valores por defecto', async() => {

        const argv = await runCommand(['-b', '10']);

        expect(argv).toEqual( expect.objectContaining({
            b: 10,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs',
        }))

    })
    
    test('deberia de retornar los valores por defecto', async() => {

        const argv = await runCommand(['-b', '5', '-l', '20', '-s', 'true', '-n', 'custom-name', '-d', 'custom-dir']);

        expect(argv).toEqual( expect.objectContaining({
            b: 5,
            l: 20,
            s: true,
            n: 'custom-name',
            d: 'custom-dir',
        }))

    })
  
})