// 1.

// function getyoungestName(users) {
//   if (users.length === 0) {
//     return null;
//   }

//   let youngest = users[0];

//   for (let i = 1; i < users.length; i++) {
//     if (users[i].age < youngest.age) {
//       youngest = users[i];
//     }
//   }

//   return youngest.name;
// }

// const users = [
//   { name: "Temo", age: 25 },
//   { name: "Lasha", age: 21 },
//   { name: "Ana", age: 28 },
// ];

// console.log(getyoungestName(users));

// 2.

// function clone(user) {
//   const newUser = {
//     name: user.name,
//     age: user.age,
//   };
//   return newUser;
// }

// const user = { name: "Temo", age: 25 };

// const clonedUser = clone(user);
// console.log(clonedUser);

// 3.

// function rollDice() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// function playGame() {
//   let aRolls = 0;
//   let bRolls = 0;
//   let aRolledThree = false;
//   let bRolledThree = false;

//   while (!aRolledThree && !bRolledThree) {
//     aRolls++;
//     if (rollDice() === 3) {
//       aRolledThree = true;
//     }

//     bRolls++;
//     if (rollDice() === 3) {
//       bRolledThree = true;
//     }
//   }

//   if (aRolledThree && bRolledThree) {
//     if (aRolls < bRolls) {
//       return "Player A win";
//     } else if (bRolls < aRolls) {
//       return "Player B win";
//     } else {
//       return "Its tie";
//     }
//   } else if (aRolledThree) {
//     return "Player A win";
//   } else {
//     return "Player B win";
//   }
// }

// console.log(playGame());
