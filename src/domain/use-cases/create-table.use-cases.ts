
interface CreateTableUseCase {

    execute: (options: Options) => string;
}

interface Options {
    base: number,
    limit?: number
}


export class CreateTable implements CreateTableUseCase {
    
    execute({base, limit = 10}: Options){


        let result = '';

        for(let i = 1; i <= limit; i++) {
            result += `${base} x ${i} = ${base * i} \n`;

        }

        return result;
    }

}