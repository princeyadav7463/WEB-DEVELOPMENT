// const ticket = new Promise(function (resolve, reject) {
//   const isBoarded = false;
//   if (isBoarded) {
//     resolve("Yor are okey to unboard");
//   } else {
//     reject("Your are not eligible for onboard");
//   }
// });
// ticket
//   .then((data) => {
//     console.log("wohoo", data);
//   })
//   .catch((data) => {
//     console.log("Oh no", data);
//   })
//   .finally(() => {
//     console.log("This will be executed all time");
//   });

function getCandies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const candies = "🍬";
      // console.log("In our getCandies method", candies);
      resolve(candies);
    }, 3000);
  });
}

function handOverKeys(candies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const keys = candies + "🗝️";
      // console.log("In our handOverKeys method", keys);
      resolve(keys);
      reject("Key not Found");
    }, 3000);
  });
}

function onboarding(keys) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const onboarded = keys + "🏦";
      // console.log("In our handOverKeys method", onboarded);
      resolve(keys);
    }, 3000);
  });
}

// async- await

async function onboardClient() {
  try {
    const candies = await getCandies();
    console.log("Here is the candy", candies);

    const keys = await handOverKeys(candies);
    console.log("Here is the Key", keys);

    const onboard = await onboarding(keys);
    console.log("Welcome to the resaurant ", onboard);
  } catch (err) {
    console.log("Error occured", err);
  }
  console.log("Happy to assest You");
}
onboardClient();

// getCandies()
//   .then((candies) => {
//     console.log("Here is the candy", candies);
//     return handOverKeys(candies);
//   })
//   .then((keys) => {
//     console.log("Here is the key", keys);
//     return onboarding(keys);
//   })
//   .then((onboarded) => {
//     console.log("Welcome to the restaurant", onboarded);
//   })
//   .catch((err) => {
//     console.log("Error Occured :-(", err);
//   })
//   .finally(() => {
//     console.log("Happy to assist you;-)");
//   });
