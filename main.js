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
  const types = { margherita, pepperoni, bavarian };
  
  const large = new Size('Большая', 200, 200);
  const small = new Size('Маленькая', 100, 100);
  const sizes = { large, small };
  
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
  const toppings = { mozzarella, cheesyCrust, cheddarParmesan };
  
  const form = document.getElementById('pizza-form');
  const typeSelect = form.querySelector('#type');
  const sizeSelect = form.querySelector('#size');
  const toppingsSelect = form.querySelector('#toppings');
  const totalPrice = form.querySelector('#total-price');
  const totalCalories = form.querySelector('#total-calories');
  
  typeSelect.innerHTML = Object.entries(types)
    .map(([key, type]) => `<option value="${key}">${type.getName()}</option>`)
    .join('');
  
  sizeSelect.innerHTML = Object.entries(sizes)
    .map(([key, type]) => `<option value="${key}">${type.getName()}</option>`)
    .join();
  
  toppingsSelect.innerHTML = Object.entries(toppings)
    .map(
      ([key, type]) => `
      <input type="checkbox" name="topping" value="${key}" id="${key}" />
      <label for="${key}">${type.getName()}</label>`
    )
    .join();
  
  let type = types[typeSelect.value];
  let size = sizes[sizeSelect.value];
  
  let pizza;
  refreshPizza();
  
  typeSelect.onchange = () => {
    type = types[typeSelect.value];
    toppingCheckboxes.forEach((c) => (c.checked = false));
    refreshPizza();
  };
  
  sizeSelect.onchange = () => {
    size = sizes[sizeSelect.value];
    toppingCheckboxes.forEach((c) => (c.checked = false));
    refreshPizza();
  };
  
  const toppingCheckboxes = form.querySelectorAll('input[name="topping"]');
  console.log(toppingCheckboxes);
  toppingCheckboxes.forEach(
    (c) =>
      (c.onchange = (event) => {
        if (event.target.checked) addTopping(event.target.value);
        else removeTopping(event.target.value);
      })
  );
  
  function refreshPrice() {
    totalPrice.innerHTML = pizza.calculatePrice();
    totalCalories.innerHTML = pizza.calculateCalories();
  }
  
  function refreshPizza() {
    if (!type || !size) return;
  
    pizza = new Pizza(type, size);
  
    refreshPrice();
  }
  
  function addTopping(toppingName) {
    console.log(toppings[toppingName], '+');
    pizza.addTopping(toppings[toppingName]);
    refreshPrice();
  }
  
  function removeTopping(toppingName) {
    console.log(toppings[toppingName], '-');
    pizza.removeTopping(toppings[toppingName]);
    refreshPrice();
  }