// Typer les objets suivants
type user = {
    firstName: string,
    lastName: string,
    sex: string,
    age?: number,
    accountChecked: boolean,
};

type users = {
    [key: string]:user
};

const users:users = {
    "48f2f7d6-00bc-4d13-9fb3-4e1ca0ca93ec": {
        firstName: "Wava",
        lastName: "D'Amore",
        sex: 'F',
        accountChecked: true,
    },
    "9b98f02e-1bcb-4a2e-b908-7829616eb6de": {
        firstName: "Kailee",
        lastName: "Jones",
        sex: 'M',
        age: 21,
        accountChecked: false,
    },
    "0efdccb1-d5d9-4f69-aa77-8aec3a5e1e2b": {
        firstName: "Beverly",
        lastName: "D'Amore",
        sex: 'F',
        accountChecked: false,
    },
}


// Typer correctement l'entrée (un utilisateur) et la sortie (une chaine de char) de la fonction suivante
// Retourner dans une chaine, le nom en majuscule, le prénom et l'age si présent

function briefDescription(user: user):string {
    return `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()} ${user.hasOwnProperty('age') ? String(user.age) :''}`.trimRight();
}

export default function ex2() {
    Object.values(users).forEach(user => console.log(briefDescription(user)))
}

