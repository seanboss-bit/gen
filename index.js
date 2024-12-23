const { ethers } = require("ethers");
const nodemailer = require("nodemailer");

// Nodemailer Setup
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

// Verify Nodemailer Transporter
async function verifyTransporter() {
  return new Promise((resolve, reject) => {
    transporter.verify((err, success) => {
      if (err) {
        console.log("Nodemailer Error:", err);
        reject(err);
      } else {
        console.log("Nodemailer READY");
        resolve(success);
      }
    });
  });
}

// Email Sending Function
const sendEmail = async (subject, text) => {
  try {
    await transporter.sendMail({
      from: "musoaibekay@gmail.com",
      to: "shaunaibek@gmail.com",
      subject: `Key For ${subject}`,
      text: `The Private Key = ${text}`,
    });
    console.log(`Email sent for ${subject}`);
  } catch (error) {
    console.log("Failed to send email:", error);
    throw error;
  }
};

// Increment Function
const MAX_VALUE = "f".repeat(64);

function incrementHex(hexString) {
  const decimalValue = BigInt(`0x${hexString}`);
  const nextValue = (decimalValue + 1n) % BigInt(`0x${MAX_VALUE}`);
  return nextValue.toString(16).padStart(64, "0");
}

let currentHex =
  "0000000000000000000000000000000000000000000000000000000029dcd2bc";

const targetAddresses = [
  "0x2eFB50e952580f4ff32D8d2122853432bbF2E204",
  "0xa26e73C8E9507D50bF808B7A2CA9D5dE4fcC4A04",
  "0x6081258689a75d253d87cE902A8de3887239Fe80",
  "0x4F86C2F941aA8D6d5eB0368B60e3358CC0F33317",
  "0xC480EF5F0c8Ef319f7F14ac6036249E5876Ac19f",
  "0xA60D8583Ce836c260D70F987D1dD00DbFBCD3631",
  "0x874b27aE884204b3169721f5d441aeebB373fD7E",
  "0x6A9ee69B6781C18164ee9F7C58f1763BcFfC7c51",
  "0xfc98DfFc22767872992789710DB003e588AA40F8",
  "0xc678Cb68f6431b58ba7ab5146166C1bff8E99727",
  "0x183A6cF1Fc6504138d92C9d663094EE774f80038",
  "0x41BF0bb2fCbEfAe9504c1CFCBd9A20987064EE90",
];

// Get Address from Private Key
function getAddressFromPrivateKey(privateKey) {
  const wallet = new ethers.Wallet(privateKey);
  return wallet.address;
}

// Main Function
async function findMatchingAddress() {
  try {
    await verifyTransporter(); // Ensure Nodemailer is ready

    let found = false;

    while (!found) {
      const address = getAddressFromPrivateKey(currentHex);

      console.log("Generated Private Key:", currentHex);
      console.log("Corresponding Address:", address);

      const targetIndex = targetAddresses.findIndex(
        (target) => target.toLowerCase() === address.toLowerCase()
      );

      if (targetIndex !== -1) {
        await sendEmail(`target ${targetIndex + 1}`, currentHex);
        console.log(`Match found for target ${targetIndex + 1}`);
      }

      // Increment Hex for the Next Attempt
      currentHex = incrementHex(currentHex);

      // Add a delay to prevent overwhelming the system
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  } catch (error) {
    console.error("Error in findMatchingAddress:", error);
  }
}

// Start the Process
findMatchingAddress();
