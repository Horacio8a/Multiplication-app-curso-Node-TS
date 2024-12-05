import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
    .option( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Base de la tabla de multiplicar'
    })
    .option( 'l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        description: 'Limite de la tabla de multiplicar'
    })
    .option( 's', {
        alias: 'show',
        type: 'boolean',
        default: false,
        description: 'Mostrar tabla de multiplicar'
    })
    .option( 'n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        description: 'Nombre de la tabla de multiplicar'
    })
    .option( 'd', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        description: 'directorio destino de la tabla de multiplicar'
    })
    .parseSync();