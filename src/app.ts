import { yarg  } from "./plugins/yargs"
import { ServerApp } from "./presentation/server";




(async() => {
    main();
})()

async function main() {

    const {b:base, l: limit, s: showTable, n:fileName, d: destination} = yarg;

    ServerApp.run({base, limit, showTable, fileName, destination});

    
}