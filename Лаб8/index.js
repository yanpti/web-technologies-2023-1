// 1 ЗАДАНИЕ
const students = [
    { name: 'Лиза', age: 19 },
    { name: 'Луиз', age: 20 },
    { name: 'Иван', age: 12 },
    { name: 'Александр', age: 32 },
    { name: 'Константин', age: 1 },
    { age: 19 },
]

function pickPropArray(array, key) {
    let result = []
    array.forEach(item => {
        if (item[key]) result.push(item[key]) 
    }); 
    return result
}

const result = pickPropArray(students, 'name')
console.log('№1');
console.log(result)

// 2 ЗАДАНИЕ
function createCounter() {
    let count = 1 
    return function () {
        console.log('№2');
        console.log(count++)
    }
}

const counter1 = createCounter()
counter1()
counter1()

const counter2 = createCounter()
counter2()
counter2()

// 3 ЗАДАНИЕ
function spinWords(str){
    const words = str.split(" ")
    let newStr = []
    for (const item of words){
        if (item.length >= 5) {
            newStr.push([...item].reverse().join(""))
        } else newStr.push(item)
    }
    return newStr.join(" ")
}
console.log('№3.1');
const result1 = spinWords( "Привет от Legacy" )
console.log(result1)
console.log('№3.2');
const result2 = spinWords( "This is a test" )
console.log(result2)

// 4 ЗАДАНИЕ
const nums = [2,7,11,15]
const target = 9

function func(nums, target){
    for (let i=0; i < nums.length; i++){
        for (let j=i+1; j < nums.length; j++){
            if (nums[i] + nums[j] == target) return [i,j]
        }
    }
}

const result3 = func(nums, target)
console.log('№4');
console.log(result3);

// 5 ЗАДАНИЕ
function GetMinElement(array){
    
    const patternWord = /[А-Яа-яA-Za-z]{2,}/g;

    if(array.length == 0){
        return "";
    }
    if(array.length == 1){
        return array[0];
    }
    arr = array.join(" ");
    let minElement = arr.match(patternWord);
    
    if(minElement == null)
        return null;
    if(minElement.length >= 2)
        minElement.sort();
    return minElement[0];
}

function GetPrefix(array){
    if(array.length == 0){
        return "";
    }

    const minWord = GetMinElement(array);
    if(minWord == null){
        return "";
    }
    const result = [];
    for (let i = 0; i < minWord.length-1; i++) {
        const pattern = minWord.substring(i, minWord.length);
        let flag = true;
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if(element.includes(pattern) == false){
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(pattern);
            break;
        }
        
    }
    
    for (let i = minWord.length; i > 1; i--) {
        const pattern = minWord.substring(0, i);
        
        let flag = true;
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if(element.includes(pattern) == false){
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(pattern);
            break;
        }
    }
    
    if(result.length == 2){
        if(result[0].length >= result[1].length){
            return result[0];
        }
        return result[1];

    }
        
    return result.length == 1 ? result[0]: "";
}

const patternWord = /[А-Яа-яA-Za-z]+/g;

test1 = ["цветок","поток","хлопок"];
test2 = ["собака","гоночная машина","машина"];

console.log('№ 5.1');
console.log(GetPrefix(test1));
console.log('№ 5.2');
console.log(GetPrefix(test2));

