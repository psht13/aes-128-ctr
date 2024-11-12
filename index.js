import { decrypt, encrypt } from "./libs/operations.js";
import { inputCheck, paramsCheck } from "./utils/checks.js";
import { parseInputParams } from "./utils/parser.js";

inputCheck();
const { action, key, iv, text } = parseInputParams();
paramsCheck({ key, iv });

if (action === "encrypt") {
  const encryptedText = encrypt(text, key, iv);
  console.log("Encrypted:\n");
  console.log(`\x1b[33m${encryptedText}\x1b[0m\n`);
} else if (action === "decrypt") {
  const decryptedText = decrypt(text, key, iv);
  console.log("Decrypted:\n");
  console.log(`\x1b[33m${decryptedText}\x1b[0m\n`);
} else {
  console.error('Unknown command. Please, use "encrypt" or "decrypt".');
  process.exit(1);
}
