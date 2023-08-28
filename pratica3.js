const iterage = (num) => {

    for (let i = 0; i < num; i++){
        console.log("console", i);
    }
}

iterage(process.argv[2])