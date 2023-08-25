// 如何建立 Object 物件

const obj = {}
const obj = new Object()


const man = {
    name: 'Peter',
    age: 40,
    gender: 'male',
    favoriteColor: ['black', 'gray', 'white'],
    car: {
        make: 'BMW',
        mode: 'X5',
        year: 2022,
    },
    retired: false,
    sayHello: function () { }, //ES5寫法
    sayHello() { }, //ES6寫法
}

// 建好之後 如何存取?

console.log(man.name)
man.name ---> Peter
man.favoriteColor[1] ---> gray
    物件的陣列表示法: man['favoriteColor'][1]
man.car.mode ---> X5
    物件的陣列表示法: man['car']['mode']

for (let key in man) {
    console.log(key)    //印出 : 左邊的 key 值
    console.log(man[key])   //印出 : 右邊的 value 值
}

// 一定要使用物件的陣列表示法
const products = {
    10: 'iPad',
    20: 'iPhone',
    30: 'HomePod mini',
    40: 'AirPods',
    50: 'Mac Pro',
}
console.log(products.20);    //XX
console.log(products[20]);  //iPhone