// Typer les objets suivants ()
type tree = {
    title: string, 
    children: (tree | string)[]
}
const tree: tree = { 
    title: 'what',
    children: [
        {
            title: 'do',
            children: ['hi', 'hello'],
        },
        {
            title: 'you',
            children: ['world', {
                title: 'do',
                children: ['today',
                    {
                        title: 'well',
                        children: [':)'],
                    }
                ]
            }]
        },
        {
            title: '?',
            children: [],
        },
    ]
}

// Typer correctement l'entrée et la sortie de la fonction suivante
// Faire en sorte que la fonction renvoi une chaine comme suit :
//      "what[do[hi,ho],you[world,do[today,well[:)]]],?[]]"

function treeConcat(node : tree) : string {
    if(node.children.length === 0){
        return `${node.title}${JSON.stringify(node.children)}`;
    } else {
        const childrenList:string[] = node.children.map((child) => {
            if(typeof child === "string"){
                return child;
            } else {
                console.log(child);
                return treeConcat(child);
            }
        });
        return `${node.title}[${childrenList.join(',')}]`;
    }
}

export default function ex3() {
    console.log(treeConcat(tree));
}
