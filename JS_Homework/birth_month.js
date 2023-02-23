// let first_Name = "Ronnel";
// let last_Name = "Abundo";
// const birth_Year = 1994;
// let current_Year = new Date().getFullYear();
// current_Year -= 1;
// let birth_month = 10; // this return november month
// const current_month = new Date().getMonth();

// const msg = `Hello, ${first_Name} ${last_Name}! how can we help you today?`;

// console.log(msg);
// let age = current_Year - birth_Year;

// if (birth_month <= current_month) {
//   age++;
//   console.log(`Patient's age: ${age}`);
// } else {
//   console.log(`Patient's age: ${age}`);
// }

///////////////////////USING OBJECT LITERALS////////////////////

const user_Profile = {
  first_Name: "Ronnel",
  last_Name: "Abundo",
  birth_Year: 1994,
  birth_month: 1,
  current_Year: 1,
  getCurrentYear: function () {
    return new Date().getFullYear();
  },
  getCurrentMonth: function () {
    return new Date().getMonth();
  },
};

console.log(user_Profile.first_Name);
const current_Month = user_Profile.getCurrentMonth();
console.log(current_Month);

////////////////to use thiskeyword outside of an object use call method/////////
function currentYear() {
  return this.getCurrentYear();
}

const thisYear = currentYear.call(user_Profile);
console.log(thisYear);
////////////////////////////////function to get your Age/////////////

function getAge() {
  let age = this.getCurrentYear() - this.birth_Year;
  if (this.birth_month > this.getCurrentMonth()) {
    return --age;
  } else {
    return age;
  }
}

const present_Age = getAge.call(user_Profile);
console.log(present_Age);
