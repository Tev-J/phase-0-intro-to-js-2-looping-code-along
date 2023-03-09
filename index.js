// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
} */

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
function writeCards(list, event) {
  const cardList = [];
  for (let i = 0; i < list.length; i++) {
    cardList.push(`Thank you, ${list[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return cardList;
}
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
//wrapGifts(gifts);
//writeCards(gifts, "Easter");
//countDown(10);
