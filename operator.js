console.log(2 + 1)
console.log(2 - 1)
console.log(2 / 1)
console.log(2 * 1)
console.log(2 % 1)
console.log(2 ** 1)

/*
let count = 1
const preIncrement = ++count
const preIncrement = count++
const preIncrement = --count
const preIncrement = count--
*/

let isOnSale = true
let isDiscountItem = true

console.log(isOnSale && isDiscountItem) // true && true 이므로 true
console.log(isOnSale || isDiscountItem) // true || true 이므로 true

isOnSale = false
console.log(isOnSale && isDiscountItem) // false && true 이므로 false
console.log(isOnSale || isDiscountItem) // false || true 이므로 true

isDiscountItem = false
console.log(isOnSale && isDiscountItem) // false && false 이므로 false
console.log(isOnSale || isDiscountItem) // false || false 이므로 false

console.log(!isOnSale) // !false 이므로 true

console.log(1 === 1) // true
console.log(1 === 2) // false
console.log('Javascript' === 'Javascript') // true
console.log('Javascript' === 'javascript') // 대소문자나 띄워쓰기도 다 정확히 일치해야 해요. 따라서 false