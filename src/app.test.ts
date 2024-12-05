import { ServerApp } from "./presentation/server";


describe('app.ts', () => {


    test('Deberia de llamar al serverRun() con los valores', async() => {
        
        const serverRunMocks = jest.fn();

        ServerApp.run = serverRunMocks;
        console.log(process.argv);
        process.argv = ['node', 'app.ts', '-b', '10', '-l', '10', '-s', 'false', '-n', 'multiplication-table', '-d', 'outputs',]

       
 
    })
})