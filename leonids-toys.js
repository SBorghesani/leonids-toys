// const toyToFind = 2;

const toys = [
    {
        id: 1,
        name: "Pooh Bear",
        maker: "TY INC",
        price: 10.99,
        weight: 2,
        minAge: 0

    },
    {
        id: 2,
        name: "Malibu Barbie",
        maker: "Matell",
        price: 20.99,
        weight: 3,
        minAge: 5
    },
    {
        id: 3,
        name: "Butterfly YoYo",
        maker: "Duncan Toy Company",
        price: 15.99,
        weight: 1,
        minAge: 10
    }
]
const giJoe = {
    id: 4,
    name: "G.I. Joe",
    maker: "Hasboro",
    price: 19.99,
    weight: 4,
    minAge: 5
}
const guessWho = {
    id: 5,
    name: "Guess Who",
    maker: "Matell",
    price: 25.99,
    weight: 6,
    minAge: 10
}

toys.push(giJoe);
toys.push(guessWho);

const addToyToInventory = (toyObject) => {
    /*
        Step 1: Get maximum id current in array
    */
    // Get index of last item in array
    const lastIndex = toys.length - 1;

    // Get the last object in the array
    const currentLastToy = toys[lastIndex];

    // Get id property value of last phone
    const maxId = currentLastToy.id;


    /*
        Step 2: Increase the current max id by 1
    */
    const idForNewToy = maxId + 1;


    /*
        Step 3: Add the id property to the phone object
    */
    toyObject.id = idForNewToy;


    /*
        Step 4: Add the phone object to the array
    */
    toys.push(toyObject);
}

const playStation = {
    name: "Play Station",
    maker: "Sony",
    price: 499.99,
    weight: 20,
    minAge: 8
}

addToyToInventory(playStation);



console.log(toys);
for (const toy of toys) {
    // if (toy.id === toyToFind) {
    toy.price  *= 1.05;
    toy.price = toy.price.toFixed(2);
    console.log(`The price for ${toy.name} (made by ${toy.maker}) is $${toy.price}`);
    // }
}