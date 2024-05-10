class Pizza {
    constructor(type, size) {
      this.type = type;
      this.size = size;
      this.toppings = [];
      this.price = type.getPrice() + size.getPrice();
      this.calories = type.getCalories() + size.getCalories();
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
      this.price += topping.getPrice(this.size.getName());
      this.calories += topping.getCalories(this.size.getName());
    }
  
    removeTopping(topping) {
      const index = this.toppings.indexOf(topping);
      if (index !== -1) {
        this.toppings.splice(index, 1);
        this.price -= topping.getPrice(this.size.getName());
        this.calories -= topping.getCalories(this.size.getName());
      }
    }
  
    getToppings() {
      return this.toppings;
    }
  
    getSize() {
      return this.size;
    }
  
    getType() {
      return this.type;
    }
  
    calculatePrice() {
      return this.price;
    }
  
    calculateCalories() {
      return this.calories;
    }
  }
  
  class Type {
    constructor(name, price, calories) {
      this.name = name;
      this.price = price;
      this.calories = calories;
    }
  
    getName() {
      return this.name;
    }
  
    getPrice() {
      return this.price;
    }
  
    getCalories() {
      return this.calories;
    }
  }
  
  class Size {
    constructor(name, price, calories) {
      this.name = name;
      this.price = price;
      this.calories = calories;
    }
  
    getName() {
      return this.name;
    }
  
    getPrice() {
      return this.price;
    }
  
    getCalories() {
      return this.calories;
    }
  }
  
  class Topping {
    constructor(name, price, calories) {
      this.name = name;
      this.price = price;
      this.calories = calories;
    }
  
    getName() {
      return this.name;
    }
  
    getPrice(size) {
      return this.price[size];
    }
  
    getCalories(size) {
      return this.calories[size];
    }
  }
  
  const margherita = new Type('Маргарита', 500, 300);
  const pepperoni = new Type('Пепперони', 800, 400);
  const bavarian = new Type('Баварская', 700, 450);
  
  const large = new Size('Большая', 200, 200);
  const small = new Size('Маленькая', 100, 100);
  
  const mozzarella = new Topping(
    'Сливочная моцарелла',
    { Большая: 50, Маленькая: 50 },
    { Большая: 20, Маленькая: 20 }
  );
  const cheesyCrust = new Topping(
    'Сырный борт',
    { Большая: 300, Маленькая: 150 },
    { Большая: 50, Маленькая: 50 }
  );
  const cheddarParmesan = new Topping(
    'Чедер и пармезан',
    { Большая: 300, Маленькая: 150 },
    { Большая: 50, Маленькая: 50 }
  );
  
  const margheritaTest = new Pizza(margherita, large);
  margheritaTest.addTopping(mozzarella);
  margheritaTest.addTopping(cheesyCrust);
  
  const pepperoniTest = new Pizza(pepperoni, small);
  pepperoniTest.addTopping(cheddarParmesan);
  
  console.log(margheritaTest.calculatePrice());
  console.log(margheritaTest.calculateCalories());
  console.log(pepperoniTest.calculatePrice());
  console.log(pepperoniTest.calculateCalories());