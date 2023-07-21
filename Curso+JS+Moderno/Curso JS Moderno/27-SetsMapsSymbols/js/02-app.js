
//WEAKsET => SET DEBIL
// Solo acepta objetos

const weakset = new WeakSet();

const info = {
    name: 'OLiver Sarguro',
    year: 18
};

const nmro = 19; 

weakset.add(info);
// weakset.add(nmro);//no te acepta nada solo objetos

///IMPOTANTE: no tiene punto size por lo tanto no puedes conocer el tamano
console.log(weakset.size)

//IMPOTANTE: Tampoco son iterables
// weakset.forEach((elementos, index, pertenece)=>{
//     console.log(elementos)
//     console.log(index)
//     console.log(pertenece)

// })


console.log(weakset)