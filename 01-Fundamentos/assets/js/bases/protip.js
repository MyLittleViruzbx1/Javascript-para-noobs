function imprimeArgumento(){
    console.log(arguments);
}


const imprimeArgumento2 =(...args) =>{
    console.log(args);
}

imprimeArgumento2(10, 21, true, 'myz', 'yes',false,2);