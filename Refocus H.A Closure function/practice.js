// let crust = "Crust";

// const earth = () => {
//     let mantle = "Mantle";

//     const message = () => {
//         let core = "Core";
//         `The Earth is made up of the ${crust}, the ${mantle} and the ${core}.`;
//     }
//     return message;
// }


// earth();

let crust = "Crust";

function earth () {
    let mantle = "Mantle";

    function message () {
        let core = "Core";
        return (`The Earth is made up of the ${crust}, the ${mantle} and the ${core}.`);
    }
    return message;
}

let msg = earth();
msg();