// // while()

// // for

// //for in

// let users = [
//   { name: "bla", amount: 1000 },
//   { name: "bla", amount: 1000 },
// ];

let usersObject = [
  { name: "Moran", amount: 1000 },
  { name: "or", amount: 1000 },
];

for (let x of usersObject) {
  console.log(`${x.name}-[${x.amount}$]`);
}

// for (let i = 0; i < 3; i++) {
//   if (i >= 2) {
//     break;
//   }
//   console.log("Or has 1000000$");
// }

// let testOF = [{ a: "1", b: "2" }];
// for (let x of testOF) {
//   console.log(x.a + x.b);
// }

// let testIn = { a: "1", b: "2" };
// for (let x in testIn) {
//   console.log(x);
// }

let numLevles = prompt("how many levels?");
let drawStars = "";

// for (i = 0; i < numLevles; i++) {
//   drawStars += "*";
//   console.log(drawStars);
// }

// for (i = numLevles; i >= 0; i--) {
//   drawStars = "";
//   for (j = 0; j <= i; j++) {
//     drawStars += "*";
//   }
//   console.log(drawStars);
// }

let stars = [];
let drawStars2 = " ";
for (i = 0; i < numLevles; i++) {
  drawStars2 += "*";
  stars.push(drawStars2);
  console.log(drawStars2);
}

for (i = 0; i < numLevles; i++) {
  console.log(stars.pop());
}

spaceCounter = Math.round(numLevles / 2);
for (i = 0; i < numLevles; i++) {
  drawStars = "";
  if (i % 2 === 0) {
    if (spaceCounter > 0) {
      for (k = spaceCounter; k > 0; k--) {
        drawStars += " ";
      }
      spaceCounter--;
    }
    for (j = 0; j <= i; j++) {
      drawStars += "*";
    }
    console.log(drawStars);
  }
}
