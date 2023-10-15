// // "use client"
// import CryptoJS from "crypto-js";
// // import React from "react";

// export default function EncryptText() {
//   const message = "Hello, AES!";
//   const secretKey = "YourSecretKey"; // Replace with your actual secret key
//   const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
//   const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
//   const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

//   return (
//     <div>
//       <p>{encryptedMessage}</p>
//       <p>{decryptedMessage}</p>
//     </div>
//   );
// }

"use client"
import React, { useEffect } from 'react';
import crypto from 'crypto';

function EncryptionText() {
  useEffect(() => {
    // Simulate Alice and Bob

    // Alice (Sender)
    const alice = crypto.createDiffieHellman(256);
    const aliceKeys = alice.generateKeys();

    // Bob (Receiver)
    const bob = crypto.createDiffieHellman(256);
    const bobKeys = bob.generateKeys();

    // Exchange public keys
    const aliceSharedSecret = alice.computeSecret(bobKeys, null, 'hex');
    const bobSharedSecret = bob.computeSecret(aliceKeys, null, 'hex');
                                                                        
    // Verify that both shared secrets match
    console.log('Alice and Bob shared secrets match:', aliceSharedSecret === bobSharedSecret);

    // Use the shared secret as an AES encryption key
    const aesKey = Buffer.from(aliceSharedSecret, 'hex');

    // Encrypt and decrypt a message
    const plaintextMessage = 'Hello, Bob!';
    console.log('Original Message:', plaintextMessage);

    // Encrypt the message using AES
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', aesKey, iv);
    let encryptedMessage = cipher.update(plaintextMessage, 'utf8', 'base64');
    encryptedMessage += cipher.final('base64');
    console.log('Encrypted Message:', encryptedMessage);

    // Decrypt the message using AES
    const decipher = crypto.createDecipheriv('aes-256-cbc', aesKey, iv);
    let decryptedMessage = decipher.update(encryptedMessage, 'base64', 'utf8');
    decryptedMessage += decipher.final('utf8');
    console.log('Decrypted Message:', decryptedMessage);
  }, []);

  return (
    <div>
      <h1>Encryption Example</h1>
      <p>Open the browser console to see the logs.</p>
    </div>
  );
}

export default EncryptionText;
