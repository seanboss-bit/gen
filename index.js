var fs = require("fs");

const { ethers } = require("ethers");

// const hexCharacters = "0123456789abcdef";

// let currentHexValue =
//   "ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6efec977";

// while (currentHexValue !== "0".repeat(64)) {
//   console.log(currentHexValue);

//   // Convert current hex value to an array of decimal numbers
//   let decimalNumbers = currentHexValue
//     .split("")
//     .map((char) => hexCharacters.indexOf(char));

//   // Decrement decimal numbers by 1, carry 1 if the result is less than 0
//   for (let i = decimalNumbers.length - 1; i >= 0; i--) {
//     decimalNumbers[i]--;
//     if (decimalNumbers[i] < 0) {
//       decimalNumbers[i] = 15; // Equivalent to 'f' in hexadecimal
//       if (i === 0) {
//         // If the least significant hex digit becomes 'f', insert '0' at the beginning
//         decimalNumbers.unshift(0);
//       }
//     } else {
//       break;
//     }
//   }

//   // Convert decimal numbers back to hex string
//   currentHexValue = decimalNumbers.map((num) => hexCharacters[num]).join("");
// }

// console.log(currentHexValue);

// const hexCharacters = "0123456789abcdef";

// function countdown(currentHexValue) {
//   if (currentHexValue !== "0".repeat(64)) {
//     console.log(currentHexValue);

//     // Convert current hex value to an array of decimal numbers
//     let decimalNumbers = currentHexValue
//       .split("")
//       .map((char) => hexCharacters.indexOf(char));

//     // Decrement decimal numbers by 1, carry 1 if the result is less than 0
//     for (let i = decimalNumbers.length - 1; i >= 0; i--) {
//       decimalNumbers[i]--;
//       if (decimalNumbers[i] < 0) {
//         decimalNumbers[i] = 15; // Equivalent to 'f' in hexadecimal
//         if (i === 0) {
//           // If the least significant hex digit becomes 'f', insert '0' at the beginning
//           decimalNumbers.unshift(0);
//         }
//       } else {
//         break;
//       }
//     }

//     // Convert decimal numbers back to hex string
//     currentHexValue = decimalNumbers.map((num) => hexCharacters[num]).join("");

//     // Call the function again after a 1000ms delay
//     setTimeout(() => countdown(currentHexValue), 1);
//     fs.appendFile("stop.txt", currentHexValue + "\n", (err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
//   } else {
//     console.log(currentHexValue);
//   }
// }

const MAX_VALUE = "f".repeat(64);

function incrementHex(hexString) {
  const decimalValue = BigInt(`0x${hexString}`);
  const nextValue = (decimalValue - 1n) % BigInt(`0x${MAX_VALUE}`);
  return nextValue.toString(16).padStart(64, "0");
}

let currentHex =
  "ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6b647de4";

function startIncrementing() {
  console.log(currentHex);

  // Increment the current hex value
  currentHex = incrementHex(currentHex);
  fs.appendFile("stop.txt", currentHex + "\n", (err) => {
    if (err) {
      console.log(err);
    }
  });

  // Schedule the next increment after a delay (adjust the delay as needed)
  setTimeout(startIncrementing, 1);
}

startIncrementing();

// let startHexValue =
//   "ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6bf58ec7";
// countdown(startHexValue);

const targetAddress = "0x2eFB50e952580f4ff32D8d2122853432bbF2E204";
const target2 = "0xa26e73C8E9507D50bF808B7A2CA9D5dE4fcC4A04";
const target3 = "0x6081258689a75d253d87cE902A8de3887239Fe80";
const target4 = "0x4F86C2F941aA8D6d5eB0368B60e3358CC0F33317";
const target5 = "0xC480EF5F0c8Ef319f7F14ac6036249E5876Ac19f";
const target6 = "0xA60D8583Ce836c260D70F987D1dD00DbFBCD3631";
const target7 = "0x874b27aE884204b3169721f5d441aeebB373fD7E";
const target8 = "0x6A9ee69B6781C18164ee9F7C58f1763BcFfC7c51";
const target9 = "0xfc98DfFc22767872992789710DB003e588AA40F8";
const target10 = "0xc678Cb68f6431b58ba7ab5146166C1bff8E99727";
const target11 = "0x183A6cF1Fc6504138d92C9d663094EE774f80038";
const target12 = "0x41BF0bb2fCbEfAe9504c1CFCBd9A20987064EE90";

function getAddressFromPrivateKey(privateKey) {
  const wallet = new ethers.Wallet(privateKey);
  return wallet.address;
}

async function findMatchingAddress() {
  let found = false;
  // Start the incrementing process
  startIncrementing();

  while (!found) {
    const address = getAddressFromPrivateKey(currentHex);

    console.log("Generated Private Key:", currentHex);
    console.log("Corresponding Address:", address);

    if (address.toLowerCase() === targetAddress.toLowerCase()) {
      console.log("Match found!");
      found = true;
      const content = "Private Key" + currentHex;
      fs.appendFile("found.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target2.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target2.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target3.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target3.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target4.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target4.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target5.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target5.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target6.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target6.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target7.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target7.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target8.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target8.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target9.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target9.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target10.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target10.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target11.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target11.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (address.toLowerCase() === target12.toLowerCase()) {
      const content = "Private Key" + currentHex;
      fs.appendFile("target12.txt", content, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }

    // Add a delay or throttle to avoid overwhelming the network
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
}

// findMatchingAddress();
