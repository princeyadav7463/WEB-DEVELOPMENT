// console.log("First");
// console.log("Second");
// // console.log("Thired");

// setTimeout(function () {
//   console.log("This will be exectuted after 3 seconds!");
// }, 3000);

// console.log("Third");

function getCandies(callback1) {
  setTimeout(() => {
    const candies = "🍬🍬";
    console.log("Here is our Candie", candies);
    // return candies;
    callback1(candies);
  }, 5000);
}
function handOverKeys(candies, callback2) {
  setTimeout(() => {
    const keys = candies + "🗝️";
    console.log("In our handOverKeys method", keys);
    callback2(keys);
  }, 3000);
}
function onboarding(keys, callback3) {
  setTimeout(() => {
    const onboarded = keys + "🏦";
    console.log("In our onboargin method", onboarded);
    callback3(onboarded);
  }, 3000);
}
// console.log(getCandies());
getCandies((candies) => {
  handOverKeys(candies, (keys) => {
    onboarding(keys, (onboarded) => {
      console.log("Welcome to our restaurant", onboarded);
    });
  });
});
