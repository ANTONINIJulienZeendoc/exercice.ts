
// Faire une fonction generique, qui prend en entree n'importe quel tableau et 
// qui renvoi le second element ou null si non existant

const names = ['Mickael', 'Steve', 'Mary', 'Dylan'];
const bingo = [12, 24, 15, 8, 5];
const computerUnit = ['o', 'Ko', 'Mo', 'Go', 'To', 'Po'];
const empty = <never>[];

const GetSecondItemOnAnyArray = (array : (string | number | null)[] ) : string | number | null => {
    return array.length > 1 ? array[1] : null ;
}

export default function ex6() {
    // TODO : executer la fonction ici
    console.log(GetSecondItemOnAnyArray(names));
    console.log(GetSecondItemOnAnyArray(bingo));
    console.log(GetSecondItemOnAnyArray(computerUnit));
    console.log(GetSecondItemOnAnyArray(empty));
}