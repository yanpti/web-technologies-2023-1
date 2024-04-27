import {assortment} from "./pizza.js";
import {toppings} from "./pizza.js";
import {size} from "./pizza.js";

let pizza = assortment.margarita;
console.log(pizza.getStuffing()); //название пиццы
console.log("размер " + pizza.getSize()); //размер базовой маргариты
console.log("калории " + pizza.calculateCalories()); //каллории базовой маленькой маргариты
console.log("цена " + pizza.calculatePrice()); //цена базовой маленькой маргариты
console.log("");

pizza.addTopping(toppings.cheese_board); //добавить сырный борт
pizza.addTopping(toppings.cheddar_parmesan); //добавить чеддер
pizza.addTopping(toppings.creamy_mozzarella); //добавить моцареллу
console.log(pizza.getToppings()); //возвращает массив топингов
console.log("калории "+pizza.calculateCalories()); //каллории базовой маленькой маргариты с топингами
console.log("цена "+pizza.calculatePrice()); //цена базовой маленькой маргариты с топингами

console.log("");
pizza.setSize(size.big);
console.log(pizza.getSize()); //размер  маргариты
console.log("калории "+pizza.calculateCalories()); //каллории базовой большой маргариты с топингами
console.log("цена "+pizza.calculatePrice()); //цена базовой большой маргариты с топингами

console.log("");
pizza.removeTopping(toppings.cheddar_parmesan); //убрали чеддер
console.log(pizza.getToppings()); //возвращает массив топингов
console.log("калории "+pizza.calculateCalories()); //каллории базовой большой маргариты с топингами
console.log("цена "+pizza.calculatePrice()); //цена базовой большой маргариты с топингами

console.log("");
pizza.removeTopping(toppings.cheddar_parmesan); //убрали чеддер
pizza.removeTopping(toppings.creamy_mozzarella); //убрали чеддер
pizza.removeTopping(toppings.cheese_board); //убрали чеддер
console.log(pizza.getToppings()); //возвращает массив топингов
console.log("калории " + pizza.calculateCalories()); //каллории базовой большой маргариты
console.log("цена " + pizza.calculatePrice()); //цена базовой большой маргариты