let customer = {
  customer_name: "Johnny Manggo",
  points: 12300,
  cart: [
    {
      item: "Shampoo",
      quantity: 2,
      price_$: 3,
    },
    {
      item: "Soap",
      quantity: 2,
      price_$: 2,
    },
    {
      item: "Toothpaste",
      quantity: 1,
      price_$: 3,
    },
  ],
};
console.log(`Hi ${customer.customer_name}, We are happy to see you!`);
console.log(`Your current points are: ${customer.points}`);
let totalBill = 0;
let totalPoints = 0;
console.log(`Purchased Items:`);
for (var item in customer.cart) {
  console.log(
    `${customer.cart[item].quantity}x ${customer.cart[item].item} ---- $${
      customer.cart[item].price_$ * customer.cart[item].quantity
    }.00`
  );
  totalBill += customer.cart[item].price_$ * customer.cart[item].quantity;
  totalPoints += customer.cart[item].quantity * 1;
}
console.log(`Total Bill: $${totalBill}.00`);
console.log(`New Current Points: ${totalPoints + customer.points}`);
