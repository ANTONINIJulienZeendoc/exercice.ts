// Typer les objets suivants

type address = {
    city:string,
    country:string,
};

type item = {
   id:number, 
   quantity:number
}

interface user {
   firstName:string,
   lastName:string,
   accountChecked: boolean,
   address:address
   orders: [
       {
           item: item[],
           shippingAddress: address,
           paymentAddress: address
       },
       {
           item: item[],
           shippingAddress:address,
           paymentAddress: address
       },
   ]
} 
const user: user = {
   firstName: "Beverly",
   lastName: "Davis",
   accountChecked: false,
   address: {
       city: 'Paris',
       country: 'France',
   },
   orders: [
       {
           item: [
               {id: 67231, quantity: 1}, 
               {id: 62913, quantity: 3},
           ],
           shippingAddress: {
               city: 'Toulon',
               country: 'France',
           },
           paymentAddress: {
               city: 'Tokyo',
               country: 'Japan',
           }
       },
       {
           item: [
               {id: 41984, quantity: 2}, 
               {id: 63426, quantity: 1},
               {id: 32654, quantity: 10},
           ],
           shippingAddress: {
               city: 'Nice',
               country: 'France',
           },
           paymentAddress: {
               city: 'Las Vegas',
               country: 'US',
           }
       },
   ]
}

export default function ex1() {}


