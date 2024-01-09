async function utility () {
    let delhiMausam = new Promise ( (resolve, reject) => {
        setTimeout (function () {
            console.log ("Delhi is hot");
        }, 2000);
    });
    let hydMausam = new Promise ( (resolve, reject) => {
        setTimeout (function () {
            console.log ("Hyderabad is cool");
        }, 3000);
    });

    let delhi = await delhiMausam;
    let hyd = await hydMausam;

    return [delhi, hyd];
}

utility ();