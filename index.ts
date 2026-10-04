const numberOne = 1;
const isActive = true;
const string = "Don Quixote";
const numbers: number[] = [1, 2, 3, 4, 5];

function greet(person: string): string {
    return `Hello, ${person}!`;
}

const name = "Cris Jericho";

type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>;
type Test2 = IsString<number>;

let a: Test1 = true;
let b: Test2 = false;

console.log(greet(name));
console.log(numberOne);
console.log(isActive);
console.log(string);
console.log(numbers);

//=================================================================================================================================
// Activity 2
//=================================================================================================================================



const itemName: string = "Burger";
const price: number = 150;
let quantity: number = 2;

let total: number = price * quantity;
console.log(`Total: ₱${total}`);

const menu: string[] = ["Adobo", "Juice", "Burger"];
const menuItem: { name: string; price: number } = { 
    name: "Burger", 
    price: 150 
};

let discount: number | null = null;

let isStudent: boolean = true; 

if (isStudent) {
    discount = total * 0.10;
}

if (total < 100) {
    console.log("Small order");
} else if (total >= 100 && total < 300) {
    console.log("Regular order");
} else {
    console.log("Big order");
}

let ternaryDiscount: number = isStudent ? (total * 0.10) : 0;
console.log(`Discount applied: ₱${ternaryDiscount}`);

const cart = [
    { name: "Adobo", price: 60, qty: 2 },
    { name: "Juice", price: 25, qty: 1 },
];

for (const item of cart) {
    console.log(`${item.name} - ₱${item.price}`);
}

let cartSubtotal: number = 0;
for (const item of cart) {
    cartSubtotal += (item.price * item.qty);
}
console.log(`Cart Subtotal: ₱${cartSubtotal}`);

let countdown: number = 5;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}

type CartItem = { name: string; price: number; qty: number };

function getLineTotal(price: number, qty: number): number {
    return price * qty;
}

function applyDiscount(total: number, isStudent: boolean): number {
    return isStudent ? (total * 0.90) : total;
}

function getCartTotal(cartItems: CartItem[]): number {
    let sum = 0;
    for (const item of cartItems) {
        sum += getLineTotal(item.price, item.qty);
    }
    return sum;
}

function printReceipt(customer: string, cartItems: CartItem[], isStudent: boolean): void {
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