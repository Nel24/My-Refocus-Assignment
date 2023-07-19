const shop_Obj = {
  name: "Uno Apparel PH",
  address: "NIA Rd, Diliman, Quezon City, 1100 Metro Manila",
  shop_Code: "UAP110",
  user: [
    {
      user_Name: "Angelina",
      surname: "Jolie",
      age: 47,
      birthDay: "05.04.1975",
    },
  ],
  item: [
    {
      item_Name: "Blue Jeans",
      category: "Trousers",
      price: 50 /*in $*/,
      stock: 456 /*in pcs.*/,
    },
  ],
};
//////////////////////////////////////TO ADD USER///////////////////////////////////////////////
function add_User() {
  shop_Obj.user = shop_Obj.user.reduce(
    //shop_Obj.user is an array so pwede gamitan ng reduce method.
    (acc, curr) => {
      return [...acc, curr]; // outputs the latest value of shop_Obj.user array with elements Ronnel and Angelina jolie
    },
    [new_User]
  );
  return shop_Obj.user; // this returns the value which is the updated array "return [...acc, curr];""
}

// Creat object to add a  user
const new_User = {
  name: "Ronnel",
  surname: "Abundo",
  age: 28,
  birthDay: "11.24.1994",
};
// function call
const user_List = add_User(new_User);
// console.log(user_List);
//////////////////////////////////////TO ADD ITEMS AND ITEM STOKCS///////////////////////////////////////////////

function add_Item() {
  shop_Obj.item = shop_Obj.item.reduce(
    (acc, curr) => {
      return [...acc, curr];
    },
    [new_Item]
  );
  return shop_Obj.item;
}

const new_Item = {
  item_Name: "Over size shirt",
  category: "T-shirts",
  price: 10,
  stock: 256,
};

const item_List = add_Item(new_Item);

function stock_Checking() {
return shop_Obj.item.filter((item) => item.stock < 300); // return new array with filtered elements with a boolean value TRUE
}

const short_Stock = stock_Checking();
console.log(short_Stock); // console log the items low in stock (stock < 300)

function add_Stock(items, quantity) {
  for (let item of items) {
    return (`The updated stock of ${item.item_Name} is ${item.stock += quantity}.`);
  }
}
const updated_stock = add_Stock(short_Stock, 500);
console.log(updated_stock); // console log the updated stock.
console.log(shop_Obj.item); // console log the updated item of shop_Obj Object.


//////////////////////////////////////ADD ITEMS ON THE CART WHEN USER IS LOGGED IN///////////////////////////////////////////////

function status_Checking (callback) {
  // for (let user of shop_Obj.user) {
  //   user.isLoggedIn = true;
  //   console.log(user);
  // }

  // shop_Obj.user.forEach((users) => {
  //   users.isloggedIn = true;
  //   console.log(users)
  // });

  for (let user of shop_Obj.user) {
    user.isLoggedin = (user.isLoggedin || true);
    (user.isLoggedin === true) ? (callback):(console.log("User is not logged in!"));
  }
}

function addTo_Cart(item) {
  console.log("-------Validating input item------");
  const arr_Item = shop_Obj.item.reduce((acc, curr) => {
    return [...acc, curr.item_Name];// ["Over size shirt", "Blue Jeans"]
  }, [] );
  (arr_Item.includes(item)) ? (console.log(`${item} successfulley added to cart!`)):(console.log(`item not found!`));
  const cart_Arr = shop_Obj.cart = shop_Obj.cart || [];
  cart_Arr.push(item);

}
status_Checking(addTo_Cart("Blue Jeans"));
//////////////////////////////////////CONFIRM AN ORDER///////////////////////////////////////////////
function order_Confirmation (user_Name, item_Name, quantity, address, MoP) {

  const user = shop_Obj.user.find((user_Obj) => user_Obj.user_Name === user_Name);

  if (!user) {
    console.log(`${user_Name} user not found!`);
    return;
  }

  const item = shop_Obj.item.find((item_Obj)=> item_Obj.item_Name === item_Name);

  if(!item){
    console.log(`${item_Name} item not found!`);
    return;
  }
  if (item.stock < quantity) {
    console.log(`Insufficient Stock!`);
  }
  else{
    item.stock -= quantity;
  }
  const order_Obj = {};
  order_Obj.item_Name = item_Name;
  order_Obj.quantity = quantity;
  order_Obj.address = address;
  order_Obj.MoP = MoP;
  
  user.order = user.order || [];
  user.order.push(order_Obj);



  console.log("-------Confirming Order------");
  console.log("Order placed successfully!");
  console.log("Ordered By:", user.user_Name);
  console.log("Ordered Item:", item.item_Name);
  console.log("Ordered Quantity:", quantity);
  console.log("Order Address:", address);
  console.log("Mode of Payment:", MoP);
  console.log("Updated item stock:", item.stock);
  console.log("-------Costing------");
  console.log(`price per pc: x1 = $${item.price}`);
  console.log(`Total: x${quantity} = $${item.price * item.stock}`);
  console.log("---------------------");
  console.log(`Mr/Ms. ${user.user_Name} ordered ${quantity} pcs. of ${item.item_Name} with total of $${item.price * item.stock}.`);
}

order_Confirmation("Angelina","Blue Jeans",100, "Bulacan", "Paymaya");

//////////////////////////////////////DEDUCTS A USER'S PURCHASED ITEMS FROM THE STOCK///////////////////////////////////////////////
