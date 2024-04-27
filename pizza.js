export class Pizza {
    nameType;
    baseCost;
    baseEnergy;
    size;
    toppingsArray = [];

    constructor(name, cost, energy, size) {
        this.nameType = name;
        this.baseCost = cost;
        this.baseEnergy = energy;
        this.size = size;
    }

    setSize(size) {
        this.size = size;
    }

    getSize() {
        if (this.size === size.small) {
            return "SMALL"
        } else {
            return "BIG"
        }
    }

    getStuffing() {
        return this.nameType;
    }

    calculatePrice() {
        let toppingsCost = 0;
        if(this.size===size.big){
            this.toppingsArray.forEach(x => toppingsCost = toppingsCost + x.big.cost);
        }
        else {
            this.toppingsArray.forEach(x => toppingsCost = toppingsCost + x.small.cost);
        }
        return this.size.cost + this.baseCost + toppingsCost;
    }

    calculateCalories() {
        let calories = 0;
        if(this.size===size.big){
            this.toppingsArray.forEach(x => calories = calories + x.big.energy);
        }
        else {
            this.toppingsArray.forEach(x => calories = calories + x.small.energy);
        }
        return this.size.energy + this.baseEnergy + calories;
    }

    addTopping(topping) {
        this.toppingsArray.push(topping)
    }

    removeTopping(topping) {
        if (!this.toppingsArray.length) {
            return "Топингов нет"
        }
        if (!this.toppingsArray.includes(topping))
            return "Такого топинга нет!"
        else
            this.toppingsArray.splice(this.toppingsArray.indexOf(topping), 1)
    }

    getToppings() {
        if (!this.toppingsArray.length) {
            return "Топингов нет"
        } else {
            return this.toppingsArray
        }
    }
}

export const size = {
    small: {
        energy: 100,
        cost: 100
    },
    big: {
        energy: 200,
        cost: 200
    }

}
export const assortment = {
    margarita: new Pizza("MARGARITA", 500, 300, size.small),
    pepperoni: new Pizza("PEPPERONI", 800, 400, size.small),
    bavarian: new Pizza("BAVARIAN", 700, 450, size.small)
}
export const toppings = {
    creamy_mozzarella: {
        small: {
            energy: 50,
            cost: 50
        },
        big: {
            energy: 50,
            cost: 100
        }
    },
    cheese_board: {
        small: {
            energy: 50,
            cost: 150
        },
        big: {
            energy: 50,
            cost: 300
        }
    },
    cheddar_parmesan: {
        small: {
            energy: 50,
            cost: 150
        },
        big: {
            energy: 50,
            cost: 300
        }
    }
}