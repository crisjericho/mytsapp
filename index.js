"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberOne = 1;
const isActive = true;
const string = "Don Quixote";
const numbers = [1, 2, 3, 4, 5];
function greet(person) {
    return `Hello, ${person}!`;
}
const name = "Cris Jericho";
let a = true;
let b = false;
console.log(greet(name));
console.log(numberOne);
console.log(isActive);
console.log(string);
console.log(numbers);
//=================================================================================================================================
// Activity 2
//=================================================================================================================================
const itemName = "Burger";
const price = 150;
let quantity = 2;
let total = price * quantity;
console.log(`Total: ₱${total}`);
const menu = ["Adobo", "Juice", "Burger"];
const menuItem = {
    name: "Burger",
    price: 150
};
let discount = null;
let isStudent = true;
if (isStudent) {
    discount = total * 0.10;
}
if (total < 100) {
    console.log("Small order");
}
else if (total >= 100 && total < 300) {
    console.log("Regular order");
}
else {
    console.log("Big order");
}
let ternaryDiscount = isStudent ? (total * 0.10) : 0;
console.log(`Discount applied: ₱${ternaryDiscount}`);
const cart = [
    { name: "Adobo", price: 60, qty: 2 },
    { name: "Juice", price: 25, qty: 1 },
];
for (const item of cart) {
    console.log(`${item.name} - ₱${item.price}`);
}
let cartSubtotal = 0;
for (const item of cart) {
    cartSubtotal += (item.price * item.qty);
}
console.log(`Cart Subtotal: ₱${cartSubtotal}`);
let countdown = 5;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
function getLineTotal(price, qty) {
    return price * qty;
}
function applyDiscount(total, isStudent) {
    return isStudent ? (total * 0.90) : total;
}
function getCartTotal(cartItems) {
    let sum = 0;
    for (const item of cartItems) {
        sum += getLineTotal(item.price, item.qty);
    }
    return sum;
}
function printReceipt(customer, cartItems, isStudent) {
    console.log(`\n--- Receipt for ${customer} ---`);
    for (const item of cartItems) {
        let lineTotal = getLineTotal(item.price, item.qty);
        console.log(`${item.qty}x ${item.name} @ ₱${item.price} = ₱${lineTotal}`);
    }
    const subtotal = getCartTotal(cartItems);
    const finalTotal = applyDiscount(subtotal, isStudent);
    const appliedDiscount = subtotal - finalTotal;
    console.log(`-----------------------`);
    console.log(`Subtotal: ₱${subtotal}`);
    console.log(`Discount (Student): -₱${appliedDiscount}`);
    console.log(`Final Total: ₱${finalTotal}`);
    console.log(`-----------------------\n`);
}
printReceipt("Maria", cart, true);
//# sourceMappingURL=index.js.map