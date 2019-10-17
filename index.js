// import { runInThisContext } from "vm";

// Write your code here
// class Dog {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
// }

class Breakfast {
    constructor(food, drink) {
        this.food = food
        this.drink = drink
    }
}



class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = dessert
    }
}

let b1 = new Breakfast("hash browns", "coffee")
let l1 = new Lunch("Chicken salad", "Clam chowder", "Dr.Pepper")
let d1 = new Dinner("Coleslaw", "Miso soup", "Pulled Pork", "Strawberries and whipped cream")