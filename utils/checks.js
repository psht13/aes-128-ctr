export const inputCheck = () => {
  if (process.argv.length !== 6) {
    console.log("Usage: npm run <action> <key> <iv> <text>");
    console.log('<action> should be "encrypt" or "decrypt"');
    process.exit(1);
  }
};

export const paramsCheck = ({ key, iv }) => {
  if (key.length !== 16 || iv.length !== 16) {
    console.error("Key and IV should be 16 bytes");
    process.exit(1);
  }
};
